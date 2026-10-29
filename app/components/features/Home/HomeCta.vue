<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
</script>

<template>
  <section aria-labelledby="cta-heading" class="page-x bg-brand-red py-16 text-white lg:py-20 2xl:py-0">
    <div class="mx-auto flex max-w-390 flex-col items-center gap-12 lg:flex-row lg:justify-between 2xl:h-150">
      <div class="w-full sm:w-fit">
        <h2 id="cta-heading" class="text-5xl leading-none font-semibold whitespace-nowrap uppercase sm:text-8xl lg:text-7xl xl:text-8xl 2xl:text-[10rem]">
          <span v-reveal class="block font-sans">Let’s <span class="text-outline">Make</span></span>
          <span v-reveal="150" class="block font-serif"><span class="text-outline">It</span> Happen</span>
        </h2>

        <div v-reveal="300" class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center 2xl:mt-14">
          <p class="text-sm leading-relaxed sm:whitespace-nowrap lg:text-base 2xl:text-xl">
            มีแบบในใจแล้ว หรือกำลังมองหาวิธีผลิตงานให้เป็นจริง<br class="hidden sm:block">
            ส่งรายละเอียดของคุณมาเพื่อเริ่มต้นคุยกัน
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex shrink-0 items-center gap-6 self-start bg-white px-4 py-3 text-sm text-ink uppercase transition-colors hover:bg-ink hover:text-white sm:self-auto lg:text-base 2xl:gap-10 2xl:px-6 2xl:py-4 2xl:text-xl"
          >
            ขอใบเสนอราคา
            <ArrowUpRight :stroke-width="1.25" class="size-5 2xl:size-8" />
          </NuxtLink>
        </div>
      </div>

      <img v-reveal:zoom="200" :src="logoUrl" alt="" class="w-56 shrink-0 lg:w-80 xl:w-104 2xl:w-137">
    </div>
  </section>
</template>
