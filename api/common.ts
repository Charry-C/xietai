import type { UseFetchOptions } from 'nuxt/app'
import { useStrapiFetch } from '@/composables/useStrapiFetch'

export const getStrapiData = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  return useStrapiFetch<T>(url, options)
}
