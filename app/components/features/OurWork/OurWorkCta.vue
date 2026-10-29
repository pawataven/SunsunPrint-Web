<template>
  <section aria-labelledby="our-work-cta-heading" class="page-x overflow-hidden pt-12 pb-14 lg:pt-20 lg:pb-28 2xl:pt-24 2xl:pb-36">
    <p v-reveal class="text-xs tracking-[0.2em] text-ink uppercase 2xl:text-base">Sunsun Print / Creative Production</p>

    <div class="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-12 2xl:mt-20">
      <div class="@container">
        <p v-reveal="80" class="flex items-center gap-3 text-sm text-brand-red uppercase xl:text-base 2xl:text-xl">
          <span class="h-0.5 w-10 bg-brand-red 2xl:w-12" aria-hidden="true" />
          Seen the possibilities?
        </p>

        <h2 id="our-work-cta-heading" class="mt-6 text-[min(25cqw,11.25rem)] leading-[0.92] text-ink uppercase 2xl:mt-10">
          <span v-reveal="150" class="-ml-[0.06em] block font-sans">Make</span>
          <span v-reveal="250" class="-ml-[0.04em] block font-serif font-normal">
            It
            <span class="irl-outline ml-[0.25em] inline-block translate-y-[0.18em] font-sans font-semibold -rotate-12" data-text="IRL.">IRL.</span>
          </span>
        </h2>

        <p v-reveal="350" class="mt-8 max-w-xl font-sans leading-relaxed text-neutral-600 lg:mt-20 lg:text-lg 2xl:mt-28 2xl:max-w-2xl 2xl:text-xl">
          ไอเดียดี ๆ ไม่ควรอยู่แค่บนหน้าจอ ให้ SUNSUN PRINT เปลี่ยนไอเดียของคุณเป็นงานป้าย งานพิมพ์
          และงานดิสเพลย์ที่จับต้องได้จริง
        </p>

        <div v-reveal="450" class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 2xl:mt-12">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-6 bg-ink px-5 py-3 text-sm text-white transition-colors hover:bg-brand-red lg:text-base 2xl:gap-10 2xl:px-7 2xl:py-4 2xl:text-xl"
          >
            เริ่มโปรเจกต์ของคุณ
            <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-6" />
          </NuxtLink>
          <p class="text-xs text-neutral-500 uppercase 2xl:text-base">Your next idea belongs here</p>
        </div>
      </div>

      <!-- Every offset, size and shadow is in cqw so the overlapping prints keep their arrangement at any width -->
      <div class="@container relative aspect-5/4 w-full" aria-hidden="true">
        <figure
          v-reveal:zoom="200"
          class="absolute top-0 left-[3%] w-[55%] -rotate-4 border border-neutral-200 bg-white p-[2.6cqw] shadow-[3.5cqw_2cqw_0_var(--color-ink)]"
        >
          <NuxtImg
            src="/images/01_Signage/03_Stainless_Signs/signage_p03_01.png"
            alt=""
            sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
            format="webp"
            loading="lazy"
            class="aspect-21/20 w-full object-cover"
          />
          <!-- Indented past the IRL! badge that overlaps this print's lower-left corner -->
          <figcaption class="pt-[3cqw] pb-[1.5cqw] pl-[12cqw] text-[2.2cqw] text-ink uppercase">Print / 001</figcaption>
        </figure>

        <figure
          v-reveal:zoom="350"
          class="absolute top-[17%] left-[40%] w-[52%] rotate-5 border border-neutral-200 bg-white p-[2.6cqw] shadow-[2.5cqw_3cqw_0_var(--color-ink)]"
        >
          <NuxtImg
            src="/images/02_Stickers_Graphics/03_Stair_Graphics/signage_p07_02.png"
            alt=""
            sizes="sm:80vw md:60vw lg:30vw xl:30vw 2xl:30vw"
            format="webp"
            loading="lazy"
            class="aspect-11/10 w-full object-cover"
          />
          <figcaption class="pt-[3cqw] pb-[1.5cqw] text-[2.2cqw] text-ink uppercase">Made to be seen</figcaption>
        </figure>

        <div
          v-reveal:pop="700"
          class="absolute top-[62%] left-0 flex size-[17cqw] flex-col items-center justify-center rounded-full border-[0.4cqw] border-brand-red bg-ivory text-center leading-none text-brand-red uppercase"
        >
          <span class="text-[2cqw]">Print</span>
          <span class="mt-[0.6cqw] text-[4.2cqw] font-bold">IRL!</span>
          <span class="mt-[0.6cqw] text-[1.4cqw]">Not just pixels</span>
        </div>

        <Icon
          v-reveal:pop="900"
          name="lucide:asterisk"
          class="absolute top-[3%] right-[4%] size-[9cqw] text-brand-red"
        />
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
