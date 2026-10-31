<script setup lang="ts">
const title = 'เกี่ยวกับเรา SUNSUN PRINT | SunsunPrint'
const description = 'SUNSUN PRINT เชื่อว่าทุกไอเดียควรมีพื้นที่ให้ถูกมองเห็น เราพาเรื่องราวของแบรนด์ออกจากหน้าจอ ไปพบผู้คนในพื้นที่จริงด้วยงานป้าย งานพิมพ์ และงานดิสเพลย์'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <div>
    <AboutHero />
    <HomeMarquee />
    <AboutStory />
    <AboutBelieve />
    <AboutNotes />
    <AboutCta />
  </div>
</template>
