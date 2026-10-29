<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'

const title = 'SunsunPrint รับทำป้าย งานพิมพ์ งานอีเวนต์ และดิสเพลย์สินค้า'
const description = 'SUNSUN PRINT รับผลิตป้ายอะคริลิก ป้ายไฟ ป้ายไวนิล สติ๊กเกอร์ งานอีเวนต์ และชั้นวางสินค้า ตั้งแต่ออกแบบจนติดตั้ง'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')

// Only facts the site already shows; add address, telephone and sameAs (real LINE/Facebook/IG URLs) once they exist
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          'name': 'SUNSUN PRINT',
          'url': `${siteUrl}/`,
          'logo': `${siteUrl}${logoUrl}`
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          'name': 'SUNSUN PRINT',
          'url': `${siteUrl}/`,
          'inLanguage': 'th',
          'publisher': { '@id': `${siteUrl}/#organization` }
        }
      ]
    })
  }]
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeMarquee />
    <HomeWorks />
    <HomeServices />
    <HomeCraft />
    <HomeCta />
  </div>
</template>
