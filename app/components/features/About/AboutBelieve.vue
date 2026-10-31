<template>
  <section aria-labelledby="about-believe-heading" class="grid overflow-hidden bg-brand-red text-white lg:grid-cols-[922fr_998fr]">
    <div class="flex items-center justify-center px-(--page-gutter) py-16 lg:px-0 lg:py-20">
      <!-- A printed sheet tilted on the table. Everything on it is placed in cqw of the sheet, so it stays one object at
           every size; the reveal animates `transform`, which composes with the separate `rotate` property -->
      <div v-reveal:zoom="100" class="@container relative aspect-570/680 w-[min(75%,22rem)] -rotate-9 lg:w-[61.8%]">
        <div class="absolute inset-0 translate-x-[3.6cqw] translate-y-[3.6cqw] bg-deep-red" aria-hidden="true" />
        <div class="absolute inset-0 bg-ivory text-ink" aria-hidden="true">
          <span class="absolute top-[1.6cqw] left-[1.8cqw] text-[4cqw] leading-none text-brand-red">+</span>
          <span class="absolute top-[1.6cqw] right-[1.8cqw] text-[4cqw] leading-none text-brand-red">+</span>

          <p class="absolute top-[6.2cqw] left-[6cqw] text-[2.05cqw] tracking-[0.18em] uppercase">Sunsun Print / Studio notes</p>

          <p class="absolute top-[38.5cqw] left-[5.5cqw] font-display text-[31cqw] leading-[0.69] font-black tracking-[-0.08em] uppercase">
            <span class="block">Be</span>
            <span class="block text-brand-red">Seen.</span>
          </p>

          <span class="absolute top-[106.8cqw] right-[6cqw] left-[6cqw] h-px bg-ink" />
          <p class="absolute top-[110.4cqw] left-[6cqw] text-[2.05cqw] tracking-[0.18em] uppercase">Type / Ink / Ideas</p>
        </div>
      </div>
    </div>

    <!--
      The divider down the middle is this column's border, and the 10.1% left padding is the design's 101px gap after it.
      Percentage padding follows the column's width (container units would follow the screen here, since an element
      can't query its own size), and the type inside is sized in cqw of the 777px text column
    -->
    <div class="border-t border-white/15 px-(--page-gutter) py-14 lg:border-t-0 lg:border-l lg:pt-[9.9%] lg:pr-(--page-gutter) lg:pb-[10.2%] lg:pl-[10.1%]">
      <div class="@container">
        <p v-reveal class="text-[max(0.625rem,1.5cqw)] tracking-[0.2em] uppercase">02 / What we believe</p>

        <h2 id="about-believe-heading" class="mt-[max(1.25rem,1.7cqw)] uppercase">
          <span class="sr-only">สิ่งที่เราเชื่อ: </span>
          <span v-reveal="100" class="-ml-[0.04em] block font-display text-[max(3.5rem,18cqw)] leading-[0.83] font-black tracking-[-0.08em]">Less</span>
          <span v-reveal="160" class="-ml-[0.04em] block font-display text-[max(3.5rem,18cqw)] leading-[0.83] font-black tracking-[-0.08em]">Noise.</span>
          <span v-reveal="220" class="-ml-[0.03em] mt-[0.17em] block font-serif text-[max(3rem,15.4cqw)] leading-[0.93] font-bold tracking-[-0.08em] text-ink">More</span>
          <span v-reveal="280" class="-ml-[0.04em] mt-[0.19em] block font-display text-[max(3.5rem,18cqw)] leading-[0.83] font-black tracking-[-0.08em]">Impact.</span>
        </h2>

        <p v-reveal="340" class="mt-[max(1.5rem,5.4cqw)] font-sans text-[max(0.9375rem,2.83cqw)] leading-[1.77] font-normal text-white/90">
          <span class="lg:block">ท่ามกลางข้อมูลที่ผ่านตาอยู่ทุกวัน งานที่สื่อสารได้ชัด</span> <span class="lg:block">มีโอกาสเป็นสิ่งที่คนหยุดมองและจดจำ</span>
        </p>

        <hr v-reveal:line="400" class="mt-[max(1.5rem,5.8cqw)] border-white/40">
        <p v-reveal="460" class="mt-[max(0.75rem,2.7cqw)] text-[max(0.5625rem,1.45cqw)] tracking-[0.18em] uppercase">
          Clear message / Thoughtful design / Real-world presence
        </p>
      </div>
    </div>
  </section>
</template>
