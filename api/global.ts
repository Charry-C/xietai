import { strapiFetch } from '@/composables/useStrapiFetch'
import type { StrapiFetchOptions } from '@/composables/useStrapiFetch'

export interface ContactItem {
  type: string
  label: string | { en: string; zh: string }
  value:
    | string
    | {
        line1: string | { en: string; zh: string }
        line2: string | { en: string; zh: string }
        area: string | { en: string; zh: string }
        city: string | { en: string; zh: string }
        country: string | { en: string; zh: string }
      }
}

export interface SocialItem {
  type: string
  label: string
  url: string
}

export interface GlobalData {
  id: number
  documentId: string
  siteName: string
  siteIntro: string
  connectWay: {
    contacts: ContactItem[]
    socials: SocialItem[]
  }
  logo: any
  favicon: any
  locale: string
}

export interface GlobalApiResponse {
  data: GlobalData | null
  meta: Record<string, any>
}

export const getGlobalData = (options?: StrapiFetchOptions<GlobalApiResponse>) => {
  return strapiFetch.get<GlobalApiResponse>('/global', {
    ...options,
    query: {
      'populate[0]': 'logo',
      'populate[1]': 'favicon',
      ...(options?.query || {}),
    },
  })
}
