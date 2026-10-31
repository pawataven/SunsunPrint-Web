<script setup lang="ts">
// The barcode mark from the design, bar by bar: tops aligned, three heights (of 70), black or red
const barcodeBars = [
  { height: 70, isRed: false },
  { height: 70, isRed: false },
  { height: 49, isRed: true },
  { height: 27, isRed: false },
  { height: 70, isRed: false },
  { height: 49, isRed: true },
  { height: 70, isRed: false },
  { height: 27, isRed: false },
  { height: 49, isRed: true },
  { height: 70, isRed: false },
  { height: 70, isRed: false },
  { height: 27, isRed: true }
]
const BAR_WIDTH = 14
const BAR_PITCH = 20
</script>

<template>
  <section aria-labelledby="about-story-heading" class="page-x py-14 lg:pt-12 lg:pb-14 2xl:pt-16 2xl:pb-15">
    <!-- 358 / 742 / 580 of the design's 1680px content width; the right column's left padding is the gap before it -->
    <div class="grid gap-y-10 lg:grid-cols-[358fr_742fr_580fr] lg:grid-rows-[auto_auto] lg:gap-y-0">
      <div v-reveal class="lg:col-start-1 lg:row-start-1">
        <p class="inline-block bg-ink px-3 py-2 text-[0.625rem] tracking-[0.15em] text-white uppercase 2xl:px-4 2xl:py-2.5 2xl:text-xs">
          01 / Our story
        </p>
        <p class="mt-4 text-[0.625rem] tracking-[0.2em] text-neutral-500 uppercase 2xl:mt-5 2xl:text-xs">A short introduction</p>
      </div>

      <div class="@container lg:col-start-2 lg:row-start-1 lg:pt-14 2xl:pt-21">
        <h2 id="about-story-heading" class="text-[max(2.75rem,13.3cqw)] leading-[1.15] font-black tracking-[-0.01em] text-ink">
          <span v-reveal="100" class="block">ไม่ใช่แค่</span>
          <span v-reveal="180" class="block">งานพิมพ์</span>
          <span v-reveal="260" class="block text-brand-red">แต่คือการสื่อสาร</span>
        </h2>
      </div>

      <div class="@container lg:col-start-2 lg:row-start-2">
        <hr v-reveal:line="300" class="border-neutral-500 lg:mt-8 2xl:mt-10">
        <blockquote v-reveal="380" class="mt-6 font-serif text-[max(1.375rem,5.35cqw)] leading-[1.65] font-bold text-ink 2xl:mt-7">
          <p><span class="lg:block lg:whitespace-nowrap">“Good print doesn't just fill a space.</span> <span class="lg:block">It makes a point.”</span></p>
        </blockquote>
      </div>

      <div
        v-reveal="200"
        class="flex flex-col gap-5 font-sans text-sm font-normal leading-[1.85] text-neutral-700 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:gap-6 lg:pt-8 lg:pl-[20%] lg:text-base 2xl:gap-6 2xl:pt-12 2xl:text-[1.1875rem] 2xl:leading-[1.95]"
      >
        <p>
          <span class="2xl:block"><strong class="font-semibold text-ink">SUNSUN PRINT</strong> คือชื่อที่เราอยากให้ผู้คนเชื่อมโยงกับงาน</span><span class="2xl:block">พิมพ์ที่มีความหมายต่อภาพลักษณ์ของแบรนด์</span>
        </p>
        <p>
          <span class="2xl:block">ตั้งแต่ข้อความเล็ก ๆ บนป้าย ไปจนถึงงานที่เป็นส่วนหนึ่ง</span><span class="2xl:block">ของพื้นที่ สิ่งสำคัญไม่ใช่แค่ทำให้งานเสร็จ แต่คือการคิดว่า</span><span class="2xl:block">งานชิ้นนั้นจะสื่ออะไร และผู้คนจะรู้สึกอย่างไรเมื่อได้เห็น</span>
        </p>
        <p>
          <span class="2xl:block">เราอยากให้แต่ละไอเดียได้เจอรูปแบบที่เหมาะกับตัวเอง</span> <span class="2xl:block">และสามารถเล่าเรื่องได้ชัดเจนในโลกจริง</span>
        </p>
      </div>

      <!-- Its top lines up with the rule above the quote, which is why it sits in the second grid row -->
      <svg
        v-reveal="450"
        :viewBox="`0 0 ${(barcodeBars.length - 1) * BAR_PITCH + BAR_WIDTH} 70`"
        class="hidden w-[65%] max-w-58 self-start lg:col-start-1 lg:row-start-2 lg:mt-8 lg:block 2xl:mt-10"
        aria-hidden="true"
      >
        <rect
          v-for="(bar, index) in barcodeBars"
          :key="index"
          :x="index * BAR_PITCH"
          y="0"
          :width="BAR_WIDTH"
          :height="bar.height"
          :class="bar.isRed ? 'fill-brand-red' : 'fill-ink'"
        />
      </svg>
    </div>
  </section>
</template>
