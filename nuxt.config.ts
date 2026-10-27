import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon/module',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/a11y'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  typescript: {
    strict: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      title: 'SunsunPrint',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
