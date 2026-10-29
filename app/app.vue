<script setup lang="ts">
const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')

// Self-referencing canonical without query string or trailing slash, so filter params and /our-work/ don't index as duplicates
const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

// Share-preview defaults; each page sets its own og:title / og:description alongside its title and description
useSeoMeta({
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: 'SUNSUN PRINT',
  ogLocale: 'th_TH',
  ogImage: `${siteUrl}/images/Home/signage_p04_01.png`,
  ogImageWidth: 1823,
  ogImageHeight: 863,
  ogImageAlt: 'ป้ายไฟ SHANGARILA และตัวอักษร SARAH ผลงานของ SUNSUN PRINT',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
