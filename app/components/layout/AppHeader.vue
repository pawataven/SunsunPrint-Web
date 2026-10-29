<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { NAV_LINKS as navLinks } from '~/constants/navigation'

const isMenuOpen = ref(false)
const route = useRoute()

// Category pages like /OurWork/signage live under their menu item, so it stays highlighted there too
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

      <nav aria-label="เมนูหลัก" class="ml-auto hidden items-center gap-8 xl:flex 2xl:gap-12">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-2xl font-semibold uppercase transition-colors hover:text-brand-red"
          :class="isLinkActive(link.to) ? 'text-brand-red' : 'text-ink'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
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
