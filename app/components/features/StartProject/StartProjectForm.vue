<script setup lang="ts">
import type { BriefStep } from '~/composables/useProjectBrief'

interface StageCopy {
  eyebrow: string
  heading: string
  /** Second heading line, ending in the red serif word */
  headingLead: string
  headingAccent: string
  srHeading: string
  /** Left out where the design has no footnote, which also brings back the divider above the buttons */
  footnote?: string
  nextLabel: string
}

const STEP_COPY: Record<BriefStep, StageCopy> = {
  1: {
    eyebrow: '01 What are we making?',
    heading: 'Choose',
    headingLead: 'your',
    headingAccent: 'thing.',
    srHeading: 'ขอใบเสนอราคา ขั้นที่ 1 จาก 3: เลือกประเภทงาน',
    footnote: '* ยังไม่ต้องมีแบบสำเร็จก็เริ่มบรีฟได้',
    nextLabel: 'ถัดไป: รายละเอียด'
  },
  2: {
    eyebrow: '02 Every detail matters',
    heading: 'Give us',
    headingLead: 'the',
    headingAccent: 'details.',
    srHeading: 'ขอใบเสนอราคา ขั้นที่ 2 จาก 3: รายละเอียดงาน',
    footnote: '* ยังไม่ต้องมีแบบสำเร็จก็เริ่มบรีฟได้',
    nextLabel: 'ถัดไป: ข้อมูลติดต่อ'
  },
  3: {
    eyebrow: '03 Let\'s talk',
    heading: 'Keep in',
    headingLead: '',
    headingAccent: 'touch.',
    srHeading: 'ขอใบเสนอราคา ขั้นที่ 3 จาก 3: ข้อมูลติดต่อ',
    nextLabel: 'ตรวจสอบบรีฟ'
  }
}

// Thai landlines have 9 digits and mobiles 10
const MIN_PHONE_DIGITS = 9
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LINK_PATTERN = /^https?:\/\/\S+\.\S+$/

const { brief, step, saveDraft, restoreDraft, clearDraft, reset } = useProjectBrief()

const stageCopy = computed(() => STEP_COPY[step.value])

type FieldErrors = Partial<Record<'type' | 'subtype' | 'quantity' | 'fileLink' | 'hasUploadedFiles' | 'name' | 'phone' | 'email' | 'consent', string>>

const errors = ref<FieldErrors>({})
const hasTriedCurrentStep = ref(false)
const hasBackButton = computed(() => step.value > 1)
const hasFootnoteRow = computed(() => hasBackButton.value && Boolean(stageCopy.value.footnote))

const briefMessage = computed(() => buildBriefMessage(brief.value))
const isReviewOpen = ref(false)

const formRef = useTemplateRef<HTMLFormElement>('form')

const validateStep = (target: BriefStep): FieldErrors => {
  const found: FieldErrors = {}
  const { type, subtype, quantity, hasFiles, fileLink, hasUploadedFiles, name, phone, email, consent } = brief.value
  if (target === 1 && !type) found.type = 'เลือกประเภทงานก่อนไปขั้นถัดไป'
  if (target === 2) {
    if (!subtype) found.subtype = 'เลือกประเภทงานย่อย'
    if (!/^\d+$/.test(quantity.trim()) || Number(quantity) < 1) found.quantity = 'ใส่จำนวนเป็นตัวเลขตั้งแต่ 1 ขึ้นไป'
    // The link is what ties the files in the shared folder to this brief, so a visitor with files can't leave it out
    if (hasFiles) {
      if (!fileLink.trim()) found.fileLink = 'วางลิงก์ไฟล์งานที่อัปโหลดไว้'
      else if (!LINK_PATTERN.test(fileLink.trim())) found.fileLink = 'ลิงก์ไม่ถูกต้อง ต้องขึ้นต้นด้วย https://'
      if (!hasUploadedFiles) found.hasUploadedFiles = 'ติ๊กยืนยันหลังอัปโหลดไฟล์เรียบร้อยแล้ว'
    }
  }
  if (target === 3) {
    if (!name.trim()) found.name = 'กรุณากรอกชื่อผู้ติดต่อ'
    const phoneDigits = phone.replace(/\D/g, '')
    if (!phoneDigits) found.phone = 'กรุณากรอกเบอร์โทรศัพท์'
    else if (phoneDigits.length < MIN_PHONE_DIGITS) found.phone = 'เบอร์โทรศัพท์ยังไม่ครบ ลองตรวจสอบอีกครั้ง'
    if (email.trim() && !EMAIL_PATTERN.test(email.trim())) found.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    if (!consent) found.consent = 'กรุณายินยอมให้ใช้ข้อมูลก่อนส่งบรีฟ'
  }
  return found
}

