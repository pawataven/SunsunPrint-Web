<script setup lang="ts">
const title = 'บริการรับทำป้าย งานพิมพ์ งานอีเวนต์ และบรรจุภัณฑ์ | SunsunPrint'
const description = 'SUNSUN PRINT รับทำป้าย สติ๊กเกอร์ อุปกรณ์อีเวนต์ ชั้นวางสินค้า กล่องบรรจุภัณฑ์ และถุงกระดาษ ในรูปแบบที่เหมาะกับงานของคุณ ตั้งแต่ออกแบบจนติดตั้ง'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <div>
    <ServicesHero />
    <HomeMarquee />
    <ServicesCategories />
    <ServicesSignage />
    <ServicesStickers />
    <ServicesEvent />
    <ServicesDisplay />
    <ServicesPackaging />
    <ServicesSteps />
    <ServicesCta />
  </div>
</template>
