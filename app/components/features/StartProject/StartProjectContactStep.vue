<script setup lang="ts">
defineProps<{
  errors: { name?: string, phone?: string, email?: string, consent?: string }
}>()

const emit = defineEmits<{
  editDetails: []
}>()

const { brief } = useProjectBrief()
</script>

<template>
  <div>
    <h2 data-step-heading tabindex="-1" class="font-sans text-sm font-normal text-neutral-700 outline-none lg:text-base 2xl:text-xl">
      ฝากช่องทางติดต่อเพื่อให้ร้านพูดคุยรายละเอียดและประเมินราคา
    </h2>

    <StartProjectSelectedType class="mt-6 2xl:mt-10" />

    <div class="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10 2xl:mt-16 2xl:gap-x-8 2xl:gap-y-16">
      <FormField
        v-model="brief.name"
        label="ชื่อผู้ติดต่อ"
        placeholder="ชื่อหรือบริษัท"
        autocomplete="name"
        required
        :error="errors.name"
      />
      <FormField
        v-model="brief.phone"
        type="tel"
        inputmode="tel"
        label="เบอร์โทรศัพท์"
        placeholder="0XX-XXX-XXXX"
        autocomplete="tel"
        required
        :error="errors.phone"
      />
      <FormField v-model="brief.lineId" label="LINE ID (ถ้ามี)" placeholder="@yourline หรือ LINE ID" autocomplete="off" />
      <FormField
        v-model="brief.email"
        type="email"
        inputmode="email"
        label="อีเมล (ถ้ามี)"
        placeholder="name@example.com"
        autocomplete="email"
        :error="errors.email"
      />
    </div>

    <StartProjectSummary class="mt-10 lg:mt-12 2xl:mt-16" @edit="emit('editDetails')" />

    <CheckboxField v-model="brief.consent" required :error="errors.consent" class="mt-8 lg:mt-10 2xl:mt-14">
      ยินยอมให้ใช้ข้อมูลที่กรอกเพื่อการติดต่อกลับเกี่ยวกับคำขอใบเสนอราคานี้
    </CheckboxField>
  </div>
</template>
