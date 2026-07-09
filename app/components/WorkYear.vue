<template>
  <div class="flex flex-col gap-8">
    <div
      v-for="(group, year) in groupedByYear"
      :key="year"
      class="flex flex-col gap-0">
      <!-- Year heading -->
      <div class="flex items-center gap-3 mb-3">
        <span class="font-mono text-[10px] tracking-widest opacity-40">{{ year }}</span>
        <div class="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
      </div>
      <!-- Projects for that year -->
      <div class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10 pl-3 border-l border-black/10 dark:border-white/10">
        <a
          v-for="project in group"
          :key="project.title"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between py-2.5 first:pt-0 hover:opacity-60 transition-opacity duration-200">
          <span class="text-sm font-medium">{{ project.title }}</span>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-[10px] tracking-wider opacity-40">{{ project.category?.toUpperCase() }}</span>
            <ArrowUpRight class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

interface Project {
  title: string
  year: string | number
  category?: string
  url: string
}

const props = defineProps<{
  projects: Project[]
}>()

const groupedByYear = computed(() => {
  const groups: Record<string, Project[]> = {}
  const sorted = [...props.projects].sort((a, b) => Number(b.year) - Number(a.year))
  for (const project of sorted) {
    const key = String(project.year)
    if (!groups[key]) groups[key] = []
    groups[key].push(project)
  }
  return groups
})
</script>
