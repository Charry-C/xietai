import type { UseFetchOptions } from 'nuxt/app'

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
type AnyFetchOptions<T> = UseFetchOptions<T> & { params?: Record<string, any> }
export type StrapiFetchOptions<T> = AnyFetchOptions<T>

export const useStrapiFetch = <T>(
  url: string,
  method: HttpMethod,
  options: AnyFetchOptions<T> = {},
  body?: any,
) => {
  const config = useRuntimeConfig()
  const { strapiLocale } = useLocale()

  // 合并 params 和 query，使用 computed 确保 locale 响应式
  const query = computed(() => ({
    ...(options.params || {}),
    ...(options.query || {}),
    locale: strapiLocale.value,
  }))

  // 监听 locale 变化，自动重新获取数据
  const watchSources: any[] = [strapiLocale]
  if (options.watch) {
    watchSources.push(...(Array.isArray(options.watch) ? options.watch : [options.watch]))
  }

  const { params, query: _, watch: __, ...restOptions } = options

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
    watch: watchSources,
  } as any
  return useFetch<T>(url, opts)
}

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
