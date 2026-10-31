<script setup lang="ts">
import { PROJECT_TYPES } from '~/constants/startProject'

const { brief } = useProjectBrief()

const selectedTitle = computed(() => PROJECT_TYPES.find(type => type.id === brief.value.type)?.title)
</script>

<template>
  <p class="flex items-center justify-between gap-4 border-l-4 border-brand-red bg-neutral-300 py-4 pr-5 pl-4 lg:border-l-8 lg:pr-10 2xl:border-l-16 2xl:py-6 2xl:pr-20 2xl:pl-8">
    <span class="text-sm 2xl:text-lg">ประเภทงานที่เลือก</span>
    <span class="text-lg text-brand-red lg:text-xl 2xl:text-[1.75rem]">{{ selectedTitle }}</span>
  </p>
</template>
