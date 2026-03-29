import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'
import type { MediaFile } from './home'

export interface ProductBanner {
  id: number
  title?: string | null
  subTitle?: string | null
  background?: MediaFile | null
}

export interface ProductPageData {
  id: number
  documentId: string
  banner?: ProductBanner | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface ProductPageResponse {
  data: ProductPageData | null
  meta: Record<string, any>
}

export const getProductPage = (options?: StrapiFetchOptions<ProductPageResponse>) => {
  return strapiFetch.get<ProductPageResponse>('/product-page', {
    ...options,
    params: {
      'populate[banner][populate]': '*',
      ...(options?.params || {}),
    },
  })
}

export const getProducts = <T = any>(options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>('/products', options)
}

export const getProduct = <T = any>(id: string | number, options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>(`/products/${id}`, options)
}
