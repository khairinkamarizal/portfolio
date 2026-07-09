<template>
  <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
    <WorkCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :year="project.year"
      :tags="project.tags"
      :description="project.description"
      :url="project.url" />
  </div>
</template>

<script setup lang="ts">
/**
 * ProjectGrid — renders a list of projects using WorkCard.
 * Kept as a single column to match the max-w-md centered layout.
 */
interface Project {
  title: string
  year: number
  tags: string[]
  description: string
  url?: string
}

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>
