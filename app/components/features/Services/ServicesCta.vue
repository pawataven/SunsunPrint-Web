<template>
  <section aria-labelledby="services-cta-heading" class="page-x overflow-hidden bg-ivory pb-14 lg:pb-28 2xl:pb-36">
    <hr class="border-ink">
    <div v-reveal class="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ink uppercase 2xl:mt-14 2xl:text-sm">
      <p class="tracking-[0.15em]">Sunsun Print / Creative Production</p>
      <p class="flex items-center gap-2" aria-hidden="true">
        Not just on screen / In real life
        <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
      </p>
    </div>

    <!-- Same 864/816 split as the Our Work CTA, so the photo stack lands in the same place on both pages -->
    <div class="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[864fr_816fr] lg:gap-0 2xl:mt-20">
      <div class="@container">
        <p v-reveal="80" class="flex items-center gap-3 text-sm text-brand-red uppercase 2xl:text-base">
          <span class="h-0.5 w-9 bg-brand-red" aria-hidden="true" />
          Your idea. Our materials.
        </p>

        <!-- Same heading as the Our Work CTA -->
        <h2 id="services-cta-heading" class="mt-6 text-[min(25cqw,11.25rem)] leading-[0.89] text-ink uppercase 2xl:mt-[32px]">
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
          <span class="lg:block">ไอเดียดี ๆ ไม่ควรอยู่แค่บนหน้าจอ ให้ SUNSUN PRINT เปลี่ยนไอเดียของคุณ</span>
          <span class="lg:block">เป็นงานป้าย งานพิมพ์ และงานดิสเพลย์ที่จับต้องได้จริง</span>
        </p>

        <div v-reveal="470" class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 2xl:mt-[37px]">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-between gap-6 bg-ink px-5 py-3 text-base text-white transition-colors hover:bg-brand-red 2xl:h-16 2xl:w-65 2xl:px-6 2xl:py-0 2xl:text-lg"
          >
            เริ่มโปรเจกต์ของคุณ
            <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-5" />
          </NuxtLink>
          <p class="text-xs text-neutral-500 uppercase 2xl:text-[13px]">Any scale. Any brief.</p>
        </div>
      </div>

      <PrintStack
        :prints="[
          { src: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p01_03.png', caption: 'Print / 005' },
          { src: '/images/01_Signage/01_Acrylic_Signs/signage_p01_01.png', caption: 'Made to be seen' }
        ]"
      />
    </div>
  </section>
</template>
