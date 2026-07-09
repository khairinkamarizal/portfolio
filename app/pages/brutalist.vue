<template>
  <div class="w-full">

    <!-- ============================================ -->
    <!-- HERO: brutalist full-bleed header            -->
    <!-- ============================================ -->
    <section
      class="w-full border-b-4 border-black dark:border-white px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-black dark:bg-white text-white dark:text-black">
      <div class="flex flex-col gap-4">
        <span
          class="text-xs tracking-widest uppercase"
          style="font-family: 'Space Mono', monospace">
          Experimental / Brutalist
        </span>
        <h1
          class="text-[18vw] md:text-[14vw] lg:text-[12vw] font-black leading-none tracking-tighter uppercase"
          style="font-family: 'Space Mono', monospace">
          BRUTAL
        </h1>
        <p class="text-sm max-w-md leading-relaxed opacity-70 mt-4">
          An experimental brutalist layout. Raw grid, heavy type, no decoration.
          This page uses the <code class="font-mono text-xs bg-white/10 dark:bg-black/10 px-1">transparent</code> layout prop.
        </p>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- RAW GRID: no gutters, border-only cells      -->
    <!-- ============================================ -->
    <section class="w-full border-b-4 border-black dark:border-white">
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(item, i) in gridItems"
          :key="item.label"
          :class="[
            'border-r-2 border-black dark:border-white p-6 md:p-8',
            i % 4 === 3 ? 'border-r-0' : '',
            i < 4 ? '' : 'border-t-2 border-black dark:border-white',
          ]">
          <span
            class="block text-3xl md:text-4xl font-black leading-none"
            style="font-family: 'Space Mono', monospace">
            {{ item.value }}
          </span>
          <span class="block text-xs tracking-widest uppercase mt-2 opacity-50">
            {{ item.label }}
          </span>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- MARQUEE: inverted, no gaps                   -->
    <!-- ============================================ -->
    <section class="w-full bg-black dark:bg-white text-white dark:text-black border-b-4 border-black dark:border-white py-4 overflow-hidden">
      <div class="marquee-track flex items-center gap-8 whitespace-nowrap" style="font-family: 'Space Mono', monospace">
        <template v-for="n in 2" :key="n">
          <span
            v-for="word in marqueeWords"
            :key="`${n}-${word}`"
            class="text-sm tracking-widest uppercase font-bold">
            {{ word }} <span class="opacity-30 mx-2">·</span>
          </span>
        </template>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- MANIFESTO: full-width text block             -->
    <!-- ============================================ -->
    <section class="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24 border-b-4 border-black dark:border-white">
      <div class="max-w-4xl">
        <p
          class="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight uppercase"
          style="font-family: 'Space Mono', monospace">
          NO GRADIENTS.<br />
          NO SHADOWS.<br />
          NO ROUNDED CORNERS.<br />
          ONLY STRUCTURE.
        </p>
        <p class="mt-8 text-sm leading-relaxed opacity-60 max-w-xl">
          Brutalist web design removes the veneer of polish to expose the raw
          skeleton of a page. Borders are borders. Grids are grids. Type is type.
          Nothing pretends to be anything other than what it is.
        </p>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- WORK TABLE: brutalist list                   -->
    <!-- ============================================ -->
    <section class="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <h2
        class="text-xs tracking-widest uppercase mb-8 opacity-40"
        style="font-family: 'Space Mono', monospace">
        Selected Works
      </h2>
      <div class="flex flex-col border-t-2 border-black dark:border-white">
        <div
          v-for="work in works"
          :key="work.title"
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 border-b-2 border-black dark:border-white">
          <span
            class="text-xl md:text-2xl font-black uppercase leading-none"
            style="font-family: 'Space Mono', monospace">
            {{ work.title }}
          </span>
          <div class="flex items-center gap-6" style="font-family: 'Space Mono', monospace">
            <span class="text-xs tracking-widest uppercase opacity-40">{{ work.category }}</span>
            <span class="text-xs tracking-widest uppercase opacity-40">{{ work.year }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Brutalist",
  description: "An experimental brutalist layout — raw grid, heavy type, no decoration.",
});

definePageMeta({
  layout: "simple",
});

const gridItems = [
  { value: "5+", label: "Years" },
  { value: "30+", label: "Projects" },
  { value: "12+", label: "Clients" },
  { value: "∞", label: "Coffee" },
];

const marqueeWords = [
  "DESIGN", "CODE", "TYPE", "GRID", "BORDER",
  "BLACK", "WHITE", "MONO", "RAW", "STRUCTURE",
];

const works = [
  { title: "Project Alpha", category: "Engineering", year: "2024" },
  { title: "Project Beta", category: "Mobile", year: "2024" },
  { title: "Project Gamma", category: "Branding", year: "2023" },
  { title: "Project Delta", category: "Design", year: "2023" },
  { title: "Project Epsilon", category: "Engineering", year: "2022" },
];
</script>
