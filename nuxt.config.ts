import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  components: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
})