// Once the visitor has tried to move on, the messages follow their edits so a fixed field stops showing its error
watch(brief, () => {
  if (hasTriedCurrentStep.value) errors.value = validateStep(step.value)
}, { deep: true })

watch(step, () => {
  hasTriedCurrentStep.value = false
  errors.value = {}
})

// Brings the stepper back into view when the visitor moved on from further down the page, e.g. below the type cards
const scrollToStepper = () => {
  const formTop = formRef.value?.getBoundingClientRect().top
  if (formTop === undefined || formTop >= 0) return
  animateScrollTo(window.scrollY + formTop - 16)
}

const goToStep = (target: BriefStep) => {
  step.value = target
  scrollToStepper()
}

const focusStepHeading = (el: Element) => {
  el.querySelector<HTMLElement>('[data-step-heading]')?.focus({ preventScroll: true })
}

const handleSubmit = async () => {
  hasTriedCurrentStep.value = true
  errors.value = validateStep(step.value)
  if (Object.keys(errors.value).length) {
    await nextTick()
    formRef.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }

  if (step.value < 3) {
    goToStep((step.value + 1) as BriefStep)
    return
  }

  isReviewOpen.value = true
}

// The draft only lives until the brief reaches the shop's inbox. The form itself stays filled while the preview is open,
// for copying or downloading, and starts over once the visitor closes it
const hasSentBrief = ref(false)

const handleBriefSent = () => {
  hasSentBrief.value = true
  clearDraft()
}

watch(isReviewOpen, (open) => {
  if (open || !hasSentBrief.value) return
  hasSentBrief.value = false
  reset()
  scrollToStepper()
})

// Restored after mount rather than during render: the server has no access to the draft, so restoring earlier would
// make the first client render differ from the server's HTML
onMounted(() => {
  restoreDraft()
  watch([brief, step], saveDraft, { deep: true })
})
</script>

