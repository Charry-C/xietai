import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'

export const getProducts = <T = any>(options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>('/products', options)
}
