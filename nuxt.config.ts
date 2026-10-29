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

  runtimeConfig: {
    public: {
      // Absolute origin for canonical/OG URLs, the sitemap and robots.txt; override with NUXT_PUBLIC_SITE_URL per environment
      siteUrl: 'https://sunsunprint.vercel.app'
    }
  },

  // The works pages moved from the mixed-case /OurWork to /our-work; links already shared keep working
  routeRules: {
    '/OurWork': { redirect: { to: '/our-work', statusCode: 301 } },
    '/OurWork/**': { redirect: { to: '/our-work/**', statusCode: 301 } }
  },

  fonts: {
    // Preloading the three files every page paints with lets phones fetch them alongside the hero image instead of
    // after it; without it, slow connections showed the system font for a noticeable moment (font-display: swap)
    families: [
      { name: 'Noto Sans', weights: [400, 600], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true, preload: { subsets: ['latin'], weights: [400] } },
      { name: 'Noto Sans Thai', weights: [400, 600], styles: ['normal'], subsets: ['thai', 'latin'], provider: 'google', global: true, preload: { subsets: ['thai'], weights: [400] } },
      { name: 'Noto Sans Display', weights: [400], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true },
      { name: 'Noto Serif', weights: [600], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true, preload: { subsets: ['latin'], weights: [600] } }
    ]
  },

  image: {
    quality: 100
  },

  icon: {
    // Unlayered icon CSS beats Tailwind's layered utilities, which made size-* classes on <Icon> do nothing
    cssLayer: 'base'
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
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  }
})
