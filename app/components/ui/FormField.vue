<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  type?: 'text' | 'tel' | 'email' | 'date'
  placeholder?: string
  autocomplete?: string
  inputmode?: 'text' | 'tel' | 'email' | 'numeric' | 'decimal'
  min?: string
  required?: boolean
  error?: string
  multiline?: boolean
  /** Renders a dropdown of these instead of a text box; `placeholder` becomes its empty first choice */
  options?: string[]
}>(), {
  type: 'text',
  placeholder: undefined,
  autocomplete: undefined,
  inputmode: undefined,
  min: undefined,
  error: undefined,
  options: undefined
})

const model = defineModel<string>({ required: true })

const id = useId()
const errorId = `${id}-error`

const spacingClass = 'mt-2 lg:mt-3 2xl:mt-6'
const fieldClass = 'block w-full border border-neutral-200 bg-ivory/50 px-4 font-sans text-base font-normal text-ink transition-colors placeholder:text-neutral-400 hover:border-neutral-400 focus:border-ink focus:bg-white focus:shadow-[inset_0_0_0_1px_var(--color-ink)] focus:outline-none aria-invalid:border-brand-red 2xl:px-5 2xl:text-lg'
</script>

<template>
  <div>
    <label :for="id" class="block text-base lg:text-xl 2xl:text-3xl">
      {{ label }}<span v-if="required" class="text-brand-red" aria-hidden="true"> *</span>
      <textarea
        v-if="multiline"
        :id="id"
        v-model="model"
        rows="3"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="error ? true : undefined"
        :aria-describedby="error ? errorId : undefined"
        :class="[spacingClass, fieldClass, 'min-h-28 resize-y py-3 2xl:py-4']"
      />
      <span v-else-if="options" :class="[spacingClass, 'relative block']">
        <select
          :id="id"
          v-model="model"
          :required="required"
          :aria-invalid="error ? true : undefined"
          :aria-describedby="error ? errorId : undefined"
          :class="[fieldClass, 'h-12 appearance-none pr-12 lg:h-14', { 'text-neutral-400': !model }]"
        >
          <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
          <option v-for="option in options" :key="option" :value="option" class="text-ink">{{ option }}</option>
        </select>
        <Icon name="lucide:chevron-down" class="pointer-events-none absolute inset-y-0 right-4 my-auto size-4 text-neutral-500 2xl:right-5 2xl:size-5" />
      </span>
      <input
        v-else
        :id="id"
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :min="min"
        :required="required"
        :aria-invalid="error ? true : undefined"
        :aria-describedby="error ? errorId : undefined"
        :class="[spacingClass, fieldClass, 'h-12 lg:h-14']"
      >
    </label>
    <p v-if="error" :id="errorId" class="mt-2 flex items-center gap-1.5 font-sans text-sm text-brand-red 2xl:text-base">
      <Icon name="lucide:circle-alert" class="size-4 shrink-0" />
      {{ error }}
    </p>
  </div>
</template>
