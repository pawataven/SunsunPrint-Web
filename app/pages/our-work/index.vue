<script setup lang="ts">
const title = 'ผลงานป้าย งานอีเวนต์ และงานพิมพ์ | SunsunPrint'
const description = 'ตัวอย่างผลงานจริงของ SUNSUN PRINT ทั้งงานป้าย งานสติ๊กเกอร์ งานอีเวนต์ และดิสเพลย์สินค้า'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <div>
    <OurWorkHero />
    <HomeMarquee/>
    <OurWorkGallery />
    <OurWorkCta />
  </div>
</template>
