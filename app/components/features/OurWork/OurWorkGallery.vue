<script setup lang="ts">
import type { Work } from '~/types'
import { WORK_GROUPS } from '~/constants/ourWorks'

const openedWork = ref<Work | null>(null)
const selectedGroupId = ref('all')

const groupOptions = WORK_GROUPS.map(group => ({ id: group.id, label: group.label, count: group.works.length }))

// "All works" is itself a group, so picking it shows every carousel rather than only its own
const visibleGroups = computed(() =>
  selectedGroupId.value === 'all'
    ? WORK_GROUPS
    : WORK_GROUPS.filter(group => group.id === selectedGroupId.value)
)
</script>

<template>
  <section aria-labelledby="gallery-heading" class="page-x pt-12 pb-12 lg:pt-28 lg:pb-24 2xl:pt-36 2xl:pb-30">
    <div v-reveal class="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
      <h2 id="gallery-heading" class="text-5xl leading-tight text-ink lg:text-7xl 2xl:text-8xl">
        <span class="font-sans uppercase">Made to</span>
        {{ ' ' }}
        <span class="font-serif text-brand-red">stand out.</span>
      </h2>
      <p class="font-sans leading-relaxed font-normal text-neutral-600 lg:text-lg xl:pb-3 xl:text-right 2xl:text-2xl">
        เลือกชมตัวอย่างงานตามหมวดที่ต้องการ<br class="max-sm:hidden">
        เพื่อดูงานที่ใกล้เคียงกับไอเดียของคุณ
      </p>
    </div>

    <hr v-reveal:line="100" class="mt-8 border-neutral-300 2xl:mt-12">

    <FilterChips
      v-model="selectedGroupId"
      v-reveal="150"
      label="กรองผลงานตามหมวดหมู่"
      :options="groupOptions"
      class="mt-6 2xl:mt-8"
    />

    <hr v-reveal:line="200" class="mt-6 border-neutral-300 2xl:mt-8">

    <div class="mt-10 flex flex-col gap-12 lg:mt-16 lg:gap-24 2xl:mt-20 2xl:gap-30">
      <WorkCarousel
        v-for="group in visibleGroups"
        :id="`work-group-${group.id}`"
        :key="group.id"
        :title="group.title"
        :works="group.works"
        :filters="group.filters"
        :explore-to="group.exploreTo"
        @open="openedWork = $event"
      />
    </div>

    <WorkDetailDialog :work="openedWork" @close="openedWork = null" />
  </section>
</template>
