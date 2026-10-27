import type { Directive } from 'vue'

type RevealVariant = 'up' | 'wipe' | 'line' | 'pop' | 'zoom'

let observer: IntersectionObserver | undefined
const revealTargets = new WeakMap<Element, HTMLElement>()
const pendingWatched = new Set<Element>()

const revealWatched = (watched: Element, { instant }: { instant: boolean }) => {
  const el = revealTargets.get(watched)
  pendingWatched.delete(watched)
  observer?.unobserve(watched)
  if (!el) return
  if (!instant) {
    el.classList.add('is-revealed')
    return
  }
  el.style.transition = 'none'
  el.classList.add('is-revealed')
  // Force a style flush so the final state lands before the transition is restored
  void el.offsetHeight
  requestAnimationFrame(() => el.style.removeProperty('transition'))
}

// Content the visitor has already scrolled past (e.g. scroll position restored on reload) shows at once — animating it while scrolling back up reads as slow loading
const revealPassedElements = () => {
  for (const watched of pendingWatched) {
    if (watched.getBoundingClientRect().bottom < 0) revealWatched(watched, { instant: true })
  }
}

let scrollFrame = 0
const onScroll = () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0
    revealPassedElements()
  })
}

const getObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) revealWatched(entry.target, { instant: false })
      else if (entry.boundingClientRect.bottom < 0) revealWatched(entry.target, { instant: true })
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 })
  // IntersectionObserver stays silent when a scroll jump moves an element from below the viewport to above it without ever crossing it
  window.addEventListener('scroll', onScroll, { passive: true })
  return observer
}

// A wiped element starts fully clipped, and IntersectionObserver ignores clipped-away area, so it would never fire — watch its box (the parent) instead
const getWatchedElement = (el: HTMLElement, variant: RevealVariant) =>
  variant === 'wipe' ? el.parentElement ?? el : el

const reveal: Directive<HTMLElement, number | undefined, string, RevealVariant> = {
  // Rendered on the server too, so content is already hidden on first paint instead of flashing in before hydration
  getSSRProps: binding => ({ 'data-reveal': binding.arg ?? 'up' }),
  mounted(el, binding) {
    const variant = binding.arg ?? 'up'
    el.dataset.reveal = variant
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    const watched = getWatchedElement(el, variant)
    revealTargets.set(watched, el)
    pendingWatched.add(watched)
    getObserver().observe(watched)
  },
  unmounted(el, binding) {
    const watched = getWatchedElement(el, binding.arg ?? 'up')
    pendingWatched.delete(watched)
    observer?.unobserve(watched)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
