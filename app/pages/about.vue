<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-12 mt-10">

        <!-- Magazine-style header -->
        <div class="flex flex-col gap-6">
          <!-- Byline label -->
          <span class="text-[10px] tracking-widest opacity-40">ABOUT THE DESIGNER</span>

          <!-- Large name display -->
          <div class="flex flex-col gap-1">
            <h1 class="text-4xl leading-none tracking-tight dark:font-light">Khairin</h1>
            <h1 class="text-4xl leading-none tracking-tight dark:font-light opacity-40">Kamarizal</h1>
          </div>

          <!-- Title + location row -->
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm opacity-70">Creative Designer &amp; Developer</span>
            <span class="text-xs opacity-30">—</span>
            <span class="text-xs opacity-50">Cyberjaya, Malaysia</span>
          </div>

          <!-- Availability badge -->
          <div class="flex items-center gap-2 self-start border border-black/10 dark:border-white/10 px-3 py-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
            <span class="text-xs opacity-60">Available — Freelance &amp; Fulltime</span>
          </div>

          <!-- Tagline / quote -->
          <p class="text-base leading-relaxed dark:font-light max-w-md">
            I sit at the intersection of visual craft and technical execution — turning ideas into digital experiences that feel both considered and alive.
          </p>

          <!-- Resume download -->
          <a
            href="#"
            class="self-start text-xs tracking-wider px-4 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white flex items-center gap-1.5 transition-colors duration-150"
            aria-label="Download resume (coming soon)">
            <Download :size="12" />
            <span>Download Resume</span>
          </a>
        </div>

        <!-- Availability + Local time -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AvailabilityCard />
          <LocationTime />
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Skills</h2>
          <SkillGrid :skills="skills" />
        </div>

        <!-- Experience -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Experience</h2>
          <ExperienceTimeline :items="experienceItems" />
        </div>

        <!-- Tools -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Tools</h2>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tool in tools"
              :key="tool"
              class="text-xs border border-black/20 dark:border-white/20 px-2.5 py-1 opacity-70">
              {{ tool }}
            </span>
          </div>
        </div>

        <!-- Currently working on -->
        <CurrentlyWorking />

        <!-- Get in touch -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Get in touch</h2>
          <ContactForm />
        </div>

      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        :to="`mailto:${siteConfig.email}`"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Get in touch</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
      <NuxtLink
        :to="siteConfig.social.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>LinkedIn</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight, Download } from "lucide-vue-next";

const siteConfig = useSiteConfig()

definePageMeta({
  layout: false,
});

useHead({
  title: "About — Khairin Kamarizal",
  meta: [
    {
      name: "description",
      content: "Khairin Kamarizal — Creative Designer & Developer based in Cyberjaya, Malaysia. Senior Graphic Designer at Trustori. Skilled in branding, UI/UX, motion design, and web development.",
    },
    {
      property: "og:title",
      content: "About — Khairin Kamarizal",
    },
    {
      property: "og:description",
      content: "Khairin Kamarizal — Creative Designer & Developer based in Cyberjaya, Malaysia. Skilled in branding, UI/UX, motion design, and web development.",
    },
  ],
});

const skills = [
  // Design Tools
  { name: "Figma", level: "expert", category: "Design Tools" },
  { name: "Adobe Illustrator", level: "expert", category: "Design Tools" },
  { name: "Photoshop", level: "advanced", category: "Design Tools" },
  { name: "After Effects", level: "advanced", category: "Design Tools" },
  { name: "Prototyping", level: "expert", category: "Design Tools" },
  { name: "Art Direction", level: "advanced", category: "Design Tools" },
  // Dev Stack
  { name: "Nuxt / Vue.js", level: "advanced", category: "Dev Stack" },
  { name: "Tailwind CSS", level: "expert", category: "Dev Stack" },
  { name: "TypeScript", level: "intermediate", category: "Dev Stack" },
  { name: "HTML / CSS", level: "expert", category: "Dev Stack" },
  { name: "Responsive Design", level: "expert", category: "Dev Stack" },
  // Craft
  { name: "Brand Identity", level: "expert", category: "Craft" },
  { name: "UI/UX Design", level: "advanced", category: "Craft" },
  { name: "Motion Design", level: "advanced", category: "Craft" },
  { name: "Typography", level: "expert", category: "Craft" },
  { name: "Design Systems", level: "advanced", category: "Craft" },
];

const experienceItems = [
  {
    role: "Senior Graphic Designer",
    company: "Trustori",
    period: "2023 — Present",
    location: "Cheras, Malaysia",
    current: true,
    description: "Leading visual design across brand, marketing, and digital touchpoints at a growing Malaysian fintech startup. Own the design system, produce campaign assets, and collaborate with the product team.",
  },
  {
    role: "Creative Designer & Developer",
    company: "Self-Employed",
    period: "2022 — Present",
    location: "Remote",
    current: true,
    description: "Independent practice spanning brand identity, UI/UX design, and web development. Working with founders and small teams who need someone that can both design and build.",
  },
  {
    role: "Digital Strategist & Front-End Developer",
    company: "Horuz Technology",
    period: "2021 — 2022",
    location: "Malaysia",
    current: false,
    description: "Hybrid strategist and front-end developer at a digital agency. Built landing pages, campaign microsites, and internal dashboards while shaping digital strategy recommendations.",
  },
];

const tools = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "After Effects",
  "VS Code",
  "Nuxt",
  "Vue",
  "Tailwind CSS",
  "TypeScript",
  "Git",
  "Cloudflare",
  "Notion",
];
</script>
