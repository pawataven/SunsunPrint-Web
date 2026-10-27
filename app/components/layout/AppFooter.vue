<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { NAV_LINKS, SOCIAL_LINKS } from '~/constants/navigation'
import { SERVICES } from '~/constants/services'

const projectSteps = [
  'เลือกประเภทงานที่ต้องการ',
  'ส่งขนาดและรูปตัวอย่าง',
  'แจ้งรายละเอียดเพื่อประเมินราคา'
]

const currentYear = new Date().getFullYear()

const headingClass = 'text-base uppercase lg:text-lg 2xl:text-xl'
const listClass = 'mt-6 flex flex-col gap-3 text-sm text-mist lg:text-base 2xl:mt-7 2xl:gap-6 2xl:text-xl'
</script>

<template>
  <footer class="page-x bg-ink pt-12 pb-8 text-cream lg:pt-16 2xl:pb-14">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <img :src="logoUrl" alt="SunsunPrint" class="w-28 2xl:w-41">
        <p class="mt-4 lg:text-lg 2xl:mt-6 2xl:text-[22px]">SUNSUN PRINT &amp; PRODUCTION</p>
        <p class="text-sm font-sans text-mist 2xl:text-base">ทำไอเดียให้กลายเป็นงานพิมพ์ที่จับต้องได้</p>
      </div>
      <p class="uppercase lg:text-lg 2xl:pb-1 2xl:text-[22px]">Print different. Think bigger.</p>
    </div>

    <hr class="mt-10 border-neutral-700 2xl:mt-14">

    <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[389fr_522fr_517fr_252fr] lg:gap-x-0 2xl:mt-20">
      <nav aria-labelledby="footer-nav-heading">
        <h2 id="footer-nav-heading" :class="headingClass">Navigation</h2>
        <ul :class="listClass">
          <li v-for="link in NAV_LINKS" :key="link.to">
            <NuxtLink :to="link.to" class="uppercase transition-colors hover:text-cream">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 :class="headingClass">Services</h2>
        <ul :class="listClass">
          <li v-for="service in SERVICES" :key="service.category">
            <NuxtLink :to="`/services/${service.category}`" class="transition-colors hover:text-cream">
              {{ service.nameTh }} / <span class="uppercase">{{ service.nameEn }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 :class="headingClass">Start a project</h2>
        <ul class="mt-6 flex flex-col gap-1 text-sm text-mist lg:text-base 2xl:mt-7 2xl:text-xl">
          <li v-for="step in projectSteps" :key="step">{{ step }}</li>
        </ul>
        <NuxtLink to="/contact" class="mt-6 inline-block text-sm text-mist transition-colors hover:text-cream lg:text-base 2xl:mt-10 2xl:text-xl">
          ทำไอเดียของคุณให้เป็นจริง
        </NuxtLink>
      </div>

      <div>
        <h2 :class="headingClass">Follow us</h2>
        <p class="mt-6 text-sm whitespace-nowrap text-ash uppercase lg:text-base 2xl:mt-7 2xl:text-xl">Line / Facebook / IG</p>
        <ul class="mt-4 flex gap-3">
          <li v-for="social in SOCIAL_LINKS" :key="social.label">
            <a
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex size-9 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-brand-red hover:text-white 2xl:size-11"
            >
              <Icon :name="social.icon" class="size-4 2xl:size-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr class="mt-10 border-neutral-700 2xl:mt-14">

    <div class="mt-8 flex flex-col gap-2 text-sm text-ash lg:flex-row lg:justify-between 2xl:mt-20 2xl:text-xl">
      <p>© {{ currentYear }} SUNSUN PRINT All rights reserved.</p>
      <p class="text-graphite">Developed by SOFT Z DIGITAL</p>
      <p class="uppercase">Print different. Think bigger.</p>
    </div>
  </footer>
</template>

