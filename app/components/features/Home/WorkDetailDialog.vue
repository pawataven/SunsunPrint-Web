<script setup lang="ts">
import type { Work } from '~/types'

const props = defineProps<{
  work: Work | null
}>()

const emit = defineEmits<{
  close: []
}>()

const dialogRef = useTemplateRef<HTMLDialogElement>('dialog')

const photos = computed(() => (props.work?.image ? [props.work.image, ...(props.work.gallery ?? [])] : []))
const photoIndex = ref(0)
const hasManyPhotos = computed(() => photos.value.length > 1)

// Wraps around at both ends, so the buttons never dead-end on a set of two or three photos
const showPhoto = (direction: 1 | -1) => {
  photoIndex.value = (photoIndex.value + direction + photos.value.length) % photos.value.length
}

const showPhotoFromKey = (event: KeyboardEvent) => {
  if (!hasManyPhotos.value) return
  if (event.key === 'ArrowLeft') showPhoto(-1)
  if (event.key === 'ArrowRight') showPhoto(1)
}

const SWIPE_THRESHOLD_PX = 40
let swipeStartX: number | null = null

const startSwipe = (event: PointerEvent) => {
  swipeStartX = event.pointerType === 'mouse' ? null : event.clientX
}

const endSwipe = (event: PointerEvent) => {
  if (swipeStartX === null || !hasManyPhotos.value) return
  const distance = event.clientX - swipeStartX
  swipeStartX = null
  if (Math.abs(distance) >= SWIPE_THRESHOLD_PX) showPhoto(distance < 0 ? 1 : -1)
}

const getPhotoAlt = (description: string, index: number) =>
  hasManyPhotos.value
    ? `${description} รูปที่ ${index + 1} จาก ${photos.value.length} ผลงานของ SUNSUN PRINT`
    : `${description} ผลงานของ SUNSUN PRINT`

watch(() => props.work, (work) => {
  photoIndex.value = 0
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
    @keydown="showPhotoFromKey"
  >
    <div v-if="work" class="grid lg:h-[min(47.5rem,90vh)] lg:grid-cols-[525fr_388fr]">
      <!-- Every photo of the set is stacked and only the current one shows, so switching cross-fades instead of going
           blank while the next file loads. pan-y leaves vertical scrolling to the browser and horizontal swipes to us -->
      <div class="relative aspect-4/3 touch-pan-y overflow-hidden bg-white lg:aspect-auto" @pointerdown="startSwipe" @pointerup="endSwipe">
        <NuxtImg
          v-for="(photo, index) in photos"
          :key="photo"
          :src="photo"
          :alt="getPhotoAlt(work.description, index)"
          :aria-hidden="index !== photoIndex"
          sizes="sm:100vw md:100vw lg:100vw xl:60vw 2xl:60vw"
          format="webp"
          class="absolute inset-0 size-full object-cover transition-opacity duration-300"
          :class="index === photoIndex ? 'opacity-100' : 'opacity-0'"
        />

        <div v-if="hasManyPhotos" class="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-4 lg:right-6 lg:bottom-6 lg:left-6">
          <p class="bg-white/90 px-3 py-1.5 text-sm text-ink 2xl:text-base" aria-live="polite">
            <span class="sr-only">รูปที่ </span>{{ photoIndex + 1 }} / {{ photos.length }}
          </p>
          <div class="flex gap-2">
            <button
              type="button"
              aria-label="รูปก่อนหน้า"
              class="flex size-10 items-center justify-center bg-white text-ink transition-colors hover:bg-brand-red hover:text-white 2xl:size-14"
              @click="showPhoto(-1)"
            >
              <Icon name="lucide:arrow-left" class="size-5 2xl:size-6" />
            </button>
            <button
              type="button"
              aria-label="รูปถัดไป"
              class="flex size-10 items-center justify-center bg-white text-ink transition-colors hover:bg-brand-red hover:text-white 2xl:size-14"
              @click="showPhoto(1)"
            >
              <Icon name="lucide:arrow-right" class="size-5 2xl:size-6" />
            </button>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col p-6 lg:p-10 2xl:p-15">
        <button
          type="button"
          aria-label="ปิด"
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

        <LineLink
          class="mt-10 inline-flex items-center gap-3 self-start bg-brand-red px-5 py-3 text-white transition-colors hover:bg-deep-red lg:mt-auto 2xl:px-7 2xl:py-5 2xl:text-xl"
        >
          สอบถามงานลักษณะนี้
          <ArrowUpRight :stroke-width="1.5" class="size-4 2xl:size-5" />
        </LineLink>
      </div>
    </div>
  </dialog>
</template>
