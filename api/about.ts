import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'
import type { MediaFile } from '@/api/home'

export interface SubMainItem {
  id: number
  title?: string | null
  description?: string | null
  cardImg?: MediaFile | null
}

export interface AboutSection {
  id: number
  title?: string | null
  subTitle?: string | null
  background?: MediaFile | null
  companyImgs?: MediaFile[] | null
}

export interface NumsListItem {
  id: number
  mainNum: number
  description: string
}

export interface AboutData {
  id: number
  documentId: string
  banner: AboutSection | null
  main: AboutSection | null
  subMain: SubMainItem[] | null
  numsList: NumsListItem[] | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface AboutApiResponse {
  data: AboutData | null
  meta: Record<string, any>
}

export const getAboutData = (options?: StrapiFetchOptions<AboutApiResponse>) => {
  return strapiFetch.get<AboutApiResponse>('/about', {
    ...options,
    params: {
      'populate[banner][populate]': '*',
      'populate[main][populate]': '*',
      'populate[subMain][populate]': '*',
      'populate[numsList][populate]': '*',
      ...(options?.params || {}),
    },
  })
}
