<script setup lang="ts">
const notes = [
  {
    question: 'เรามองงานพิมพ์อย่างไร?',
    answer: ['เรามองว่าเป็นเครื่องมือสื่อสารอย่างหนึ่ง ที่ช่วยให้แบรนด์มีตัวตนชัดขึ้นในสถานที่', 'และสถานการณ์ที่ผู้คนได้พบเห็นจริง']
  },
  {
    question: 'อะไรทำให้งานหนึ่งชิ้นน่าสนใจ?',
    answer: ['ความชัดของข้อความ ความสัมพันธ์ของภาพกับพื้นที่ และรายละเอียดที่ทำให้เรื่อง', 'ราวทั้งหมดไปในทิศทางเดียวกัน']
  },
  {
    question: 'อยากเริ่มต้นกับเราอย่างไร?',
    answer: ['เพียงเล่าโจทย์ ขนาด จำนวน หรือภาพที่มีในใจ เพื่อให้ร้านนำข้อมูลไปพิจารณารูป', 'แบบงานและประเมินราคาเป็นขั้นตอนต่อไป']
  }
]

const formatNoteNumber = (index: number) => String(index + 1).padStart(3, '0')
</script>

<template>
  <section aria-labelledby="about-notes-heading" class="page-x pt-14 pb-12 lg:pt-20 lg:pb-12 2xl:pt-24 2xl:pb-13">
    <!-- Heading sizes are in cqw of the 1680px content width, so the stack keeps the design's proportions -->
    <div class="@container">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="about-notes-heading" class="uppercase">
          <span class="sr-only">บันทึกจากสตูดิโอ: </span>
          <span v-reveal class="-ml-[0.04em] block font-display text-[max(3.5rem,8.6cqw)] leading-[0.88] font-black tracking-[-0.08em] text-ink">The</span>
          <span v-reveal="80" class="-ml-[0.03em] block font-serif text-[max(3.1rem,7.6cqw)] leading-[0.95] font-bold tracking-[-0.08em] text-brand-red">Studio</span>
          <span v-reveal="160" class="-ml-[0.04em] block font-display text-[max(3.5rem,8.6cqw)] leading-[0.88] font-black tracking-[-0.09em] text-ink">Notes.</span>
        </h2>
        <p v-reveal="240" class="font-sans text-sm leading-[1.5] font-normal text-ink lg:text-right lg:text-base xl:text-xl 2xl:text-2xl 2xl:leading-[1.3]">
          <span class="lg:block">สามคำถามสั้น ๆ ที่ช่วยอธิบายมุมมองของ</span> <span class="lg:block">SUNSUN PRINT โดยไม่ต้องเล่าเรื่องผ่านผลงานซ้ำกับหน้า Portfolio</span>
        </p>
      </div>

      <dl class="mt-12 border-t border-neutral-200 lg:mt-16 2xl:mt-20">
        <!-- 136 / 600 of the design's 1680px row: the note number, the question, then the answer from 857px in -->
        <div
          v-for="(note, index) in notes"
          :key="note.question"
          v-reveal="index * 80"
          class="grid gap-x-6 gap-y-2 border-b border-neutral-200 py-6 lg:grid-cols-[136fr_600fr_944fr] lg:gap-x-0 lg:py-9 2xl:pt-9 2xl:pb-10"
        >
          <p class="text-[0.625rem] tracking-[0.05em] text-brand-red uppercase 2xl:text-xs">Note {{ formatNoteNumber(index) }}</p>
          <dt class="text-lg leading-[1.4] font-bold text-ink lg:-mt-1 lg:text-xl 2xl:text-[1.625rem]">{{ note.question }}</dt>
          <dd class="font-sans text-sm leading-[1.6] font-normal text-neutral-600 lg:text-base xl:text-xl 2xl:mt-1 2xl:text-2xl 2xl:leading-[1.35]">
            <span v-for="line in note.answer" :key="line" class="2xl:block">{{ line }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
