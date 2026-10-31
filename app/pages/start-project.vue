<script setup lang="ts">
const title = 'ขอใบเสนอราคา งานป้าย สติ๊กเกอร์ และงานอีเวนต์ | SunsunPrint'
const description = 'เลือกประเภทงาน กรอกรายละเอียด แล้วส่งบรีฟให้ SUNSUN PRINT ประเมินราคา ไม่ต้องมีแบบสำเร็จก็เริ่มได้'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <div>
    <StartProjectForm />
  </div>
</template>
