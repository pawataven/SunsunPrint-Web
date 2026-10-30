<script setup lang="ts">
const surfaces = ['Window', 'Floor', 'Wall', 'Stairs', 'Die-cut logo']
</script>

<template>
  <section id="stickers-graphics" aria-labelledby="stickers-heading" class="page-x overflow-x-clip bg-ivory pt-10 pb-16 text-ink lg:pt-12 lg:pb-24 2xl:pt-16 2xl:pb-32">
    <div v-reveal class="flex flex-wrap items-center justify-between gap-4 text-xs uppercase 2xl:text-sm">
      <p>02 / Surface graphics</p>
      <p class="flex items-center gap-4" aria-hidden="true">
        Every space can tell a story
        <span class="h-px w-12 bg-ink" />
        <Icon name="lucide:arrow-down-right" class="size-[1.1em]" />
      </p>
    </div>
    <hr v-reveal:line="100" class="mt-6 border-neutral-500 2xl:mt-16">

    <!-- Text comes first in the source so phones read it before the photos; from lg the grid puts the photos on the left -->
    <div class="mt-12 grid items-start gap-14 lg:mt-20 lg:grid-cols-[916fr_764fr] lg:gap-0 2xl:mt-27">
      <!-- The type is sized in cqw of a narrower column than section 01's, so every value is scaled up to land at the same size -->
      <div class="@container lg:col-start-2 lg:row-start-1">
        <p v-reveal class="flex items-center gap-3 text-xs uppercase 2xl:text-sm">
          <span class="h-0.5 w-8 bg-ink" aria-hidden="true" />
          <span class="trim-cap-start">02 / Category</span>
        </p>

        <h2 id="stickers-heading" class="mt-[max(1.5rem,5.2cqw)] text-[20cqw] leading-[0.86] uppercase lg:text-[16.7cqw]">
          <span class="sr-only">งานสติ๊กเกอร์และกราฟิก </span>
          <span v-reveal="100" class="-ml-[0.06em] block font-sans">Stick</span>
          <span v-reveal="180" class="-ml-[0.04em] block font-serif text-brand-red normal-case">With</span>
          <span v-reveal="260" class="-ml-[0.04em] block font-sans">You.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,4cqw)] font-sans text-[max(0.875rem,2.53cqw)] leading-relaxed text-neutral-700">
          <span class="lg:block">กราฟิกสติ๊กเกอร์สำหรับเปลี่ยนพื้นที่ธรรมดาให้เป็นพื้นที่สื่อสาร ทั้งงานตกแต่งกระจก พื้น</span> <span class="lg:block">บันได ผนัง หน้าร้าน และเคาน์เตอร์</span>
        </p>

        <ul v-reveal="400" aria-label="พื้นผิวที่ติดสติ๊กเกอร์ได้" class="mt-[max(1.5rem,4.6cqw)] flex flex-wrap gap-[max(0.5rem,1.84cqw)]">
          <li
            v-for="surface in surfaces"
            :key="surface"
            class="flex h-[max(2rem,5.2cqw)] items-center border border-ink px-[max(0.75rem,2.07cqw)] text-[max(0.6875rem,1.61cqw)] uppercase"
          >
            {{ surface }}
          </li>
        </ul>

        <div v-reveal="460" class="mt-[max(1.5rem,3.5cqw)] flex flex-wrap items-center gap-x-[max(1.25rem,2.3cqw)] gap-y-3">
          <NuxtLink
            to="/contact"
            class="inline-flex h-[max(2.75rem,6.9cqw)] items-center gap-[max(1.5rem,4.6cqw)] bg-ink px-[max(1rem,2.53cqw)] font-sans text-[max(0.875rem,2.07cqw)] text-white transition-colors hover:bg-brand-red"
          >
            สอบถามงานสติ๊กเกอร์
            <ArrowUpRight :stroke-width="1.5" class="size-[0.9em]" />
          </NuxtLink>
          <NuxtLink
            to="#event-booth"
            class="inline-flex items-center gap-[0.4em] border-b border-ink pb-[0.2em] text-[max(0.75rem,1.61cqw)] uppercase transition-colors hover:text-brand-red"
          >
            Next service
            <Icon name="lucide:arrow-down" class="size-[1.1em]" />
          </NuxtLink>
        </div>
      </div>

      <!-- 800 of the 916 column width is section 01's photo box, so with the same cqw values both sections' photos
           come out the same size even though this column is wider -->
      <div class="@container relative aspect-800/620 min-w-0 lg:col-start-1 lg:row-start-1 lg:w-[calc(800/916*100%)]">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/02_Stickers_Graphics/01_Floor_Graphics/signage_p06_01.png"
          alt="สติ๊กเกอร์ติดพื้น Oh! Juice หน้าเคาน์เตอร์ในศูนย์การค้า ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:40vw xl:40vw 2xl:40vw"
          format="webp"
          loading="lazy"
          class="absolute top-[6cqw] left-0 h-[58cqw] w-[72cqw] object-cover"
        />

        <div v-reveal="350" class="absolute top-[39cqw] left-[50cqw] h-[35cqw] w-[48cqw]">
          <div class="absolute inset-0 translate-x-[1.5cqw] translate-y-[1.5cqw] bg-brand-red" aria-hidden="true" />
          <div class="relative size-full bg-white p-[1cqw]">
            <NuxtImg
              src="/images/02_Stickers_Graphics/02_Window_Wall_Stickers/signage_p07_01.png"
              alt="สติ๊กเกอร์ติดกระจกหน้าร้าน Fresh Greens Smoothies ผลงานของ SunsunPrint"
              sizes="sm:50vw md:50vw lg:25vw xl:25vw 2xl:25vw"
              format="webp"
              loading="lazy"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div class="text-[max(0.625rem,1.6cqw)] leading-none uppercase" aria-hidden="true">
          <p v-reveal="500" class="absolute top-[3.3cqw] left-[1cqw] bg-brand-red px-[0.9em] py-[0.7em] text-white">Stickers / 002</p>
          <p v-reveal="600" class="absolute top-[68cqw] left-0 flex items-center gap-[0.4em] bg-white px-[0.9em] py-[0.7em] text-ink">
            Floor <span class="text-brand-red">+</span> Window graphics
            <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
