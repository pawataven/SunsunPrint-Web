<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { NAV_LINKS as navLinks } from '~/constants/navigation'

const isMenuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="relative z-50 border-b  border-brand-red bg-white">
    <div class="flex h-(--header-h) items-center justify-between page-x">
      <NuxtLink
        to="/"
        aria-label="SunsunPrint home"
        class="absolute top-0 flex size-24 items-center justify-center bg-brand-red p-3 sm:h-28 sm:w-24 xl:h-[200px] xl:w-[165px] xl:p-5 2xl:h-[240px] 2xl:w-[198px] 2xl:p-6"
      >
        <img :src="logoUrl" alt="SunsunPrint" class="size-full object-contain">
      </NuxtLink>

      <nav aria-label="Main" class="ml-auto hidden items-center gap-8 xl:flex 2xl:gap-12">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-2xl font-semibold uppercase text-ink transition-colors hover:text-brand-red aria-[current=page]:text-brand-red"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-1 bg-brand-red px-4 py-2 text-2xl font-semibold uppercase text-white transition-colors hover:bg-deep-red"
        >
          Start a Project
          <Icon name="lucide:arrow-right" class="size-6" />
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="ml-auto inline-flex size-10 items-center justify-center text-ink xl:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="size-6" />
      </button>
    </div>

    <nav
      v-show="isMenuOpen"
      id="mobile-menu"
      aria-label="Mobile"
      class="absolute inset-x-0 top-full border-t border-ivory bg-white page-x pt-10 pb-6 shadow-lg xl:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block py-2 text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand-red aria-[current=page]:text-brand-red"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        to="/contact"
        class="mt-4 inline-flex items-center gap-1 bg-brand-red px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-deep-red"
      >
        Start a Project
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </nav>
  </header>
</template>
