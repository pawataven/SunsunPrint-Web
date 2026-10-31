<script setup lang="ts">
const steps = [
  { title: 'เลือกประเภทงาน', detail: 'เลือกงานป้าย สติ๊กเกอร์ อีเวนต์ ชั้นวางสินค้า หรือบรรจุภัณฑ์' },
  { title: 'ส่งรายละเอียดและตัวอย่าง', detail: 'แจ้งขนาด จำนวน และข้อมูลที่เกี่ยวข้องกับงาน' },
  { title: 'ติดต่อเพื่อประเมินราคา', detail: 'ส่งข้อมูลให้ SUNSUN PRINT ตรวจรายละเอียดก่อนเสนอราคา' }
]

const formatIndex = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <section id="how-to-start" aria-labelledby="steps-heading" class="page-x bg-white pt-16 pb-16 lg:pt-28 lg:pb-28 2xl:pt-38 2xl:pb-38">
    <p v-reveal class="text-xs text-brand-red uppercase 2xl:text-sm">06 / Start your project</p>

    <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between 2xl:mt-8">
      <h2 id="steps-heading" class="text-6xl leading-[0.9] uppercase lg:text-[7rem] 2xl:text-[8.75rem]">
        <span v-reveal="100" class="-ml-[0.06em] block font-sans text-ink">Let's</span>
        <span v-reveal="180" class="-ml-[0.04em] block font-serif text-brand-red">Make it.</span>
      </h2>
      <p v-reveal="260" class="font-sans leading-relaxed text-neutral-700 lg:pb-2 lg:text-lg 2xl:text-xl">
        <span class="lg:block">เตรียมข้อมูลเบื้องต้นตาม 3 ขั้นตอนนี้เพื่อส่งรายละเอียด</span> <span class="lg:block">ให้ร้านพิจารณา เป็นแนวทางการขอราคาบนเว็บไซต์ ไม่ใช่</span> <span class="lg:block">การยืนยันขั้นตอนผลิตของร้าน</span>
      </p>
    </div>

    <!-- The 1px gap over a gray background draws the shared cell borders without doubling them where cells meet -->
    <ol class="mt-10 grid gap-px border border-neutral-400 bg-neutral-400 lg:mt-14 lg:grid-cols-3 2xl:mt-20">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        v-reveal="300 + index * 100"
        class="flex min-h-56 flex-col justify-between gap-10 bg-white p-6 lg:min-h-72 2xl:h-88 2xl:px-10 2xl:pt-11 2xl:pb-12"
      >
        <span class="text-4xl leading-none text-brand-red 2xl:text-[3.5rem]">{{ formatIndex(index + 1) }}.</span>
        <div>
          <h3 class="text-xl text-ink 2xl:text-2xl">{{ step.title }}</h3>
          <p class="mt-2 font-sans text-sm font-normal text-neutral-600 2xl:mt-3 2xl:text-base">{{ step.detail }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
