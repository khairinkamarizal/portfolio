<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 px-8 pt-10 pb-10">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between mb-3">
            <p class="text-xs font-mono opacity-50 tracking-widest">Selected Work</p>
            <ClientOnly>
              <ProjectCount :count="projects.length" />
            </ClientOnly>
          </div>
          <h1 class="text-2xl md:text-3xl font-light leading-tight tracking-tight text-balance">
            Projects spanning brand identity, UI/UX, and digital design.
          </h1>
        </div>

        <RevealOnScroll variant="fade-up">
          <WorkStats />
        </RevealOnScroll>

        <Divider variant="dots" />

        <!-- Featured projects -->
        <div v-if="featuredProjects.length" class="flex flex-col gap-3">
          <SectionLabel label="Featured" variant="numbered" :number="1" />
          <RevealOnScroll variant="fade-up" :delay="50">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
              <FeaturedProject
                v-for="project in featuredProjects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :year="project.year"
                :tags="project.tags"
                :url="project.behanceUrl"
                :category="project.category" />
            </div>
          </RevealOnScroll>
        </div>

        <div class="flex flex-col gap-3">
          <SectionLabel label="All Work" variant="numbered" :number="2" />
          <div class="flex items-center justify-between gap-4">
            <div class="py-2">
              <ProjectTypeFilter
                :types="projectTypes"
                :selected="selectedType"
                @select="selectedType = $event" />
            </div>
            <!-- View toggle -->
            <div class="flex items-center gap-1 shrink-0">
              <button
                type="button"
                @click="viewMode = 'card'"
                :aria-pressed="viewMode === 'card'"
                :class="['p-1.5 border transition-colors duration-150', viewMode === 'card' ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black' : 'border-transparent opacity-40 hover:opacity-70']"
                aria-label="Card view">
                <LayoutGrid class="w-3 h-3" />
              </button>
              <button
                type="button"
                @click="viewMode = 'list'"
                :aria-pressed="viewMode === 'list'"
                :class="['p-1.5 border transition-colors duration-150', viewMode === 'list' ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black' : 'border-transparent opacity-40 hover:opacity-70']"
                aria-label="List view">
                <List class="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <Divider variant="line" />

        <RevealOnScroll variant="fade-up" :delay="50">
          <!-- Card view -->
          <WorkGrid v-if="viewMode === 'card' && filteredProjects.length" :projects="filteredProjects" />

          <!-- List view -->
          <div v-else-if="viewMode === 'list' && filteredProjects.length" class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
            <div
              v-for="project in filteredProjects"
              :key="project.title"
              class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-150">
              <WorkListItem
                :title="project.title"
                :year="project.year"
                :category="project.category"
                :url="project.behanceUrl" />
            </div>
          </div>

          <!-- Empty state -->
          <div v-else-if="filteredProjects.length === 0" class="py-16 text-center">
            <p class="text-sm opacity-50">No projects match the selected filter.</p>
          </div>
        </RevealOnScroll>

        <!-- Tag cloud -->
        <TagCloud :tags="tagCounts" @filter="handleTagFilter" />

        <!-- Behance CTA -->
        <a
          href="https://be.net/khairinkamarizal"
          target="_blank"
          rel="noopener noreferrer"
          class="self-start text-xs tracking-wider flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity duration-150">
          <ExternalLink :size="12" />
          <span>View all on Behance</span>
        </a>

        <!-- Open to work -->
        <SectionLabel label="Get in Touch" variant="numbered" :number="3" />
        <OpenToWork />
      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="https://be.net/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>View all on Behance</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight, ExternalLink, LayoutGrid, List } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

const selectedType = ref('All')

const projectTypes = ['Branding', 'Motion', 'Jersey', 'Logo']

const featuredProjects = computed(() => projects.filter(p => p.featured))

const filteredProjects = computed(() =>
  selectedType.value === 'All'
    ? projects
    : projects.filter(p => p.category === selectedType.value)
)

const { get: lsGet, set: lsSet } = useLocalStorage()
const viewMode = ref<'card' | 'list'>('card')

