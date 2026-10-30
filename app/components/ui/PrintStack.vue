<script setup lang="ts">
defineProps<{
  prints: [{ src: string, caption: string }, { src: string, caption: string }]
}>()
</script>

<template>
  <!--
    Positions come from the design measured at 1920px, where this column is 816px wide, and are written in cqw
    (1cqw = 8.16px there) so the overlapping prints keep the exact arrangement at every width.
    Shadows are box-shadows, so their offsets turn with each print's rotation as in the design
  -->
  <div class="@container relative aspect-816/700 w-full" aria-hidden="true">
    <figure
      v-reveal:zoom="200"
      class="absolute top-[12.87cqw] left-[7.29cqw] w-[55.51cqw] -rotate-9 border border-neutral-200 bg-white p-[2.7cqw] shadow-[1.47cqw_1.84cqw_0_var(--color-ink)]"
    >
      <NuxtImg
        :src="prints[0].src"
        alt=""
        sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
        format="webp"
        loading="lazy"
        class="aspect-409/420 w-full object-cover"
      />
      <!-- Indented past the IRL! badge that overlaps this print's lower-left corner -->
      <figcaption class="pt-[1.6cqw] pb-[1.5cqw] pl-[6.4cqw] text-[1.7cqw] leading-none text-ink uppercase">{{ prints[0].caption }}</figcaption>
    </figure>

    <figure
      v-reveal:zoom="350"
      class="absolute top-[28.26cqw] left-[43.14cqw] w-[51.35cqw] rotate-9 border border-neutral-200 bg-white p-[2.7cqw] shadow-[1.84cqw_1.47cqw_0_var(--color-ink)]"
    >
      <NuxtImg
        :src="prints[1].src"
        alt=""
        sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
        format="webp"
        loading="lazy"
        class="aspect-375/357 w-full object-cover"
      />
      <figcaption class="pt-[1.6cqw] pb-[1.5cqw] text-[1.7cqw] leading-none text-ink uppercase">{{ prints[1].caption }}</figcaption>
    </figure>

    <div
      v-reveal:pop="700"
      class="absolute top-[68.93cqw] left-[6.56cqw] flex size-[15.44cqw] flex-col items-center justify-center rounded-full border-[0.2cqw] pb-[2.7cqw] border-brand-red bg-ivory text-center leading-none text-brand-red uppercase"
    >
      <span class="text-[1.77cqw]">Print</span>
      <span class="mt-[0.5cqw] text-[3.9cqw] font-bold">IRL!</span>
      <span class="mt-[0.5cqw] text-[1.34cqw]">Not just pixels</span>
    </div>

    <!-- The design's eight-armed asterisk, tilted ~10°; no icon set has this glyph, so it is drawn inline -->
    <svg
      v-reveal:pop="900"
      viewBox="-12 -12 24 24"
      class="absolute top-[13.3cqw] left-[85.8cqw] size-[7.35cqw] text-brand-red"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    >
      <g transform="rotate(-10)">
        <path d="M0 -11.5V11.5M-11.5 0H11.5M-8.1 -8.1L8.1 8.1M-8.1 8.1L8.1 -8.1" />
      </g>
    </svg>
  </div>
</template>
