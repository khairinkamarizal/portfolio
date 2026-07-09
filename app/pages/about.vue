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

        <!-- Get in touch -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs opacity-50 tracking-widest">Get in touch</h2>
          <ContactForm />
        </div>

        <!-- Currently working on -->
        <CurrentlyWorking />

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

const skillGroups = [
  {
    category: "Design",
    items: ["Brand Identity", "UI/UX Design", "Motion Design", "Typography", "Art Direction", "Visual Design"],
  },
  {
    category: "Development",
    items: ["Nuxt / Vue.js", "Tailwind CSS", "TypeScript", "HTML / CSS", "Web Development"],
  },
  {
    category: "Craft",
    items: ["Figma", "Adobe Creative Suite", "After Effects", "Photoshop", "Illustrator"],
  },
];

const experienceItems = [
  {
    role: "Senior Graphic Designer",
    company: "Trustori",
    period: "Present",
    location: "Cheras, MY",
    description: "Leading visual design and brand direction at Trustori. Responsible for brand identity systems, marketing materials, and digital design across all touchpoints.",
  },
  {
    role: "Creative Designer & Developer",
    company: "Self-Employed",
    period: "Ongoing",
    location: "Remote",
    description: "Working independently with clients on brand identity, UI/UX design, and web development projects. Building digital experiences with Nuxt, Vue.js, and Tailwind CSS.",
  },
  {
    role: "Digital Strategist & Front-End Developer",
    company: "Horuz Technology",
    period: "Previous",
    location: "Malaysia",
    description: "Drove digital strategy and front-end development at Horuz Technology. Built and maintained web products, contributed to UI/UX decisions, and translated design systems into code.",
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
