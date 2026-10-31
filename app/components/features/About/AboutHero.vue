<template>
  <!-- Starts 155px under the header bar in the design (35px below the logo block that overhangs it) -->
  <section class="mt-12 grid lg:mt-16 lg:grid-cols-[1112fr_808fr] xl:mt-35 2xl:mt-38.75">
    <!-- Bleeds to the left edge of the screen; everything inside is sized in cqw of the panel so the type and the rings
         keep the design's proportions at every width -->
    <div class="@container relative flex flex-col overflow-hidden bg-ink text-cream lg:aspect-1112/853">
      <div class="pointer-events-none absolute top-[25.2cqw] left-[96.5cqw]" aria-hidden="true">
        <span class="absolute size-[27.9cqw] -translate-1/2 rounded-full border border-white/20" />
        <span class="absolute size-[24.5cqw] -translate-1/2 rounded-full border border-white/20" />
      </div>

      <div class="relative flex flex-1 flex-col px-(--page-gutter) pt-[max(2.5rem,7.6cqw)] pb-[max(1.5rem,4.8cqw)] lg:px-[11.6cqw]">
        <p v-reveal class="text-[max(0.5625rem,1.08cqw)] tracking-[0.2em] uppercase">
          About us / Sunsun Print <span class="mx-[1em]" aria-hidden="true">—</span> Studio edition
        </p>

        <h1 class="mt-[max(2rem,7.5cqw)] uppercase">
          <span class="sr-only">เกี่ยวกับ SUNSUN PRINT </span>
          <span v-reveal="120" class="-ml-[0.04em] block font-display text-[24cqw] leading-[0.8] font-black tracking-[-0.08em] lg:text-[20.7cqw]">Hello.</span>
          <span v-reveal="200" class="-ml-[0.04em] block font-display text-[24cqw] leading-[0.8] font-black tracking-[-0.08em] lg:text-[20.7cqw]">We're</span>
          <span v-reveal="280" class="-ml-[0.05em] block font-serif text-[21cqw] leading-[0.9] font-extrabold tracking-[-0.1em] text-brand-red lg:text-[18cqw]">Sunsun.</span>
        </h1>

        <div class="mt-auto pt-[max(1.5rem,3cqw)]">
          <hr v-reveal:line="400" class="border-white/20">
          <div class="mt-[max(0.75rem,2.1cqw)] flex items-center justify-between gap-4 text-[max(0.5625rem,1.08cqw)] tracking-[0.15em] uppercase">
            <p>Not just ink. An idea made visible.</p>
            <p class="hidden items-center gap-[0.5em] sm:flex" aria-hidden="true">
              Scroll to know us
              <Icon name="lucide:arrow-down" class="size-[1.1em]" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-x flex flex-col py-12 lg:py-[4%] lg:pr-(--page-gutter) lg:pl-[10%] 2xl:pt-38">
      <p v-reveal class="text-xs tracking-[0.2em] text-neutral-500 uppercase 2xl:text-sm">The story behind the name</p>

      <div class="mt-8 lg:my-auto lg:pb-[6%]">
        <p v-reveal="100" class="text-xs tracking-[0.2em] text-brand-red uppercase 2xl:text-sm">This is Sunsun</p>
        <h2 v-reveal="180" class="mt-3 text-4xl leading-[1.25] font-black tracking-[-0.01em] text-ink xl:text-[2.75rem] 2xl:mt-5 2xl:text-[3.5rem]">
          <span class="block">เราเชื่อว่า</span>
          <span class="block">ทุกไอเดีย</span>
          <span class="block">ควรมีพื้นที่</span>
          <span class="block">ให้ถูกมองเห็น</span>
        </h2>
        <p v-reveal="260" class="mt-6 font-sans text-sm font-normal leading-[1.8] text-neutral-600 lg:text-base 2xl:mt-8 2xl:text-xl">
          <span class="xl:block">เพราะงานพิมพ์ไม่ได้มีหน้าที่แค่เติมสีบนวัสดุ แต่ช่วยพา</span><span class="xl:block">เรื่องราวของแบรนด์ออกจากหน้าจอ ไปพบผู้คนในพื้นที่จริง</span>
        </p>
      </div>
    </div>
  </section>
</template>
