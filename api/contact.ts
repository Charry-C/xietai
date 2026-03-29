import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'
import type { MediaFile } from './home'

export interface ContactBanner {
  id: number
  title?: string | null
  subTitle?: string | null
  background?: MediaFile | null
}

export interface ContactItem {
  type: string
  label: string
  value: string
}

export interface SocialItem {
  name: string
  url: string
}

export interface CommonConnect {
  contacts: ContactItem[]
}

export interface MediaConnect {
  socials: SocialItem[]
}

export interface ConnectSection {
  id: number
  title?: string | null
  description?: string | null
  commonConnect?: CommonConnect | null
  mediaConnect?: MediaConnect | null
}

export interface ContactData {
  id: number
  documentId: string
  banner?: ContactBanner | null
  connect?: ConnectSection | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface ContactApiResponse {
  data: ContactData | null
  meta: Record<string, any>
}

export const getContactData = (options?: StrapiFetchOptions<ContactApiResponse>) => {
  return strapiFetch.get<ContactApiResponse>('/contact-us', {
    ...options,
    params: {
      'populate[banner][populate]': '*',
      'populate[connect]': '*',
      ...(options?.params || {}),
    },
  })
}
