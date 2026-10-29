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

const formatIndex = (value: number) => String(value).padStart(2, '0')

const getStep = (track: HTMLUListElement) => {
  const firstCard = track.firstElementChild as HTMLElement | null
  if (!firstCard) return track.clientWidth
  return firstCard.offsetWidth + Number.parseFloat(getComputedStyle(track).columnGap || '0')
}

const updateScrollState = () => {
  const track = trackRef.value
  if (!track) return
  firstVisibleIndex.value = Math.round(track.scrollLeft / getStep(track))
  isAtStart.value = track.scrollLeft <= 1
  isAtEnd.value = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1
}

const scrollByCard = (direction: 1 | -1) => {
  const track = trackRef.value
  if (!track) return
  track.scrollBy({ left: direction * getStep(track), behavior: 'smooth' })
}

watch(visibleWorks, async () => {
  await nextTick()
  trackRef.value?.scrollTo({ left: 0 })
  updateScrollState()
})

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('resize', updateScrollState))
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

    <ul
      v-if="visibleWorks.length"
      ref="track"
      v-reveal="100"
      class="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] lg:gap-8 2xl:mt-8 2xl:gap-10"
      @scroll.passive="updateScrollState"
    >
      <li
        v-for="(work, index) in visibleWorks"
        :key="work.slug"
        class="shrink-0 basis-[85%] snap-start border-b border-neutral-300 pb-4 md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4rem)/3)] 2xl:basis-[calc((100%-5rem)/3)] 2xl:pb-8"
      >
        <WorkCard :work="work" :number="index + 1" :total="visibleWorks.length" @open="emit('open', work)" />
      </li>
    </ul>
    <p v-else class="mt-6 font-normal text-neutral-500">ยังไม่มีผลงานในหมวดนี้</p>

    <div class="mt-8 flex items-center gap-8 2xl:mt-12 2xl:gap-12">
      <div v-reveal:line class="relative h-px flex-1 bg-neutral-300" aria-hidden="true">
        <span class="absolute top-1/2 left-0 h-0.5 w-1/4 -translate-y-1/2 bg-brand-red" />
      </div>
      <PrimaryLink v-reveal="150" :to="exploreTo">ดูผลงานเพิ่มเติม</PrimaryLink>
    </div>
  </section>
</template>
