<template>
  <!-- This design starts right under the logo block (which overhangs the header by 32/104/120px at lg/xl/2xl)
       instead of using the shared hero-offset gap -->
  <section class="page-x overflow-x-clip pt-12 pb-8 lg:pt-16 lg:pb-10 xl:pt-34 2xl:pt-38 2xl:pb-16">
    <div class="grid gap-12 lg:grid-cols-[880fr_800fr] lg:gap-0">
      <div class="@container flex flex-col gap-8 lg:justify-between lg:gap-[2cqw]">
        <p v-reveal class="flex items-center gap-4 text-sm uppercase text-ink xl:text-base 2xl:text-lg">
          <span class="h-0.5 w-8 bg-brand-red" aria-hidden="true" />
          <span class="trim-cap-start">Your ideas deserve more.</span>
        </p>

        <h1 class="text-[20cqw] leading-[0.92] text-ink uppercase">
          <span class="sr-only">บริการรับทำป้าย งานพิมพ์ งานอีเวนต์ และดิสเพลย์สินค้าของ SUNSUN PRINT </span>
          <span v-reveal="120" class="-ml-[0.06em] block font-sans">More</span>
          <span v-reveal="200" class="-ml-[0.04em] block font-sans">Than</span>
          <span v-reveal="280" class="-ml-[0.04em] block font-serif text-brand-red normal-case">Print.</span>
        </h1>

        <p v-reveal="360" class="font-sans text-[max(0.875rem,2.7cqw)] leading-relaxed text-neutral-700">
          <span class="lg:block">ไม่ใช่แค่งานพิมพ์ แต่คือวิธีทำให้แบรนด์เป็นที่มองเห็น</span> <span class="lg:block">สำรวจงานป้าย สติ๊กเกอร์ อุปกรณ์อีเวนต์ และชั้นวางสินค้า</span> <span class="lg:block">ในรูปแบบที่เหมาะกับงานของคุณ</span>
        </p>
      </div>

      <!-- Every piece is placed in cqw of this box, so the overlap between the two photos, the ring and the badge
           keeps the design's proportions at every width -->
      <div class="@container relative aspect-800/720 min-w-0">
        <div
          class="absolute top-[18cqw] left-[36cqw] size-[40cqw] rounded-full border border-brand-red"
          aria-hidden="true"
        />

        <div v-reveal="250" class="absolute top-[33cqw] left-[45cqw] h-[42cqw] w-[50cqw] rotate-10">
          <div class="absolute inset-0 translate-x-[2.2cqw] translate-y-[2.2cqw] bg-ink" aria-hidden="true" />
          <div class="relative size-full bg-white p-[2.4cqw] shadow-md">
            <NuxtImg
              src="/images/01_Signage/01_Acrylic_Signs/signage_p01_03.png"
              alt="ป้ายอะคริลิกสีดำบอกชื่อห้อง เช่น STORAGE ROOM และ LAB ROOM ผลงานของ SunsunPrint"
              sizes="sm:100vw md:100vw lg:30vw xl:30vw 2xl:30vw"
              format="webp"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div v-reveal="150" class="absolute top-[12.5cqw] left-[9.5cqw] h-[51cqw] w-[57cqw] -rotate-10">
          <div class="absolute inset-0 translate-x-[2.2cqw] translate-y-[2.2cqw] bg-ink" aria-hidden="true" />
          <div class="relative size-full bg-white p-[3cqw] shadow-md">
            <NuxtImg
              src="/images/01_Signage/01_Acrylic_Signs/signage_p01_05.png"
              alt="ป้ายเลขห้อง 101 The Terrace ผลงานของ SunsunPrint"
              sizes="sm:100vw md:100vw lg:35vw xl:35vw 2xl:35vw"
              format="webp"
              preload
              fetchpriority="high"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div
          v-reveal:pop="900"
          class="absolute top-[4.5cqw] left-[82cqw] flex size-[14.5cqw] rotate-10 flex-col items-center justify-center gap-[0.3em] rounded-full bg-brand-red text-[2cqw] leading-tight text-white uppercase"
          aria-hidden="true"
        >
          <span class="text-center">Print<br>it real!</span>
          <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
        </div>
      </div>
    </div>

    <hr v-reveal:line="450" class="mt-12 border-neutral-300 lg:mt-16 2xl:mt-24">
    <div class="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs uppercase text-ink xl:mt-6 xl:text-sm 2xl:mt-8 2xl:text-base">
      <p>Creative production / not just printing</p>
      <p class="flex items-center gap-6 lg:gap-8" aria-hidden="true">
        Scroll to explore
        <span class="h-px w-12 bg-brand-red lg:w-24" />
      </p>
    </div>
  </section>
</template>
