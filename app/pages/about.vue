<template>
  <div class="w-full">

    <!-- ============================================ -->
    <!-- HERO: page heading                           -->
    <!-- ============================================ -->
    <section class="w-full border-b border-black/10 dark:border-white/10 px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <h1
        class="text-5xl md:text-7xl lg:text-[8vw] font-bold leading-none tracking-tighter uppercase"
        style="font-family: 'Space Mono', monospace">
        About
      </h1>
      <p class="mt-4 text-sm opacity-60 max-w-lg leading-relaxed">
        Designer, developer, and occasional over-thinker. Based in Cyberjaya, Malaysia.
      </p>
    </section>

    <!-- ============================================ -->
    <!-- MAIN CONTENT: 2-col desktop, stacked mobile  -->
    <!-- ============================================ -->
    <section class="w-full px-6 md:px-12 lg:px-20 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        <!-- LEFT COL: bio + skills + certs -->
        <div class="flex flex-col gap-12">

          <!-- Bio -->
          <div>
            <h2
              class="text-xs tracking-widest uppercase opacity-40 mb-6"
              style="font-family: 'Space Mono', monospace">
              Bio
            </h2>
            <div class="flex flex-col gap-4 text-sm leading-relaxed opacity-80">
              <p>
                I'm Khairin — a designer and developer with 5+ years of experience
                building digital products that balance form and function. I believe
                great software is the result of careful thinking, not just clever code.
              </p>
              <p>
                My work spans product design, front-end engineering, and brand identity.
                I'm comfortable moving between Figma and the terminal, and I care deeply
                about the details that make an experience feel right.
              </p>
              <p>
                When I'm not building things, I'm writing about design, reading about
                systems, or making coffee with too much deliberation.
              </p>
            </div>
          </div>

          <!-- Skills -->
          <div>
            <h2
              class="text-xs tracking-widest uppercase opacity-40 mb-6"
              style="font-family: 'Space Mono', monospace">
              Skills
            </h2>
            <div class="grid grid-cols-2 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
              <div
                v-for="(group, i) in skillGroups"
                :key="group.category"
                class="bg-white dark:bg-black p-4">
                <h3
                  class="text-xs tracking-widest uppercase opacity-40 mb-3"
                  style="font-family: 'Space Mono', monospace">
                  {{ group.category }}
                </h3>
                <ul class="flex flex-col gap-1.5">
                  <li
                    v-for="skill in group.items"
                    :key="skill"
                    class="text-sm opacity-70">
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div>
            <h2
              class="text-xs tracking-widest uppercase opacity-40 mb-6"
              style="font-family: 'Space Mono', monospace">
              Education & Certs
            </h2>
            <div class="flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
              <div
                v-for="cert in certs"
                :key="cert.title"
                class="py-4 flex flex-col gap-1">
                <span class="text-sm font-medium">{{ cert.title }}</span>
                <span class="text-xs opacity-50">{{ cert.issuer }} · {{ cert.year }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COL: experience timeline -->
        <div>
          <h2
            class="text-xs tracking-widest uppercase opacity-40 mb-6"
            style="font-family: 'Space Mono', monospace">
            Experience
          </h2>
          <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
            <div
              v-for="job in experience"
              :key="`${job.company}-${job.period}`"
              class="py-6 flex flex-col gap-2">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 class="text-sm font-semibold">{{ job.role }}</h3>
                  <span class="text-sm opacity-60">{{ job.company }}</span>
                </div>
                <span
                  class="text-xs tracking-widest opacity-40 shrink-0"
                  style="font-family: 'Space Mono', monospace">
                  {{ job.period }}
                </span>
              </div>
              <p class="text-sm opacity-60 leading-relaxed">{{ job.description }}</p>
              <div class="flex flex-wrap gap-2 mt-1">
                <span
                  v-for="tag in job.tags"
                  :key="tag"
                  class="text-xs tracking-wide opacity-40 border border-black/10 dark:border-white/10 px-2 py-0.5">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TOOLS & STACK                                -->
    <!-- ============================================ -->
    <section class="w-full border-t border-black/10 dark:border-white/10 px-6 md:px-12 lg:px-20 py-12 lg:py-16">
      <h2
        class="text-xs tracking-widest uppercase opacity-40 mb-8"
        style="font-family: 'Space Mono', monospace">
        Tools &amp; Stack
      </h2>
      <div class="flex flex-col gap-8">
        <div v-for="group in toolGroups" :key="group.label">
          <h3
            class="text-xs tracking-widest uppercase opacity-30 mb-3"
            style="font-family: 'Space Mono', monospace">
            {{ group.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <ToolBadge
              v-for="tool in group.tools"
              :key="tool"
              :name="tool"
              :type="group.type" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- MY PROCESS                                   -->
    <!-- ============================================ -->
    <section class="w-full border-t border-black/10 dark:border-white/10 px-6 md:px-12 lg:px-20 py-12 lg:py-16">
      <h2
        class="text-xs tracking-widest uppercase opacity-40 mb-8"
        style="font-family: 'Space Mono', monospace">
        My Process
      </h2>
      <div class="max-w-2xl">
        <ProcessStep
          v-for="step in processSteps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description" />
      </div>
    </section>

    <!-- ============================================ -->
    <!-- CTA: footer strip                            -->
    <!-- ============================================ -->
    <section class="w-full border-t border-black/10 dark:border-white/10 px-6 md:px-12 lg:px-20 py-12">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p class="text-sm opacity-60">Want to work together or just say hello?</p>
        <NuxtLink
          to="/message"
          class="text-xs tracking-widest uppercase border border-black/20 dark:border-white/20 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 self-start sm:self-auto"
          style="font-family: 'Space Mono', monospace">
          Get in Touch →
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "About",
  description:
    "Designer & developer based in Cyberjaya, Malaysia. 5+ years building thoughtful digital products.",
});

definePageMeta({
  layout: "simple",
});

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Research, brief, and goals. Understanding the problem space before proposing solutions. Asking questions that surface constraints and opportunities.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Strategy and visual direction. Translating research into clear design principles and a creative direction that aligns with the project goals.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Concepts, iteration, and refinement. Exploring multiple directions, testing ideas quickly, and refining toward the strongest solution.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Production, handoff, and launch. Building with precision, documenting decisions, and ensuring the implementation matches the intent.',
  },
]

