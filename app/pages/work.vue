<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 mt-10">
        <div class="flex flex-col gap-2">
          <h1 class="text-xs opacity-50 tracking-widest">Selected Work</h1>
          <p class="text-2xl leading-tight dark:font-light">
            Projects spanning brand identity, UI/UX, and digital design.
          </p>
        </div>

        <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
          <a
            v-for="project in projects"
            :key="project.title"
            :href="project.behanceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-2 py-6 first:pt-0 last:pb-0 hover:opacity-70 transition-opacity duration-200">
            <div class="flex flex-row justify-between items-start gap-4">
              <h2 class="text-base font-medium leading-snug">{{ project.title }}</h2>
              <div class="flex items-center gap-1 shrink-0">
                <span class="text-xs opacity-50">{{ project.year }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-200" />
              </div>
            </div>
            <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
                {{ tag.toUpperCase() }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="https://be.net/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>View all on Behance</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

useHead({
  title: "Work",
  meta: [
    {
      name: "description",
      content: "Selected projects spanning brand identity, UI/UX design, and digital experiences.",
    },
  ],
});

const projects = [
  {
    title: "Asterix — Brand Identity System",
    year: 2024,
    tags: ["Branding", "Logo Design", "Identity"],
    description: "A comprehensive brand identity system for a modern creative agency. Developed the visual language, logo suite, and brand guidelines from concept to delivery.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Relay Works — Visual Identity",
    year: 2024,
    tags: ["Branding", "Motion", "Print"],
    description: "Full visual identity for a remote-first productivity platform. Focused on clarity and adaptability across digital and physical touchpoints.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Folio — Portfolio Web App",
    year: 2023,
    tags: ["UI/UX", "Web Design", "Nuxt"],
    description: "Designed and developed a minimal portfolio web application with a focus on typography, whitespace, and performance. Built with Nuxt and Tailwind CSS.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Nusantara Type — Custom Typeface",
    year: 2023,
    tags: ["Type Design", "Typography", "Branding"],
    description: "A custom display typeface inspired by traditional Malay geometric patterns. Designed for use in editorial and brand contexts.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Solara — App UI Design",
    year: 2023,
    tags: ["UI/UX", "Mobile", "Figma"],
    description: "UI/UX design for a solar energy monitoring app. Designed the full user flow, component system, and data visualisation patterns.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Kinetic — Motion Brand Package",
    year: 2022,
    tags: ["Motion Design", "After Effects", "Branding"],
    description: "Motion brand package for a digital media startup. Includes animated logo reveals, transition templates, and a motion design system.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
];
</script>
