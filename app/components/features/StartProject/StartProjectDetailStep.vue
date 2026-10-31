<script setup lang="ts">
import { INSTALLATION_OPTIONS, NO_FINISH, PROJECT_TYPES, UNSURE_CHOICE } from '~/constants/startProject'

defineProps<{
  errors: { subtype?: string, quantity?: string, fileLink?: string, hasUploadedFiles?: string }
}>()

const { brief } = useProjectBrief()

const selectedType = computed(() => PROJECT_TYPES.find(type => type.id === brief.value.type))
const materialOptions = computed(() => [UNSURE_CHOICE, ...(selectedType.value?.materials ?? [])])
const finishOptions = computed(() => selectedType.value?.finishes && [NO_FINISH, ...selectedType.value.finishes, UNSURE_CHOICE])
const isPackaging = computed(() => selectedType.value?.isPackaging ?? false)

const padDatePart = (value: number) => String(value).padStart(2, '0')
const now = new Date()
const today = `${now.getFullYear()}-${padDatePart(now.getMonth() + 1)}-${padDatePart(now.getDate())}`
</script>

<template>
  <div>
    <h2 data-step-heading tabindex="-1" class="font-sans text-sm font-normal text-neutral-700 outline-none lg:text-base 2xl:text-xl">
      ระบุเท่าที่ทราบได้เลย ช่องที่ไม่แน่ใจให้ร้านช่วยแนะนำภายหลัง
    </h2>

    <StartProjectSelectedType class="mt-6 2xl:mt-10" />

    <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-6 sm:gap-x-6 lg:mt-12 lg:gap-y-10 2xl:mt-16 2xl:gap-x-8 2xl:gap-y-16">
      <FormField
        v-model="brief.subtype"
        label="ประเภทงานย่อย"
        placeholder="เลือกประเภทงานย่อย"
        :options="selectedType?.subtypes ?? []"
        required
        :error="errors.subtype"
        class="col-span-2 sm:col-span-3"
      />
      <FormField v-model="brief.material" label="วัสดุที่ต้องการ" :options="materialOptions" class="col-span-2 sm:col-span-3" />

      <FormField v-model="brief.width" label="กว้าง (ซม.)" inputmode="decimal" :placeholder="isPackaging ? 'เช่น 20' : 'เช่น 100'" class="sm:col-span-2" />
      <FormField v-if="isPackaging" v-model="brief.depth" label="ลึก (ซม.)" inputmode="decimal" placeholder="เช่น 10" class="sm:col-span-2" />
      <FormField v-model="brief.height" label="สูง (ซม.)" inputmode="decimal" :placeholder="isPackaging ? 'เช่น 30' : 'เช่น 200'" class="sm:col-span-2" />
      <!-- Packaging adds a depth field, so quantity moves down a row and shares it with the finish and the date -->
      <FormField
        v-model="brief.quantity"
        label="จำนวน (ชิ้น)"
        inputmode="numeric"
        required
        :error="errors.quantity"
        :class="isPackaging ? 'sm:col-span-2' : 'col-span-2 sm:col-span-2'"
      />

      <template v-if="isPackaging">
        <FormField v-if="finishOptions" v-model="brief.finish" label="เทคนิคตกแต่งพิเศษ" :options="finishOptions" class="col-span-2 sm:col-span-2" />
        <FormField v-model="brief.dueDate" type="date" label="วันที่ต้องการใช้งาน" :min="today" class="col-span-2 sm:col-span-2" />
        <FormField v-model="brief.location" label="สถานที่จัดส่ง / จังหวัด (ถ้ามี)" placeholder="เช่น กรุงเทพฯ เขต..." class="col-span-2 sm:col-span-6" />
      </template>
      <template v-else>
        <FormField v-model="brief.dueDate" type="date" label="วันที่ต้องการใช้งาน" :min="today" class="col-span-2 sm:col-span-3" />
        <FormField v-model="brief.installation" label="ต้องการบริการติดตั้งหรือไม่" :options="INSTALLATION_OPTIONS" class="col-span-2 sm:col-span-3" />
        <FormField v-model="brief.location" label="สถานที่ติดตั้ง / จังหวัด (ถ้ามี)" placeholder="เช่น กรุงเทพฯ เขต..." class="col-span-2 sm:col-span-6" />
      </template>

      <FormField
        v-model="brief.notes"
        label="รายละเอียดเพิ่มเติม / ไอเดียงาน (ถ้ามี)"
        placeholder="อธิบายลักษณะงาน สี ข้อความที่ต้องมี หรือสิ่งที่อยากให้ร้านช่วยแนะนำ..."
        multiline
        class="col-span-2 sm:col-span-6"
      />

      <StartProjectFileUpload :errors="errors" class="col-span-2 sm:col-span-6" />
    </div>
  </div>
</template>
