import { strapiFetch, strapiRequest, type StrapiFetchOptions } from '@/composables/useStrapiFetch'
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

// 用于 SSR/响应式数据（在 setup 顶层调用）
export const getProducts = <T = any>(options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>('/products', options)
}

// 用于事件处理器中（手动调用，需要传入 locale）
export const fetchProductsApi = async <T = any>(
  params: Record<string, any> = {},
  locale?: string,
) => {
  return strapiRequest<T>('/products', 'get', params, undefined, locale)
}

export const getProduct = <T = any>(id: string | number, options?: StrapiFetchOptions<T>) => {
  return strapiFetch.get<T>(`/products/${id}`, options)
}
