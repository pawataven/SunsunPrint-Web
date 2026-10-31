<script setup lang="ts">
const props = defineProps<{
  /** Lower-case, without the dot */
  extensions: string[]
  hint: string
}>()

const files = defineModel<File[]>({ required: true })

const id = useId()
const isDragging = ref(false)
const rejectedNames = ref<string[]>([])

const acceptAttribute = computed(() => props.extensions.map(extension => `.${extension}`).join(','))

const isAccepted = (file: File) => props.extensions.includes(file.name.split('.').pop()?.toLowerCase() ?? '')
const isSameFile = (a: File, b: File) => a.name === b.name && a.size === b.size && a.lastModified === b.lastModified

// The picker already filters by `accept`, but dropped files arrive unfiltered
const addFiles = (incoming: FileList | null | undefined) => {
  const picked = [...(incoming ?? [])]
  rejectedNames.value = picked.filter(file => !isAccepted(file)).map(file => file.name)
  const fresh = picked.filter(file => isAccepted(file) && !files.value.some(existing => isSameFile(existing, file)))
  files.value = [...files.value, ...fresh]
}

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  addFiles(input.files)
  // Cleared so choosing the same file again (after removing it) still fires a change
  input.value = ''
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  addFiles(event.dataTransfer?.files)
}

// dragleave also fires when the pointer moves onto a child of the zone, which would make the highlight flicker
const handleDragLeave = (event: DragEvent) => {
  if (!(event.currentTarget as Node).contains(event.relatedTarget as Node | null)) isDragging.value = false
}

const removeFile = (index: number) => {
  files.value = files.value.filter((_, fileIndex) => fileIndex !== index)
}

const formatFileSize = (bytes: number) =>
  bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`
</script>

<template>
  <div>
    <!-- Dropping is a pointer convenience; keyboard and screen reader users get the real file input inside the label -->
    <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
    <label
      :for="id"
      class="group flex min-h-20 cursor-pointer items-stretch border bg-white transition-colors hover:border-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-brand-red lg:min-h-28 2xl:min-h-37"
      :class="isDragging ? 'border-brand-red bg-ivory' : 'border-neutral-200'"
      @dragover.prevent="isDragging = true"
      @dragleave="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <span class="flex w-16 shrink-0 items-center justify-center bg-ink text-white lg:w-28 2xl:w-37" aria-hidden="true">
        <Icon name="lucide:arrow-up-from-line" class="size-5 2xl:size-6" />
      </span>
      <span class="flex min-w-0 flex-1 flex-col justify-center px-4 py-3 lg:px-8 2xl:px-13">
        <span class="text-sm uppercase lg:text-xl 2xl:text-[2rem]">Have a file? Drop it here.</span>
        <span class="mt-1 font-sans text-xs font-normal text-neutral-500 lg:text-sm 2xl:mt-3 2xl:text-lg">{{ hint }}</span>
      </span>
      <span class="flex items-center pr-4 text-brand-red lg:pr-10 2xl:pr-20" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-7 transition-transform group-hover:rotate-90 lg:size-9 2xl:size-12">
          <path d="M12 2v20M2 12h20" />
        </svg>
      </span>
      <input :id="id" type="file" multiple :accept="acceptAttribute" class="sr-only" @change="handleChange">
    </label>

    <p v-if="rejectedNames.length" role="alert" class="mt-3 flex items-center gap-1.5 font-sans text-sm text-brand-red 2xl:text-base">
      <Icon name="lucide:circle-alert" class="size-4 shrink-0" />
      ไม่รองรับไฟล์ {{ rejectedNames.join(', ') }}
    </p>

    <ul v-if="files.length" aria-label="ไฟล์ที่เลือก" class="mt-3 flex flex-col gap-2 2xl:mt-4">
      <li
        v-for="(file, index) in files"
        :key="`${file.name}-${file.size}-${file.lastModified}`"
        class="flex items-center gap-3 border border-neutral-200 bg-ivory/50 py-2 pr-2 pl-4 font-sans text-sm font-normal 2xl:text-lg"
      >
        <Icon name="lucide:file" class="size-4 shrink-0 text-neutral-500 2xl:size-5" />
        <span class="min-w-0 flex-1 truncate">{{ file.name }}</span>
        <span class="shrink-0 text-neutral-500">{{ formatFileSize(file.size) }}</span>
        <button
          type="button"
          :aria-label="`ลบไฟล์ ${file.name}`"
          class="flex size-9 shrink-0 items-center justify-center text-neutral-500 transition-colors hover:text-brand-red"
          @click="removeFile(index)"
        >
          <Icon name="lucide:x" class="size-4 2xl:size-5" />
        </button>
      </li>
    </ul>
  </div>
</template>
