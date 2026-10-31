<script setup lang="ts">
defineProps<{
  required?: boolean
  error?: string
}>()

const checked = defineModel<boolean>({ required: true })

const id = useId()
const errorId = `${id}-error`
</script>

<template>
  <div>
    <label :for="id" class="group flex cursor-pointer items-center gap-3 2xl:gap-4">
      <input
        :id="id"
        v-model="checked"
        type="checkbox"
        :required="required"
        :aria-invalid="error ? true : undefined"
        :aria-describedby="error ? errorId : undefined"
        class="sr-only"
      >
      <span
        class="flex size-7 shrink-0 items-center justify-center border-2 border-brand-red bg-white text-white transition-colors group-hover:bg-brand-red/10 group-has-checked:bg-brand-red group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-4 group-has-focus-visible:outline-brand-red 2xl:size-8"
        aria-hidden="true"
      >
        <Icon name="lucide:check" class="size-4 opacity-0 transition-opacity group-has-checked:opacity-100 2xl:size-5" />
      </span>
      <span class="font-sans text-sm font-normal text-neutral-700 lg:text-base 2xl:text-xl">
        <slot /><span v-if="required" class="text-brand-red" aria-hidden="true"> *</span>
      </span>
    </label>
    <p v-if="error" :id="errorId" class="mt-3 flex items-center gap-1.5 font-sans text-sm text-brand-red 2xl:text-base">
      <Icon name="lucide:circle-alert" class="size-4 shrink-0" />
      {{ error }}
    </p>
  </div>
</template>
