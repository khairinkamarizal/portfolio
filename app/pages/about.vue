<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-12 mt-10">

        <!-- Bio -->
        <div class="flex flex-col gap-4">
          <PageHeader
            title="About"
            description="Creative designer and developer based in Cyberjaya, Malaysia." />
          <p class="text-sm opacity-70 leading-relaxed dark:font-light">
            I'm Khairin — a versatile designer with 4+ years of experience across brand identity,
            UI/UX, motion design, and web development. I bridge the gap between visual craft
            and technical execution, building things that look considered and work well.
          </p>
          <p class="text-sm opacity-70 leading-relaxed dark:font-light">
            Currently available for freelance projects and collaborations.
          </p>
          <a
            href="#"
            class="self-start text-xs tracking-wider px-4 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white flex items-center gap-1.5 transition-colors duration-150"
            aria-label="Download resume (coming soon)">
            <Download :size="12" />
            <span>Download Resume</span>
          </a>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Skills</h2>
          <div class="flex flex-col gap-3">
            <div
              v-for="group in skillGroups"
              :key="group.category"
              class="flex flex-col gap-1.5">
              <span class="text-xs opacity-40 tracking-wider">{{ group.category.toUpperCase() }}</span>
              <div class="flex flex-wrap gap-1.5">
                <SkillBadge
                  v-for="skill in group.items"
                  :key="skill"
                  :label="skill" />
              </div>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Experience</h2>
          <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
            <div
              v-for="role in experience"
              :key="role.company + role.period"
              class="flex flex-col gap-1 py-5 first:pt-0">
              <div class="flex justify-between items-start gap-2">
                <span class="text-sm font-medium">{{ role.title }}</span>
                <span class="text-xs opacity-40 shrink-0">{{ role.period }}</span>
              </div>
              <span class="text-xs opacity-50 tracking-wide">{{ role.company.toUpperCase() }}</span>
              <p class="text-sm opacity-60 leading-relaxed dark:font-light mt-1">{{ role.description }}</p>
            </div>
          </div>
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

      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="mailto:khairinkamarizal@gmail.com"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Get in touch</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
      <NuxtLink
        to="https://linkedin.com/in/khairinkamarizal"
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

definePageMeta({
  layout: false,
});

useHead({
  title: "About — Khairinkamarizal",
  meta: [
    {
      name: "description",
      content: "Creative designer and developer based in Cyberjaya, Malaysia. Skilled in branding, UI/UX, motion design, and web development.",
    },
    {
      property: "og:title",
      content: "About — Khairinkamarizal",
    },
    {
      property: "og:description",
      content: "Creative designer and developer based in Cyberjaya, Malaysia. Skilled in branding, UI/UX, motion design, and web development.",
    },
  ],
});

const skillGroups = [
  {
    category: "Design",
    items: ["Brand Identity", "UI/UX Design", "Motion Design", "Typography", "Art Direction"],
  },
  {
    category: "Development",
    items: ["Nuxt / Vue", "Tailwind CSS", "TypeScript", "HTML / CSS"],
  },
  {
    category: "Craft",
    items: ["Figma", "Adobe Illustrator", "After Effects", "Photoshop"],
  },
];

const experience = [
  {
    title: "Freelance Designer & Developer",
    company: "Independent",
    period: "2022 — Present",
    description: "Working with startups and small businesses on brand identity, UI/UX design, and web development projects. Clients across Malaysia, Singapore, and the UK.",
  },
  {
    title: "UI/UX Designer",
    company: "Axiata Digital Services",
    period: "2021 — 2022",
    description: "Designed digital products and internal tooling for a major Malaysian telecommunications group. Led end-to-end design for a customer-facing mobile app feature used by 200k+ users.",
  },
  {
    title: "Junior Graphic Designer",
    company: "Studio Lapan",
    period: "2020 — 2021",
    description: "Contributed to branding, print, and digital design projects at a boutique creative studio in Kuala Lumpur. Worked on identity systems, packaging, and editorial layouts.",
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
