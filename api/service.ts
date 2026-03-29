import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'
import type { MediaFile } from '@/api/home'

export interface ServiceSection {
  id: number
  title?: string | null
  description?: string | null
  subList?: Record<string, string> | null
  show?: MediaFile | null
}

export interface ServiceBanner {
  id: number
  title?: string | null
  subTitle?: string | null
  background?: MediaFile | null
}

export interface ServiceData {
  id: number
  documentId: string
  banner?: ServiceBanner | null
  servicesSection?: ServiceSection[] | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface ServiceApiResponse {
  data: ServiceData | null
  meta: Record<string, any>
}

export const getServiceData = (options?: StrapiFetchOptions<ServiceApiResponse>) => {
  return strapiFetch.get<ServiceApiResponse>('/service', {
    ...options,
    params: {
      'populate[banner][populate]': '*',
      'populate[servicesSection][populate]': '*',
      ...(options?.params || {}),
    },
  })
}
