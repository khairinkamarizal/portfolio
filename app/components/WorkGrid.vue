<template>
  <!-- Mobile: single column; md+: 2-column CSS grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <WorkCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :year="project.year"
      :tags="project.tags"
      :description="project.description"
      :url="project.behanceUrl"
      :category="project.category" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  projects: Array<{
    title: string
    year: string | number
    tags?: string[]
    description: string
    behanceUrl: string
    category: string
  }>
}>()
</script>
