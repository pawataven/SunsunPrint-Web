<script setup lang="ts">
import type { BriefStep } from '~/composables/useProjectBrief'

const emit = defineEmits<{
  select: [step: BriefStep]
}>()

const steps: { id: BriefStep, label: string }[] = [
  { id: 1, label: 'ประเภทงาน' },
  { id: 2, label: 'รายละเอียด' },
  { id: 3, label: 'ข้อมูลติดต่อ' }
]

const { step, isSent } = useProjectBrief()

const isDone = (id: BriefStep) => isSent.value || id < step.value
const isCurrent = (id: BriefStep) => !isSent.value && id === step.value

const formatIndex = (value: number) => String(value).padStart(2, '0')

const pillClass = 'inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3 text-sm uppercase sm:px-4 lg:h-12 lg:min-w-40 lg:text-base 2xl:h-15 2xl:min-w-53.75 2xl:text-xl'
</script>

<template>
  <ol aria-label="ขั้นตอนการขอใบเสนอราคา" class="flex items-center">
    <li v-for="(item, index) in steps" :key="item.id" class="flex items-center">
      <span v-if="index > 0" class="mx-1.5 h-px w-3 bg-neutral-300 sm:mx-4 sm:w-12 lg:w-20 2xl:mx-10 2xl:w-28" aria-hidden="true" />

      <!-- Earlier steps can be revisited; later ones open only through the form's own next button, which checks the step first -->
      <button
        v-if="isDone(item.id) && !isSent"
        type="button"
        :class="[pillClass, 'border-ink text-ink transition-colors hover:border-brand-red hover:text-brand-red']"
        @click="emit('select', item.id)"
      >
        {{ formatIndex(item.id) }}
        <span class="max-sm:sr-only">{{ item.label }}</span>
        <Icon name="lucide:check" class="size-4 text-brand-red 2xl:size-5" />
        <span class="sr-only">(เสร็จแล้ว กดเพื่อแก้ไข)</span>
      </button>
      <span
        v-else
        :aria-current="isCurrent(item.id) ? 'step' : undefined"
        :class="[pillClass, isCurrent(item.id) ? 'border-ink bg-ink text-white' : 'border-neutral-400 text-ink']"
      >
        {{ formatIndex(item.id) }}
        <span :class="{ 'max-sm:sr-only': !isCurrent(item.id) }">{{ item.label }}</span>
        <Icon v-if="isDone(item.id)" name="lucide:check" class="size-4 text-brand-red 2xl:size-5" />
      </span>
    </li>
  </ol>
</template>
