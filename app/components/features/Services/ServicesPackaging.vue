<script setup lang="ts">
const formats = ['Gift box', 'Cosmetic box', 'Paper bag', 'Emboss', 'Gold foil', 'Spot UV']
</script>

<template>
  <section id="packaging" aria-labelledby="packaging-heading" class="page-x overflow-x-clip bg-ink pt-10 pb-16 text-white lg:pt-12 lg:pb-24 2xl:pt-16 2xl:pb-32">
    <div v-reveal class="flex flex-wrap items-center justify-between gap-4 text-xs uppercase 2xl:text-sm">
      <p>05 / Packaging</p>
      <p class="flex items-center gap-4" aria-hidden="true">
        First touch, lasting impression
        <span class="h-px w-12 bg-white" />
        <Icon name="lucide:arrow-down-right" class="size-[1.1em]" />
      </p>
    </div>
    <hr v-reveal:line="100" class="mt-6 border-neutral-600 2xl:mt-16">

    <div class="mt-12 grid items-start gap-14 lg:mt-20 lg:grid-cols-[880fr_800fr] lg:gap-0 2xl:mt-27">
      <div class="@container">
        <p v-reveal class="flex items-center gap-3 text-xs uppercase 2xl:text-sm">
          <span class="h-0.5 w-8 bg-white" aria-hidden="true" />
          <span class="trim-cap-start">05 / Category</span>
        </p>

        <h2 id="packaging-heading" class="mt-[max(1.5rem,4.5cqw)] text-[20cqw] leading-[0.86] uppercase lg:text-[14.5cqw]">
          <span class="sr-only">งานบรรจุภัณฑ์ กล่องและถุงกระดาษ </span>
          <span v-reveal="100" class="-ml-[0.06em] block font-sans">Unbox</span>
          <span v-reveal="180" class="-ml-[0.04em] block font-serif text-brand-red normal-case">The</span>
          <span v-reveal="260" class="-ml-[0.04em] block font-sans">Brand.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,3.5cqw)] font-sans text-[max(0.875rem,2.2cqw)] leading-relaxed text-neutral-300">
          <span class="lg:block">กล่องบรรจุภัณฑ์และถุงกระดาษพิมพ์ลาย สำหรับขนม เครื่องสำอาง ของขวัญ และสินค้าทั่วไป</span> <span class="lg:block">เลือกเพิ่มเทคนิคปั๊มนูน ปั๊มฟอยล์ทอง หรือสปอตยูวี ให้งานดูพิเศษขึ้น</span>
        </p>

        <ul v-reveal="400" aria-label="รูปแบบงานบรรจุภัณฑ์" class="mt-[max(1.5rem,4cqw)] flex flex-wrap gap-[max(0.5rem,1.6cqw)]">
          <li
            v-for="format in formats"
            :key="format"
            class="flex h-[max(2rem,4.5cqw)] items-center border border-white px-[max(0.75rem,1.8cqw)] text-[max(0.6875rem,1.4cqw)] uppercase"
          >
            {{ format }}
          </li>
        </ul>

        <div v-reveal="460" class="mt-[max(1.5rem,3cqw)] flex flex-wrap items-center gap-x-[max(1.25rem,2cqw)] gap-y-3">
          <LineLink
            class="inline-flex h-[max(2.75rem,6cqw)] items-center gap-[max(1.5rem,4cqw)] bg-white px-[max(1rem,2.2cqw)] font-sans text-[max(0.875rem,1.8cqw)] text-ink transition-colors hover:bg-brand-red hover:text-white"
          >
            สอบถามงานบรรจุภัณฑ์
            <ArrowUpRight :stroke-width="1.5" class="size-[0.9em]" />
          </LineLink>
          <NuxtLink
            to="#how-to-start"
            class="inline-flex items-center gap-[0.4em] border-b border-white pb-[0.2em] text-[max(0.75rem,1.4cqw)] uppercase transition-opacity hover:opacity-75"
          >
            Next / How to start
            <Icon name="lucide:arrow-down" class="size-[1.1em]" />
          </NuxtLink>
        </div>
      </div>

      <!-- Section 04's taller photo box mirrored, since boxes and bags are upright products too -->
      <div class="@container relative aspect-800/770 min-w-0">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/05_Packaging_Boxes/03_Cosmetic_Boxes/box_p03_02.png"
          alt="กล่องเครื่องสำอาง BOH Bio Heal สีม่วงเปิดฝาพร้อมถาดรองสินค้า ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:40vw xl:40vw 2xl:40vw"
          format="webp"
          loading="lazy"
          class="absolute top-[1.4cqw] right-0 h-[87.6cqw] w-[72cqw] object-cover"
        />

        <div v-reveal="350" class="absolute top-[37.5cqw] left-[2cqw] h-[56.7cqw] w-[48cqw]">
          <div class="absolute inset-0 translate-x-[1.5cqw] translate-y-[1.5cqw] bg-brand-red" aria-hidden="true" />
          <div class="relative size-full bg-white p-[1cqw]">
            <NuxtImg
              src="/images/07_Paper_Bags/02_Retail_Bags/bag_p02_02.png"
              alt="ถุงกระดาษพิมพ์ลายสีฟ้า MrBeast Burger พร้อมหูเชือก ผลงานของ SunsunPrint"
              sizes="sm:50vw md:50vw lg:25vw xl:25vw 2xl:25vw"
              format="webp"
              loading="lazy"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div class="text-[max(0.625rem,1.6cqw)] leading-none whitespace-nowrap uppercase" aria-hidden="true">
          <p v-reveal="500" class="absolute top-[4cqw] right-[-2.5cqw] bg-brand-red px-[0.9em] py-[0.7em] text-white">Packaging / 005</p>
          <p v-reveal="600" class="absolute top-[88cqw] right-[-2.5cqw] flex items-center gap-[0.4em] bg-white px-[0.9em] py-[0.7em] text-ink">
            Box <span class="text-brand-red">+</span> Paper bag
            <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
