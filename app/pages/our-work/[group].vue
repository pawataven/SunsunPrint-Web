<script setup lang="ts">
import type { Work } from '~/types'
import { WORK_GROUPS } from '~/constants/ourWorks'

definePageMeta({
  validate: route => WORK_GROUPS.some(group => group.id === route.params.group)
})

const route = useRoute()
const group = computed(() => WORK_GROUPS.find(item => item.id === route.params.group)!)

const { selectedFilter, filterOptions, visibleWorks } = useSubcategoryFilter(
  () => group.value.works,
  () => group.value.filters
)

// The page component is reused when moving between categories, so a sub-filter picked on one must not carry over
watch(() => group.value.id, () => (selectedFilter.value = 'all'))

const openedWork = ref<Work | null>(null)

const formatIndex = (value: number) => String(value).padStart(2, '0')

useSeoMeta({
  title: () => `${group.value.title} | ผลงาน | SunsunPrint`,
  description: () => group.value.description,
  ogTitle: () => `${group.value.title} | ผลงาน | SunsunPrint`,
  ogDescription: () => group.value.description
})
</script>

<template>
  <div>
    <!-- From xl the logo hangs ~100–120px below the header bar, so the top padding clears it with room to spare -->
    <section aria-labelledby="work-group-heading" class="page-x pt-10 pb-12 lg:pt-24 lg:pb-24 xl:pt-36 2xl:pt-44 2xl:pb-30">
      <NuxtLink
        v-reveal
        to="/our-work"
        class="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-brand-red xl:text-base 2xl:text-xl"
      >
        <Icon name="lucide:arrow-left" class="size-4 2xl:size-5" />
        กลับไปหน้าผลงาน
      </NuxtLink>

      <div v-reveal="80" class="mt-8 flex items-baseline gap-4 2xl:mt-12 2xl:gap-8">
        <h1 id="work-group-heading" class="text-3xl lg:text-5xl 2xl:text-6xl">{{ group.title }}</h1>
        <p class="text-sm font-normal text-neutral-500 lg:text-base 2xl:text-xl" aria-live="polite">
          {{ formatIndex(visibleWorks.length) }} ผลงาน
        </p>
      </div>

      <FilterChips
        v-if="filterOptions.length"
        v-model="selectedFilter"
        v-reveal="150"
        :label="`กรอง${group.title}ตามประเภท`"
        :options="filterOptions"
        class="mt-6 2xl:mt-8"
      />

      <hr v-reveal:line="200" class="mt-6 border-neutral-300 2xl:mt-8">

      <ul
        v-if="visibleWorks.length"
        class="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 2xl:mt-14 2xl:gap-x-10 2xl:gap-y-16"
      >
        <li
          v-for="(work, index) in visibleWorks"
          :key="work.slug"
          v-reveal="(index % 3) * 100"
          class="border-b border-neutral-300 pb-4 2xl:pb-8"
        >
          <WorkCard :work="work" :number="index + 1" :total="visibleWorks.length" :heading-level="2" @open="openedWork = work" />
        </li>
      </ul>
      <p v-else class="mt-10 font-normal text-neutral-500">ยังไม่มีผลงานในหมวดนี้</p>

      <WorkDetailDialog :work="openedWork" @close="openedWork = null" />
    </section>

    <OurWorkCta />
  </div>
</template>
