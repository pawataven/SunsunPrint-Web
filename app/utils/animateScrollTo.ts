const MIN_DURATION_MS = 500
const MAX_DURATION_MS = 1200

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

let cancelRunningScroll: (() => void) | undefined

/*
  Glides the page to `targetTop` with a JS animation. The browser's own `behavior: 'smooth'` is skipped whenever the
  OS has animations turned off, and the site wants the glide for every visitor
*/
export const animateScrollTo = (targetTop: number) => {
  cancelRunningScroll?.()
  const startTop = window.scrollY
  const distance = targetTop - startTop
  if (!distance) return
  const duration = Math.min(MAX_DURATION_MS, Math.max(MIN_DURATION_MS, Math.abs(distance) / 3))
  const startTime = performance.now()
  let frame = 0

  // The visitor taking over the scroll ends the animation instead of fighting it
  const stopEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const
  const cancel = () => {
    cancelAnimationFrame(frame)
    stopEvents.forEach(type => window.removeEventListener(type, cancel))
    cancelRunningScroll = undefined
  }
  stopEvents.forEach(type => window.addEventListener(type, cancel, { passive: true }))
  cancelRunningScroll = cancel

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration)
    window.scrollTo(0, startTop + distance * easeInOutCubic(progress))
    if (progress < 1) frame = requestAnimationFrame(step)
    else cancel()
  }
  frame = requestAnimationFrame(step)
}
