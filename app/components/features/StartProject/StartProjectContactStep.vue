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

    <div class="mt-8 lg:mt-10 2xl:mt-14">
      <label for="brief-consent" class="group flex cursor-pointer items-center gap-4 2xl:gap-6">
        <input
          id="brief-consent"
          v-model="brief.consent"
          type="checkbox"
          required
          :aria-invalid="errors.consent ? true : undefined"
          :aria-describedby="errors.consent ? 'brief-consent-error' : undefined"
          class="sr-only"
        >
        <span
          class="flex size-10 shrink-0 items-center justify-center border-2 border-brand-red bg-white text-white transition-colors group-hover:bg-brand-red/10 group-has-checked:bg-brand-red group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-4 group-has-focus-visible:outline-brand-red lg:size-12 2xl:size-17"
          aria-hidden="true"
        >
          <Icon name="lucide:check" class="size-6 opacity-0 transition-opacity group-has-checked:opacity-100 lg:size-7 2xl:size-10" />
        </span>
        <span class="font-sans text-sm font-normal text-neutral-700 lg:text-base 2xl:text-xl">
          ยินยอมให้ใช้ข้อมูลที่กรอกเพื่อการติดต่อกลับเกี่ยวกับคำขอใบเสนอราคานี้<span class="text-brand-red" aria-hidden="true"> *</span>
        </span>
      </label>
      <p v-if="errors.consent" id="brief-consent-error" class="mt-3 flex items-center gap-1.5 font-sans text-sm text-brand-red 2xl:text-base">
        <Icon name="lucide:circle-alert" class="size-4 shrink-0" />
        {{ errors.consent }}
      </p>
    </div>
  </div>
</template>
