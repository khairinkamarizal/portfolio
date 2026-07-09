<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-12 mt-8">

        <!-- Hero -->
        <div class="flex flex-col gap-6">
          <!-- Identity row -->
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-40 tracking-widest normal-case font-sans">Creative Designer & Developer</span>
              <h1 class="text-xl font-bold tracking-tight leading-none" style="font-family: 'Space Mono', monospace">
                KHAIRIN<br />KAMARIZAL
              </h1>
            </div>
            <div class="flex flex-row relative items-center">
              <img
                src="/assets/dp.webp"
                alt="Khairin Kamarizal"
                class="w-14 h-14 rounded-full object-cover object-center shrink-0 ring-2 ring-black/10 dark:ring-white/10" />
              <div
                class="w-10 h-10 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-3 ring-2 ring-white dark:ring-black">
                <AppLogo class="text-white dark:text-black w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Status badge (inline, no external component yet) -->
          <div class="flex items-center gap-2 w-fit normal-case font-sans">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs text-green-600 dark:text-green-400 font-medium tracking-wide">Available for Freelance & Fulltime</span>
          </div>

          <!-- Bio tagline -->
          <p class="text-base leading-snug dark:font-light normal-case font-sans opacity-80">
            Ambitious and versatile creative designer skilled in branding,
            UI/UX, motion content and web development. Based in Cyberjaya, Malaysia.
          </p>
        </div>

        <!-- Skills marquee strip -->
        <div class="border-y border-black/10 dark:border-white/10 py-2 overflow-hidden -mx-5">
          <div class="marquee-track flex gap-6 w-max normal-case font-sans">
            <template v-for="i in 2" :key="i">
              <span v-for="skill in skills" :key="`${i}-${skill}`" class="text-xs opacity-50 tracking-widest whitespace-nowrap shrink-0">
                {{ skill }} <span class="opacity-30 mx-1">·</span>
              </span>
            </template>
          </div>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-3 gap-0 divide-x divide-black/10 dark:divide-white/10 border border-black/10 dark:border-white/10 normal-case font-sans">
          <div class="flex flex-col items-center py-4 px-2 gap-0.5">
            <span class="text-2xl font-bold tracking-tight" style="font-family: 'Space Mono', monospace">1,423</span>
            <span class="text-[10px] opacity-40 tracking-widest text-center">BEHANCE VIEWS</span>
          </div>
          <div class="flex flex-col items-center py-4 px-2 gap-0.5">
            <span class="text-2xl font-bold tracking-tight" style="font-family: 'Space Mono', monospace">38</span>
            <span class="text-[10px] opacity-40 tracking-widest text-center">APPRECIATIONS</span>
          </div>
          <div class="flex flex-col items-center py-4 px-2 gap-0.5">
            <span class="text-2xl font-bold tracking-tight" style="font-family: 'Space Mono', monospace">43</span>
            <span class="text-[10px] opacity-40 tracking-widest text-center">FOLLOWERS</span>
          </div>
        </div>

        <!-- Selected work -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xs opacity-50 tracking-widest">Selected work</h2>
            <NuxtLink
              to="/work"
              class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 normal-case font-sans">
              All work <ArrowUpRight class="w-3 h-3" />
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
            <WorkCard
              v-for="project in featuredProjects"
              :key="project.title"
              :title="project.title"
              :year="project.year"
              :tags="project.tags"
              :description="project.description"
              :url="project.behanceUrl" />
          </div>
        </div>

        <!-- Latest writing -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xs opacity-50 tracking-widest">Latest writing</h2>
            <NuxtLink
              to="/writing"
              class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 normal-case font-sans">
              All posts <ArrowUpRight class="w-3 h-3" />
            </NuxtLink>
          </div>
          <div class="flex flex-col divide-y divide-black/10 dark:divide-white/10">
            <PostCard
              v-for="post in latestPosts"
              :key="post.slug"
              :title="post.title"
              :description="post.description"
              :date="post.date"
              :tags="post.tags"
              :slug="post.slug" />
          </div>
        </div>
      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="mailto:khairinkamarizal@gmail.com"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Hit me up</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
      <NuxtLink
        to="https://be.net/khairinkamarizal"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>View my portfolio</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import { useHead, definePageMeta } from "#imports";

const { data: latestPosts } = await useAsyncData('latest-posts', () =>
  queryCollection('writing')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const skills = [
  "Branding",
  "UI/UX Design",
  "Motion Design",
  "Web Development",
  "Figma",
  "Nuxt.js",
  "Tailwind CSS",
  "Creative Direction",
  "After Effects",
  "Adobe Suite",
]

const featuredProjects = [
  {
    title: "Asterix — Brand Identity System",
    year: 2024,
    tags: ["Branding", "Identity", "Figma"],
    description: "Full brand identity system for a creative agency — logo, colour system, typography, and brand guidelines.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Relayworks — Product Design",
    year: 2024,
    tags: ["UI/UX", "Product", "Figma"],
    description: "End-to-end product design for a B2B workflow automation tool. Covered research, IA, wireframes, and a full component system.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
  {
    title: "Solara — App UI Design",
    year: 2023,
    tags: ["UI/UX", "Mobile", "Figma"],
    description: "UI/UX design for a solar energy monitoring app. Designed the full user flow, component system, and data visualisation patterns.",
    behanceUrl: "https://be.net/khairinkamarizal",
  },
]

definePageMeta({
  layout: false,
});

useHead({
  title: "Khairin Kamarizal — Creative Designer & Developer",
  meta: [
    {
      name: "description",
      content: "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development.",
    },
    {
      property: "og:title",
      content: "Khairin Kamarizal — Creative Designer & Developer",
    },
    {
      property: "og:description",
      content: "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development.",
    },
    {
      property: "og:url",
      content: "https://khair.ink",
    },
  ],
});
</script>

<style scoped>
.marquee-track {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
