<script setup lang="ts">
import type { Work, WorkCategoryId } from '~/types'
import { WORK_CATEGORIES, WORKS } from '~/constants/works'

const filterOptions: { id: WorkCategoryId | 'all', label: string }[] = [
  { id: 'all', label: 'All works' },
  ...WORK_CATEGORIES
]

const selectedCategory = ref<WorkCategoryId | 'all'>('all')
const openedWork = ref<Work | null>(null)

const numberedWorks = WORKS.map((work, index) => ({ work, number: index + 1 }))

const visibleWorks = computed(() =>
  selectedCategory.value === 'all'
    ? numberedWorks
    : numberedWorks.filter(({ work }) => work.category === selectedCategory.value)
)
</script>

<template>
  <section aria-labelledby="works-heading" class="page-x pt-20 pb-16 lg:pt-28 lg:pb-24 2xl:pt-36 2xl:pb-30">
    <SectionHeading id="works-heading" title="Selected" accent="Works.">
      งานป้าย งานอีเวนต์ งานสติกเกอร์ และดิสเพลย์สินค้า<br>
      สำรวจรูปแบบงานพิมพ์และงานผลิตจากตัวอย่างที่ร้านส่งมา
    </SectionHeading>

    <div role="group" aria-label="Filter works by category" class="mt-8 flex flex-wrap gap-3 2xl:mt-10 2xl:gap-5">
      <button
        v-for="option in filterOptions"
        :key="option.id"
        type="button"
        :aria-pressed="selectedCategory === option.id"
        class="rounded-full border border-ink px-4 py-1.5 text-sm font-semibold uppercase transition-colors hover:bg-ivory aria-pressed:bg-ink aria-pressed:text-white xl:text-base 2xl:px-5 2xl:py-2 2xl:text-2xl"
        @click="selectedCategory = option.id"
      >
        {{ option.label }}
      </button>
    </div>

    <hr class="mt-10 border-brand-red/60 2xl:mt-16">

    <!--
      Portrait cards are pinned to the wide left column and span 3 rows, landscape cards to the right column and span 2,
      so 2 portraits stack beside 3 landscapes as in the design while the DOM (and mobile) order stays by number.
      Row heights come from the fixed-ratio landscape cards; portrait images stretch to fill, so both columns end flush
    -->
    <ul
      v-if="visibleWorks.length"
      class="mt-10 grid gap-y-12 lg:grid-cols-[843fr_717fr] lg:gap-x-16 2xl:mt-14 2xl:gap-x-30 2xl:gap-y-16"
    >
      <li
        v-for="{ work, number } in visibleWorks"
        :key="work.slug"
        :class="work.orientation === 'portrait' ? 'lg:col-start-1 lg:row-span-3' : 'lg:col-start-2 lg:row-span-2'"
      >
        <WorkCard :work="work" :number="number" :total="WORKS.length" @open="openedWork = work" />
      </li>
    </ul>
    <p v-else class="mt-14 font-normal text-neutral-500">ยังไม่มีผลงานในหมวดนี้</p>

    <WorkDetailDialog :work="openedWork" @close="openedWork = null" />

    <div class="mt-12 flex justify-end 2xl:mt-16">
      <PrimaryLink to="/work">Explore our works</PrimaryLink>
    </div>
  </section>
</template>
