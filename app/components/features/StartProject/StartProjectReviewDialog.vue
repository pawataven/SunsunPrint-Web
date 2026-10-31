<script setup lang="ts">
import { LINE_ADD_FRIEND_URL } from '~/constants/navigation'

const props = defineProps<{
  message: string
}>()

const emit = defineEmits<{
  sent: []
}>()

const isOpen = defineModel<boolean>('open', { required: true })

const dialogRef = useTemplateRef<HTMLDialogElement>('dialog')

watch(isOpen, (open) => {
  const dialog = dialogRef.value
  if (!dialog) return
  if (open && !dialog.open) dialog.showModal()
  if (!open && dialog.open) dialog.close()
})

// A click whose target is the <dialog> itself landed on the backdrop, outside the content box
const closeOnBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) dialogRef.value?.close()
}

const { brief } = useProjectBrief()
const web3formsAccessKey = useRuntimeConfig().public.web3formsAccessKey

const sendState = ref<'idle' | 'sending' | 'sent' | 'failed'>('idle')

const sendBrief = async () => {
  sendState.value = 'sending'
  try {
    await sendBriefEmail(web3formsAccessKey, brief.value, props.message)
    sendState.value = 'sent'
    emit('sent')
  } catch (error) {
    console.error('Sending the brief failed', error)
    sendState.value = 'failed'
  }
}

// A brief edited after a failed or finished send is a new one, so the button offers to send again
watch(() => props.message, () => {
  if (sendState.value !== 'sending') sendState.value = 'idle'
})

const { copyState, copy } = useCopyText(() => dialogRef.value)
const copyButtonLabel = computed(() => ({ idle: 'คัดลอกบรีฟ', copied: 'คัดลอกแล้ว', failed: 'คัดลอกไม่สำเร็จ' })[copyState.value])

