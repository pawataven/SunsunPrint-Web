<script setup lang="ts">
import { SERVICES } from '~/constants/services'

const formatIndex = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <section aria-labelledby="services-heading" class="page-x bg-ink pt-20 pb-12 text-cream lg:pt-28 2xl:pt-38 2xl:pb-24">
    <SectionHeading id="services-heading" v-reveal  title="Everything" accent="In print." tone="dark">
      ตั้งแต่งานป้ายขนาดเล็ก ไปจนถึงงานจัดแสดงพื้นที่ขนาดใหญ่<br>
      เลือกดูประเภทงานที่เหมาะกับโปรเจกต์ของคุณ
    </SectionHeading>

    <ul class="mt-10 border-t border-neutral-700 2xl:mt-16">
      <li v-for="(service, index) in SERVICES" :key="service.category" v-reveal="index * 100">
        <NuxtLink
          :to="`/services/${service.category}`"
          class="group grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-neutral-700 py-6 lg:min-h-40 lg:grid-cols-[237fr_601fr_755fr_87fr] lg:gap-x-0 lg:py-0 2xl:min-h-60"
        >
          <span class="text-base lg:text-xl 2xl:text-2xl">{{ formatIndex(index + 1) }} /</span>
          <span class="text-xl lg:text-2xl 2xl:text-4xl">
            {{ service.nameTh }}
            <span class="text-ash uppercase">/ {{ service.nameEn }}</span>
          </span>
          <span class="col-start-2 row-start-2 text-sm font-sans text-ash lg:col-start-3 lg:row-start-1 lg:text-base 2xl:text-xl">
            {{ service.items }}
          </span>
          <ArrowUpRight
            :stroke-width="1.25"
            class="col-start-3 row-span-2 row-start-1 size-8 justify-self-end text-neutral-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-red lg:col-start-4 lg:row-span-1 lg:size-10 2xl:size-14"
          />
        </NuxtLink>
      </li>
    </ul>

    <div v-reveal class="mt-6 flex justify-between gap-4 text-xs text-ash uppercase lg:text-sm 2xl:mt-12 2xl:text-lg">
      <p>บริการ {{ SERVICES.length }} หมวด</p>
      <p>Made for your next big idea</p>
    </div>
  </section>
</template>
