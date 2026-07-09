<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="w-full">

    <!-- ============================================ -->
    <!-- HERO: page heading                           -->
    <!-- ============================================ -->
    <section id="main-content" class="w-full border-b border-black/8 dark:border-white/8 px-8 py-12 lg:py-20" aria-label="About">
      <p class="mono-label opacity-25 mb-3">002 / About</p>
      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold leading-none uppercase font-mono" style="letter-spacing: -0.04em;">
        About
      </h1>
      <p class="mt-4 text-sm opacity-60 max-w-lg leading-relaxed text-balance">
        Designer, developer, and occasional over-thinker. Based in Cyberjaya, Malaysia.
      </p>
    </section>

    <!-- ============================================ -->
    <!-- MAIN CONTENT: 2-col desktop, stacked mobile  -->
    <!-- ============================================ -->
    <section class="w-full px-8 py-10 lg:py-14" aria-label="Bio and experience">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        <!-- LEFT COL: bio + skills + certs -->
        <div class="flex flex-col gap-12">

          <!-- Bio -->
          <RevealOnScroll variant="fade-up">
            <div>
              <h2 class="mono-label mb-4">
                Bio
              </h2>
              <div class="flex flex-col gap-4 text-sm leading-[1.7] opacity-70 max-w-lg">
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
          </RevealOnScroll>

          <!-- Skills -->
          <RevealOnScroll variant="fade-up" :delay="50">
            <div>
              <h2 class="mono-label mb-4 sticky top-0 bg-white dark:bg-black py-2 -mx-2 px-2 z-10">
                Skills
              </h2>
              <div class="grid grid-cols-2 gap-px bg-black/8 dark:bg-white/8 border border-black/8 dark:border-white/8">
                <div
                  v-for="(group, i) in skillGroups"
                  :key="group.category"
                  class="bg-white dark:bg-black p-4">
                  <h3 class="mono-label mb-3">
                    {{ group.category }}
                  </h3>
                  <ul class="flex flex-col gap-1.5">
                    <li
                      v-for="skill in group.items"
                      :key="skill"
                      class="text-sm opacity-70">
                      <div class="flex items-center justify-between gap-2 py-2.5">
                        <span class="text-sm">{{ skill }}</span>
                        <div class="flex-1 border-b border-dotted border-black/15 dark:border-white/15 mx-2" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <!-- Certifications -->
          <RevealOnScroll variant="fade-up" :delay="100">
            <div>
              <h2 class="mono-label mb-4">
                Education & Certs
              </h2>
              <div class="flex flex-col divide-y divide-black/8 dark:divide-white/8 border-t border-black/8 dark:border-white/8">
                <div
                  v-for="cert in certs"
                  :key="cert.title"
                  class="py-4 flex flex-col gap-1">
                  <span class="text-sm font-medium">{{ cert.title }}</span>
                  <span class="text-xs opacity-50">{{ cert.issuer }} · {{ cert.year }}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <!-- RIGHT COL: experience timeline -->
        <RevealOnScroll variant="fade-left" :delay="50">
          <div>
            <h2 class="mono-label mb-4">
              Experience
            </h2>
            <div class="flex flex-col gap-0 border-t border-black/8 dark:border-white/8">
              <div
                v-for="job in experience"
                :key="`${job.company}-${job.period}`"
                class="py-6 flex flex-col gap-2 border-b border-black/8 dark:border-white/8 pb-8 last:border-b-0">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 class="text-sm font-semibold">{{ job.role }}</h3>
                    <span class="text-sm opacity-60">{{ job.company }}</span>
                  </div>
                  <span class="font-mono text-xs opacity-50 shrink-0">
                    {{ job.period }}
                  </span>
                </div>
                <p class="text-sm opacity-60 leading-relaxed mt-2 max-w-prose">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2 mt-1">
                  <span
                    v-for="tag in job.tags"
                    :key="tag"
                    class="text-[10px] tracking-wide uppercase px-1.5 py-0.5 border border-black/8 dark:border-white/8 font-mono">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TOOLS & STACK                                -->
    <!-- ============================================ -->
    <RevealOnScroll variant="fade-up" :delay="50">
      <section class="w-full border-t border-black/8 dark:border-white/8 px-8 py-10 lg:py-14" aria-label="Tools and stack">
        <h2 class="mono-label mb-4">Tools &amp; Stack</h2>
        <div class="flex flex-col gap-8">
          <div v-for="group in toolGroups" :key="group.label">
            <h3 class="mono-label mb-3">
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
    </RevealOnScroll>

    <!-- ============================================ -->
    <!-- MY PROCESS                                   -->
    <!-- ============================================ -->
    <RevealOnScroll variant="fade-up" :delay="100">
      <section class="w-full border-t border-black/8 dark:border-white/8 px-8 py-10 lg:py-14" aria-label="My process">
        <h2 class="mono-label mb-4">
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
    </RevealOnScroll>

    <!-- ============================================ -->
    <!-- CTA: footer strip                            -->
    <!-- ============================================ -->
    <section class="w-full border-t border-black/8 dark:border-white/8 px-8 py-12">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p class="text-sm opacity-60">Want to work together or just say hello?</p>
        <div class="flex items-center gap-3 self-start sm:self-auto">
          <NuxtLink
            to="/message"
            class="text-xs tracking-widest uppercase border border-black/20 dark:border-white/20 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2">
            Get in Touch →
          </NuxtLink>
          <button
            type="button"
            @click="copyEmail"
            class="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
            <span>{{ emailCopied ? 'Copied!' : 'Copy email' }}</span>
          </button>
        </div>
      </div>
    </section>

  </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'About — Khairin Kamarizal',
  meta: [
    { name: 'description', content: 'Designer and developer with 5+ years of experience building digital products that balance form and function.' },
    { property: 'og:title', content: 'About — Khairin Kamarizal' },
    { property: 'og:description', content: 'Designer, developer, and occasional over-thinker. Based in Cyberjaya, Malaysia.' },
    { property: 'og:url', content: 'https://khair.ink/about' },
  ],
});

definePageMeta({
  layout: false,
});

const emailCopied = ref(false)
async function copyEmail() {
  await navigator.clipboard.writeText('khairinkamarizal@gmail.com')
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 2000)
}

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
