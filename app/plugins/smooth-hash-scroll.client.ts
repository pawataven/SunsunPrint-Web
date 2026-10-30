/*
  Section links on the same page (NuxtLink to="#signage") glide to their section with animateScrollTo. The router's
  scroll behavior can't be swapped from a plugin because Nuxt reinstalls its own after the first navigation, so the
  click is handled here instead. The listener runs in the capture phase so it gets the click before NuxtLink's own
  handler, which then sees the prevented default and leaves it alone. The URL hash is still updated, in place, so the
  address bar points at the section
*/
export default defineNuxtPlugin(() => {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const hash = (event.target as Element | null)?.closest('a')?.getAttribute('href')
    if (!hash?.startsWith('#') || hash.length < 2) return
    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!target) return

    event.preventDefault()
    const scrollMarginTop = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0
    animateScrollTo(target.getBoundingClientRect().top + window.scrollY - scrollMarginTop)
    // Keeps vue-router's history state object, only the hash in the URL changes
    history.replaceState(history.state, '', hash)
  }, { capture: true })
})
