<script setup lang="ts">
import type { Work, WorkFilter } from '~/types'

const props = defineProps<{
  id: string
  title: string
  works: Work[]
  filters?: WorkFilter[]
  exploreTo: string
}>()

const selectedFilter = ref('all')

const filterOptions = computed(() =>
  props.filters?.length
    ? [
        { id: 'all', label: 'ทั้งหมด', count: props.works.length },
        ...props.filters.map(filter => ({
          ...filter,
          count: props.works.filter(work => work.subcategory === filter.id).length
        }))
      ]
    : []
)

const visibleWorks = computed(() =>
  selectedFilter.value === 'all'
    ? props.works
    : props.works.filter(work => work.subcategory === selectedFilter.value)
)

const emit = defineEmits<{
  open: [work: Work]
}>()

const trackRef = useTemplateRef<HTMLUListElement>('track')
const firstVisibleIndex = ref(0)
const isAtStart = ref(true)
const isAtEnd = ref(true)
const thumbWidthPercent = ref(100)
const scrollProgress = ref(0)

const formatIndex = (value: number) => String(value).padStart(2, '0')

const getStep = (track: HTMLUListElement) => {
  const firstCard = track.firstElementChild as HTMLElement | null
  if (!firstCard) return track.clientWidth
  return firstCard.offsetWidth + Number.parseFloat(getComputedStyle(track).columnGap || '0')
}

const updateScrollState = () => {
  const track = trackRef.value
  if (!track) {
    thumbWidthPercent.value = 100
    scrollProgress.value = 0
    return
  }
  const maxScroll = track.scrollWidth - track.clientWidth
  firstVisibleIndex.value = Math.round(track.scrollLeft / getStep(track))
  isAtStart.value = track.scrollLeft <= 1
  isAtEnd.value = track.scrollLeft >= maxScroll - 1
  thumbWidthPercent.value = (track.clientWidth / track.scrollWidth) * 100
  scrollProgress.value = maxScroll > 0 ? track.scrollLeft / maxScroll : 0
}

// The thumb shrinks with the share of cards on screen, but never below 3rem so long categories keep it visible and grabbable
const thumbStyle = computed(() => {
  const width = `max(3rem, ${thumbWidthPercent.value}%)`
  return { width, left: `calc((100% - ${width}) * ${scrollProgress.value})` }
})

// Centers the thumb under the pointer, so a click on the bar jumps there and a drag keeps the grab point steady
const scrollToPointer = (event: PointerEvent) => {
  const track = trackRef.value
  const bar = event.currentTarget as HTMLElement
  if (!track) return
  const barBox = bar.getBoundingClientRect()
  const thumbWidth = bar.querySelector('span')?.getBoundingClientRect().width ?? 0
  const freeWidth = barBox.width - thumbWidth
  if (freeWidth <= 0) return
  const fraction = Math.min(Math.max((event.clientX - barBox.left - thumbWidth / 2) / freeWidth, 0), 1)
  track.scrollTo({ left: fraction * (track.scrollWidth - track.clientWidth) })
}

// CSS snapping fights any scroll we drive ourselves (it re-snaps on every frame), so it is switched off while one runs
const isDraggingThumb = ref(false)
const isDraggingCards = ref(false)
const isGliding = ref(false)
const isSnapSuspended = computed(() => isDraggingThumb.value || isDraggingCards.value || isGliding.value)

let glideFrame = 0

const stopGlide = () => {
  cancelAnimationFrame(glideFrame)
  isGliding.value = false
}

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

const glideTo = (track: HTMLUListElement, targetLeft: number) => {
  stopGlide()
  const startLeft = track.scrollLeft
  const distance = Math.min(Math.max(targetLeft, 0), track.scrollWidth - track.clientWidth) - startLeft
  if (Math.abs(distance) < 1) {
    track.scrollLeft = startLeft + distance
    return
  }
  // Longer trips take a little longer, so a one-card nudge stays snappy and a long fling still reads as motion.
  // Reduced motion keeps a brief settle rather than a jump: this motion only finishes a move the visitor started themselves
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = prefersReducedMotion ? 180 : Math.min(Math.max(Math.abs(distance) * 0.5, 350), 750)
  const startTime = performance.now()
  isGliding.value = true
  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1)
    track.scrollLeft = startLeft + distance * easeOutCubic(progress)
    if (progress < 1) glideFrame = requestAnimationFrame(tick)
    else isGliding.value = false
  }
  glideFrame = requestAnimationFrame(tick)
}

