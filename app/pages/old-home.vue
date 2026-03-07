<template>
  <div class="w-full">
    <!-- Hero -->
    <section
      class="h-dvh flex flex-col justify-between px-6 pb-6 pt-[76px] md:px-10 md:pb-10 md:pt-[120px]">
      <div class="flex flex-row justify-between items-end">
        <div class="flex flex-col gap-10">
          <h1 class="text-4xl tracking-tight md:w-[50vw] indent-20">
            Design brands, craft websites, and build digital experiences with
            intention, clarity, and care.
          </h1>
          <a
            href="#"
            class="text-2xl w-fit hover:opacity-100 opacity-50 pb-1 transition-opacity"
            >Learn more about my approach <ArrowUpRight
          /></a>
        </div>
        <span class="text-xl">(Scroll)</span>
      </div>
      <AppLogoType class="w-full" />
    </section>

    <!-- Stats Grid -->
    <section
      class="px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 py-16 border-t border-black/10 dark:border-white/10">
      <div class="flex flex-col gap-2">
        <span
          class="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
          Projects
        </span>
        <span class="text-xl md:text-2xl font-medium tracking-tight"
          >More than 50</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <span
          class="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
          Experience
        </span>
        <span class="text-xl md:text-2xl font-medium tracking-tight"
          >Since 2012</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <span
          class="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
          Availability
        </span>
        <a
          href="#"
          class="text-xl md:text-2xl font-medium tracking-tight hover:opacity-50 transition-opacity flex items-center gap-1 group w-fit">
          Start a project
          <span
            class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >↗</span
          >
        </a>
      </div>
      <div class="flex flex-col gap-2">
        <span
          class="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
          Socials
        </span>
        <div
          class="flex flex-wrap gap-x-6 gap-y-2 text-xl md:text-2xl font-medium tracking-tight">
          <a
            href="#"
            class="hover:opacity-50 transition-opacity"
            >Behance</a
          >
          <a
            href="#"
            class="hover:opacity-50 transition-opacity"
            >Dribbble</a
          >
          <a
            href="#"
            class="hover:opacity-50 transition-opacity"
            >Twitter</a
          >
        </div>
      </div>
    </section>

    <!-- Selected Projects -->
    <section class="px-6 md:px-10 mt-20 md:mt-32">
      <div
        class="flex justify-between items-end mb-8 md:mb-12 border-b border-black/10 dark:border-white/10 pb-6 md:pb-8">
        <h2 class="text-4xl md:text-6xl font-medium tracking-tight">
          Selected Projects
        </h2>
        <span class="text-sm md:text-base font-medium">2022 — 2024</span>
      </div>

      <div class="flex flex-col w-full">
        <a
          v-for="project in projects"
          :key="project.title"
          href="#"
          class="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 -mx-6 px-6 md:-mx-10 md:px-10 transition-colors duration-300 cursor-pointer">
          <div class="flex items-center gap-6 md:gap-12 md:w-5/12">
            <span
              class="text-sm md:text-base font-medium text-black/40 dark:text-white/40 group-hover:text-black/100 dark:group-hover:text-white/100 transition-colors">
              {{ project.year }}
            </span>
            <h3
              class="text-3xl md:text-5xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
              {{ project.title }}
            </h3>
          </div>
          <div class="mt-4 md:mt-0 md:w-4/12 text-left">
            <span
              class="text-lg md:text-xl text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
              {{ project.type }}
            </span>
          </div>
          <div
            class="hidden md:flex md:w-2/12 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span
              class="text-4xl bg-white dark:bg-[#222] rounded-full p-2 shadow-sm"
              >↗</span
            >
          </div>
        </a>
      </div>
    </section>

    <!-- What I Do -->
    <section
      class="px-6 md:px-10 mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
      <div class="flex flex-col items-start justify-start">
        <h2 class="text-4xl md:text-6xl font-medium tracking-tight mb-8">
          What I Do
        </h2>
        <a
          href="#"
          class="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#111] dark:bg-[#F3F3F3] text-[#F3F3F3] dark:text-[#111] rounded-full text-lg font-medium hover:opacity-80 transition-all hover:scale-105">
          Download CV
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
      <div class="flex flex-col border-t border-black/10 dark:border-white/10">
        <div
          v-for="(service, i) in services"
          :key="service"
          class="flex items-center py-8 border-b border-black/10 dark:border-white/10 text-2xl md:text-4xl font-medium tracking-tight cursor-default hover:pl-4 transition-all duration-300">
          <span
            class="w-20 md:w-32 text-black/30 dark:text-white/30 text-base md:text-xl transform -translate-y-1">
            {{ String(i + 1).padStart(2, "0") }}.
          </span>
          {{ service }}
        </div>
      </div>
    </section>

    <!-- Statement -->
    <section
      class="px-6 md:px-10 mx-auto mt-40 md:mt-60 mb-32 md:mb-52 max-w-[1300px]">
      <h2
        class="text-[7vw] leading-[1.05] font-medium tracking-[-0.03em] space-y-4">
        <span class="block">
          Whether it's your brand, logotype, or another graphic project, I am
          dedicated.
        </span>
        <span class="block text-black/30 dark:text-white/30">You are too.</span>
      </h2>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Khairin Kamarizal — brand, logo, and graphic designer.",
    },
  ],
});

import { ArrowUpRight } from "lucide-vue-next";

const projects = [
  { year: "2024", title: "Summa", type: "Brand design" },
  { year: "2024", title: "Dune", type: "Graphic design" },
  { year: "2023", title: "Australian Building", type: "Brand design" },
  { year: "2022", title: "Zümer Clothing", type: "Logo design" },
  { year: "2022", title: "Earth Agency", type: "Graphic design" },
];

const services = [
  "Complex brand design",
  "Logo design",
  "Graphic design",
  "Infographic and other",
];
</script>
