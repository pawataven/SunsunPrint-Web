<script setup lang="ts">
const slogans = [
  'Make it bold',
  'Make it real',
  'Print different',
  'Create without limits',
  'Make it Sunsun',
  'Your idea, our print',
  'Stand out from the crowd'
]
</script>

<template>
  <section aria-label="Slogans" class="overflow-hidden bg-brand-red text-white">
    <!-- The track holds two identical copies and slides by -50%, so the second copy lands exactly where the first began -->
    <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
      <ul
        v-for="copy in 2"
        :key="copy"
        class="flex h-16 shrink-0 items-center gap-12 pr-12 text-base font-semibold uppercase lg:h-20 lg:gap-16 lg:pr-16 xl:text-xl 2xl:h-30 2xl:gap-24 2xl:pr-24 2xl:text-2xl"
        :aria-hidden="copy === 2"
      >
        <template v-for="slogan in slogans" :key="slogan">
          <li class="whitespace-nowrap">{{ slogan }}</li>
          <!-- The asterisk glyph sits near the cap line, so it is nudged down to the text's optical center -->
          <li class="translate-y-[0.22em] text-[2em] leading-none" aria-hidden="true">*</li>
        </template>
      </ul>
    </div>
  </section>
</template>
