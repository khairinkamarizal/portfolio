<template>
  <NuxtLayout name="simple">
    <template #default>
      <ClientOnly>
        <ScrollIndicator />
      </ClientOnly>

      <!-- ==================== HERO ==================== -->
      <section class="relative min-h-[90vh] flex flex-col justify-between px-8 pt-10 pb-10 border-b border-black/8 dark:border-white/8">
        <GridBackground variant="dots" class="z-0" />
        <!-- Top row: number + avatar cluster -->
        <div class="relative z-10 flex items-start justify-between">
          <span class="text-[10px] font-mono tracking-[0.3em] uppercase opacity-30">001 / Index</span>
          <div class="flex flex-row relative items-center">
            <img
              src="/assets/dp.webp"
              alt="Khairin Kamarizal"
              loading="eager"
              decoding="async"
              class="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center shrink-0 ring-1 ring-black/10 dark:ring-white/10" />
            <div
              class="w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-3 ring-2 ring-white dark:ring-black">
              <AppLogo class="text-white dark:text-black w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>

        <!-- Main hero text: takes up space boldly -->
        <div class="relative z-10 flex-1 flex flex-col justify-center py-8">
          <div class="overflow-hidden">
            <h1 class="font-mono font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,10vw,7rem)]">
              Khairin<br />Kamarizal
            </h1>
          </div>
          <div class="mt-6 flex flex-col gap-3 max-w-xs">
            <StatusBadge text="Available for projects" />
            <p class="text-sm leading-relaxed opacity-55 font-sans">
              Creative designer &amp; developer. Branding, UI/UX,<br class="hidden md:block" /> motion &amp; web. Based in Cyberjaya, MY.
            </p>
          </div>
        </div>

        <!-- Bottom row: role + CTAs -->
        <div class="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <span class="font-mono text-xs tracking-[0.25em] uppercase opacity-40 italic">
            Creative Designer &amp; Developer
          </span>
          <span class="hidden lg:block font-mono text-[9px] tracking-[0.2em] uppercase opacity-20">
            Press G then W to go to work
          </span>
          <div class="flex items-center gap-3">
            <NuxtLink
              to="/work"
              class="font-mono text-xs tracking-[0.15em] uppercase px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:opacity-75 transition-opacity duration-200">
              View Work
            </NuxtLink>
            <a
              href="mailto:khairinkamarizal@gmail.com"
              class="font-mono text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors duration-200 opacity-70 hover:opacity-100">
              Get in Touch
            </a>
          </div>
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
        <section aria-label="Statistics">
          <div class="grid grid-cols-2 md:grid-cols-4 border-t border-b border-black/8 dark:border-white/8">
            <ClientOnly>
              <StatCounter :value="1423" label="BEHANCE VIEWS" />
              <StatCounter :value="38" label="APPRECIATIONS" />
              <StatCounter :value="43" label="FOLLOWERS" />
              <StatCounter :value="5" label="YEARS EXP" suffix="+" />
              <template #fallback>
                <div class="col-span-4 py-6 flex items-center justify-center opacity-30 text-xs font-mono">Loading...</div>
              </template>
            </ClientOnly>
          </div>
        </section>
      </RevealOnScroll>

      <!-- ==================== FEATURED WORK ==================== -->
      <RevealOnScroll variant="fade-up" :delay="50">
        <section class="px-8 py-10" aria-label="Featured work">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[9px] tracking-[0.25em] uppercase opacity-25">002</span>
              <span class="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">Selected Work</span>
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
              :category="project.category" />
          </div>
        </section>
      </RevealOnScroll>

      <!-- ==================== LATEST WRITING ==================== -->
      <RevealOnScroll v-if="latestPosts?.length" variant="fade-up" :delay="50">
        <section class="px-8 py-10 border-t border-black/8 dark:border-white/8">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[9px] tracking-[0.25em] uppercase opacity-25">003</span>
              <span class="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">Latest Writing</span>
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
      content: "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development.",
    },
    { property: "og:title", content: "Khairin Kamarizal — Creative Designer & Developer" },
    { property: "og:description", content: "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development." },
    { property: "og:url", content: "https://khair.ink" },
  ],
});
</script>
