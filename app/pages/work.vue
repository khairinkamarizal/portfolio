<template>
  <NuxtLayout name="simple">
    <header class="editorial-header">
      <div><p class="eyebrow">Archive 01 / {{ projects.length }} entries</p><h1>Selected work.</h1></div>
      <p class="editorial-header__copy">Identity, motion, apparel, and digital work catalogued by discipline, role, medium, and scope.</p>
    </header>

    <section class="archive" aria-label="Project archive">
      <div class="archive-toolbar">
        <p class="eyebrow">Discipline</p>
        <div class="archive-filters" role="group" aria-label="Filter projects by discipline">
          <button v-for="filter in filters" :key="filter" type="button" :class="{ active: activeFilter === filter }" :aria-pressed="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button>
        </div>
        <p class="eyebrow">{{ filteredProjects.length }} shown</p>
      </div>

      <div class="archive-grid" aria-live="polite">
        <WorkCard v-for="(project, index) in filteredProjects" :key="project.title" :project="project" :index="projects.indexOf(project) + 1" :eager="index < 2" />
      </div>
    </section>

    <section class="archive-end">
      <p class="eyebrow">End of current index</p>
      <p>Additional work is under documentation or NDA. The archive is deliberately selective.</p>
      <NuxtLink to="/message" class="button-primary">Discuss a project <ArrowUpRight :size="15" aria-hidden="true" /></NuxtLink>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/projects'
definePageMeta({ layout: false })
const filters = ['All', ...new Set(projects.map(project => project.discipline))]
const activeFilter = ref('All')
const filteredProjects = computed(() => activeFilter.value === 'All' ? projects : projects.filter(project => project.discipline === activeFilter.value))
useSeoMeta({ title: 'Selected Work', description: 'Selected identity, motion, art direction, and digital design work by Khairin Kamarizal.', ogTitle: 'Selected Work | Khairin Kamarizal', ogUrl: 'https://khair.ink/work' })
</script>

<style scoped>
.archive { padding: 0 var(--page) clamp(6rem, 10vw, 10rem); }
.archive-toolbar { position: sticky; top: 0; z-index: 20; display: grid; grid-template-columns: 1fr auto 1fr; gap: 1.5rem; align-items: center; min-height: 5rem; border-bottom: 1px solid var(--line); background: var(--paper); }
.archive-toolbar > p:last-child { text-align: right; }
.archive-filters { display: flex; gap: 0.25rem; }
.archive-filters button { min-height: 2.2rem; padding: 0.45rem 0.7rem; border: 1px solid var(--line); color: var(--muted); font-size: 0.68rem; font-weight: 500; text-transform: uppercase; }
.archive-filters button:hover, .archive-filters button.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.archive-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: clamp(4rem, 8vw, 9rem) clamp(1rem, 2.5vw, 2.5rem); padding-top: clamp(3rem, 6vw, 6rem); }
.archive-grid > :nth-child(4n + 1) { grid-column: 1 / 9; }
.archive-grid > :nth-child(4n + 2) { grid-column: 7 / 13; }
.archive-grid > :nth-child(4n + 3) { grid-column: 1 / 7; }
.archive-grid > :nth-child(4n + 4) { grid-column: 5 / 13; }
.archive-end { display: grid; grid-template-columns: 0.5fr 1fr auto; gap: 2rem; align-items: end; padding: clamp(3rem, 6vw, 6rem) var(--page); border-top: 1px solid var(--line); }
.archive-end > p:nth-child(2) { max-width: 34rem; color: var(--muted); font-size: clamp(1.1rem, 2vw, 1.8rem); line-height: 1.25; }
@media (max-width: 760px) {
  .archive-toolbar { top: var(--rail); grid-template-columns: 1fr auto; padding: 1rem 0; }
  .archive-filters { grid-column: 1 / 3; grid-row: 2; overflow-x: auto; }
  .archive-filters button { flex: 0 0 auto; }
  .archive-grid { grid-template-columns: 1fr; }
  .archive-grid > :nth-child(n) { grid-column: auto; }
  .archive-end { grid-template-columns: 1fr; }
}
</style>
