<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  title: string
  accent: string
  tone?: 'light' | 'dark'
}>(), {
  tone: 'light'
})
</script>

<template>
  <!-- On phones the size follows the content width (16cqw), so the longest word ("EVERYTHING") never runs into the right gutter -->
  <div class="@container flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
    <h2
      :id="id"
      class="text-[min(3rem,16cqw)] leading-[1.25] font-semibold uppercase lg:text-8xl"
      :class="tone === 'dark' ? 'text-cream' : 'text-ink'"
    >
      <span class="block font-sans">{{ title }}</span>
      <span class="block font-serif text-brand-red">{{ accent }}</span>
    </h2>
    <p
      class="font-sans leading-relaxed font-normal max-xl:[&_br]:hidden lg:text-lg xl:pb-4 xl:text-right xl:whitespace-nowrap 2xl:text-2xl"
      :class="tone === 'dark' ? 'text-graphite' : 'text-neutral-600'"
    >
      <slot />
    </p>
  </div>
</template>
