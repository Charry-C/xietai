// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      base: process.env.NUXT_PUBLIC_BASE,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      apiToken: process.env.NUXT_PUBLIC_API_TOKEN
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          // additionalData: '@import "@/assets/styles/variables.less";',
          javascriptEnabled: true
        }
      }
    }
  }
})