const glideToCard = (track: HTMLUListElement, cardIndex: number) => {
  const lastIndex = Math.max(visibleWorks.value.length - 1, 0)
  glideTo(track, Math.min(Math.max(cardIndex, 0), lastIndex) * getStep(track))
}

const startThumbDrag = (event: PointerEvent) => {
  stopGlide()
  isDraggingThumb.value = true
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  scrollToPointer(event)
}

const moveThumbDrag = (event: PointerEvent) => {
  if (isDraggingThumb.value) scrollToPointer(event)
}

const endThumbDrag = () => {
  const track = trackRef.value
  if (!isDraggingThumb.value) return
  isDraggingThumb.value = false
  if (track) glideToCard(track, Math.round(track.scrollLeft / getStep(track)))
}

// Touch and trackpads already scroll the track natively; this gives a plain mouse the same swipe
const CARD_DRAG_THRESHOLD_PX = 5
// How far a release keeps travelling per px/ms of drag speed, i.e. how much "throw" a quick flick gets
const FLING_DISTANCE_PER_SPEED = 250
const VELOCITY_WINDOW_MS = 100

let cardDrag: {
  pointerId: number
  startX: number
  startScrollLeft: number
  hasMoved: boolean
  samples: { x: number, time: number }[]
} | null = null
let shouldCancelClick = false

const startCardDrag = (event: PointerEvent) => {
  const track = trackRef.value
  if (event.pointerType !== 'mouse' || event.button !== 0 || !track) return
  stopGlide()
  cardDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startScrollLeft: track.scrollLeft,
    hasMoved: false,
    samples: [{ x: event.clientX, time: event.timeStamp }]
  }
}

const moveCardDrag = (event: PointerEvent) => {
  const track = trackRef.value
  if (!cardDrag || !track || event.pointerId !== cardDrag.pointerId) return
  const distance = event.clientX - cardDrag.startX
  // A press that barely moves stays a click, so cards still open their detail dialog
  if (!cardDrag.hasMoved) {
    if (Math.abs(distance) < CARD_DRAG_THRESHOLD_PX) return
    cardDrag.hasMoved = true
    isDraggingCards.value = true
    track.setPointerCapture(event.pointerId)
  }
  track.scrollLeft = cardDrag.startScrollLeft - distance
  cardDrag.samples.push({ x: event.clientX, time: event.timeStamp })
  const oldestKept = event.timeStamp - VELOCITY_WINDOW_MS
  while (cardDrag.samples.length > 2 && cardDrag.samples[0]!.time < oldestKept) cardDrag.samples.shift()
}

const getReleaseSpeed = (samples: { x: number, time: number }[]) => {
  const first = samples[0]
  const last = samples.at(-1)
  if (!first || !last || last.time - first.time <= 0) return 0
  return (last.x - first.x) / (last.time - first.time)
}

const endCardDrag = () => {
  const track = trackRef.value
  const drag = cardDrag
  cardDrag = null
  if (!drag?.hasMoved || !track) return
  isDraggingCards.value = false
  // The click that follows this pointerup must not open the card the drag ended on
  shouldCancelClick = true
  setTimeout(() => (shouldCancelClick = false))
  const projectedLeft = track.scrollLeft - getReleaseSpeed(drag.samples) * FLING_DISTANCE_PER_SPEED
  glideToCard(track, Math.round(projectedLeft / getStep(track)))
}

const cancelClickAfterDrag = (event: MouseEvent) => {
  if (!shouldCancelClick) return
  shouldCancelClick = false
  event.preventDefault()
  event.stopPropagation()
}

const scrollByCard = (direction: 1 | -1) => {
  const track = trackRef.value
  if (!track) return
  glideToCard(track, Math.round(track.scrollLeft / getStep(track)) + direction)
}

watch(visibleWorks, async () => {
  stopGlide()
  await nextTick()
  trackRef.value?.scrollTo({ left: 0 })
  updateScrollState()
})

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollState)
  stopGlide()
})
</script>

