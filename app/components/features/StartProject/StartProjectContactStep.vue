<script setup lang="ts">
import { CONTACT_CHANNELS } from '~/constants/startProject'

defineProps<{
  errors: { name?: string, phone?: string, lineId?: string, email?: string, consent?: string }
}>()

const emit = defineEmits<{
  editDetails: []
}>()

const { brief } = useProjectBrief()

const idPrefix = useId()

const contactChannelOptions = Object.values(CONTACT_CHANNELS)
const isLineRequired = computed(() => brief.value.preferredContact === CONTACT_CHANNELS.line)
const isEmailRequired = computed(() => brief.value.preferredContact === CONTACT_CHANNELS.email)
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
      <FormField
        v-model="brief.lineId"
        :label="isLineRequired ? 'LINE ID' : 'LINE ID (ถ้ามี)'"
        placeholder="@yourline หรือ LINE ID"
        autocomplete="off"
        :required="isLineRequired"
        :error="errors.lineId"
      />
      <FormField
        v-model="brief.email"
        type="email"
        inputmode="email"
        :label="isEmailRequired ? 'อีเมล' : 'อีเมล (ถ้ามี)'"
        placeholder="name@example.com"
        autocomplete="email"
        :required="isEmailRequired"
        :error="errors.email"
      />
    </div>

    <fieldset class="mt-8 lg:mt-10 2xl:mt-16">
      <legend class="text-base lg:text-xl 2xl:text-3xl">สะดวกให้ติดต่อกลับทางไหน</legend>
      <div class="mt-2 flex flex-wrap gap-2 lg:mt-3 2xl:mt-6 2xl:gap-3">
        <label
          v-for="(channel, index) in contactChannelOptions"
          :key="channel"
          :for="`${idPrefix}-${index}`"
          class="flex cursor-pointer items-center rounded-full border border-neutral-300 px-5 py-2 text-sm transition-colors hover:border-ink has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-red lg:text-base 2xl:px-7 2xl:py-3 2xl:text-xl"
        >
          <input
            :id="`${idPrefix}-${index}`"
            v-model="brief.preferredContact"
            type="radio"
            :name="`${idPrefix}-preferred-contact`"
            :value="channel"
            class="sr-only"
          >
          {{ channel }}
        </label>
      </div>
    </fieldset>

    <StartProjectSummary class="mt-10 lg:mt-12 2xl:mt-16" @edit="emit('editDetails')" />

    <CheckboxField v-model="brief.consent" required :error="errors.consent" class="mt-8 lg:mt-10 2xl:mt-14">
      ยินยอมให้ใช้ข้อมูลที่กรอกเพื่อการติดต่อกลับเกี่ยวกับคำขอใบเสนอราคานี้
    </CheckboxField>
  </div>
</template>