onMounted(() => {
  viewMode.value = lsGet<'card' | 'list'>('work-view-mode', 'card')
})

watch(viewMode, (val) => {
  lsSet('work-view-mode', val)
})

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const project of projects) {
    for (const tag of project.tags) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }
  return Object.entries(counts).map(([name, count]) => ({ name, count }))
})

function handleTagFilter(tag: string) {
  selectedType.value = 'All'
}

useHead({
  title: "Work — Khairinkamarizal",
  meta: [
    {
      name: "description",
      content: "Selected work and projects",
    },
    {
      property: "og:title",
      content: "Work — Khairinkamarizal",
    },
    {
      property: "og:description",
      content: "Selected work and projects spanning brand identity, UI/UX design, and digital experiences.",
    },
  ],
});

const projects = [
  {
    title: "FRONTFACE® — Branding & Identity",
    year: 2024,
    tags: ["Branding", "Identity"],
    description: "Brand identity and visual system for FRONTFACE®. A modern and bold approach to brand development.",
    behanceUrl: "https://www.behance.net/gallery/217073883/FRONTFACE",
    category: "Branding",
    featured: true,
  },
  {
    title: "Flavisse Pâtisserie — Brand Identity",
    year: 2024,
    tags: ["Branding", "Identity", "Logo"],
    description: "Brand identity for a French-inspired pastry brand. Elegant and refined visual language.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: false,
  },
  {
    title: "Qal Full Swing — Sports Brand Identity",
    year: 2024,
    tags: ["Branding", "Sports", "Logo"],
    description: "Sports brand identity for Qal Full Swing. Dynamic and energetic visual system.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: false,
  },
  {
    title: "HighRisk Mal — Streetwear Brand Identity",
    year: 2024,
    tags: ["Branding", "Streetwear", "Identity"],
    description: "Bold streetwear brand identity for HighRisk Mal. Urban and contemporary aesthetic.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: false,
  },
  {
    title: "Tempatan Fest 2024 — Stage Motion",
    year: 2024,
    tags: ["Motion", "Event", "Design"],
    description: "Motion graphics for live event stage at Tempatan Fest 2024. Dynamic visuals for festival atmosphere.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Motion",
    featured: false,
  },
  {
    title: "Extravaganza Jersey — Jersey Design",
    year: 2023,
    tags: ["Jersey", "Apparel", "Design"],
    description: "Jersey design for local sports team. Bold graphics and team identity integration.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Jersey",
    featured: false,
  },
  {
    title: "Visions of Saints — Illustration & Branding",
    year: 2023,
    tags: ["Illustration", "Branding", "Identity"],
    description: "Illustration and brand identity for Visions of Saints. Creative storytelling through visual design.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: false,
  },
  {
    title: "Mero&Kero — Brand Identity",
    year: 2023,
    tags: ["Branding", "Identity", "Logo"],
    description: "Brand identity for Mero&Kero. Top performer with 4 appreciations. Playful and memorable visual system.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: true,
  },
  {
    title: "Valley Machines — Industrial Brand Identity",
    year: 2023,
    tags: ["Branding", "Industrial", "Logo"],
    description: "Industrial brand identity for Valley Machines. Strong and technical visual language.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Branding",
    featured: false,
  },
  {
    title: "Datalyse Logo — Logo Design",
    year: 2023,
    tags: ["Logo", "Design", "Identity"],
    description: "Logo design for Datalyse. Top performer with 5 appreciations. Clean and modern approach.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Logo",
    featured: true,
  },
  {
    title: "Stopa Jersey Design",
    year: 2022,
    tags: ["Jersey", "Apparel", "Design"],
    description: "Jersey design for Stopa. Athletic and contemporary style.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Jersey",
    featured: false,
  },
  {
    title: "University Malaysia Away Jersey",
    year: 2022,
    tags: ["Jersey", "Apparel", "University"],
    description: "University sports jersey design for University Malaysia. Collegiate branding and team spirit.",
    behanceUrl: "https://www.behance.net/khairinkamarizal",
    category: "Jersey",
    featured: false,
  },
];
</script>
