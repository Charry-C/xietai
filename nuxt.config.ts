// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
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
