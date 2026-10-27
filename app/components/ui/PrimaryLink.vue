<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-2 bg-brand-red px-4 py-2.5 text-sm font-semibold uppercase text-white transition-colors hover:bg-deep-red xl:text-lg 2xl:px-5 2xl:py-3 2xl:text-2xl"
  >
    <slot />
    <Icon name="lucide:arrow-up-right" class="size-4 xl:size-5 2xl:size-6" />
  </NuxtLink>
</template>
