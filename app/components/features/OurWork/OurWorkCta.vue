<template>
  <section aria-labelledby="our-work-cta-heading" class="page-x overflow-hidden pt-12 pb-14 lg:pt-20 lg:pb-28 2xl:pt-24 2xl:pb-36">
    <p v-reveal class="text-xs tracking-[0.15em] text-ink uppercase 2xl:text-sm">Sunsun Print / Creative Production</p>

    <!-- 864/816 is the design's split of the 1680px content width; both columns start at the eyebrow's top edge -->
    <div class="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[864fr_816fr] lg:gap-0 2xl:mt-[46px]">
      <div class="@container">
        <p v-reveal="80" class="flex items-center gap-3 text-sm text-brand-red uppercase 2xl:text-base">
          <span class="h-0.5 w-9 bg-brand-red" aria-hidden="true" />
          Seen the possibilities?
        </p>

        <h2 id="our-work-cta-heading" class="mt-6 text-[min(25cqw,11.25rem)] leading-[0.89] text-ink uppercase 2xl:mt-[32px]">
          <span v-reveal="150" class="block font-sans">Make</span>
          <span v-reveal="250" class="block font-serif font-normal">
            It
            <span class="irl-outline ml-[0.1em] inline-block translate-y-[0.19em] font-sans font-semibold -rotate-14" data-text="IRL.">IRL.</span>
          </span>
        </h2>

        <p v-reveal="350" class="mt-12 font-sans leading-relaxed text-neutral-600 lg:mt-24 lg:text-lg 2xl:mt-[216px] 2xl:text-[22px] 2xl:leading-[1.6]">
          <span class="lg:block">ไอเดียดี ๆ ไม่ควรอยู่แค่บนหน้าจอ ให้ SUNSUN PRINT เปลี่ยนไอเดียของ</span>
          <span class="lg:block">คุณเป็นงานป้าย งานพิมพ์ และงานดิสเพลย์ที่จับต้องได้จริง</span>
        </p>

        <div v-reveal="450" class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 2xl:mt-[37px]">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-between gap-6 bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-brand-red 2xl:h-16 2xl:w-65 2xl:px-6 2xl:py-0"
          >
            เริ่มโปรเจกต์ของคุณ
            <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-5" />
          </NuxtLink>
          <p class="text-xs text-neutral-500 uppercase 2xl:text-[13px]">Your next idea belongs here</p>
        </div>
      </div>

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
            src="/images/01_Signage/03_Stainless_Signs/signage_p03_01.png"
            alt=""
            sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
            format="webp"
            loading="lazy"
            class="aspect-409/420 w-full object-cover"
          />
          <!-- Indented past the IRL! badge that overlaps this print's lower-left corner -->
          <figcaption class="pt-[1.6cqw] pb-[1.5cqw] pl-[6.4cqw] text-[1.7cqw] leading-none text-ink uppercase">Print / 001</figcaption>
        </figure>

        <figure
          v-reveal:zoom="350"
          class="absolute top-[28.26cqw] left-[43.14cqw] w-[51.35cqw] rotate-9 border border-neutral-200 bg-white p-[2.7cqw] shadow-[1.84cqw_1.47cqw_0_var(--color-ink)]"
        >
          <NuxtImg
            src="/images/02_Stickers_Graphics/03_Stair_Graphics/signage_p07_02.png"
            alt=""
            sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
            format="webp"
            loading="lazy"
            class="aspect-375/357 w-full object-cover"
          />
          <figcaption class="pt-[1.6cqw] pb-[1.5cqw] text-[1.7cqw] leading-none text-ink uppercase">Made to be seen</figcaption>
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
    </div>
  </section>
</template>

<style scoped>
/*
  Stroking the glyphs directly also traces the overlapping contours inside each letter, so the outline is built in two
  layers: the text in red with a thick red stroke underneath, and a plain white copy on top that hides the inner lines
*/
.irl-outline {
  position: relative;
  color: var(--color-brand-red);
  -webkit-text-stroke: 0.08em var(--color-brand-red);
}

.irl-outline::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: var(--color-white);
  -webkit-text-stroke: 0;
}
</style>
