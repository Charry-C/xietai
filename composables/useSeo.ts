/**
 * SEO Composable - 在页面中轻松配置SEO
 *
 * 使用示例:
 * useSeo({
 *   title: '产品列表',
 *   description: '浏览我们的优质产品',
 *   keywords: ['产品', '购物'],
 *   image: '/images/product-og.png'
 * })
 */

interface SeoOptions {
  title?: string
  titleTemplate?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noindex?: boolean
}

export const useSeo = (options: SeoOptions = {}) => {
  const { locale } = useI18n()
  const route = useRoute()
  const config = useRuntimeConfig()

  const {
    title,
    titleTemplate = '%s | Xietai Textile - China Fabric Exporter',
    description = 'China textile manufacturer & fabric exporter. B2B wholesale fabric supplier for global apparel brands. OEM/ODM custom production with competitive factory prices.',
    keywords = [],
    image = '/og-image.png',
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    noindex = false,
  } = options

  const siteUrl = config.public.siteUrl || 'https://xietaitrade.com'
  const fullTitle = title
    ? titleTemplate.replace('%s', title)
    : 'Xietai Textile - China Fabric Manufacturer & B2B Exporter'
  const fullUrl = url || `${siteUrl}${route.path}`
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`
  const keywordsStr = keywords.length > 0 ? keywords.join(', ') : ''

  // 设置页面 Meta 信息
  useHead({
    title: fullTitle,
    meta: [
      // 基础 SEO
      { name: 'description', content: description },
      ...(keywordsStr ? [{ name: 'keywords', content: keywordsStr }] : []),
      ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),

      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: fullImage },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:locale', content: locale.value === 'cn' ? 'zh_CN' : 'en_US' },

      // Twitter Card
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImage },

      // 文章相关
      ...(publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
      ...(modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),
      ...(author ? [{ name: 'author', content: author }] : []),
    ],
    link: [
      { rel: 'canonical', href: fullUrl },
      { rel: 'alternate', hreflang: 'en', href: `${siteUrl}${route.path}` },
      { rel: 'alternate', hreflang: 'zh', href: `${siteUrl}/cn${route.path}` },
    ],
  })

  return {
    fullTitle,
    fullUrl,
    fullImage,
  }
}

/**
 * 结构化数据 (JSON-LD) Composable
 *
 * 使用示例:
 * useJsonLd({
 *   type: 'Organization',
 *   name: 'XietAI Trading',
 *   url: 'https://xietai.com',
 *   logo: 'https://xietai.com/logo.png'
 * })
 */
interface JsonLdOrganization {
  type: 'Organization'
  name: string
  url?: string
  logo?: string
  description?: string
  sameAs?: string[]
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
  }[]
}

interface JsonLdWebSite {
  type: 'WebSite'
  name: string
  url?: string
  description?: string
  potentialAction?: {
    type: string
    target?: string | { type: string; urlTemplate: string }
    queryInput?: string
  }
}

interface JsonLdProduct {
  type: 'Product'
  name: string
  description?: string
  image?: string
  brand?: string
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

interface JsonLdArticle {
  type: 'Article' | 'BlogPosting'
  headline: string
  description?: string
  image?: string
  author?: string
  datePublished?: string
  dateModified?: string
}

interface JsonLdBreadcrumb {
  type: 'BreadcrumbList'
  items: { name: string; url: string }[]
}

type JsonLdData =
  | JsonLdOrganization
  | JsonLdWebSite
  | JsonLdProduct
  | JsonLdArticle
  | JsonLdBreadcrumb

export const useJsonLd = (data: JsonLdData) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://xietaitrade.com'

  let structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
  }

  switch (data.type) {
    case 'Organization':
      structuredData = {
        ...structuredData,
        '@type': 'Organization',
        name: data.name,
        url: data.url || siteUrl,
        ...(data.logo && {
          logo: data.logo.startsWith('http') ? data.logo : `${siteUrl}${data.logo}`,
        }),
        ...(data.description && { description: data.description }),
        ...(data.sameAs && { sameAs: data.sameAs }),
        ...(data.contactPoint && { contactPoint: data.contactPoint }),
      }
      break

    case 'WebSite':
      structuredData = {
        ...structuredData,
        '@type': 'WebSite',
        name: data.name,
        url: data.url || siteUrl,
        ...(data.description && { description: data.description }),
        ...(data.potentialAction && {
          potentialAction: {
            '@type': 'SearchAction',
            target: data.potentialAction.target,
            ...(data.potentialAction.queryInput && {
              'query-input': data.potentialAction.queryInput,
            }),
          },
        }),
      }
      break

    case 'Product':
      structuredData = {
        ...structuredData,
        '@type': 'Product',
        name: data.name,
        ...(data.description && { description: data.description }),
        ...(data.image && {
          image: data.image.startsWith('http') ? data.image : `${siteUrl}${data.image}`,
        }),
        ...(data.brand && { brand: { '@type': 'Brand', name: data.brand } }),
        ...(data.offers && {
          offers: {
            '@type': 'Offer',
            price: data.offers.price,
            priceCurrency: data.offers.priceCurrency || 'USD',
            availability: data.offers.availability || 'https://schema.org/InStock',
          },
        }),
      }
      break

    case 'Article':
    case 'BlogPosting':
      structuredData = {
        ...structuredData,
        '@type': data.type,
        headline: data.headline,
        ...(data.description && { description: data.description }),
        ...(data.image && {
          image: data.image.startsWith('http') ? data.image : `${siteUrl}${data.image}`,
        }),
        ...(data.author && { author: { '@type': 'Person', name: data.author } }),
        ...(data.datePublished && { datePublished: data.datePublished }),
        ...(data.dateModified && { dateModified: data.dateModified }),
      }
      break

    case 'BreadcrumbList':
      structuredData = {
        ...structuredData,
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
        })),
      }
      break
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData),
      },
    ],
  })

  return structuredData
}
