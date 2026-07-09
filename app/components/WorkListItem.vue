<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center justify-between py-4 first:pt-0 last:pb-0 border-b border-black/8 dark:border-white/8 pl-0 hover:pl-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current">
    <h3 class="text-base font-medium leading-tight">{{ title }}</h3>
    <div class="flex items-center gap-3 shrink-0">
      <span class="font-mono text-[10px] opacity-40">{{ year }}</span>
      <span v-if="category" class="tag-base opacity-40 ml-2">{{ category }}</span>
      <ArrowRight class="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  title: string
  year: string | number
  category: string
  url: string
}>()
</script>
