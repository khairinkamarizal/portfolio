<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center justify-between border border-black/20 dark:border-white/20 px-4 py-3 hover:border-black dark:hover:border-white transition-all duration-200">
    <div class="flex items-center gap-3">
      <!-- Behance "B" mark -->
      <span class="text-sm font-bold tracking-tight opacity-60 group-hover:opacity-100 transition-opacity duration-200">Bē</span>
      <div class="flex flex-col gap-0.5">
        <span class="text-[10px] tracking-widest opacity-40">VIEW ON BEHANCE</span>
        <span class="text-xs font-medium">{{ projectName }}</span>
      </div>
    </div>
    <ExternalLink
      class="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
    />
  </a>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  url: string
  projectName: string
}>()
</script>
