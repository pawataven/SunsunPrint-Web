<script setup lang="ts">
withDefaults(defineProps<{
  strokeWidth?: number
}>(), {
  strokeWidth: 1.75
})
</script>

<template>
  <!-- Drawn edge to edge (unlike lucide's padded glyph) so the arrow fills whatever size it is given -->
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    aria-hidden="true"
  >
    <path d="M3 21 21 3M7 3h14v14" />
  </svg>
</template>
