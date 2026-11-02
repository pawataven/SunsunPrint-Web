<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { NAV_LINKS as navLinks } from '~/constants/navigation'

const isMenuOpen = ref(false)
const route = useRoute()

// Category pages like /our-work/signage live under their menu item, so it stays highlighted there too
const isLinkActive = (to: string) => (to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(`${to}/`))

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
            and a visibility-hidden submenu would refuse the focus and drop it to the page
          -->
          <ul
            v-if="link.children"
            :aria-label="`หมวด${link.label}`"
            class="pointer-events-none absolute top-full left-1/2 min-w-56 -translate-x-1/2 translate-y-2 border border-t-2 border-neutral-200 border-t-brand-red bg-white py-2 opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-has-focus-visible:pointer-events-auto group-has-focus-visible:translate-y-0 group-has-focus-visible:opacity-100"
          >
            <li v-for="child in link.children" :key="child.to">
              <NuxtLink
                :to="child.to"
                class="block px-5 py-2.5 text-lg font-semibold whitespace-nowrap transition-colors hover:bg-ivory hover:text-brand-red 2xl:text-xl"
                :class="route.path === child.to ? 'text-brand-red' : 'text-ink'"
              >
                {{ child.label }}
              </NuxtLink>
            </li>
          </ul>
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
