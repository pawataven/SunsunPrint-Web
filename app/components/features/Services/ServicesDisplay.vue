<script setup lang="ts">
const formats = ['Plaswood', 'Counter display', 'Product shelf', 'POSM']
</script>

<template>
  <section id="product-display" aria-labelledby="display-heading" class="page-x overflow-x-clip bg-ivory pt-10 pb-16 text-ink lg:pt-12 lg:pb-24 2xl:pt-16 2xl:pb-32">
    <div v-reveal class="flex flex-wrap items-center justify-between gap-4 text-xs uppercase 2xl:text-sm">
      <p>04 / Retail presence</p>
      <p class="flex items-center gap-4" aria-hidden="true">
        Products deserve the spotlight
        <span class="h-px w-12 bg-ink" />
        <Icon name="lucide:arrow-down-right" class="size-[1.1em]" />
      </p>
    </div>
    <hr v-reveal:line="100" class="mt-6 border-neutral-500 2xl:mt-16">

    <!-- Same grid as section 02: text first in the source for phones, photos on the left from lg -->
    <div class="mt-12 grid items-start gap-14 lg:mt-20 lg:grid-cols-[916fr_764fr] lg:gap-0 2xl:mt-27">
      <div class="@container lg:col-start-2 lg:row-start-1">
        <p v-reveal class="flex items-center gap-3 text-xs uppercase 2xl:text-sm">
          <span class="h-0.5 w-8 bg-ink" aria-hidden="true" />
          <span class="trim-cap-start">04 / Category</span>
        </p>

        <h2 id="display-heading" class="mt-[max(1.5rem,5.2cqw)] text-[20cqw] leading-[0.86] uppercase lg:text-[16.7cqw]">
          <span class="sr-only">ชั้นวางและดิสเพลย์สินค้า </span>
          <span v-reveal="100" class="-ml-[0.06em] block font-sans">Made</span>
          <span v-reveal="180" class="-ml-[0.04em] block font-serif text-brand-red normal-case">To</span>
          <span v-reveal="260" class="-ml-[0.04em] block font-sans">Show.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,4cqw)] font-sans text-[max(0.875rem,2.53cqw)] leading-relaxed text-neutral-700">
          <span class="lg:block">ชั้นวางและดิสเพลย์สินค้าวัสดุพลาสวูด สำหรับจัดแสดงสินค้าและสื่อสารภาพลักษณ์แบรนด์</span> <span class="lg:block">ณ จุดวางจำหน่าย มีตัวอย่างรูปทรงและชั้นวางหลายลักษณะ</span>
        </p>

        <ul v-reveal="400" aria-label="รูปแบบดิสเพลย์สินค้า" class="mt-[max(1.5rem,4.6cqw)] flex flex-wrap gap-[max(0.5rem,1.84cqw)]">
          <li
            v-for="format in formats"
            :key="format"
            class="flex h-[max(2rem,5.2cqw)] items-center border border-ink px-[max(0.75rem,2.07cqw)] text-[max(0.6875rem,1.61cqw)] uppercase"
          >
            {{ format }}
          </li>
        </ul>

        <div v-reveal="460" class="mt-[max(1.5rem,3.5cqw)] flex flex-wrap items-center gap-x-[max(1.25rem,2.3cqw)] gap-y-3">
          <NuxtLink
            to="/contact"
            class="inline-flex h-[max(2.75rem,6.9cqw)] items-center gap-[max(1.5rem,4.6cqw)] bg-ink px-[max(1rem,2.53cqw)] font-sans text-[max(0.875rem,2.07cqw)] text-white transition-colors hover:bg-brand-red"
          >
            สอบถามชั้นวางสินค้า
            <ArrowUpRight :stroke-width="1.5" class="size-[0.9em]" />
          </NuxtLink>
          <NuxtLink
            to="#how-to-start"
            class="inline-flex items-center gap-[0.4em] border-b border-ink pb-[0.2em] text-[max(0.75rem,1.61cqw)] uppercase transition-colors hover:text-brand-red"
          >
            Next / How to start
            <Icon name="lucide:arrow-down" class="size-[1.1em]" />
          </NuxtLink>
        </div>
      </div>

      <!-- Same box width and photo widths as the other sections; the displays are upright products, so both photos
           are taller here, as in the design. The small photo hangs past the box's right edge, so the box keeps its
           narrower width on phones too, where nothing else would leave room for the overhang -->
      <div class="@container relative aspect-800/770 w-[calc(800/916*100%)] min-w-0 lg:col-start-1 lg:row-start-1">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p01_03.png"
          alt="ชั้นวางสินค้าพลาสวูดแบบขั้นบันได Three bear ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:40vw xl:40vw 2xl:40vw"
          format="webp"
          loading="lazy"
          class="absolute top-[1.4cqw] left-0 h-[87.6cqw] w-[72cqw] object-cover"
        />

        <div v-reveal="350" class="absolute top-[37.5cqw] left-[56cqw] h-[56.7cqw] w-[48cqw]">
          <div class="absolute inset-0 translate-x-[1.5cqw] translate-y-[1.5cqw] bg-brand-red" aria-hidden="true" />
          <div class="relative size-full bg-white p-[1cqw]">
            <NuxtImg
              src="/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p02_03.png"
              alt="ดิสเพลย์ตั้งโต๊ะสีเขียว BERGAMOT ผลงานของ SunsunPrint"
              sizes="sm:50vw md:50vw lg:25vw xl:25vw 2xl:25vw"
              format="webp"
              loading="lazy"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div class="text-[max(0.625rem,1.6cqw)] leading-none whitespace-nowrap uppercase" aria-hidden="true">
          <p v-reveal="500" class="absolute top-[2cqw] left-[81.5cqw] bg-brand-red px-[0.9em] py-[0.7em] text-white">Display / 004</p>
          <p v-reveal="600" class="absolute top-[88cqw] left-[1.4cqw] flex items-center gap-[0.4em] bg-white px-[0.9em] py-[0.7em] text-ink">
            Product display / POSM
            <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
