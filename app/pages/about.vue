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
          <ContactCTA />
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
  // Design
  { name: "Figma", level: "expert", category: "Design" },
  { name: "Adobe Illustrator", level: "expert", category: "Design" },
  { name: "Photoshop", level: "expert", category: "Design" },
  { name: "After Effects", level: "advanced", category: "Design" },
  { name: "Typography", level: "expert", category: "Design" },
  { name: "Motion Design", level: "advanced", category: "Design" },
  // Development
  { name: "Nuxt/Vue.js", level: "expert", category: "Development" },
  { name: "Tailwind CSS", level: "expert", category: "Development" },
  { name: "HTML/CSS", level: "expert", category: "Development" },
  { name: "Responsive Design", level: "expert", category: "Development" },
  { name: "Web Development", level: "expert", category: "Development" },
  // Strategy
  { name: "Project Management", level: "expert", category: "Strategy" },
  { name: "Brand Identity", level: "expert", category: "Strategy" },
  { name: "UI/UX Design", level: "expert", category: "Strategy" },
  { name: "Creative Direction", level: "advanced", category: "Strategy" },
];

const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Malay", level: "Native or Bilingual" },
];

const experienceItems = [
  {
    role: "Senior Graphic Designer",
    company: "Trustori",
    period: "Nov 2025 — Present",
    location: "Kuala Lumpur, Malaysia",
    current: true,
    description: "Leading design work across brand and digital at Trustori. Turn ideas into visuals that actually communicate. Work closely with different teams to shape campaigns, product visuals, and overall brand direction.",
  },
  {
    role: "Creative Designer-Developer",
    company: "Ahoi Studio",
    period: "Dec 2017 — Present",
    location: "Kuala Lumpur, Malaysia",
    current: true,
    description: "Take on selected branding and digital projects, supporting startups and independent brands with identity design, visual systems, and digital experiences. Lead concept development, art direction, and brand storytelling.",
  },
  {
    role: "Digital Strategist cum Front-End Developer",
    company: "Horuz Technology",
    period: "Oct 2024 — Nov 2025",
    location: "Cyberjaya",
    current: false,
    description: "Lead the intersection of strategy, design, and development. Developed HR automation tools including leave management and payslip systems, reducing manual workload by over 100 hours per month.",
  },
  {
    role: "Creative Lead",
    company: "EFS Worldwide",
    period: "May 2023 — Oct 2024",
    location: "Ipoh",
    current: false,
    description: "Led creative direction for high-volume custom apparel operation. Oversaw jersey design, print execution, and brand alignment across multiple client accounts.",
  },
  {
    role: "Creative Designer",
    company: "EFS Worldwide",
    period: "Mar 2022 — May 2023",
    location: "Ipoh",
    current: false,
    description: "Designed customised sports and corporate jerseys. Produced print-accurate artwork for digital and sublimation processes.",
  },
  {
    role: "Creative Lead & Designer",
    company: "Zero Float Club",
    period: "Aug 2023 — Feb 2024",
    location: "Cyberjaya",
    current: false,
    description: "Led creative direction for a wellness startup. Shaped visual identity, campaign strategy, and brand positioning across digital and physical touchpoints.",
  },
  {
    role: "Graphic Designer",
    company: "Zero Float Club",
    period: "Aug 2022 — Aug 2023",
    location: "Cyberjaya",
    current: false,
    description: "Contributed to brand visuals, campaign assets, and marketing materials.",
  },
  {
    role: "Graphic Designer",
    company: "Tarbiah Kreatif",
    period: "Aug 2021 — Jan 2022",
    location: "Kuala Terengganu",
    current: false,
    description: "Supported creative team in branding, marketing materials, and digital assets.",
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
