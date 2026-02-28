import type { UseFetchOptions } from '#app'

export const useStrapiFetch = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase as string,
    transform: (response: any) => response.data,
    headers: {
      Authorization: `Bearer ${config.public.apiToken}`
    }
  }

  // Merge options
  const params = Object.assign({}, defaults, options)

  return useFetch(url, params)
}
