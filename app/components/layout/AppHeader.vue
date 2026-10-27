<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' }
]

const isMenuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="relative z-50 border-b  border-primary-600 bg-white">
    <div class="flex h-(--header-h) items-center justify-between page-x">
      <NuxtLink
        to="/"
        aria-label="SunsunPrint home"
        class="absolute top-0 flex size-24 items-center justify-center bg-primary-600 p-3 sm:h-28 sm:w-24 xl:h-[200px] xl:w-[165px] xl:p-5 2xl:h-[240px] 2xl:w-[198px] 2xl:p-6"
      >
        <img :src="logoUrl" alt="SunsunPrint" class="size-full object-contain">
      </NuxtLink>

      <nav aria-label="Main" class="ml-auto hidden items-center gap-8 xl:flex 2xl:gap-12">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-2xl font-semibold uppercase text-neutral-900 transition-colors hover:text-primary-600 aria-[current=page]:text-primary-600"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-1 bg-primary-600 px-4 py-2 text-2xl font-semibold uppercase text-white transition-colors hover:bg-primary-700"
        >
          Start a Project
          <Icon name="lucide:arrow-right" class="size-6" />
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="ml-auto inline-flex size-10 items-center justify-center text-neutral-900 xl:hidden"
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
      class="absolute inset-x-0 top-full border-t border-neutral-200 bg-white page-x pt-10 pb-6 shadow-lg xl:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 hover:text-primary-600 aria-[current=page]:text-primary-600"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        to="/contact"
        class="mt-4 inline-flex items-center gap-1 bg-primary-600 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-700"
      >
        Start a Project
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </nav>
  </header>
</template>
