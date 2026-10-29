<template>
  <section class="hero-offset page-x pb-12 lg:pb-24 2xl:pb-30">
    <div class="grid gap-12 lg:grid-cols-[796fr_884fr] lg:gap-0">
      <div class="@container flex flex-col gap-8 lg:justify-between lg:gap-0">
        <p v-reveal class="flex items-center gap-3 text-sm uppercase text-neutral-600 xl:text-lg 2xl:text-2xl">
          <span class="h-0.5 w-12 bg-brand-red" aria-hidden="true" />
          <span class="trim-cap-start">Print different. Think bigger.</span>
        </p>
        <h1 class="text-[min(23cqw,11.25rem)] leading-[0.92] text-ink uppercase">
          <!-- The visible slogan says nothing about the business, so search engines and screen readers get it spelled out -->
          <span class="sr-only">SUNSUN PRINT รับทำป้ายและงานพิมพ์ </span>
          <span v-reveal="120" class="-ml-[0.093em] block font-sans">Make</span>
          <span v-reveal="240" class="-ml-[0.04em] block font-sans font-normal">
            It <span class="text-brand-red font-serif">Real.</span>
          </span>
        </h1>

        <PrimaryLink v-reveal="400" to="/our-work" class="self-start">ดูผลงานทั้งหมด</PrimaryLink>
      </div>

      <!-- Stretches to the text column when that runs taller, so the two always share a top and bottom edge -->
      <div class="@container relative aspect-884/599 bg-ivory lg:self-stretch">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/Home/signage_p04_01.png"
          alt="ป้ายไฟ SHANGARILA และตัวอักษร SARAH ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
          format="webp"
          preload
          fetchpriority="high"
          class="size-full object-cover object-left"
        />
        <div
          v-reveal:pop="900"
          class="hero-badge absolute right-[2cqw] flex -translate-y-1/2 items-center justify-center rounded-full bg-brand-red lg:right-0 lg:translate-x-1/2"
          aria-hidden="true"
        >
          <span class="rotate-30 text-center text-[calc(var(--badge-size)*0.13)] leading-tight font-semibold text-white uppercase">
            Design<br>Print<br>Impact
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
