<script setup lang="ts">
import { FILE_UPLOAD_FOLDER_URL } from '~/constants/startProject'

defineProps<{
  errors: { fileLink?: string, hasUploadedFiles?: string }
}>()

const { brief } = useProjectBrief()

const idPrefix = useId()

const hasFilesOptions = [
  { value: false, label: 'ไม่มี' },
  { value: true, label: 'มีไฟล์งาน' }
]
</script>

<template>
  <div>
    <fieldset>
      <legend class="text-base lg:text-xl 2xl:text-3xl">มีตัวอย่างงานหรือไฟล์งานไหม</legend>
      <div class="mt-2 flex flex-wrap gap-2 lg:mt-3 2xl:mt-6 2xl:gap-3">
        <label
          v-for="option in hasFilesOptions"
          :key="option.label"
          :for="`${idPrefix}-${option.value}`"
          class="flex cursor-pointer items-center rounded-full border border-neutral-300 px-5 py-2 text-sm transition-colors hover:border-ink has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-red lg:text-base 2xl:px-7 2xl:py-3 2xl:text-xl"
        >
          <input
            :id="`${idPrefix}-${option.value}`"
            v-model="brief.hasFiles"
            type="radio"
            :name="`${idPrefix}-has-files`"
            :value="option.value"
            class="sr-only"
          >
          {{ option.label }}
        </label>
      </div>
    </fieldset>

    <div v-if="brief.hasFiles" class="mt-6 flex flex-col gap-6 lg:mt-8 lg:gap-8 2xl:mt-10 2xl:gap-10">
      <a
        :href="FILE_UPLOAD_FOLDER_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex min-h-20 items-stretch border border-neutral-200 bg-white transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:min-h-28 2xl:min-h-37"
      >
        <span class="flex w-16 shrink-0 items-center justify-center bg-ink text-white lg:w-28 2xl:w-37" aria-hidden="true">
          <Icon name="lucide:arrow-up-from-line" class="size-5 2xl:size-6" />
        </span>
        <span class="flex min-w-0 flex-1 flex-col justify-center px-4 py-3 lg:px-8 2xl:px-13">
          <span class="text-sm lg:text-xl 2xl:text-[2rem]">1. อัปโหลดไฟล์ลง Google Drive</span>
          <span class="mt-1 font-sans text-xs font-normal text-neutral-500 lg:text-sm 2xl:mt-3 2xl:text-lg">
            เปิดโฟลเดอร์ของร้าน แล้วอัปโหลดไฟล์ ตั้งชื่อไฟล์ด้วยชื่อหรือเบอร์โทรของคุณ<span class="sr-only"> (เปิดในแท็บใหม่)</span>
          </span>
        </span>
        <span class="flex items-center pr-4 text-brand-red lg:pr-10 2xl:pr-20" aria-hidden="true">
          <Icon name="lucide:external-link" class="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:size-8 2xl:size-10" />
        </span>
      </a>

      <FormField
        v-model="brief.fileLink"
        type="url"
        inputmode="url"
        label="2. ลิงก์ไฟล์งานที่อัปโหลด"
        placeholder="https://drive.google.com/..."
        hint="ใน Google Drive คลิกขวาที่ไฟล์ แล้วเลือก แชร์ → คัดลอกลิงก์ ถ้ามีหลายไฟล์ ใส่ไว้ในโฟลเดอร์เดียวแล้วคัดลอกลิงก์โฟลเดอร์นั้น"
        autocomplete="off"
        required
        :error="errors.fileLink"
      />

      <CheckboxField v-model="brief.hasUploadedFiles" required :error="errors.hasUploadedFiles">
        ยืนยันว่าอัปโหลดไฟล์ลง Google Drive แล้ว
      </CheckboxField>
    </div>
  </div>
</template>
