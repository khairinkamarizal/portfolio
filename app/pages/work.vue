<template>
  <NuxtLayout name="simple">
    <section class="work-hero">
      <div>
        <p class="eyebrow">Selected archive / {{ projects.length }} projects</p>
        <h1>Work that moves<br><em>between mediums.</em></h1>
      </div>
      <p>Identity, motion, apparel, and digital work. Different outputs, held together by clear thinking and a strong visual point of view.</p>
    </section>

    <section class="work-archive" aria-label="Project archive">
      <div class="work-toolbar">
        <p class="eyebrow">Filter by discipline</p>
        <div class="filter-control" role="group" aria-label="Project filters">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            :class="{ active: activeFilter === filter }"
            :aria-pressed="activeFilter === filter"
            @click="activeFilter = filter">
            {{ filter }}
          </button>
        </div>
        <span class="eyebrow">Showing {{ filteredProjects.length }}</span>
      </div>

      <div class="archive-grid">
        <WorkCard
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          :title="project.title"
          :year="project.year"
          :category="project.category"
          :tags="project.services"
          :description="project.description"
          :outcome="project.outcome"
          :url="project.url"
          :thumbnail="project.thumbnail"
          :tone="project.tone"
          :index="index + 1"
          :eager="index < 2" />
      </div>
    </section>

    <section class="work-note">
      <p class="eyebrow">The archive is growing</p>
      <p>Some work is under NDA, some is still being documented, and the best project may be the next one.</p>
      <NuxtLink to="/message" class="button-primary">Discuss a project <ArrowUpRight :size="15" /></NuxtLink>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/projects'

definePageMeta({ layout: false })

const filters = ['All', 'Brand', 'Motion', 'Logo']
const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  const value = activeFilter.value.toLowerCase()
  return projects.filter(project => {
    const haystack = `${project.category} ${project.services.join(' ')}`.toLowerCase()
    return haystack.includes(value)
  })
})

useSeoMeta({
  title: 'Selected Work',
  description: 'Selected brand identity, motion, logo, and digital design work by Khairin Kamarizal.',
  ogTitle: 'Selected Work | Khairin Kamarizal',
  ogDescription: 'Identity, motion, and digital work shaped with clarity and character.',
  ogUrl: 'https://khair.ink/work',
})
</script>

<style scoped>
.work-hero {
  min-height: 67svh;
  display: grid;
  grid-template-columns: 1.45fr 0.55fr;
  gap: clamp(3rem, 8vw, 9rem);
  align-items: end;
  padding: clamp(4rem, 9vw, 9rem) var(--page) clamp(3rem, 6vw, 6rem);
  border-bottom: 1px solid var(--line);
}

.work-hero h1 {
  margin-top: 1.5rem;
  font-size: clamp(4rem, 10vw, 10rem);
  line-height: 0.83;
  font-weight: 640;
}

.work-hero h1 em {
  color: var(--blue);
  font-family: Georgia, serif;
  font-weight: 400;
}

.work-hero > p {
  max-width: 28rem;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  line-height: 1.5;
}

.work-archive {
  padding: 0 var(--page) clamp(6rem, 10vw, 10rem);
}

.work-toolbar {
  min-height: 6rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid var(--line);
}

.work-toolbar > span:last-child {
  justify-self: end;
}

.filter-control {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  border: 1px solid var(--line);
}

.filter-control button {
  min-width: 4.5rem;
  padding: 0.65rem 0.8rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  transition: background 160ms ease, color 160ms ease;
}

.filter-control button.active,
.filter-control button:hover {
  background: var(--ink);
  color: var(--paper);
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(3rem, 7vw, 7rem) clamp(1rem, 3vw, 3rem);
  padding-top: clamp(3rem, 6vw, 6rem);
}

.archive-grid > :nth-child(even) {
  margin-top: clamp(3rem, 8vw, 8rem);
}

.work-note {
  display: grid;
  grid-template-columns: 0.5fr 1fr auto;
  gap: 2rem;
  align-items: center;
  padding: clamp(3rem, 6vw, 6rem) var(--page);
  border-top: 1px solid var(--line);
}

.work-note > p:nth-child(2) {
  max-width: 38rem;
  font-size: clamp(1.3rem, 2.5vw, 2.4rem);
  line-height: 1.15;
}

@media (max-width: 800px) {
  .work-hero {
    grid-template-columns: 1fr;
    align-items: center;
  }

  .work-toolbar {
    grid-template-columns: 1fr auto;
    padding: 1.5rem 0;
  }

  .filter-control {
    grid-column: 1 / 3;
    grid-row: 2;
    overflow-x: auto;
  }

  .filter-control button {
    flex: 1 0 auto;
  }

  .archive-grid {
    grid-template-columns: 1fr;
  }

  .archive-grid > :nth-child(even) {
    margin-top: 0;
  }

  .work-note {
    grid-template-columns: 1fr;
  }

  .work-note .button-primary {
    justify-self: start;
  }
}
</style>