// The byte order mark makes Windows Notepad read the file as UTF-8; without it the Thai text comes out garbled
const downloadBrief = () => {
  const file = new Blob(['﻿', props.message], { type: 'text/plain;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(file)
  link.download = `sunsunprint-brief-${new Date().toISOString().slice(0, 10)}.txt`
  link.click()
  URL.revokeObjectURL(link.href)
}

const secondaryButtonClass = 'inline-flex h-12 items-center justify-center gap-2 border border-ink px-3 text-sm whitespace-nowrap sm:px-5 text-ink uppercase transition-colors hover:border-brand-red hover:text-brand-red sm:h-14 sm:text-base'
</script>

<template>
  <!-- ::backdrop doesn't inherit theme variables in all browsers, so its color is spelled out (ink at 75%) -->
  <!-- Backdrop click is a mouse convenience; keyboard users already close the native dialog with Esc -->
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/no-static-element-interactions -->
  <dialog
    ref="dialog"
    aria-labelledby="review-dialog-title"
    class="m-auto max-h-[92svh] w-[min(45rem,calc(100vw-2rem))] overflow-hidden bg-white text-ink backdrop:bg-[rgb(30_30_30/0.75)]"
    @close="isOpen = false"
    @click="closeOnBackdropClick"
  >
    <!-- A column capped at the dialog's height: everything keeps its size and only the brief box shrinks and scrolls,
         so the heading and the buttons stay on screen however long the brief is -->
    <div class="relative flex max-h-[92svh] flex-col p-6 sm:p-10 sm:pt-12">
      <button
        type="button"
        aria-label="ปิด"
        class="absolute top-6 right-6 flex size-10 items-center justify-center bg-ink text-white transition-colors hover:bg-brand-red sm:top-11 sm:right-10 sm:size-12"
        @click="isOpen = false"
      >
        <Icon name="lucide:x" class="size-5" />
      </button>

      <p class="flex items-center gap-3 text-[0.625rem] tracking-[0.2em] text-brand-red uppercase sm:text-xs">
        <span class="h-0.5 w-8 bg-brand-red" aria-hidden="true" />
        Brief preview
      </p>
      <h2 id="review-dialog-title" class="mt-3 pr-14 text-[2.75rem] leading-[1.05] uppercase sm:text-[4rem]">
        <span class="sr-only">ตรวจสอบบรีฟก่อนส่ง </span>
        <span class="block font-sans">Your brief.</span>
        <span class="block font-serif text-brand-red">All set.</span>
      </h2>
      <p class="mt-3 font-sans text-xs font-normal text-neutral-600 sm:text-sm">
        ตรวจรายละเอียดด้านล่าง แล้วกดส่งบรีฟถึงร้าน หรือคัดลอก / บันทึกเก็บไว้
      </p>

      <p class="mt-6 inline-block border-b border-neutral-400 pr-16 pb-2 text-xs uppercase sm:mt-8 sm:text-sm">
        Sunsun Print — Request a quote
      </p>

      <pre class="mt-4 min-h-24 overflow-y-auto border border-neutral-300 p-5 font-sans text-sm font-normal leading-relaxed whitespace-pre-wrap text-ink sm:p-6 sm:text-base">{{ message }}</pre>

      <div v-if="sendState === 'sent'" class="mt-6 flex flex-col gap-4 border-l-4 border-brand-red bg-ivory p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p class="flex items-start gap-2 text-sm sm:text-base">
          <Icon name="lucide:circle-check" class="mt-0.5 size-5 shrink-0 text-brand-red" />
          ส่งบรีฟถึงร้านเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว
        </p>
        <a
          :href="LINE_ADD_FRIEND_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-ink px-4 text-sm text-white transition-colors hover:bg-brand-red"
        >
          <Icon name="simple-icons:line" class="size-4" />
          คุยต่อทาง LINE
        </a>
      </div>
      <button
        v-else
        type="button"
        :disabled="sendState === 'sending'"
        class="mt-6 flex h-12 w-full items-center justify-center gap-3 bg-brand-red px-5 text-sm text-white transition-colors hover:bg-deep-red disabled:cursor-wait disabled:opacity-70 sm:h-14 sm:text-base"
        @click="sendBrief"
      >
        <Icon :name="sendState === 'sending' ? 'lucide:loader-circle' : 'lucide:send'" class="size-5" :class="{ 'animate-spin': sendState === 'sending' }" />
        {{ sendState === 'sending' ? 'กำลังส่ง...' : sendState === 'failed' ? 'ลองส่งอีกครั้ง' : 'ส่งบรีฟ' }}
      </button>
      <p v-if="sendState === 'failed'" class="mt-2 flex items-start gap-1.5 font-sans text-sm text-brand-red">
        <Icon name="lucide:circle-alert" class="mt-0.5 size-4 shrink-0" />
        ส่งไม่สำเร็จ ลองอีกครั้ง หรือคัดลอกบรีฟไปส่งทาง LINE ได้
      </p>
      <div class="mt-3 grid grid-cols-2 gap-3 sm:gap-6">
        <button type="button" :class="secondaryButtonClass" @click="copy(message)">
          <Icon :name="copyState === 'copied' ? 'lucide:check' : 'lucide:copy'" class="size-4" />
          {{ copyButtonLabel }}
        </button>
        <button type="button" :class="secondaryButtonClass" @click="downloadBrief">
          ดาวน์โหลด .TXT
          <Icon name="lucide:arrow-down" class="size-4" />
        </button>
      </div>
      <p class="sr-only" aria-live="polite">{{ copyState === 'idle' ? '' : copyButtonLabel }}</p>
      <p class="sr-only" aria-live="polite">{{ { idle: '', sending: 'กำลังส่งบรีฟ', sent: 'ส่งบรีฟถึงร้านเรียบร้อย', failed: 'ส่งบรีฟไม่สำเร็จ' }[sendState] }}</p>
    </div>
  </dialog>
</template>
