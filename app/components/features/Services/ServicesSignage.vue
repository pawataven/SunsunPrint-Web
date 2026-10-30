<script setup lang="ts">
const materials = ['Acrylic', 'Plaswood', 'Stainless', 'Illuminated sign', 'Vinyl banner']
</script>

<template>
  <section id="signage" aria-labelledby="signage-heading" class="page-x overflow-x-clip bg-brand-red pt-12 pb-16 text-white lg:pt-16 lg:pb-20 2xl:pt-20 2xl:pb-24">
    <div class="grid items-start gap-14 lg:grid-cols-[880fr_800fr] lg:gap-0">
      <div class="@container">
        <p v-reveal class="flex items-center gap-3 text-xs uppercase 2xl:text-sm">
          <span class="h-0.5 w-8 bg-white" aria-hidden="true" />
          <span class="trim-cap-start">01 / Category</span>
        </p>

        <h2 id="signage-heading" class="mt-[max(1.5rem,4.5cqw)] text-[20cqw] leading-[0.86] uppercase lg:text-[14.5cqw]">
          <span class="sr-only">งานป้าย </span>
          <span v-reveal="100" class="-ml-[0.06em] block font-sans">Signs</span>
          <span v-reveal="180" class="-ml-[0.04em] block font-serif text-ink normal-case">That</span>
          <span v-reveal="260" class="-ml-[0.04em] block font-sans">Speak.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,3.5cqw)] font-sans text-[max(0.875rem,2.2cqw)] leading-relaxed text-white/90">
          <span class="lg:block">ป้ายหน้าร้าน ป้ายบอกทาง และป้ายองค์กร ผลิตด้วยวัสดุที่เลือกให้เหมาะกับพื้นที่ติดตั้ง</span> <span class="lg:block">พร้อมออกแบบ ผลิต และติดตั้งครบในที่เดียว</span>
        </p>

        <ul v-reveal="400" aria-label="วัสดุงานป้าย" class="mt-[max(1.5rem,4cqw)] flex flex-wrap gap-[max(0.5rem,1.6cqw)]">
          <li
            v-for="material in materials"
            :key="material"
            class="flex h-[max(2rem,4.5cqw)] items-center border border-white px-[max(0.75rem,1.8cqw)] text-[max(0.6875rem,1.4cqw)] uppercase"
          >
            {{ material }}
          </li>
        </ul>

        <div v-reveal="460" class="mt-[max(1.5rem,3cqw)] flex flex-wrap items-center gap-x-[max(1.25rem,2cqw)] gap-y-3">
          <LineLink
            class="inline-flex h-[max(2.75rem,6cqw)] items-center gap-[max(1.5rem,4cqw)] bg-white px-[max(1rem,2.2cqw)] font-sans text-[max(0.875rem,1.8cqw)] text-ink transition-colors hover:bg-ink hover:text-white"
          >
            สอบถามงานป้าย
            <Icon name="lucide:arrow-right" class="size-[1.1em]" />
          </LineLink>
          <NuxtLink
            to="#stickers-graphics"
            class="inline-flex items-center gap-[0.4em] border-b border-white pb-[0.2em] text-[max(0.75rem,1.4cqw)] uppercase transition-opacity hover:opacity-75"
          >
            Next service
            <Icon name="lucide:arrow-down" class="size-[1.1em]" />
          </NuxtLink>
        </div>
      </div>

      <!-- Placed in cqw of this box so the two photos and their tags keep the design's overlap at every width -->
      <div class="@container relative aspect-800/620 min-w-0">
        <NuxtImg
          v-reveal:wipe="150"
          src="/images/01_Signage/05_Vinyl_Banners/signage_p05_03.png"
          alt="ป้ายไวนิลขนาดใหญ่ร้าน Beaute de Salon ติดผนังด้านหน้าอาคาร ผลงานของ SunsunPrint"
          sizes="sm:100vw md:100vw lg:40vw xl:40vw 2xl:40vw"
          format="webp"
          loading="lazy"
          class="absolute top-[6cqw] left-0 h-[58cqw] w-[72cqw] object-cover"
        />

        <div v-reveal="350" class="absolute top-[39cqw] left-[50cqw] h-[35cqw] w-[48cqw]">
          <div class="absolute inset-0 translate-x-[-1.5cqw] translate-y-[1.5cqw] bg-ink" aria-hidden="true" />
          <div class="relative size-full bg-white p-[1cqw]">
            <NuxtImg
              src="/images/01_Signage/03_Stainless_Signs/signage_p03_02.png"
              alt="ป้ายสแตนเลสชื่อบริษัท ลาลิเบอร์ต้า จำกัด ผลงานของ SunsunPrint"
              sizes="sm:50vw md:50vw lg:25vw xl:25vw 2xl:25vw"
              format="webp"
              loading="lazy"
              class="size-full object-cover"
            />
          </div>
        </div>

        <div class="text-[max(0.625rem,1.6cqw)] leading-none text-ink uppercase" aria-hidden="true">
          <p v-reveal="500" class="absolute top-[4cqw] left-[-2.5cqw] bg-white px-[0.9em] py-[0.6em]">Signage / 01</p>
          <p v-reveal="600" class="absolute top-[68cqw] left-[-3.5cqw] bg-white px-[0.9em] py-[0.6em]">
            Vinyl <span class="text-brand-red">+</span> Stainless
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
