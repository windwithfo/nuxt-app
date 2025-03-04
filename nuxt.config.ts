// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: 'api_secret_token', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: 'https://api-', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
})