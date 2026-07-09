<template>
  <NuxtLayout name="simple">
    <template #default>
      <GridBackground variant="dots" />
      <ClientOnly>
        <ScrollIndicator />
      </ClientOnly>
      <div class="flex flex-col gap-14 mt-8 pb-8 relative z-10">

        <!-- Hero: single col mobile, 2-col on lg+ -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
          <!-- Left: identity + bio -->
          <div class="flex flex-col gap-5">
            <!-- Identity row -->
            <div class="flex flex-row items-center justify-between lg:flex-col lg:items-start lg:gap-3">
              <div class="flex flex-col gap-1.5">
                <span class="text-xs opacity-40 tracking-widest normal-case font-sans">Creative Designer & Developer</span>
                <h1 class="text-2xl lg:text-4xl font-bold tracking-tight leading-none" style="font-family: 'Space Mono', monospace">
                  KHAIRIN<br />KAMARIZAL
                </h1>
              </div>
              <!-- Photo: inline on mobile, hidden here on desktop (shown in right col) -->
              <div class="flex flex-row relative items-center lg:hidden">
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
            <p class="text-sm lg:text-base leading-relaxed dark:font-light normal-case font-sans opacity-70 max-w-xs lg:max-w-sm">
              Ambitious and versatile creative designer skilled in branding,
              UI/UX, motion content and web development. Based in Cyberjaya, Malaysia.
            </p>

            <!-- CTA links (desktop only) -->
            <div class="hidden lg:flex items-center gap-3 mt-2">
              <NuxtLink
                to="/work"
                class="text-xs tracking-wider px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity duration-150">
                VIEW WORK
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="text-xs tracking-wider px-4 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors duration-150">
                ABOUT ME
              </NuxtLink>
            </div>
          </div>

          <!-- Right col: photo + social (desktop only) -->
          <div class="hidden lg:flex flex-col items-end gap-6">
            <div class="relative">
              <img
                src="/assets/dp.webp"
                alt="Khairin Kamarizal"
                class="w-48 h-48 object-cover object-center ring-2 ring-black/10 dark:ring-white/10" />
              <div
                class="absolute -bottom-4 -left-4 w-14 h-14 flex items-center justify-center bg-black dark:bg-white ring-4 ring-white dark:ring-black">
                <AppLogo class="text-white dark:text-black w-7 h-7" />
              </div>
            </div>
            <SocialLinks class="flex flex-col items-end gap-2" />
          </div>
        </div>

        <!-- Skills marquee strip -->
        <div class="border-y border-black/10 dark:border-white/10 py-2.5 -mx-5 md:-mx-8 lg:-mx-10">
          <MarqueeTicker :items="skills" :speed="30" />
        </div>

        <!-- Stats banner: full-width, more prominent on desktop -->
        <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/10 dark:divide-white/10 border border-black/10 dark:border-white/10">
          <ClientOnly>
            <StatCounter :value="1423" label="BEHANCE VIEWS" class="py-6 lg:py-8" />
            <StatCounter :value="38" label="APPRECIATIONS" class="py-6 lg:py-8" />
            <StatCounter :value="43" label="FOLLOWERS" class="py-6 lg:py-8" />
            <StatCounter :value="4" label="YEARS EXP" suffix="+" class="py-6 lg:py-8" />
            <template #fallback>
              <div class="flex flex-col items-center py-6 col-span-4 opacity-30 text-xs tracking-widest">LOADING</div>
            </template>
          </ClientOnly>
        </div>

        <!-- Featured Work -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="text-xs opacity-40 tracking-widest">FEATURED WORK</span>
            <NuxtLink to="/work" class="text-xs opacity-40 hover:opacity-70 tracking-wider transition-opacity duration-150">
              VIEW ALL →
            </NuxtLink>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <WorkCard
              v-for="project in featuredWork"
              :key="project.title"
              :title="project.title"
              :year="project.year"
              :tags="project.tags"
              :description="project.description"
              :url="project.behanceUrl"
              :thumbnail="true"
              :category="project.category" />
          </div>
        </div>

        <!-- Latest Writing -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="text-xs opacity-40 tracking-widest">LATEST WRITING</span>
            <NuxtLink to="/writing" class="text-xs opacity-40 hover:opacity-70 tracking-wider transition-opacity duration-150">
              ALL POSTS →
            </NuxtLink>
          </div>
          <ClientOnly>
            <LatestPosts :limit="3" />
            <template #fallback>
              <div class="opacity-30 text-xs tracking-widest py-4">LOADING</div>
            </template>
          </ClientOnly>
        </div>

      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const featuredWork = [
  {
    title: "Sinergi Brand Identity",
    year: 2024,
    category: "Branding",
    tags: ["Branding", "Logo", "Identity"],
    description: "Complete brand identity for Sinergi. A modern approach to corporate design with strong visual language.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
  },
  {
    title: "Datalyse Logo Design",
    year: 2023,
    category: "Logo",
    tags: ["Logo", "Design", "Identity"],
    description: "Logo design for Datalyse. Clean and modern approach to data-driven brand identity.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
  },
]

const skills = [
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Motion Design",
  "Figma",
  "Vue.js",
  "Nuxt",
  "Tailwind CSS",
  "TypeScript",
  "Adobe CC",
  "Illustration",
  "Typography",
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
