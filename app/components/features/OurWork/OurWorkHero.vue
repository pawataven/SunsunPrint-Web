<script setup lang="ts">
const stats = [
  { value: '36', label: 'ภาพผลงาน' },
  { value: '04', label: 'หมวดงาน' }
]
</script>

<template>
  <section class="hero-offset page-x pb-12 lg:pb-24 2xl:pb-30">
    <div class="grid gap-16 lg:grid-cols-[880fr_800fr] lg:gap-0">
      <!-- Type below is sized in cqw because the photo's height is a fixed share of this column's width (68cqw),
           and the whole stack has to fit inside it at every desktop width -->
      <div class="@container flex flex-col gap-8 lg:justify-between lg:gap-[2cqw]">
        <p v-reveal class="flex items-center gap-3 text-sm uppercase text-neutral-600 xl:text-lg 2xl:text-2xl">
          <span class="h-0.5 w-12 bg-brand-red" aria-hidden="true" />
          <span class="trim-cap-start">Our work &amp; references</span>
        </p>

        <div>
          <h1 class="text-[18cqw] leading-[0.92] uppercase">
            <span class="sr-only">ผลงานป้ายและงานพิมพ์ของ SUNSUN PRINT </span>
            <span v-reveal="120" class="-ml-[0.06em] block font-sans text-ink">Our</span>
            <span v-reveal="240" class="-ml-[0.04em] block font-serif text-brand-red">Work.</span>
          </h1>

          <p v-reveal="320" class="mt-4 font-sans text-[max(0.875rem,2.2cqw)] leading-normal text-ink lg:mt-[1.5cqw]">
            <span class="lg:block">ทุกไอเดียเริ่มต้นจากการออกแบบ และกลายเป็นงานพิมพ์ที่จับต้องได้</span> <span class="lg:block">สำรวจตัวอย่างงานป้าย งานสติ๊กเกอร์ งานอีเวนต์ และดิสเพลย์สินค้า</span>
          </p>
        </div>

        <div>
          <hr v-reveal:line="400" class="w-full max-w-[75%] border-t-2 border-brand-red">

          <dl class="mt-[2.5cqw] flex gap-[12cqw]">
            <div v-for="(stat, index) in stats" :key="stat.label" v-reveal="450 + index * 100" class="flex flex-col-reverse">
              <dt class="trim-baseline-end mt-[0.4em] text-[max(0.875rem,2.2cqw)] uppercase text-neutral-600">{{ stat.label }}</dt>
              <dd class="text-[max(2rem,8cqw)] leading-none text-ink">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Sized in cqw so the frame offset, labels and badge keep the design's proportions to the photo at every width;
           stretches to the text column when that runs taller, so the two always share a top and bottom edge -->
      <div class="@container relative aspect-800/599 min-w-0 lg:self-stretch">
        <div
          class="absolute inset-0 translate-x-[-2cqw] translate-y-[2cqw] border border-neutral-400"
          aria-hidden="true"
        />
        <div class="relative size-full text-[3.2cqw] leading-none text-white uppercase">
          <NuxtImg
            v-reveal:wipe="150"
            src="/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png"
            alt="ป้ายไวนิล Oh! Juice ตั้งอยู่บนสนามหญ้า ผลงานของ SunsunPrint"
            sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
            format="webp"
            preload
            fetchpriority="high"
            class="size-full object-cover"
          />
          <p v-reveal="600" class="absolute top-[3cqw] left-[3cqw] bg-brand-red py-[0.45em] pr-[3.5em] pl-[0.75em]">
            Real print / visual references
          </p>
          <p v-reveal="700" class="absolute right-0 bottom-0 bg-ink py-[0.6em] pr-[3.5em] pl-[0.8em]">
            Vinyl banner / signage
          </p>
        </div>
        <div
          v-reveal:pop="900"
          class="hero-badge absolute right-[2cqw] flex -translate-y-1/2 items-center justify-center rounded-full bg-brand-red lg:right-0 lg:translate-x-1/2"
          aria-hidden="true"
        >
          <span class="text-center text-[calc(var(--badge-size)*0.155)] leading-tight text-white uppercase">
            Print<br>is real!
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
