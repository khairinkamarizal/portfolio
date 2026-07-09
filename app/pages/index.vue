<template>
  <NuxtLayout name="simple">
    <template #default>
      <GridBackground variant="dots" />
      <ClientOnly>
        <ScrollIndicator />
      </ClientOnly>
      <div class="flex flex-col gap-14 mt-8 pb-8 relative z-10">

        <!-- Hero -->
        <div class="flex flex-col gap-4 pb-8 border-b border-black/10 dark:border-white/10">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col gap-1.5">
              <h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-[0.9]" style="font-family: 'Space Mono', monospace">
                KHAIRIN<br />KAMARIZAL
              </h1>
              <span class="text-xs opacity-50 tracking-widest normal-case font-sans mt-2">Creative Designer & Developer</span>
            </div>
            <div class="flex flex-row relative items-center">
              <img
                src="/assets/dp.webp"
                alt="Khairin Kamarizal"
                class="w-20 h-20 rounded-full object-cover object-center shrink-0 ring-2 ring-black/10 dark:ring-white/10" />
              <div
                class="w-12 h-12 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-3 ring-2 ring-white dark:ring-black">
                <AppLogo class="text-white dark:text-black w-6 h-6" />
              </div>
            </div>
          </div>

          <!-- Bio tagline -->
          <p class="text-sm leading-relaxed dark:font-light normal-case font-sans opacity-60 max-w-sm">
            Ambitious and versatile creative designer skilled in branding,
            UI/UX, motion content and web development. Based in Cyberjaya, Malaysia.
          </p>

          <!-- Status badge -->
          <StatusBadge />

          <!-- CTA links -->
          <div class="flex items-center gap-4 mt-2 normal-case">
            <NuxtLink
              to="/work"
              class="text-xs tracking-wider font-medium px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity duration-150">
              VIEW WORK
            </NuxtLink>
            <NuxtLink
              to="mailto:khairinkamarizal@gmail.com"
              class="text-xs tracking-wider px-5 py-2.5 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors duration-150">
              HIT ME UP
            </NuxtLink>
          </div>
        </div>

        <!-- Skills marquee strip -->
        <RevealOnScroll variant="fade-up">
          <div class="border-y border-black/10 dark:border-white/10 py-2.5 -mx-5">
            <MarqueeTicker :items="skills" :speed="30" />
          </div>
        </RevealOnScroll>

        <!-- Stats row -->
        <RevealOnScroll variant="fade-up" :delay="100">
          <div class="grid grid-cols-4 divide-x divide-black/10 dark:divide-white/10 border border-black/10 dark:border-white/10 py-4">
            <ClientOnly>
              <StatCounter :value="1423" label="BEHANCE VIEWS" />
              <StatCounter :value="38" label="APPRECIATIONS" />
              <StatCounter :value="43" label="FOLLOWERS" />
              <StatCounter :value="5" label="YEARS EXP" suffix="+" />
              <template #fallback>
                <div class="col-span-4 flex items-center justify-center py-4 opacity-30 text-xs">Loading stats...</div>
              </template>
            </ClientOnly>
          </div>
        </RevealOnScroll>

        <!-- Featured work -->
        <RevealOnScroll variant="fade-up" :delay="50">
          <div class="flex flex-col gap-4 normal-case">
            <div class="flex items-center justify-between">
              <span class="text-xs opacity-40 tracking-widest uppercase" style="font-family: 'Space Mono', monospace">Featured Work</span>
              <NuxtLink to="/work" class="text-xs opacity-40 hover:opacity-100 transition-opacity tracking-wider flex items-center gap-1">
                View all <ArrowUpRight class="w-3 h-3" />
              </NuxtLink>
            </div>
            <div class="grid grid-cols-1 gap-4">
              <WorkCard
                v-for="project in featuredProjects"
                :key="project.title"
                :title="project.title"
                :year="project.year"
                :tags="project.tags"
                :description="project.description"
                :url="project.behanceUrl"
                :category="project.category"
                :thumbnail="true" />
            </div>
          </div>
        </RevealOnScroll>

        <!-- Latest writing -->
        <RevealOnScroll variant="fade-up" :delay="50">
          <div v-if="latestPosts?.length" class="flex flex-col gap-4 normal-case">
            <div class="flex items-center justify-between">
              <span class="text-xs opacity-40 tracking-widest uppercase" style="font-family: 'Space Mono', monospace">Latest Writing</span>
              <NuxtLink to="/writing" class="text-xs opacity-40 hover:opacity-100 transition-opacity tracking-wider flex items-center gap-1">
                View all <ArrowUpRight class="w-3 h-3" />
              </NuxtLink>
            </div>
            <div class="flex flex-col divide-y divide-black/10 dark:divide-white/10">
              <PostCard
                v-for="post in latestPosts"
                :key="post.path"
                :title="post.title"
                :description="post.description"
                :date="post.date"
                :tags="post.tags || []"
                :slug="post.path?.split('/').pop() || ''" />
            </div>
          </div>
        </RevealOnScroll>

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
