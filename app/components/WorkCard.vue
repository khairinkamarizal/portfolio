<template>
  <article
    class="group relative overflow-hidden bg-white dark:bg-black border border-black/8 dark:border-white/8 hover:border-black/25 dark:hover:border-white/25 transition-all duration-300 cursor-pointer">
    <!-- Thumbnail -->
    <div class="relative overflow-hidden w-full aspect-[4/3] bg-black/5 dark:bg-white/5">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 z-10" />
    </div>

    <!-- Content -->
    <div class="p-4">
      <!-- Title + Year row -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-base font-semibold tracking-tight leading-snug text-black dark:text-white">
          {{ title }}
        </h3>
        <span
          class="text-xs font-mono tabular-nums opacity-40 shrink-0 mt-0.5 text-black dark:text-white"
          style="font-family: 'Space Mono', monospace">
          {{ year }}
        </span>
      </div>

      <!-- Description -->
      <p
        v-if="description"
        class="text-sm opacity-55 line-clamp-2 leading-relaxed mb-3 text-black dark:text-white">
        {{ description }}
      </p>

      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-[10px] tracking-wide uppercase px-1.5 py-0.5 border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 font-mono"
          style="font-family: 'Space Mono', monospace">
          {{ tag }}
        </span>
      </div>

      <!-- View link row -->
      <div class="flex items-center justify-between mt-3 pt-3 border-t border-black/8 dark:border-white/8">
        <span class="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-40 transition-opacity duration-200 font-mono"
          style="font-family: 'Space Mono', monospace">
          View on Behance
        </span>
        <span class="text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-200 group-hover:translate-x-0.5 transition-transform">→</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  year?: string | number
  description?: string
  tags?: string[]
  thumbnail?: string
  category?: string
}>()
</script>
