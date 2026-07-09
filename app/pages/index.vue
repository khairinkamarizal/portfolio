<template>
  <NuxtLayout name="simple">
    <template #default>
      <GridBackground variant="dots" />
      <ClientOnly>
        <ScrollIndicator />
      </ClientOnly>
      <div class="flex flex-col gap-14 mt-8 pb-8 relative z-10">

        <!-- Hero -->
        <div class="flex flex-col gap-5">
          <!-- Identity row -->
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-1.5">
              <span class="text-xs opacity-40 tracking-widest normal-case font-sans">Creative Designer & Developer</span>
              <h1 class="text-2xl font-bold tracking-tight leading-none" style="font-family: 'Space Mono', monospace">
                KHAIRIN<br />KAMARIZAL
              </h1>
            </div>
            <div class="flex flex-row relative items-center">
              <img
                src="/assets/dp.webp"
                alt="Khairin Kamarizal"
                class="w-16 h-16 rounded-full object-cover object-center shrink-0 ring-2 ring-black/10 dark:ring-white/10" />
              <div
                class="w-10 h-10 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-3 ring-2 ring-white dark:ring-black">
                <AppLogo class="text-white dark:text-black w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Status badge -->
          <StatusBadge />

          <!-- Bio tagline -->
          <p class="text-sm leading-relaxed dark:font-light normal-case font-sans opacity-70 max-w-xs">
            Ambitious and versatile creative designer skilled in branding,
            UI/UX, motion content and web development. Based in Cyberjaya, Malaysia.
          </p>
        </div>

        <!-- Skills marquee strip -->
        <div class="border-y border-black/10 dark:border-white/10 py-2.5 -mx-5 md:-mx-8 lg:-mx-10">
          <MarqueeTicker :items="skills" :speed="30" />
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-4 divide-x divide-black/10 dark:divide-white/10 border border-black/10 dark:border-white/10 py-5">
          <ClientOnly>
            <StatCounter :value="1423" label="BEHANCE VIEWS" />
            <StatCounter :value="38" label="APPRECIATIONS" />
            <StatCounter :value="43" label="FOLLOWERS" />
            <StatCounter :value="4" label="YEARS EXP" suffix="+" />
            <template #fallback>
              <div class="flex flex-col items-center py-1 gap-0.5 col-span-4">
                <span class="text-xs opacity-30 tracking-widest normal-case font-sans">—</span>
              </div>
            </template>
          </ClientOnly>
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

        <Divider variant="dots" />

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
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>View on Behance</span>
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
