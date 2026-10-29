<script setup lang="ts" generic="OptionId extends string">
defineProps<{
  label: string
  options: { id: OptionId, label: string, count: number }[]
}>()

const selectedId = defineModel<OptionId>({ required: true })

const formatCount = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <div role="group" :aria-label="label" class="flex flex-wrap gap-3 2xl:gap-5">
    <button
      v-for="option in options"
      :key="option.id"
      type="button"
      :aria-pressed="selectedId === option.id"
      class="group flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-semibold uppercase transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white xl:text-base 2xl:gap-3 2xl:px-6 2xl:py-2 2xl:text-2xl"
      @click="selectedId = option.id"
    >
      {{ option.label }}
      <span class="text-xs font-normal text-neutral-500 group-aria-pressed:text-white/70 2xl:text-lg">
        {{ formatCount(option.count) }}
      </span>
    </button>
  </div>
</template>
