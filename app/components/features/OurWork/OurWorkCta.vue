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
          <!--
            The reveal animation gives this line its own compositing layer, and WebKit (iOS Safari) sizes that layer to
            the line box without counting the rotated IRL. that hangs below it, so the overhang got clipped. The padding
            grows the box over the overhang and the matching negative margin keeps the layout where it was
          -->
          <span v-reveal="250" class="-mb-[0.4em] block pb-[0.4em] font-serif">
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
            class="inline-flex items-center justify-between gap-6 bg-ink px-5 py-3 text-base text-white transition-colors hover:bg-brand-red 2xl:h-16 2xl:w-65 2xl:px-6 2xl:py-0 2xl:text-lg"
          >
            เริ่มโปรเจกต์ของคุณ
            <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-5" />
          </NuxtLink>
          <p class="text-xs text-neutral-500 uppercase 2xl:text-[13px]">Your next idea belongs here</p>
        </div>
      </div>

      <PrintStack
        :prints="[
          { src: '/images/01_Signage/03_Stainless_Signs/signage_p03_01.png', caption: 'Print / 001' },
          { src: '/images/02_Stickers_Graphics/03_Stair_Graphics/signage_p07_02.png', caption: 'Made to be seen' }
        ]"
      />
    </div>
  </section>
</template>

