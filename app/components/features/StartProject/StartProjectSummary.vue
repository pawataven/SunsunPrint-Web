<script setup lang="ts">
import { PROJECT_TYPES } from '~/constants/startProject'

const emit = defineEmits<{
  edit: []
}>()

const { brief } = useProjectBrief()

const NOT_GIVEN = 'ไม่ได้ระบุ'

const summaryRows = computed(() => {
  const { type, subtype, quantity, width, height, files } = brief.value
  return [
    { label: 'ประเภทงาน', value: PROJECT_TYPES.find(projectType => projectType.id === type)?.title },
    { label: 'งานย่อย', value: subtype },
    { label: 'จำนวน', value: quantity && `${quantity} ชิ้น` },
    { label: 'ขนาด', value: formatBriefSize(width, height) },
    { label: 'ไฟล์แนบ', value: files.length ? files.map(file => file.name).join(', ') : 'ไม่มี' }
  ]
})
</script>

<template>
  <section aria-labelledby="project-summary-heading" class="border border-neutral-300 bg-ivory/50 p-5 lg:p-8 2xl:px-10 2xl:py-9">
    <div class="flex items-center justify-between gap-4">
      <h3 id="project-summary-heading" class="flex items-center gap-3 text-sm uppercase lg:text-base 2xl:gap-4 2xl:text-xl">
        <span class="h-0.5 w-6 bg-brand-red 2xl:w-10" aria-hidden="true" />
        <span>Your project summary <span class="sr-only">(สรุปรายละเอียดงาน)</span></span>
      </h3>
      <button
        type="button"
        class="inline-flex shrink-0 items-center gap-2 border-b whitespace-nowrap border-ink pb-0.5 text-sm text-ink transition-colors hover:border-brand-red hover:text-brand-red 2xl:text-lg"
        @click="emit('edit')"
      >
        <Icon name="lucide:pencil" class="size-3.5 2xl:size-4" />
        แก้ไขรายละเอียด
      </button>
    </div>

    <dl class="mt-4 lg:mt-6 2xl:mt-8">
      <div
        v-for="row in summaryRows"
        :key="row.label"
        class="flex items-baseline justify-between gap-6 border-b border-dashed border-neutral-300 py-3 last:border-b-0 last:pb-0 2xl:py-4"
      >
        <dt class="shrink-0 font-sans text-sm font-normal text-neutral-600 lg:text-base 2xl:text-xl">{{ row.label }} :</dt>
        <dd class="min-w-0 text-right text-sm wrap-break-word lg:text-base 2xl:text-xl" :class="{ 'text-neutral-400': !row.value }">
          {{ row.value || NOT_GIVEN }}
        </dd>
      </div>
    </dl>
  </section>
</template>
