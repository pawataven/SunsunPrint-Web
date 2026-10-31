<script setup lang="ts">
const categories = [
  { title: ['Signage'], label: 'งานป้าย', to: '#signage' },
  { title: ['Stickers', '& Graphics'], label: 'งานสติ๊กเกอร์', to: '#stickers-graphics' },
  { title: ['Event &', 'Booth'], label: 'งานอีเวนต์', to: '#event-booth' },
  { title: ['Product', 'Display'], label: 'ชั้นวางสินค้า', to: '#product-display' },
  { title: ['Packaging', '& Bags'], label: 'งานบรรจุภัณฑ์', to: '#packaging' }
]

const formatIndex = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <section aria-labelledby="categories-heading" class="page-x pt-12 pb-12 lg:pt-20 lg:pb-20 2xl:pt-21">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <h2 id="categories-heading" v-reveal class="trim-cap-start text-5xl leading-[0.92] text-ink uppercase lg:text-8xl">
        <span class="block">What</span>
        <span class="block">We make.</span>
      </h2>
      <p v-reveal="120" class="font-sans leading-relaxed text-neutral-700 lg:text-lg 2xl:text-2xl">
        <span class="lg:block">เลือกประเภทงานที่ต้องการ แล้วดูรายละเอียด วัสดุและภาพตัวอย่าง</span> <span class="lg:block">จากเอกสารของ SUNSUN PRINT ในแต่ละหมวด</span>
      </p>
    </div>

    <!-- The 1px gap over a gray background draws the shared cell borders without doubling them where cells meet.
         Five cells only fit one row from xl, where "Packaging" still fits its cell; until then the odd one out spans the row -->
    <ul class="mt-10 grid gap-px border border-neutral-400 bg-neutral-400 sm:grid-cols-2 lg:mt-11 xl:grid-cols-5">
      <li v-for="(category, index) in categories" :key="category.label" v-reveal="200 + index * 100" class="bg-white sm:last:odd:col-span-2 xl:last:odd:col-span-1">
        <NuxtLink
          :to="category.to"
          class="group grid h-full min-h-52 grid-rows-[auto_1fr_auto] p-6 lg:min-h-56 2xl:h-70"
        >
          <span class="text-sm text-brand-red 2xl:text-base">{{ formatIndex(index + 1) }} /</span>
          <span class="self-center py-6 font-serif text-2xl leading-[1.1] text-ink uppercase transition-colors group-hover:text-brand-red xl:text-[1.75rem] 2xl:text-[2rem]">
            <span v-for="line in category.title" :key="line" class="block">{{ line }}</span>
          </span>
          <span class="flex items-end justify-between gap-4 font-sans text-sm text-neutral-600 2xl:text-base">
            {{ category.label }}
            <ArrowUpRight
              :stroke-width="1.5"
              class="size-5 shrink-0 text-neutral-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-red 2xl:size-6"
            />
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
