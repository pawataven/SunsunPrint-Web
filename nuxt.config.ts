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
      siteUrl: 'https://sunsunprint.vercel.app',
      // Sends the quote briefs to the shop's inbox; set NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY (it is public by design)
      web3formsAccessKey: ''
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
    // Weights are declared as a range because Google serves one variable file per family; a range is the spec form for
    // a variable @font-face and lets every browser pick 400–600 from that single file. Serif text relies on inheriting
    // 600 from its heading, so it must not sit inside a font-normal element
    //
    // Fallbacks are pinned to fonts without Thai glyphs. By default the module also derives one from the next family in
    // the stack ("Noto Sans Fallback: Noto Sans Thai" → local(Noto Sans Thai)); it sits ahead of the web font and has no
    // unicode-range, so on Android — which ships NotoSansThai-Regular — every Thai character rendered in that single-weight
    // system font instead of the web font
    families: [
      { name: 'Noto Sans', weights: ['400 600'], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true, preload: { subsets: ['latin'] }, fallbacks: ['Arial', 'Helvetica Neue', 'Segoe UI', 'Roboto'] },
      // Up to 900 for the About hero's Thai heading
      { name: 'Noto Sans Thai', weights: ['400 900'], styles: ['normal'], subsets: ['thai', 'latin'], provider: 'google', global: true, preload: { subsets: ['thai'] } },
      // Up to 900 for the About hero's heavy "HELLO. WE'RE"; it is the same variable file, so the range costs nothing extra
      { name: 'Noto Sans Display', weights: ['400 900'], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true, fallbacks: ['Arial', 'Helvetica Neue', 'Segoe UI', 'Roboto'] },
      // Up to 900 for the About page's heavy serif headings ("SUNSUN.", "LESS NOISE.")
      { name: 'Noto Serif', weights: ['400 900'], styles: ['normal'], subsets: ['latin'], provider: 'google', global: true, preload: { subsets: ['latin'] } }
    ]
  },

  image: {
    // 80 is visually indistinguishable here but cuts photo weight several-fold, which matters for mobile load speed
    quality: 80
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
