<script setup lang="ts">
import { buildLineMessageUrl } from '~/constants/navigation'

const props = defineProps<{
  message: string
}>()

const lineMessageUrl = computed(() => buildLineMessageUrl(props.message))

const { copyState, copy } = useCopyText()

const copyButtonLabel = computed(() => ({ idle: 'คัดลอกบรีฟ', copied: 'คัดลอกแล้ว', failed: 'คัดลอกไม่สำเร็จ' })[copyState.value])

const { brief } = useProjectBrief()
const attachedFiles = computed(() => brief.value.files)

// Phones can hand the files straight to LINE through the share sheet; desktop browsers, and file types the sheet
// refuses (AI, PSD and ZIP on most phones), are left with the reminder alone
const canShareFiles = computed(() =>
  import.meta.client && attachedFiles.value.length > 0 && typeof navigator.canShare === 'function' && navigator.canShare({ files: attachedFiles.value }))

const shareFiles = async () => {
  try {
    await navigator.share({ files: attachedFiles.value })
  } catch {
    // Closing the share sheet rejects too; there is nothing to recover, the files are still listed on screen
  }
}
</script>

<template>
  <div>
    <h2 data-step-heading tabindex="-1" class="text-xl outline-none lg:text-2xl 2xl:text-[2rem]">
      เปิดแชท LINE พร้อมบรีฟของคุณแล้ว
    </h2>
    <p class="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-700 lg:text-base 2xl:mt-4 2xl:text-xl">
      <span class="lg:block">กดส่งข้อความในแชท LINE เพื่อให้ทีมงานได้รับบรีฟ</span> <span class="lg:block">ถ้าแชทไม่เปิดขึ้นมา กดเปิดอีกครั้ง หรือคัดลอกข้อความด้านล่างไปส่งเองได้</span>
    </p>

    <div
      v-if="attachedFiles.length"
      class="mt-6 flex flex-col gap-4 border-l-4 border-brand-red bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between lg:border-l-8 2xl:mt-8 2xl:px-8"
    >
      <div class="min-w-0">
        <p class="text-base 2xl:text-xl">ไฟล์แนบไปกับข้อความอัตโนมัติไม่ได้ อย่าลืมส่ง {{ attachedFiles.length }} ไฟล์นี้ในแชทด้วย</p>
        <p class="mt-1 font-sans text-sm font-normal break-all text-neutral-600 2xl:text-lg">{{ attachedFiles.map(file => file.name).join(', ') }}</p>
      </div>
      <button
        v-if="canShareFiles"
        type="button"
        class="inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-ink px-5 text-white transition-colors hover:bg-brand-red 2xl:h-14.25 2xl:px-6 2xl:text-xl"
        @click="shareFiles"
      >
        <Icon name="lucide:share-2" class="size-5" />
        ส่งไฟล์ผ่าน LINE
      </button>
    </div>

    <div class="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_auto] lg:gap-10 2xl:mt-10">
      <pre class="border border-neutral-300 bg-ivory p-5 font-sans text-sm font-normal leading-relaxed whitespace-pre-wrap text-ink lg:text-base 2xl:p-8 2xl:text-xl">{{ message }}</pre>

      <div class="flex flex-wrap gap-3 lg:flex-col">
        <a
          :href="lineMessageUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-12 items-center justify-center gap-3 bg-brand-red px-5 text-white transition-colors hover:bg-deep-red 2xl:h-14.25 2xl:px-6 2xl:text-xl"
        >
          <Icon name="simple-icons:line" class="size-5" />
          เปิดแชท LINE อีกครั้ง
        </a>
        <button
          type="button"
          class="inline-flex h-12 items-center justify-center gap-3 border border-ink px-5 text-ink transition-colors hover:border-brand-red hover:text-brand-red 2xl:h-14.25 2xl:px-6 2xl:text-xl"
          @click="copy(message)"
        >
          <Icon :name="copyState === 'copied' ? 'lucide:check' : 'lucide:copy'" class="size-5" />
          {{ copyButtonLabel }}
        </button>
        <p class="sr-only" aria-live="polite">{{ copyState === 'idle' ? '' : copyButtonLabel }}</p>
      </div>
    </div>
  </div>
</template>
