<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col gap-0 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-200 overflow-hidden">

    <!-- Thumbnail area -->
    <div v-if="thumbnail || image" class="w-full overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full object-cover aspect-video group-hover:scale-[1.02] transition-transform duration-300" />
      <ProjectThumbnail
        v-else
        :title="title"
        :category="category || 'default'"
        :year="year" />
    </div>

    <!-- Text content -->
    <div class="flex flex-col gap-2 p-4">
      <div class="flex flex-row justify-between items-start gap-4">
        <h2 class="text-base font-medium leading-snug">{{ title }}</h2>
        <div class="flex items-center gap-1 shrink-0">
          <span class="text-xs opacity-50">{{ year }}</span>
          <ArrowUpRight class="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
      </div>
      <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ description }}</p>
      <TagList v-if="tags?.length" :tags="tags" size="sm" class="mt-1" />
    </div>
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
  thumbnail?: boolean
  image?: string
  category?: string
}>()
</script>
