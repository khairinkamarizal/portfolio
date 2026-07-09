<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col gap-4 border border-black/10 dark:border-white/10 p-5 hover:border-black dark:hover:border-white transition-all duration-200">
    <div class="flex items-start justify-between gap-4">
      <span class="text-[10px] tracking-widest opacity-40">{{ category.toUpperCase() }}</span>
      <span class="text-[10px] font-mono opacity-40">{{ year }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-xl leading-tight dark:font-light group-hover:opacity-70 transition-opacity duration-200">{{ title }}</h2>
      <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ description }}</p>
    </div>
    <div class="flex items-center justify-between mt-1">
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
          {{ tag.toUpperCase() }}
        </span>
      </div>
      <span class="text-[10px] tracking-wider flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
        <span>View Project</span>
        <ArrowUpRight class="w-3 h-3 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  year: string | number
  tags: string[]
  url: string
  category: string
}>()
</script>
