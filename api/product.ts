import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'

export const getProducts = <T = any>(options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>('/products', options)
}

export const getProduct = <T = any>(id: string | number, options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>(`/products/${id}`, options)
}