const toolGroups = [
  {
    label: 'Design',
    type: 'design' as const,
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects'],
  },
  {
    label: 'Development',
    type: 'dev' as const,
    tools: ['Nuxt', 'Vue', 'Tailwind', 'TypeScript'],
  },
]

const skillGroups = [
  {
    category: "Design",
    items: ["Figma", "Design Systems", "Typography", "Motion"],
  },
  {
    category: "Engineering",
    items: ["Vue / Nuxt", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Supabase"],
  },
  {
    category: "Soft Skills",
    items: ["Systems Thinking", "Technical Writing", "Mentoring"],
  },
];

const certs = [
  { title: "B.Sc. Computer Science", issuer: "Universiti Putra Malaysia", year: "2019" },
  { title: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
  { title: "Google UX Design Certificate", issuer: "Google / Coursera", year: "2021" },
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "Acme Corp",
    period: "2023 — Present",
    description:
      "Leading design for core product features, managing the design system, and collaborating with engineering on implementation.",
    tags: ["Figma", "Vue", "Design Systems"],
  },
  {
    role: "Frontend Engineer",
    company: "Startup XYZ",
    period: "2021 — 2023",
    description:
      "Built and maintained customer-facing web application. Introduced component library that reduced development time by 40%.",
    tags: ["Vue", "TypeScript", "Tailwind"],
  },
  {
    role: "UI/UX Designer",
    company: "Agency ABC",
    period: "2019 — 2021",
    description:
      "Designed digital experiences for clients across fintech, e-commerce, and healthcare verticals.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
];
</script>
