<script setup lang="ts">
import type { Work, WorkCategoryId } from '~/types'
import { WORK_CATEGORIES, WORKS } from '~/constants/works'

const filterOptions: { id: WorkCategoryId | 'all', label: string }[] = [
  { id: 'all', label: 'ทั้งหมด' },
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

// Landscape cards are pinned to the right column only for the full set, which is what the design's layout is built from.
// A filtered set flows from the left instead, so a lone landscape card doesn't leave the left column empty
const getCardPlacementClass = (work: Work) => {
  if (work.orientation === 'portrait') return 'lg:col-start-1 lg:row-span-3'
  return selectedCategory.value === 'all' ? 'lg:col-start-2 lg:row-span-2' : 'lg:row-span-2'
}
</script>

<template>
  <section aria-labelledby="works-heading" class="page-x pt-12 pb-12 lg:pt-28 lg:pb-24 2xl:pt-36 2xl:pb-30">
    <SectionHeading id="works-heading" v-reveal title="Selected" accent="Works.">
      งานป้าย งานอีเวนต์ งานสติกเกอร์ ดิสเพลย์ และบรรจุภัณฑ์<br>
      สำรวจรูปแบบงานพิมพ์และงานผลิตจากตัวอย่างที่ร้านส่งมา
    </SectionHeading>

    <div v-reveal="120" role="group" aria-label="กรองผลงานตามหมวดหมู่" class="mt-8 flex flex-wrap gap-3 2xl:mt-10 2xl:gap-5">
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

    <hr v-reveal:line="200" class="mt-10 border-brand-red/60 2xl:mt-16">

    <!--
      Portrait cards are pinned to the wide left column and span 3 rows, landscape cards to the right column and span 2,
      so 2 portraits stack beside 3 landscapes as in the design while the DOM (and mobile) order stays by number.
      Row heights come from the fixed-ratio landscape cards; portrait images stretch to fill, so both columns end flush
    -->
    <ul
      v-if="visibleWorks.length"
      class="mt-10 grid gap-y-10 lg:grid-cols-[843fr_717fr] lg:gap-x-16 lg:gap-y-12 2xl:mt-14 2xl:gap-x-30 2xl:gap-y-16"
    >
      <li v-for="{ work, number } in visibleWorks" :key="work.slug" :class="getCardPlacementClass(work)">
        <!-- v-reveal marks its element with a class that a :class re-render would wipe, so it lives on a wrapper whose
             classes never change while the item's placement switches with the filter -->
        <div v-reveal="work.orientation === 'portrait' ? 0 : 150" class="h-full">
          <WorkCard :work="work" :number="number" :total="WORKS.length" @open="openedWork = work" />
        </div>
      </li>
    </ul>
    <p v-else class="mt-14 font-normal text-neutral-500">ยังไม่มีผลงานในหมวดนี้</p>

    <WorkDetailDialog :work="openedWork" @close="openedWork = null" />

    <div class="mt-10 flex justify-end lg:mt-12 2xl:mt-16">
      <PrimaryLink v-reveal to="/our-work">ดูผลงานทั้งหมด</PrimaryLink>
    </div>
  </section>
</template>
