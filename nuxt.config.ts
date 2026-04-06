// https://nuxt.com/docs/api/configuration/nuxt-config

// SEO 配置 - 请根据你的网站修改以下内容
const seoConfig = {
  // 网站名称
  siteName: 'Xietai Textile',
  // 网站描述 (建议 150-160 字符)
  siteDescription: {
    en: 'China textile manufacturer & fabric exporter. B2B wholesale fabric supplier for global apparel brands. OEM/ODM custom fabric production. Competitive factory prices.',
    cn: '中国纺织面料生产厂家与出口商。B2B批发面料供应商，服务全球服装品牌。OEM/ODM定制生产，工厂直销价格。',
  },
  // 网站关键词 (逗号分隔)
  keywords: {
    en: 'China textile exporter, B2B fabric supplier, wholesale fabric manufacturer, fabric factory China, textile export company, bulk fabric order, OEM textile manufacturer, ODM fabric supplier, fabric sourcing China, apparel fabric wholesale, textile trading company, custom fabric production, cotton fabric exporter, polyester fabric supplier, woven fabric manufacturer',
    cn: '中国纺织出口商, B2B面料供应商, 批发面料厂家, 中国面料工厂, 纺织出口公司, 大宗面料订单, OEM纺织厂家, ODM面料供应商, 中国面料采购, 服装面料批发, 纺织外贸公司, 定制面料生产, 棉布出口商, 涤纶面料供应商, 梭织面料厂家',
  },
  // 网站URL (不要带尾部斜杠)
  siteUrl: 'https://xietaitrade.com',
  // 网站作者
  author: 'Xietai Textile',
  // Twitter 账号 (带@) - 取消注释并填写你的账号
  twitterHandle: '',
  // 社交分享默认图片 - 取消注释并填写图片路径
  ogImage: '/og-image.png',
  // 语言
  defaultLocale: 'en',
}

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: seoConfig.defaultLocale,
      },
      title: seoConfig.siteName,
      meta: [
        { name: 'author', content: seoConfig.author },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'keywords', content: seoConfig.keywords.en },
        { name: 'description', content: seoConfig.siteDescription.en },
        // Open Graph 基础
        { property: 'og:site_name', content: seoConfig.siteName },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        // Twitter Card (填写 twitterHandle 后生效)
        { name: 'twitter:card', content: 'summary_large_image' },
        ...(seoConfig.twitterHandle
          ? [
              { name: 'twitter:site', content: seoConfig.twitterHandle },
              { name: 'twitter:creator', content: seoConfig.twitterHandle },
            ]
          : []),
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
        },
        // Canonical URL
        { rel: 'canonical', href: seoConfig.siteUrl },
        // Favicon 和图标
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  // @nuxt/image 图片优化配置
  image: {
    // 外部图片源配置 (Strapi API + 其他)
    domains: ['images.unsplash.com', 'localhost', '127.0.0.1', 'api.charryc.fun'],
    // 图片格式优化
    format: ['webp', 'avif'],
    // 图片质量
    quality: 80,
    // 响应式图片断点
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // 预设尺寸
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 1920,
        },
      },
      product: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 800,
        },
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 200,
        },
      },
      card: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 600,
        },
      },
    },
  },
  // Robots.txt 配置 - 外贸网站SEO优化
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin/', '/private/'],
      },
    ],
    // i18n 多站点地图下，实际入口是 sitemap_index.xml
    sitemap: [`${seoConfig.siteUrl}/sitemap_index.xml`],
  },
  // Sitemap 配置
  sitemap: {
    hostname: seoConfig.siteUrl,
    gzip: true,
    exclude: ['/404', '/cn/404', '/ndefined', '/cn/ndefined'],
    routes: async () => {
      // 动态路由会自动被扫描，这里可以添加额外的路由
      return []
    },
    i18n: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'cn', name: '中文', language: 'zh-CN', file: 'cn.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    langDir: 'locales',
    lazy: true,
  },
  runtimeConfig: {
    public: {
      base: process.env.NUXT_PUBLIC_BASE,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      apiToken: process.env.NUXT_PUBLIC_API_TOKEN,
      // SEO 配置暴露给客户端
      siteUrl: seoConfig.siteUrl,
      siteName: seoConfig.siteName,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['nuxt', 'nuxt/dist/app/composables/manifest.js'],
    },
    css: {
      preprocessorOptions: {
        less: {
          // additionalData: '@import "@/assets/styles/variables.less";',
          javascriptEnabled: true,
        },
      },
    },
  },
})
