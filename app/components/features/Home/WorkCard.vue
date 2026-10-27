<script setup lang="ts">
import type { Work } from '~/types'

defineProps<{
  work: Work
  number: number
  total: number
}>()

const formatIndex = (value: number) => String(value).padStart(3, '0')
</script>

<template>
  <NuxtLink :to="`/work/${work.slug}`" class="group block">
    <div
      class="relative overflow-hidden bg-neutral-200"
      :class="work.orientation === 'portrait' ? 'aspect-7/8' : 'aspect-6/5'"
    >
      <NuxtImg
        v-if="work.image"
        :src="work.image"
        :alt="work.title"
        sizes="100vw lg:50vw"
        format="webp"
        loading="lazy"
        class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        class="absolute top-4 right-4 flex size-12 items-center justify-center bg-white text-neutral-900 transition-colors group-hover:bg-primary-600 group-hover:text-white lg:size-16 2xl:top-6 2xl:right-6 2xl:size-24"
      >
        <Icon name="lucide:arrow-up-right" class="size-6 lg:size-8 2xl:size-10" />
      </span>
    </div>

    <div class="mt-4 flex items-start justify-between gap-4 2xl:mt-8">
      <div>
        <h3 class="text-lg uppercase lg:text-xl 2xl:text-[28px]">{{ work.title }}</h3>
        <p class="text-sm font-normal text-neutral-600 2xl:text-xl">{{ work.description }} / {{ work.tag }}</p>
      </div>
      <p class="shrink-0 text-sm font-normal text-neutral-500 2xl:text-xl">
        {{ formatIndex(number) }} / {{ formatIndex(total) }}
      </p>
    </div>
  </NuxtLink>
</template>
