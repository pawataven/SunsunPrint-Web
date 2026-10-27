<script setup lang="ts">
import type { Work } from '~/types'

const props = defineProps<{
  work: Work | null
}>()

const emit = defineEmits<{
  close: []
}>()

const dialogRef = useTemplateRef<HTMLDialogElement>('dialog')

watch(() => props.work, (work) => {
  const dialog = dialogRef.value
  if (!dialog) return
  if (work && !dialog.open) dialog.showModal()
  if (!work && dialog.open) dialog.close()
})

// A click whose target is the <dialog> itself landed on the backdrop, outside the content box
const closeOnBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) dialogRef.value?.close()
}
</script>

<template>
  <!-- ::backdrop doesn't inherit theme variables in all browsers, so its color is spelled out (ink at 75%) -->
  <!-- Backdrop click is a mouse convenience; keyboard users already close the native dialog with Esc -->
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/no-static-element-interactions -->
  <dialog
    ref="dialog"
    aria-labelledby="work-detail-title"
    class="m-auto max-h-[90vh] w-[min(95rem,calc(100vw-2rem))] overflow-y-auto bg-ivory text-ink backdrop:bg-[rgb(30_30_30/0.75)] lg:overflow-hidden"
    @close="emit('close')"
    @click="closeOnBackdropClick"
  >
    <div v-if="work" class="grid lg:h-[min(47.5rem,90vh)] lg:grid-cols-[525fr_388fr]">
      <div class="relative aspect-4/3 bg-white lg:aspect-auto">
        <NuxtImg
          v-if="work.image"
          :src="work.image"
          :alt="work.title"
          sizes="sm:100vw md:100vw lg:100vw xl:60vw 2xl:60vw"
          format="webp"
          class="absolute inset-0 size-full object-cover"
        />
      </div>

      <div class="relative flex flex-col p-6 lg:p-10 2xl:p-15">
        <button
          type="button"
          aria-label="Close"
          class="absolute top-4 right-4 flex size-10 items-center justify-center bg-ink text-white transition-colors hover:bg-brand-red lg:top-6 lg:right-6 2xl:size-16"
          @click="dialogRef?.close()"
        >
          <Icon name="lucide:x" class="size-5 2xl:size-7" />
        </button>

        <p class="mt-10 flex items-center gap-4 text-xs tracking-[0.15em] uppercase lg:mt-12 2xl:mt-16 2xl:text-base">
          <span class="h-0.5 w-12 bg-brand-red" aria-hidden="true" />
          Work / Reference detail
        </p>
        <h2 id="work-detail-title" class="mt-6 text-4xl uppercase lg:text-5xl 2xl:mt-8 2xl:text-6xl">{{ work.title }}</h2>
        <p class="mt-3 text-lg 2xl:mt-6 2xl:text-2xl">{{ work.description }} — <span class="uppercase">{{ work.tag }}</span></p>

        <div class="mt-6 flex flex-col gap-4 text-sm leading-relaxed font-normal text-neutral-500 2xl:mt-10 2xl:gap-6 2xl:text-base">
          <p v-for="paragraph in work.details" :key="paragraph">{{ paragraph }}</p>
        </div>

        <NuxtLink
          to="/contact"
          class="mt-10 inline-flex items-center gap-3 self-start bg-brand-red px-5 py-3 text-white transition-colors hover:bg-deep-red lg:mt-auto 2xl:px-7 2xl:py-5 2xl:text-xl"
        >
          สอบถามงานลักษณะนี้
          <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-5" />
        </NuxtLink>
      </div>
    </div>
  </dialog>
</template>
