<script setup lang="ts">
import type { Work } from '~/types'

withDefaults(defineProps<{
  work: Work
  number: number
  total: number
  /** Level that fits the outline of the page the card sits in, e.g. 2 directly under a page's h1 */
  headingLevel?: 2 | 3 | 4
}>(), {
  headingLevel: 3
})

const emit = defineEmits<{
  open: []
}>()

const formatIndex = (value: number) => String(value).padStart(3, '0')
</script>

<template>
  <article class="group relative flex h-full flex-col">
    <div
      class="relative overflow-hidden bg-ivory"
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
        class="absolute top-4 right-4 flex size-10 items-center justify-center bg-white text-ink transition-colors group-hover:bg-brand-red group-hover:text-white lg:size-12 2xl:top-6 2xl:right-6 2xl:size-16"
      >
        <ArrowUpRight class="size-5 lg:size-6 2xl:size-7" />
      </span>
    </div>

    <div class="mt-4 flex items-start justify-between gap-4 2xl:mt-8">
      <div>
        <component :is="`h${headingLevel}`" class="text-lg uppercase lg:text-xl 2xl:text-[28px]">
          <!-- The ::after overlay stretches this button over the whole card so the image is clickable too -->
          <button
            type="button"
            aria-haspopup="dialog"
            class="text-left uppercase after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-brand-red"
            @click="emit('open')"
          >
            {{ work.title }}
          </button>
        </component>
        <p class="text-sm font-normal text-neutral-600 2xl:text-xl">{{ work.description }} / {{ work.tag }}</p>
      </div>
      <p class="shrink-0 text-sm font-normal text-neutral-500 2xl:text-xl">
        {{ formatIndex(number) }} / {{ formatIndex(total) }}
      </p>
    </div>
  </article>
</template>
