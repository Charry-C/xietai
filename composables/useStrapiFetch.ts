import type { UseFetchOptions } from 'nuxt/app'

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
type AnyFetchOptions<T> = UseFetchOptions<T> & { params?: Record<string, any> }
export type StrapiFetchOptions<T> = AnyFetchOptions<T> & { skipWatch?: boolean }

// 获取请求的公共配置（只能在 setup 顶层调用）
const getRequestConfig = () => {
  const config = useRuntimeConfig()
  const { strapiLocale } = useLocale()
  return { config, strapiLocale }
}

// 用于 SSR/响应式数据的 useFetch 封装（只能在 setup 顶层调用）
export const useStrapiFetch = <T>(
  url: string,
  method: HttpMethod,
  options: AnyFetchOptions<T> & { skipWatch?: boolean } = {},
  body?: any,
) => {
  const { config, strapiLocale } = getRequestConfig()

  // 合并 params 和 query，使用 computed 确保 locale 响应式
  const query = computed(() => ({
    ...(options.params || {}),
    ...(options.query || {}),
    locale: strapiLocale.value,
  }))

  // 监听 locale 变化，自动重新获取数据（除非 skipWatch 为 true）
  const watchSources: any[] = []
  if (!options.skipWatch) {
    watchSources.push(strapiLocale)
  }
  if (options.watch) {
    watchSources.push(...(Array.isArray(options.watch) ? options.watch : [options.watch]))
  }

  const { params, query: _, watch: __, skipWatch, ...restOptions } = options

  const opts = {
    baseURL: config.public.apiBase || '',
    method: method as any,
    ...restOptions,
    query,
    body,
    headers: {
      Authorization: `Bearer ${config.public.apiToken}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...restOptions.headers,
    },
    watch: watchSources.length > 0 ? watchSources : undefined,
  } as any
  return useFetch<T>(url, opts)
}

// 用于事件处理器中的 $fetch 封装
// 注意：locale 参数必须由调用方传入
export const strapiRequest = async <T>(
  url: string,
  method: HttpMethod = 'get',
  params: Record<string, any> = {},
  body?: any,
  locale?: string,
): Promise<{ data: T | null; error: any }> => {
  const config = useRuntimeConfig()

  try {
    const query = {
      ...params,
      ...(locale ? { locale } : {}),
    }

    const result = await $fetch<T>(url, {
      baseURL: config.public.apiBase || '',
      method: method as any,
      query,
      body,
      headers: {
        Authorization: `Bearer ${config.public.apiToken}`,
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
    })
    return { data: result, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// strapiFetch 对象 - 只用于 setup 顶层
export const strapiFetch = {
  get<T>(url: string, options?: AnyFetchOptions<T>) {
    return useStrapiFetch<T>(url, 'get', options)
  },

  post<T>(url: string, body?: any, options?: AnyFetchOptions<T>) {
    return useStrapiFetch<T>(url, 'post', options, body)
  },

  put<T>(url: string, body?: any, options?: AnyFetchOptions<T>) {
    return useStrapiFetch<T>(url, 'put', options, body)
  },

  patch<T>(url: string, body?: any, options?: AnyFetchOptions<T>) {
    return useStrapiFetch<T>(url, 'patch', options, body)
  },

  delete<T>(url: string, body?: any, options?: AnyFetchOptions<T>) {
    return useStrapiFetch<T>(url, 'delete', options, body)
  },
}

export const useStrapi = () => strapiFetch
