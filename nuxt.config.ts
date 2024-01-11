// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: [
    '@/assets/scss/main.scss'
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
  modules: ["nuxt-rating"],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  }
})
