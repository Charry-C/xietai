import type { UseFetchOptions } from 'nuxt/app'

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
type AnyFetchOptions<T> = UseFetchOptions<T> & { params?: Record<string, any> }
export type StrapiFetchOptions<T> = AnyFetchOptions<T>

const normalizeOptions = <T>(options: AnyFetchOptions<T> = {}) => {
  const { params, query, ...rest } = options
  return {
    ...rest,
    query: query ?? params
  }
}

export const useStrapiFetch = <T>(
  url: string,
  method: HttpMethod,
  options: AnyFetchOptions<T> = {},
  body?: any
) => {
  const config = useRuntimeConfig()

  const normalized = normalizeOptions(options)

  const opts = {
    baseURL: config.public.apiBase || '',
    method: method as any,
    ...normalized,
    body,
    headers: {
      Authorization: `Bearer ${config.public.apiToken}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...normalized.headers
    }
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
  }
}

export const useStrapi = () => strapiFetch
