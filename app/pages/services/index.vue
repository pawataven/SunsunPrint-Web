<script setup lang="ts">
const title = 'บริการรับทำป้าย งานพิมพ์ และงานอีเวนต์ | SunsunPrint'
const description = 'SUNSUN PRINT รับทำป้าย สติ๊กเกอร์ อุปกรณ์อีเวนต์ และชั้นวางสินค้า ในรูปแบบที่เหมาะกับงานของคุณ ตั้งแต่ออกแบบจนติดตั้ง'

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
    <ServicesSteps />
    <ServicesCta />
  </div>
</template>
