export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  components: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