<template>
  <section :aria-labelledby="`${id}-heading`">
    <div v-reveal class="flex items-center justify-between gap-4">
      <div class="flex items-baseline gap-4 2xl:gap-8">
        <h3 :id="`${id}-heading`" class="text-lg uppercase lg:text-xl 2xl:text-[28px]">{{ title }}</h3>
        <p class="text-sm font-normal text-neutral-500 2xl:text-xl" aria-live="polite">
          {{ formatIndex(visibleWorks.length ? firstVisibleIndex + 1 : 0) }} / {{ formatIndex(visibleWorks.length) }}
        </p>
      </div>

      <div class="flex gap-2 2xl:gap-3">
        <button
          type="button"
          :disabled="isAtStart"
          :aria-label="`ผลงาน${title}ก่อนหน้า`"
          class="flex size-9 items-center justify-center border border-neutral-300 text-ink transition-colors hover:border-ink disabled:text-neutral-300 disabled:hover:border-neutral-300 2xl:size-12"
          @click="scrollByCard(-1)"
        >
          <Icon name="lucide:arrow-left" class="size-4 2xl:size-5" />
        </button>
        <button
          type="button"
          :disabled="isAtEnd"
          :aria-label="`ผลงาน${title}ถัดไป`"
          class="flex size-9 items-center justify-center border border-neutral-300 text-ink transition-colors hover:border-ink disabled:text-neutral-300 disabled:hover:border-neutral-300 2xl:size-12"
          @click="scrollByCard(1)"
        >
          <Icon name="lucide:arrow-right" class="size-4 2xl:size-5" />
        </button>
      </div>
    </div>

    <FilterChips
      v-if="filterOptions.length"
      v-model="selectedFilter"
      v-reveal="50"
      :label="`กรอง${title}ตามประเภท`"
      :options="filterOptions"
      class="mt-6 2xl:mt-8"
    />

    <!-- v-reveal marks its element with a class, and a :class re-render would wipe it, so the reveal lives on a wrapper
         whose classes never change while the track's own classes switch during drags -->
    <div v-if="visibleWorks.length" v-reveal="100" class="mt-6 2xl:mt-8">
      <ul
        ref="track"
        :class="[
          isSnapSuspended ? '' : 'snap-x snap-mandatory',
          isDraggingCards ? 'cursor-grabbing select-none [&_*]:cursor-grabbing' : 'cursor-grab'
        ]"
        class="flex gap-6 overflow-x-auto [scrollbar-width:none] lg:gap-8 2xl:gap-10"
        @scroll.passive="updateScrollState"
        @pointerdown="startCardDrag"
        @pointermove="moveCardDrag"
        @pointerup="endCardDrag"
        @pointercancel="endCardDrag"
        @click.capture="cancelClickAfterDrag"
        @dragstart.prevent
      >
        <li
          v-for="(work, index) in visibleWorks"
          :key="work.slug"
          class="shrink-0 basis-[85%] snap-start border-b border-neutral-300 pb-4 md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4rem)/3)] 2xl:basis-[calc((100%-5rem)/3)] 2xl:pb-8"
        >
          <WorkCard :work="work" :number="index + 1" :total="visibleWorks.length" @open="emit('open', work)" />
        </li>
      </ul>
    </div>
    <p v-else class="mt-6 font-normal text-neutral-500">ยังไม่มีผลงานในหมวดนี้</p>

    <div class="mt-8 flex items-center gap-8 2xl:mt-12 2xl:gap-12">
      <!-- Mouse/touch convenience mirroring the arrow buttons, so it stays out of the accessibility tree -->
      <div
        class="flex-1 touch-none py-3"
        :class="thumbWidthPercent < 100 ? 'cursor-pointer' : 'pointer-events-none'"
        aria-hidden="true"
        @pointerdown="startThumbDrag"
        @pointermove="moveThumbDrag"
        @pointerup="endThumbDrag"
        @pointercancel="endThumbDrag"
      >
        <div v-reveal:line class="relative h-px bg-neutral-300">
          <span
            class="absolute top-1/2 h-0.5 -translate-y-1/2 bg-brand-red"
            :class="isDraggingThumb ? '' : 'transition-[width] duration-300'"
            :style="thumbStyle"
          />
        </div>
      </div>
      <PrimaryLink v-reveal="150" :to="exploreTo">ดูผลงานเพิ่มเติม</PrimaryLink>
    </div>
  </section>
</template>
