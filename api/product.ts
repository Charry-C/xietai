import type { UseFetchOptions } from 'nuxt/app'
import { strapiFetch } from '@/composables/useStrapiFetch'

export const getProducts = (options: UseFetchOptions<any> = {}) => {
  return strapiFetch.get('/products', options)
}
