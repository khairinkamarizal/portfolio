<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col gap-2 py-6 first:pt-0 last:pb-0 transition-opacity duration-200">
    <div class="flex flex-row justify-between items-start gap-4">
      <h2 class="text-base font-medium leading-snug">{{ title }}</h2>
      <div class="flex items-center gap-1 shrink-0">
        <span class="text-xs opacity-50">{{ year }}</span>
        <ArrowUpRight class="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </div>
    </div>
    <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ description }}</p>
    <TagList v-if="tags?.length" :tags="tags" size="sm" class="mt-1" />
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next"

defineProps<{
  title: string
  year: string | number
  tags?: string[]
  description: string
  url: string
}>()
</script>
