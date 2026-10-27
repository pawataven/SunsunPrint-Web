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

  fonts: {
    families: [
      { name: 'Noto Sans', weights: [400, 600], provider: 'google', global: true },
      { name: 'Noto Sans Thai', weights: [400, 600], subsets: ['thai', 'latin'], provider: 'google', global: true },
      { name: 'Noto Sans Display', weights: [400], provider: 'google', global: true },
      { name: 'Noto Serif', weights: [600], provider: 'google', global: true }
    ]
  },

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
