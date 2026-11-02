<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { NAV_LINKS as navLinks } from '~/constants/navigation'

const isMenuOpen = ref(false)
const route = useRoute()

// Category pages like /our-work/signage live under their menu item, so it stays highlighted there too
const isLinkActive = (to: string) => (to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(`${to}/`))

const formatIndex = (value: number) => String(value).padStart(2, '0')

const menuButtonRef = useTemplateRef<HTMLButtonElement>('menuButton')

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

// Hands focus back to the button that opened the menu, so keyboard users continue from where they were
watch(isMenuOpen, (open) => {
  if (!open) menuButtonRef.value?.focus({ preventScroll: true })
})
</script>

<template>
  <header class="relative z-50 border-b  border-brand-red bg-white">
    <div class="flex h-(--header-h) items-center justify-between page-x">
      <NuxtLink
        to="/"
        aria-label="SunsunPrint หน้าแรก"
        class="absolute top-0 flex size-24 items-center justify-center bg-brand-red p-3 sm:h-28 sm:w-24 xl:h-[200px] xl:w-[165px] xl:p-5 2xl:h-[240px] 2xl:w-[198px] 2xl:p-6"
      >
        <img :src="logoUrl" alt="SunsunPrint" class="size-full object-contain">
      </NuxtLink>

      <!-- Stretched to the bar's full height so a submenu hangs from the bar's bottom edge and the pointer never crosses a gap to reach it -->
      <nav aria-label="เมนูหลัก" class="ml-auto hidden items-center gap-8 self-stretch xl:flex 2xl:gap-12">
        <div v-for="link in navLinks" :key="link.to" class="group relative flex h-full items-center">
          <NuxtLink
            :to="link.to"
            class="inline-flex items-center gap-1 text-2xl font-semibold uppercase transition-colors hover:text-brand-red"
            :class="isLinkActive(link.to) ? 'text-brand-red' : 'text-ink'"
          >
            {{ link.label }}
            <Icon
              v-if="link.children"
              name="lucide:chevron-down"
              class="size-5 transition-transform group-hover:rotate-180 group-has-focus-visible:rotate-180"
            />
          </NuxtLink>
          <!--
            Opens on keyboard focus only: a mouse click leaves the link focused after navigating, which would keep it open.
            Hidden with opacity rather than visibility, because tabbing from the parent link briefly leaves the group unfocused,
            and a visibility-hidden submenu would refuse the focus and drop it to the page.
            The clipping wrapper starts at the bar's bottom edge so the panel slides out from behind the bar, as the mobile menu does;
            its side and bottom padding leave room for the panel's shadow
          -->
          <div v-if="link.children" class="submenu absolute top-full left-1/2 -translate-x-1/2 overflow-hidden px-8 pb-10">
            <div class="submenu-panel w-80 border-t-2 border-brand-red bg-white shadow-xl 2xl:w-88">
              <p
                class="submenu-item flex items-center justify-between border-b border-neutral-200 px-5 py-3 text-xs text-neutral-500 uppercase"
                style="--item-delay: 150ms"
                aria-hidden="true"
              >
                <span>Our work / Categories</span>
                <span class="text-brand-red">{{ formatIndex(link.children.length) }}</span>
              </p>
              <ul :aria-label="`หมวด${link.label}`" class="py-2">
                <li
                  v-for="(child, index) in link.children"
                  :key="child.to"
                  class="submenu-item"
                  :style="{ '--item-delay': `${200 + index * 50}ms` }"
                >
                  <NuxtLink
                    :to="child.to"
                    class="group/item relative grid grid-cols-[1.75rem_1fr_auto] items-center gap-2 px-5 py-2.5 transition-colors hover:bg-ivory"
                  >
                    <span
                      class="absolute inset-y-1.5 left-0 w-0.5 origin-top bg-brand-red transition-transform duration-300 group-hover/item:scale-y-100"
                      :class="route.path === child.to ? 'scale-y-100' : 'scale-y-0'"
                      aria-hidden="true"
                    />
                    <span
                      class="text-xs transition-colors group-hover/item:text-brand-red"
                      :class="route.path === child.to ? 'text-brand-red' : 'text-neutral-400'"
                      aria-hidden="true"
                    >{{ formatIndex(index + 1) }}</span>
                    <span class="flex flex-col">
                      <span
                        class="text-lg leading-snug font-semibold transition-colors group-hover/item:text-brand-red 2xl:text-xl"
                        :class="route.path === child.to ? 'text-brand-red' : 'text-ink'"
                      >{{ child.label }}</span>
                      <span class="text-[0.6875rem] tracking-wider text-neutral-500 uppercase 2xl:text-xs">{{ child.labelEn }}</span>
                    </span>
                    <ArrowUpRight
                      :stroke-width="1.5"
                      class="size-5 -translate-x-1 translate-y-1 text-brand-red opacity-0 transition group-hover/item:translate-0 group-hover/item:opacity-100"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/start-project"
          class="inline-flex items-center gap-1 bg-brand-red px-4 py-2 text-2xl font-semibold uppercase text-white transition-colors hover:bg-deep-red"
        >
          ขอใบเสนอราคา
          <Icon name="lucide:arrow-right" class="size-6" />
        </NuxtLink>
      </nav>

      <button
        ref="menuButton"
        type="button"
        class="ml-auto -mr-2 inline-flex size-10 items-center justify-center text-ink xl:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <!-- Three bars that fold into an X, so the toggle animates in step with the menu -->
        <span class="relative block h-4 w-6" aria-hidden="true">
          <span
            class="absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-300 ease-out"
            :class="{ 'translate-y-[7px] rotate-45': isMenuOpen }"
          />
          <span
            class="absolute inset-x-0 top-[7px] h-0.5 bg-current transition-opacity duration-200"
            :class="{ 'opacity-0': isMenuOpen }"
          />
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-300 ease-out"
            :class="{ '-translate-y-[7px] -rotate-45': isMenuOpen }"
          />
        </span>
      </button>
    </div>

    <MobileMenu v-model="isMenuOpen" :is-link-active="isLinkActive" />
  </header>
</template>

<style scoped>
/* Same curves as the mobile menu: a long ease-out to glide down, a quicker ease-in-out to fold back up */
.submenu {
  pointer-events: none;
}

/* Lifted past its own height by the depth of its shadow, which would otherwise peek out under the bar while closed */
.submenu-panel {
  transform: translateY(calc(-100% - 3rem));
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Closing fades the items first, so the panel folds up already empty */
.submenu-item {
  opacity: 0;
  transform: translateY(-0.75rem);
  transition: opacity 0.15s ease;
}

.group:hover > .submenu,
.group:has(:focus-visible) > .submenu {
  pointer-events: auto;
}

.group:hover > .submenu .submenu-panel,
.group:has(:focus-visible) > .submenu .submenu-panel {
  transform: translateY(0);
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.group:hover > .submenu .submenu-item,
.group:has(:focus-visible) > .submenu .submenu-item {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.5s ease var(--item-delay, 0ms),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--item-delay, 0ms);
}
</style>
