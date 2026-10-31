<template>
  <!-- A shade darker than the footer (neutral-900 vs ink), so the two dark blocks still read as separate -->
  <section aria-labelledby="about-cta-heading" class="page-x bg-neutral-900 py-16 text-cream lg:pt-22 lg:pb-26 2xl:pt-24 2xl:pb-31">
    <!-- 646 / 1034 of the design's 1680px content width; type is in cqw of that width -->
    <div class="@container grid gap-10 lg:grid-cols-[646fr_1034fr] lg:gap-0">
      <h2 id="about-cta-heading" class="uppercase lg:col-start-2 lg:row-start-1">
        <span class="sr-only">อย่าปล่อยให้ไอเดียอยู่แค่บนหน้าจอ </span>
        <span v-reveal class="-ml-[0.04em] block font-display text-[max(3.5rem,10.9cqw)] leading-[0.78] font-black tracking-[-0.08em] text-white">Don't</span>
        <span v-reveal="80" class="-ml-[0.04em] block font-display text-[max(3.5rem,10.9cqw)] leading-[0.78] font-black tracking-[-0.08em] text-white">Keep it</span>
        <span v-reveal="160" class="-ml-[0.03em] mt-[0.2em] block font-serif text-[max(3rem,9.8cqw)] leading-[0.9] font-black tracking-[-0.13em] text-brand-red">On screen.</span>
      </h2>

      <div class="lg:col-start-1 lg:row-start-1 lg:pt-[2.2cqw]">
        <p v-reveal class="text-[0.625rem] tracking-[0.2em] uppercase 2xl:text-xs">03 / From idea to IRL</p>
        <p v-reveal="100" class="mt-4 font-sans text-sm leading-[1.85] font-normal lg:text-base 2xl:mt-5 2xl:text-[1.1875rem]">
          <span class="xl:block">บางครั้งสิ่งที่แบรนด์ต้องการ ไม่ใช่คำที่มากขึ้น</span> <span class="xl:block">แต่เป็นวิธีที่ทำให้คนเห็นแล้วเข้าใจทันที</span>
        </p>
        <p v-reveal="180" class="mt-6 font-serif text-lg leading-[1.6] font-bold lg:text-xl 2xl:mt-7 2xl:text-[1.4375rem]">
          <span class="block">A little louder.</span>
          <span class="block">A lot more visible.</span>
        </p>
      </div>
    </div>
  </section>
</template>