<template>
  <!-- Starts right under the logo block, which overhangs the header by 32/104/120px at lg/xl/2xl -->
  <section class="page-x pt-16 pb-14 lg:pt-24 xl:pt-48 2xl:pt-56 2xl:pb-16">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p v-reveal class="flex items-center gap-4 font-sans text-sm font-normal text-neutral-600 uppercase xl:text-base 2xl:text-xl">
          <span class="h-0.5 w-8 bg-brand-red 2xl:w-12" aria-hidden="true" />
          <Transition name="stage" mode="out-in">
            <span :key="step" class="trim-cap-start">{{ stageCopy.eyebrow }}</span>
          </Transition>
        </p>

        <h1 v-reveal="120" class="mt-5 text-5xl leading-[1.3] text-ink uppercase sm:text-6xl lg:text-7xl 2xl:mt-6 2xl:text-8xl">
          <Transition name="stage" mode="out-in">
            <span :key="step" class="block">
              <span class="sr-only">{{ stageCopy.srHeading }} </span>
              <span class="-ml-[0.05em] block font-sans">{{ stageCopy.heading }}</span>
              <span class="-ml-[0.05em] block">
                <span v-if="stageCopy.headingLead" class="font-sans">{{ `${stageCopy.headingLead} ` }}</span>
                <span class="font-serif text-brand-red">{{ stageCopy.headingAccent }}</span>
              </span>
            </span>
          </Transition>
        </h1>
      </div>

      <p v-reveal="240" class="font-sans text-sm font-normal leading-relaxed text-neutral-600 lg:pb-[0.6em] lg:text-right lg:text-base 2xl:text-xl 2xl:leading-[1.65]">
        <span class="lg:block">กรอกข้อมูลที่จำเป็นเพื่อให้ทีมงานเข้าใจลักษณะงาน</span> <span class="lg:block">ติดต่อกลับเพื่อประเมินราคาได้ตรงความต้องการ</span>
      </p>
    </div>

    <form ref="form" novalidate class="mt-6 2xl:mt-4" @submit.prevent="handleSubmit">
      <hr class="border-neutral-300">
      <div v-reveal="300" class="py-5 lg:py-7 2xl:py-8.5">
        <StartProjectStepper @select="goToStep" />
      </div>
      <hr class="border-neutral-300">

      <div class="mt-8 lg:mt-10">
        <Transition name="stage" mode="out-in" @after-enter="focusStepHeading">
          <StartProjectTypeStep v-if="step === 1" :error="errors.type" />
          <StartProjectDetailStep v-else-if="step === 2" :errors="errors" />
          <StartProjectContactStep v-else :errors="errors" @edit-details="goToStep(2)" />
        </Transition>
      </div>

      <!-- Where a back button shares the row with the next button, the footnote (if any) moves above the row in place of the divider -->
      <hr v-if="!hasFootnoteRow" class="mt-12 border-neutral-300 2xl:mt-16">
      <p v-else class="mt-6 font-sans text-sm font-normal text-neutral-600 lg:mt-8 2xl:mt-10 2xl:text-lg">{{ stageCopy.footnote }}</p>

      <div
        class="flex gap-3"
        :class="hasBackButton
          ? ['justify-between', hasFootnoteRow ? 'mt-8 lg:mt-14 2xl:mt-20' : 'mt-6 lg:mt-10 2xl:mt-14']
          : 'mt-6 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-10 2xl:mt-16'"
      >
        <p v-if="!hasBackButton" class="font-sans text-sm font-normal text-neutral-600 2xl:text-lg">{{ stageCopy.footnote }}</p>

        <button
          v-else
          type="button"
          class="inline-flex h-12 items-center justify-center gap-3 border border-ink px-5 text-sm text-ink transition-colors hover:border-brand-red hover:text-brand-red lg:text-base 2xl:h-14.25 2xl:min-w-64 2xl:px-6 2xl:text-xl"
          @click="goToStep((step - 1) as BriefStep)"
        >
          <Icon name="lucide:arrow-left" class="size-4 2xl:size-5" />
          ย้อนกลับ
        </button>
        <button
          type="submit"
          class="inline-flex h-12 grow items-center justify-center gap-3 bg-brand-red px-5 text-sm text-white transition-colors hover:bg-deep-red sm:grow-0 lg:text-base 2xl:h-14.25 2xl:min-w-64 2xl:px-6 2xl:text-xl"
        >
          {{ stageCopy.nextLabel }}
          <Icon name="lucide:arrow-right" class="size-4 2xl:size-5" />
        </button>
      </div>
    </form>

    <StartProjectReviewDialog v-model:open="isReviewOpen" :message="briefMessage" @sent="handleBriefSent" />
  </section>
</template>

<style scoped>
.stage-enter-active {
  transition:
    opacity 0.35s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.stage-leave-active {
  transition: opacity 0.15s ease;
}

.stage-enter-from {
  opacity: 0;
  transform: translateY(0.75rem);
}

.stage-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .stage-enter-from {
    transform: none;
  }
}
</style>
