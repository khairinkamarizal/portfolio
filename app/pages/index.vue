<template>
  <NuxtLayout name="simple">
    <template #default>
      <ClientOnly>
        <ScrollIndicator />
      </ClientOnly>

      <!-- ==================== HERO ==================== -->
      <section id="main-content" aria-describedby="hero-bio" class="relative min-h-[88vh] flex flex-col justify-between px-8 pt-8 pb-10 border-b border-black/8 dark:border-white/8">
        <GridBackground variant="dots" class="z-0" />
        <!-- Top row: number + avatar cluster -->
        <div class="relative z-10 flex items-start justify-between">
          <span class="font-mono text-[9px] tracking-[0.3em] uppercase opacity-20">001 / Index</span>
          <div class="flex flex-row relative items-center">
            <img
              src="/assets/dp.webp"
              alt="Khairin Kamarizal"
              width="64"
              height="64"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              class="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center shrink-0 ring-1 ring-black/15 dark:ring-white/15" />
            <div
              class="w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-2 ring-2 ring-white dark:ring-black">
              <AppLogo class="text-white dark:text-black w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>

        <!-- Main hero text: takes up space boldly -->
        <div class="relative z-10 flex-1 flex flex-col justify-center py-8">
          <p class="font-mono text-[9px] tracking-[0.3em] uppercase opacity-20 mb-4">001 / Home</p>
          <div class="overflow-hidden">
            <h1 class="font-mono font-bold uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,10vw,7rem)] animate-appear opacity-0">
              Khairin<br />Kamarizal
            </h1>
          </div>
          <FadeText :delay="200" class="mt-5">
            <span class="mono-label italic tracking-[-0.02em] animate-appear animate-appear-delay-1">
              Creative Designer &amp; Developer
            </span>
          </FadeText>
          <div class="mt-4 flex flex-col gap-3 max-w-xs">
            <p id="hero-bio" class="text-sm leading-relaxed opacity-55 font-sans font-light max-w-[280px]">
              Designer and developer crafting digital experiences at the intersection of aesthetics and function. Cyberjaya, Malaysia.
            </p>
            <StatusBadge text="Available for projects" />
          </div>
          <div class="flex items-center gap-6 mt-6">
            <NuxtLink
              to="/work"
              class="font-mono font-medium text-xs tracking-[0.15em] uppercase px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:opacity-75 transition-all duration-200">
              View Work
            </NuxtLink>
            <a
              href="mailto:khairinkamarizal@gmail.com"
              class="font-mono text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors duration-200 opacity-70 hover:opacity-100">
              Contact
            </a>
          </div>
        </div>

        <!-- Bottom row: keyboard hint -->
        <div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between flex-wrap gap-3">
          <span class="hidden lg:block mono-label opacity-0 hover:opacity-20 transition-opacity duration-300">
            Press G then W to go to work
          </span>
        </div>
      </section>

      <!-- ==================== SKILLS MARQUEE ==================== -->
      <RevealOnScroll variant="fade-up">
        <div class="border-b border-black/8 dark:border-white/8 py-3">
          <MarqueeTicker :items="skills" :speed="30" />
        </div>
      </RevealOnScroll>

      <!-- ==================== STATS ==================== -->
      <RevealOnScroll variant="fade-up" :delay="100">
        <section aria-label="Statistics" class="border-b border-black/8 dark:border-white/8">
          <div class="grid grid-cols-2 md:grid-cols-4">
            <ClientOnly>
              <div class="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150 tabular-nums"><StatCounter :value="1423" label="BEHANCE VIEWS" /></div>
              <div class="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150 tabular-nums"><StatCounter :value="38" label="APPRECIATIONS" /></div>
              <div class="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150 tabular-nums"><StatCounter :value="43" label="FOLLOWERS" /></div>
              <div class="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150 tabular-nums"><StatCounter :value="5" label="YEARS EXP" suffix="+" /></div>
              <template #fallback>
                <div class="col-span-4 py-6 flex items-center justify-center opacity-30 text-xs font-mono">Loading...</div>
              </template>
            </ClientOnly>
          </div>
        </section>
      </RevealOnScroll>

      <!-- ==================== FEATURED WORK ==================== -->
      <div class="border-t border-black/8 dark:border-white/8" />
      <RevealOnScroll variant="fade-up" :delay="50">
        <section class="px-8 py-10" aria-label="Featured work">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <span class="mono-label opacity-25">002</span>
              <span class="mono-label">Selected Work</span>
            </div>
            <NuxtLink to="/work" class="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
              All work <ArrowUpRight class="w-3 h-3" />
            </NuxtLink>
          </div>
          <div class="grid grid-cols-1 gap-8">
            <WorkCard
              v-for="project in featuredProjects"
              :key="project.title"
              :title="project.title"
              :year="project.year"
              :tags="project.tags"
              :description="project.description"
              :category="project.category"
              :url="project.behanceUrl" />
          </div>
        </section>
      </RevealOnScroll>

      <!-- Divider between featured work and latest writing -->
      <div class="border-t border-black/8 dark:border-white/8" />

      <!-- ==================== LATEST WRITING ==================== -->
      <RevealOnScroll v-if="latestPosts?.length" variant="fade-up" :delay="50">
        <section class="px-8 py-10">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <span class="mono-label opacity-25">003</span>
              <span class="mono-label">Latest Writing</span>
            </div>
            <NuxtLink to="/writing" class="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
              All posts <ArrowUpRight class="w-3 h-3" />
            </NuxtLink>
          </div>
          <div class="flex flex-col divide-y divide-black/8 dark:divide-white/8">
            <PostCard
              v-for="post in latestPosts"
              :key="post._path"
              :post="post" />
          </div>
        </section>
      </RevealOnScroll>

    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";

const { data: latestPosts } = await useAsyncData("latest-posts", () =>
  queryCollection("writing").order("date", "DESC").limit(3).all()
);

const featuredProjects = [
  {
    title: "FRONTFACE®",
    year: 2024,
    tags: ["Branding", "Identity", "Logo"],
    description: "Bold brand identity system built around a strong typographic foundation.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
  },
  {
    title: "Mero&Kero",
    year: 2023,
    tags: ["Branding", "Identity", "Logo"],
    description: "Brand identity with 4 appreciations. Playful yet refined visual language.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
  },
  {
    title: "Datalyse Logo",
    year: 2023,
    tags: ["Logo", "Design", "Identity"],
    description: "Top performer with 5 appreciations. Clean and modern approach to data brand identity.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Logo",
  },
];

const skills = [
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Motion Design",
  "Figma",
  "Vue.js",
  "Nuxt",
  "Tailwind CSS",
  "Adobe CC",
  "Typography",
  "Creative Direction",
];

definePageMeta({
  layout: false,
});

useHead({
  title: "Khairin Kamarizal — Creative Designer & Developer",
  meta: [
    {
      name: "description",
      content: "Designer and developer crafting digital experiences at the intersection of aesthetics and function. Cyberjaya, Malaysia.",
    },
    { property: "og:title", content: "Khairin Kamarizal — Creative Designer & Developer" },
    { property: "og:description", content: "Designer and developer crafting digital experiences at the intersection of aesthetics and function. Cyberjaya, Malaysia." },
    { property: "og:url", content: "https://khair.ink" },
  ],
});
</script>
