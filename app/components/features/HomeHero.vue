<script setup lang="ts">
import heroImageUrl from '~/assets/images/Home/signage_p04_01.png'
</script>

<template>
  <section class="hero-offset page-x pt-16 pb-16 lg:pb-24 2xl:pb-30">
    <div class="grid gap-12 lg:grid-cols-[796fr_884fr] lg:gap-0">
      <div class="@container flex flex-col gap-8 lg:justify-between lg:gap-0 lg:pt-3">
        <p class="flex items-center gap-3 text-sm uppercase text-neutral-600 xl:text-lg 2xl:text-2xl">
          <span class="h-0.5 w-12 bg-primary-600" aria-hidden="true" />
          Print different. Think bigger.
        </p>
        <h1 class="text-[min(23cqw,11.25rem)] leading-[0.92] text-neutral-900 uppercase">
          <span class="-ml-[0.093em] block font-sans">Make</span>
          <span class="-ml-[0.04em] block font-sans font-normal">
            It <span class="text-primary-600 font-serif">Real.</span>
          </span>
        </h1>

        <NuxtLink
          to="/work"
          class="inline-flex items-center gap-2 self-start bg-primary-600 px-4 py-2.5 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-700 xl:text-lg 2xl:px-5 2xl:py-3 2xl:text-2xl"
        >
          Explore our works
          <Icon name="lucide:arrow-up-right" class="size-4 xl:size-5 2xl:size-6" />
        </NuxtLink>
      </div>

      <div class="relative aspect-884/599 bg-neutral-200">
        <img
          :src="heroImageUrl"
          alt="ป้ายไฟ SHANGARILA และตัวอักษร SARAH ผลงานของ SunsunPrint"
          class="size-full object-cover object-left"
        >
        <div
          class="absolute top-0 right-2 flex size-24 -translate-y-2/5 items-center justify-center rounded-full bg-primary-600 lg:right-0 lg:size-32 lg:translate-x-1/2 2xl:size-41.25"
          aria-hidden="true"
        >
          <span class="rotate-30 text-center text-xs leading-tight font-semibold text-white uppercase lg:text-sm 2xl:text-xl">
            Design<br>Print<br>Impact
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (width >= 64rem) {
  .hero-offset {
    /* The image height follows the viewport width (column width × 599/884), so the gap above it takes
       whatever screen height is left — capped at the design's 240px — to keep the hero on one screen */
    padding-top: clamp(2rem, calc(100svh - var(--header-h) - (100vw - 2 * var(--page-gutter)) * 599 / 1680 - 1.5rem), 15rem);
  }
}
</style>
