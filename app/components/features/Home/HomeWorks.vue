<script setup lang="ts">
const categories = [
  { id: 'all', label: 'All works' },
  { id: 'signage', label: 'Signage' },
  { id: 'stickers-graphics', label: 'Stickers & Graphics' },
  { id: 'event-exhibition', label: 'Event & Exhibition' },
  { id: 'product-display', label: 'Product Display' }
] as const

type CategoryId = typeof categories[number]['id']

const selectedCategory = ref<CategoryId>('all')
</script>

<template>
  <section aria-labelledby="works-heading" class="page-x pt-20 pb-16 lg:pt-28 2xl:pt-36">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <h2 id="works-heading" class="text-5xl leading-[1.25] uppercase lg:text-7xl 2xl:text-8xl">
        <span class="block">Selected</span>
        <span class="block font-serif text-primary-600">Works.</span>
      </h2>
      <p class="font-sans leading-relaxed font-normal text-neutral-600 lg:pb-4 lg:text-right lg:text-lg 2xl:text-2xl">
        งานป้าย งานอีเวนต์ งานสติกเกอร์ และดิสเพลย์สินค้า<br>
        สำรวจรูปแบบงานพิมพ์และงานผลิตจากตัวอย่างที่ร้านส่งมา
      </p>
    </div>

    <div role="group" aria-label="Filter works by category" class="mt-8 flex flex-wrap gap-3 2xl:mt-10 2xl:gap-5">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        :aria-pressed="selectedCategory === category.id"
        class="rounded-full border border-neutral-900 px-4 py-1.5 text-sm font-semibold uppercase transition-colors hover:bg-neutral-100 aria-pressed:bg-neutral-900 aria-pressed:text-white xl:text-base 2xl:px-5 2xl:py-2 2xl:text-2xl"
        @click="selectedCategory = category.id"
      >
        {{ category.label }}
      </button>
    </div>

    <hr class="mt-10 border-primary-600/60 2xl:mt-16">
  </section>
</template>
