<script setup lang="ts">
const items = ['Fabric backdrop', 'Roll-up', 'X-stand', 'PP board', 'Table cover', 'Foamboard']
</script>

<template>
  <section id="event-booth" aria-labelledby="event-heading" class="page-x overflow-x-clip bg-ink pt-10 pb-16 text-white lg:pt-12 lg:pb-24 2xl:pt-16 2xl:pb-32">
    <div v-reveal class="flex flex-wrap items-center justify-between gap-4 text-xs uppercase 2xl:text-sm">
      <p>03 / Event &amp; exhibition</p>
      <p class="flex items-center gap-4" aria-hidden="true">
        Show up. Stand out.
        <span class="h-px w-12 bg-white" />
        <Icon name="lucide:arrow-down-right" class="size-[1.1em]" />
      </p>
    </div>
    <hr v-reveal:line="100" class="mt-6 border-neutral-600 2xl:mt-16">

    <div class="mt-12 grid items-start gap-14 lg:mt-20 lg:grid-cols-[880fr_800fr] lg:gap-0 2xl:mt-27">
      <div class="@container">
        <p v-reveal class="flex items-center gap-3 text-xs uppercase 2xl:text-sm">
          <span class="h-0.5 w-8 bg-white" aria-hidden="true" />
          <span class="trim-cap-start">03 / Category</span>
        </p>

        <h2 id="event-heading" class="mt-[max(1.5rem,4.5cqw)] text-[20cqw] leading-[0.86] uppercase lg:text-[14.5cqw]">
          <span class="sr-only">งานอีเวนต์และบูธจัดแสดง </span>
          <span v-reveal="100" class="-ml-[0.06em] block font-sans">Show</span>
          <!-- At this leading the baseline sits 0.04em above the box's bottom edge, so a rule on that edge lines up with
               the bottom of the letters. The rule comes first so the letters paint over it, and the tail of "p" is
               clipped a little below it so it never reaches the capitals below -->
          <span v-reveal="180" class="mb-[0.08em] block font-serif normal-case">
            <span class="relative inline-block pr-[0.12em] pl-[0.18em]">
              <span class="absolute bottom-0 left-0 h-[0.05em] w-full bg-brand-red" aria-hidden="true" />
              <span class="relative inline-block [clip-path:inset(-0.5em_-0.3em_-0.11em_-0.3em)]">Up</span>
            </span>
          </span>
          <span v-reveal="260" class="-ml-[0.04em] block font-sans">Big.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,3.5cqw)] font-sans text-[max(0.875rem,2.2cqw)] leading-relaxed text-neutral-300">
          <span class="lg:block">ชุดอุปกรณ์สำหรับการจัดงานอีเวนต์และพื้นที่จัดแสดง ทั้งแบ็คดรอปผ้า โรลอัพ สแตนดี้ โต๊ะ</span> <span class="lg:block">พับพร้อมผ้า และโฟมบอร์ดสำหรับตกแต่งบูธ</span>
        </p>

        <ul v-reveal="400" aria-label="อุปกรณ์งานอีเวนต์" class="mt-[max(1.5rem,4cqw)] flex flex-wrap gap-[max(0.5rem,1.6cqw)]">
          <li
            v-for="item in items"
            :key="item"
            class="flex h-[max(2rem,4.5cqw)] items-center border border-white px-[max(0.75rem,1.8cqw)] text-[max(0.6875rem,1.4cqw)] uppercase"
          >
            {{ item }}
          </li>
        </ul>

        <div v-reveal="460" class="mt-[max(1.5rem,3cqw)] flex flex-wrap items-center gap-x-[max(1.25rem,2cqw)] gap-y-3">
          <NuxtLink
            to="/contact"
            class="inline-flex h-[max(2.75rem,6cqw)] items-center gap-[max(1.5rem,4cqw)] bg-white px-[max(1rem,2.2cqw)] font-sans text-[max(0.875rem,1.8cqw)] text-ink transition-colors hover:bg-brand-red hover:text-white"
          >
            สอบถามงานอีเวนต์
            <ArrowUpRight :stroke-width="1.5" class="size-[0.9em]" />
          </NuxtLink>
          <NuxtLink
            to="#product-display"
            class="inline-flex items-center gap-[0.4em] border-b border-white pb-[0.2em] text-[max(0.75rem,1.4cqw)] uppercase transition-opacity hover:opacity-75"
          >
            Next service
            <Icon name="lucide:arrow-down" class="size-[1.1em]" />
          </NuxtLink>
        </div>
      </div>

      <!-- Section 01's photo box mirrored, so the photos match the other sections in size and overlap -->
      <div class="@container relative aspect-800/620 min-w-0">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/03_Event_Exhibition/06_Booth_Foamboards/event_p06_03.png"
          alt="บูธนิทรรศการ TOMBA FOOD พร้อมโฟมบอร์ดและป้ายตกแต่ง ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:40vw xl:40vw 2xl:40vw"
          format="webp"
          loading="lazy"
          class="absolute top-[6cqw] right-0 h-[58cqw] w-[72cqw] object-cover"
        />

        <div v-reveal="350" class="absolute top-[39cqw] left-[2cqw] h-[35cqw] w-[48cqw]">
          <div class="absolute inset-0 translate-x-[1.5cqw] translate-y-[1.5cqw] bg-brand-red" aria-hidden="true" />
          <div class="relative size-full bg-white p-[1cqw]">
            <NuxtImg
              src="/images/03_Event_Exhibition/05_PP_Board_Standees/event_p05_01.png"
              alt="สแตนดี้พีพีบอร์ดรูปคนและตัวการ์ตูนสำหรับงานอีเวนต์ ผลงานของ SunsunPrint"
              sizes="sm:50vw md:50vw lg:25vw xl:25vw 2xl:25vw"
              format="webp"
              loading="lazy"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div class="text-[max(0.625rem,1.6cqw)] leading-none uppercase" aria-hidden="true">
          <p v-reveal="500" class="absolute top-[4cqw] right-[-2.5cqw] bg-brand-red px-[0.9em] py-[0.6em] text-white">Event / 003</p>
          <p v-reveal="600" class="absolute top-[68cqw] right-[-2.5cqw] flex items-center gap-[0.4em] bg-white px-[0.9em] py-[0.6em] text-ink">
            Exhibition <span class="text-brand-red">+</span> Standee
            <ArrowUpRight :stroke-width="2" class="size-[0.8em]" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
