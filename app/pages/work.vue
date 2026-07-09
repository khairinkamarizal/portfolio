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
          <WorkCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :year="project.year"
            :tags="project.tags"
            :description="project.description"
            :url="project.behanceUrl" />
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
  title: "Work — Khairinkamarizal",
  meta: [
    {
      name: "description",
      content: "Selected work and projects",
    },
    {
      property: "og:title",
      content: "Work — Khairinkamarizal",
    },
    {
      property: "og:description",
      content: "Selected work and projects spanning brand identity, UI/UX design, and digital experiences.",
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
