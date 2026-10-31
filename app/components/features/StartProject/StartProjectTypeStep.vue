<script setup lang="ts">
import { PROJECT_TYPES } from '~/constants/startProject'

defineProps<{
  error?: string
}>()

const { brief, selectType } = useProjectBrief()

const formatIndex = (value: number) => String(value).padStart(2, '0')

// Cards sit two to a row on a six-column grid; an odd count puts three narrower ones in the first row instead, so every
// row is full and no photo is stretched across the whole form
const hasOddCount = PROJECT_TYPES.length % 2 === 1
const getCardSpanClass = (index: number) => (hasOddCount && index < 3 ? 'lg:col-span-2' : 'lg:col-span-3')
</script>

<template>
  <div>
    <h2 id="type-step-heading" data-step-heading tabindex="-1" class="font-sans text-sm font-normal text-neutral-700 outline-none lg:text-base 2xl:text-xl">
      เลือกประเภทงานที่ใกล้เคียงที่สุด แล้วไปต่อกันได้เลย
    </h2>

    <div
      role="radiogroup"
      aria-labelledby="type-step-heading"
      :aria-describedby="error ? 'type-step-error' : undefined"
      class="mt-5 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-6 lg:gap-6 2xl:mt-13.5 2xl:gap-10"
    >
      <!-- The 1px inset shadow doubles the red border of the chosen card without the card growing and nudging its neighbours.
           On two columns an odd card out at the end spans the row instead of leaving a gap beside it -->
      <label
        v-for="(type, index) in PROJECT_TYPES"
        :key="type.id"
        :for="`project-type-input-${type.id}`"
        :class="getCardSpanClass(index)"
        class="group flex cursor-pointer flex-col border border-neutral-300 bg-white sm:max-lg:last:odd:col-span-2 p-4 transition-colors hover:border-ink has-checked:border-brand-red has-checked:shadow-[inset_0_0_0_1px_var(--color-brand-red)] has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-brand-red lg:p-6"
      >
        <input
          :id="`project-type-input-${type.id}`"
          v-model="brief.type"
          type="radio"
          name="project-type"
          :value="type.id"
          :aria-labelledby="`project-type-${type.id}`"
          :aria-describedby="`project-type-${type.id}-summary`"
          class="sr-only"
          @change="selectType"
        >

        <span class="flex items-center justify-between font-sans text-sm font-normal text-neutral-600 uppercase lg:text-base 2xl:text-xl">
          {{ formatIndex(index + 1) }} / {{ type.label }}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            class="size-6 text-brand-red transition-transform group-hover:translate-x-1 2xl:size-9"
            aria-hidden="true"
          >
            <path d="M3 12h18M14 5l7 7-7 7" />
          </svg>
        </span>

        <NuxtImg
          :src="type.image"
          :alt="type.alt"
          sizes="sm:100vw md:50vw lg:45vw xl:45vw 2xl:45vw"
          format="webp"
          :loading="index < 2 ? 'eager' : 'lazy'"
          :style="{ objectPosition: type.imagePosition }"
          class="mt-3 h-40 w-full object-cover lg:mt-4 lg:h-44 2xl:h-55"
        />

        <span class="mt-4 flex items-center justify-between gap-4 2xl:mt-5">
          <span>
            <span :id="`project-type-${type.id}`" class="block text-xl lg:text-2xl 2xl:text-[2rem]">{{ type.title }}</span>
            <span :id="`project-type-${type.id}-summary`" class="mt-1 block font-sans text-sm font-normal text-neutral-600 lg:text-base 2xl:text-xl">
              {{ type.summary }}
            </span>
          </span>
          <span
            class="size-10 shrink-0 rounded-full border border-neutral-400 transition-colors group-has-checked:border-brand-red group-has-checked:bg-brand-red lg:size-12 2xl:size-16"
            aria-hidden="true"
          />
        </span>
      </label>
    </div>

    <p id="type-step-error" role="alert" class="font-sans text-sm text-brand-red empty:hidden 2xl:text-base" :class="{ 'mt-4 flex items-center gap-1.5': error }">
      <template v-if="error">
        <Icon name="lucide:circle-alert" class="size-4 shrink-0" />
        {{ error }}
      </template>
    </p>
  </div>
</template>
