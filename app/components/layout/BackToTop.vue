<script setup lang="ts">
const isVisible = ref(false)

let frame = 0
const updateVisibility = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    isVisible.value = window.scrollY > window.innerHeight * 0.8
  })
}

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <button
    type="button"
    aria-label="กลับขึ้นด้านบน"
    :tabindex="isVisible ? 0 : -1"
    :aria-hidden="!isVisible"
    class="fixed right-5 bottom-6 z-40 flex size-12 items-center justify-center border-2 border-brand-red text-brand-red transition duration-300 hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink lg:right-8 lg:bottom-10 lg:size-14"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'"
    @click="scrollToTop"
  >
    <Icon name="lucide:arrow-up" class="size-6" />
  </button>
</template>
