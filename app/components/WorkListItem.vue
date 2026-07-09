<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center justify-between py-3 first:pt-0 last:pb-0">
    <h3 class="text-sm font-medium leading-tight">{{ title }}</h3>
    <div class="flex items-center gap-3 shrink-0">
      <span class="font-mono text-[10px] opacity-40">{{ year }}</span>
      <span class="text-[10px] tracking-wider opacity-40">{{ category.toUpperCase() }}</span>
      <ArrowRight class="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
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
