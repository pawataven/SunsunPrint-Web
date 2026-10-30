<script setup lang="ts">
import logoUrl from '~/assets/images/SUNSUN_PRINT.png'
import { LINE_ADD_FRIEND_URL, LINE_ID } from '~/constants/navigation'

const { isOpen, close } = useLineDialog()

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

const copyState = ref<'idle' | 'copied' | 'failed'>('idle')
let resetCopyStateTimer: ReturnType<typeof setTimeout> | undefined

// The older execCommand route still works where the Clipboard API is refused: non-HTTPS origins and the in-app
// browsers of LINE and Facebook, which is where many visitors will open this
const copyWithSelection = (text: string) => {
  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  dialogRef.value?.append(field)
  field.select()
  const copied = document.execCommand('copy')
  field.remove()
  return copied
}

const copyLineId = async () => {
  try {
    await navigator.clipboard.writeText(LINE_ID)
    copyState.value = 'copied'
  } catch {
    // If both routes fail, the ID is still on screen and selectable
    copyState.value = copyWithSelection(LINE_ID) ? 'copied' : 'failed'
  }
  clearTimeout(resetCopyStateTimer)
  resetCopyStateTimer = setTimeout(() => (copyState.value = 'idle'), 2000)
}

const copyButtonLabel = computed(() => ({ idle: 'คัดลอก ID', copied: 'คัดลอกแล้ว', failed: 'คัดลอกไม่สำเร็จ' })[copyState.value])

onBeforeUnmount(() => clearTimeout(resetCopyStateTimer))
</script>

<template>
  <!-- ::backdrop doesn't inherit theme variables in all browsers, so its color is spelled out (ink at 75%) -->
  <!-- Backdrop click is a mouse convenience; keyboard users already close the native dialog with Esc -->
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/no-static-element-interactions -->
  <dialog
    ref="dialog"
    aria-labelledby="line-dialog-title"
    class="m-auto max-h-[90vh] w-[min(26rem,calc(100vw-2rem))] overflow-y-auto bg-ivory text-ink backdrop:bg-[rgb(30_30_30/0.75)]"
    @close="close"
    @click="closeOnBackdropClick"
  >
    <div class="relative p-6 sm:p-8">
      <button
        type="button"
        aria-label="ปิด"
        class="absolute top-4 right-4 flex size-10 items-center justify-center bg-ink text-white transition-colors hover:bg-brand-red"
        @click="dialogRef?.close()"
      >
        <Icon name="lucide:x" class="size-5" />
      </button>

      <p class="flex items-center gap-3 text-xs tracking-[0.15em] uppercase">
        <span class="h-0.5 w-8 bg-brand-red" aria-hidden="true" />
        Line official
      </p>
      <h2 id="line-dialog-title" class="mt-4 text-2xl">แอดไลน์ SUNSUN PRINT</h2>
      <p class="mt-2 font-sans text-sm font-normal text-neutral-600">สแกน QR ด้วยแอป LINE หรือกดเปิดในแอปเพื่อเพิ่มเพื่อน</p>

      <!--
        The 10% padding is the code's quiet zone (4 of its 41 modules a side), which scanners need to find the edges.
        The code leaves a blank square of 8 modules (~20% of this card) in the middle for the logo; error correction H
        keeps it scannable
      -->
      <div class="relative mt-6 border border-neutral-300 bg-white p-[10%] shadow-[0.5rem_0.5rem_0_var(--color-brand-red)]">
        <img
          src="/images/contact/line-qr.svg"
          :alt="`QR code สำหรับเพิ่มเพื่อน LINE ${LINE_ID}`"
          width="264"
          height="264"
          class="aspect-square w-full"
        >
        <div class="absolute top-1/2 left-1/2 flex size-[16%] -translate-1/2 items-center justify-center bg-brand-red p-[2%] outline-4 outline-white" aria-hidden="true">
          <img :src="logoUrl" alt="" class="size-full object-contain">
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between gap-3 border border-ink px-4 py-3">
        <div>
          <p class="text-xs text-neutral-500 uppercase">Line ID</p>
          <p class="mt-1 text-lg select-all">{{ LINE_ID }}</p>
        </div>
        <button
          type="button"
          class="inline-flex shrink-0 items-center gap-2 bg-ink px-4 py-2.5 text-sm text-white transition-colors hover:bg-brand-red"
          @click="copyLineId"
        >
          <Icon :name="copyState === 'copied' ? 'lucide:check' : 'lucide:copy'" class="size-4" />
          {{ copyButtonLabel }}
        </button>
      </div>
      <p class="sr-only" aria-live="polite">{{ copyState === 'idle' ? '' : copyButtonLabel }}</p>

      <a
        :href="LINE_ADD_FRIEND_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-3 flex items-center justify-center gap-2 bg-brand-red px-4 py-3.5 text-white transition-colors hover:bg-deep-red"
      >
        <Icon name="simple-icons:line" class="size-5" />
        เปิดในแอป LINE
      </a>
    </div>
  </dialog>
</template>
