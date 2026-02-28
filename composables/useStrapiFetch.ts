import type { UseFetchOptions } from 'nuxt/app'

export const useStrapiFetch = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig()
  console.log(config.public.apiToken);
  
  const defaults: UseFetchOptions<T> = {
    baseURL: (config.public.apiBase as string) || '',
    headers: {
      Authorization: `Bearer ${config.public.apiToken as string}`,
    }
  }

  const mergedHeaders = {
    ...(defaults.headers as any),
    ...(options.headers as any)
  }

  const params = {
    ...defaults,
    ...options,
    headers: mergedHeaders
  }

  return useFetch(url, params)
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
type AnyFetchOptions<T> = UseFetchOptions<T> & { params?: Record<string, any> }

const normalizeOptions = <T>(options: AnyFetchOptions<T> = {}) => {
  const { params, query, headers, ...rest } = options
  const q = query ?? params
  return { ...rest, query: q, headers }
}

export const strapiFetch = {
  get<T>(url: string, options: AnyFetchOptions<T> = {}) {
    return useStrapiFetch<T>(url, { ...normalizeOptions(options), method: 'GET' })
  },
  post<T>(url: string, body?: any, options: AnyFetchOptions<T> = {}) {
    const hdr = { 'Content-Type': 'application/json', ...(options.headers as any) }
    return useStrapiFetch<T>(url, { ...normalizeOptions(options), method: 'POST', body, headers: hdr })
  },
  put<T>(url: string, body?: any, options: AnyFetchOptions<T> = {}) {
    const hdr = { 'Content-Type': 'application/json', ...(options.headers as any) }
    return useStrapiFetch<T>(url, { ...normalizeOptions(options), method: 'PUT', body, headers: hdr })
  },
  patch<T>(url: string, body?: any, options: AnyFetchOptions<T> = {}) {
    const hdr = { 'Content-Type': 'application/json', ...(options.headers as any) }
    return useStrapiFetch<T>(url, { ...normalizeOptions(options), method: 'PATCH', body, headers: hdr })
  },
  delete<T>(url: string, body?: any, options: AnyFetchOptions<T> = {}) {
    return useStrapiFetch<T>(url, { ...normalizeOptions(options), method: 'DELETE', body })
  }
}

export const useStrapi = () => strapiFetch

export const options = {}
