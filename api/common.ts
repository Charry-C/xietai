import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'

export const getStrapiData = <T>(url: string, options: StrapiFetchOptions<T> = {}) => {
  return strapiFetch.get<T>(url, options)
}
