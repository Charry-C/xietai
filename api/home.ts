import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'

export interface MediaFile {
  id: number
  documentId?: string
  url: string
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats?: Record<string, any>
  mime?: string
  ext?: string
  size?: number
  previewUrl?: string | null
}

export type MediaList = MediaFile[] | MediaFile | null | undefined

export interface HomeSectionArea {
  id: number
  documentId?: string
  title?: string
  subTitle?: string
  background?: MediaFile
  companyImgs?: MediaList
}

export interface HomeData {
  id: number
  documentId: string
  bannerArea?: HomeSectionArea | null
  aboutArea?: HomeSectionArea | null
  servicesArea?: HomeSectionArea | null
  productArea?: HomeSectionArea | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface HomeApiResponse {
  data: HomeData | null
  meta: Record<string, any>
}

export const getHomeData = (options?: StrapiFetchOptions<HomeApiResponse>) => {
  const defaultParams = {
    'populate[bannerArea][populate][background]': true,
    'populate[bannerArea][populate][companyImgs]': true,
    'populate[aboutArea][populate][background]': true,
    'populate[aboutArea][populate][companyImgs]': true,
    'populate[servicesArea][populate][background]': true,
    'populate[servicesArea][populate][companyImgs]': true,
    'populate[productArea][populate][background]': true,
    'populate[productArea][populate][companyImgs]': true,
  }

  return strapiFetch.get<HomeApiResponse>('/home', {
    ...options,
    params: {
      ...defaultParams,
      ...(options?.params || {})
    }
  })
}
