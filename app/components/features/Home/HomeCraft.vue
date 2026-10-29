<script setup lang="ts">
const steps = [
  'เลือกประเภทงานให้เหมาะกับการใช้งาน',
  'ส่งขนาด รูปตัวอย่าง และรายละเอียดที่ต้องการ',
  'ติดต่อเพื่อประเมินราคาและวางแผนผลิต'
]

const formatIndex = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <section aria-labelledby="craft-heading" class="page-x py-12 lg:py-24 2xl:py-30">
    <div class="grid items-center gap-12 lg:grid-cols-[841fr_718fr] lg:gap-16 2xl:gap-30">
      <NuxtImg
        v-reveal:wipe
        src="/images/Home/pick up here.png"
        alt="ป้ายอะคริลิกสีแดงข้อความ PICK UP HERE บนพื้นแดง พร้อมข้อความ Creative print production และ Print it loud"
        sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
        format="webp"
        loading="lazy"
        class="aspect-square w-full object-cover"
      />

      <div>
        <h2 id="craft-heading" v-reveal class="text-5xl leading-[1.35] font-semibold text-ink uppercase lg:text-7xl 2xl:text-8xl">
          <span class="block font-sans">Your idea</span>
          <span class="block font-serif">Our <span class="text-brand-red">Craft.</span></span>
        </h2>
        <p v-reveal="100" class="mt-4 max-w-2xl font-sans leading-relaxed text-ash lg:text-lg 2xl:mt-6 2xl:text-xl">
          เพราะงานพิมพ์ที่ดีไม่ได้มีแค่สีสวยหรือขนาดที่ใช่ แต่เป็นวิธีทำให้แบรนด์ของคุณโดดเด่นในพื้นที่จริง
          SUNSUN PRINT มีรูปแบบงานผลิตให้เลือกสำหรับร้านค้า แบรนด์ และงานอีเวนต์
        </p>

        <hr v-reveal:line="200" class="mt-8 border-neutral-300 2xl:mt-14">

        <ol class="mt-8 flex flex-col gap-4 lg:text-lg 2xl:mt-14 2xl:gap-8 2xl:text-xl">
          <li v-for="(step, index) in steps" :key="step" v-reveal="250 + index * 100">
            <span class="text-brand-red">{{ formatIndex(index + 1) }}</span>
            {{ step }}
          </li>
        </ol>

        <NuxtLink
          v-reveal="550"
          to="/contact"
          class="mt-10 inline-flex border border-brand-red px-4 py-2 text-sm font-semibold text-brand-red uppercase transition-colors hover:bg-brand-red hover:text-white lg:text-base 2xl:mt-20 2xl:px-5 2xl:py-2.5 2xl:text-xl"
        >
          ปรึกษางานกับเรา
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
