<script setup lang="ts">
import { LINE_ADD_FRIEND_URL } from '~/constants/navigation'

const { open: openLineDialog } = useLineDialog()

// Modified or middle clicks keep the browser's own handling (new tab etc.), so only a plain click opens the dialog
const handleClick = (event: MouseEvent) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  openLineDialog()
}
</script>

<template>
  <!-- A real link to LINE underneath, so it still works before the page is interactive -->
  <a :href="LINE_ADD_FRIEND_URL" target="_blank" rel="noopener noreferrer" @click="handleClick">
    <slot />
  </a>
</template>
