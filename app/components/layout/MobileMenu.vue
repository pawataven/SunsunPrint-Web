<script setup lang="ts">
import { NAV_LINKS as navLinks, SOCIAL_LINKS as socialLinks } from '~/constants/navigation'

defineProps<{
  isLinkActive: (to: string) => boolean
}>()

const isOpen = defineModel<boolean>({ required: true })

const panelRef = useTemplateRef<HTMLElement>('panel')

const formatIndex = (value: number) => String(value).padStart(2, '0')

const close = () => (isOpen.value = false)

const { open: openLineDialog } = useLineDialog()

const handleSocialClick = (event: MouseEvent, opensLineDialog: boolean) => {
  if (!opensLineDialog) return
  event.preventDefault()
  close()
  openLineDialog()
}

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

watch(isOpen, async (open) => {
  document.documentElement.classList.toggle('overflow-hidden', open)
  if (open) window.addEventListener('keydown', closeOnEscape)
  else window.removeEventListener('keydown', closeOnEscape)
  if (!open) return
  await nextTick()
  panelRef.value?.querySelector<HTMLElement>('a[href]')?.focus({ preventScroll: true })
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('overflow-hidden')
  window.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <!--
    Teleported out of the header and layered just below it (z-40 vs the header's z-50), so the panel slides down from
    behind the header bar and the logo that hangs below the bar stays in front of it. The panel is placed on the page
    rather than the screen, so it stays attached to the bar even when the page is scrolled a little
  -->
  <Teleport to="body">
    <Transition name="menu-backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-ink/60 xl:hidden"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <Transition name="menu-panel">
      <div
        v-if="isOpen"
        id="mobile-menu"
        ref="panel"
        class="absolute inset-x-0 top-(--header-h) z-40 max-h-[calc(100svh-var(--header-h))] overflow-y-auto bg-white shadow-xl xl:hidden"
      >
        <!-- Top padding clears the part of the logo that hangs below the header bar -->
        <nav aria-label="เมนูหลัก" class="page-x pt-10 sm:pt-14">
          <ul class="flex flex-col">
            <li
              v-for="(link, index) in navLinks"
              :key="link.to"
              class="menu-item border-b border-neutral-200"
              :style="{ '--item-delay': `${100 + index * 50}ms` }"
            >
              <NuxtLink
                :to="link.to"
                class="flex items-baseline gap-4 py-4 transition-colors hover:text-brand-red"
                :class="isLinkActive(link.to) ? 'text-brand-red' : 'text-ink'"
                @click="close"
              >
                <span class="text-xs font-normal text-neutral-400">{{ formatIndex(index + 1) }}</span>
                <span class="text-2xl">{{ link.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="menu-item page-x flex flex-wrap items-center justify-between gap-4 pt-6 pb-8" :style="{ '--item-delay': `${100 + navLinks.length * 50}ms` }">
          <NuxtLink
            to="/start-project"
            class="inline-flex items-center gap-6 bg-brand-red px-5 py-3 font-semibold text-white transition-colors hover:bg-deep-red"
            @click="close"
          >
            ขอใบเสนอราคา
            <Icon name="lucide:arrow-right" class="size-5" />
          </NuxtLink>
          <ul class="flex gap-3">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand-red"
                @click="handleSocialClick($event, social.opensLineDialog)"
              >
                <Icon :name="social.icon" class="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.menu-backdrop-enter-active {
  transition: opacity 0.5s ease;
}

.menu-backdrop-leave-active {
  transition: opacity 0.4s ease 0.1s;
}

.menu-backdrop-enter-from,
.menu-backdrop-leave-to {
  opacity: 0;
}

/* A long ease-out so the panel glides down from behind the header bar and settles softly */
.menu-panel-enter-active {
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.menu-panel-leave-active {
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}

.menu-panel-enter-from,
.menu-panel-leave-to {
  transform: translateY(-100%);
}

/* Items drop in one after another; they start from the enter-from state and ease to rest on their own delay */
.menu-item {
  transition:
    opacity 0.5s ease var(--item-delay, 0ms),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--item-delay, 0ms);
}

.menu-panel-enter-from .menu-item {
  opacity: 0;
  transform: translateY(-1.25rem);
}

/* On the way out the items fade first, so the panel folds up already empty instead of carrying text with it */
.menu-panel-leave-active .menu-item {
  opacity: 0;
  transition: opacity 0.15s ease;
}

/* The slide-down is kept even under prefers-reduced-motion at the site owner's request: it is the menu's signature motion */
</style>
