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
  <NuxtLink :to="`/work/${work.slug}`" class="group flex h-full flex-col">
    <div
      class="relative overflow-hidden bg-neutral-200"
      :class="work.orientation === 'portrait' ? 'aspect-7/8 lg:aspect-auto lg:min-h-80 lg:flex-1' : 'aspect-6/5'"
    >
      <NuxtImg
        v-if="work.image"
        :src="work.image"
        :alt="work.title"
        sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
        format="webp"
        loading="lazy"
        class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        class="absolute top-4 right-4 flex size-10 items-center justify-center bg-white text-neutral-900 transition-colors group-hover:bg-primary-600 group-hover:text-white lg:size-12 2xl:top-6 2xl:right-6 2xl:size-16"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          class="size-5 lg:size-6 2xl:size-7"
        >
          <path d="M3 21 21 3M7 3h14v14" />
        </svg>
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
