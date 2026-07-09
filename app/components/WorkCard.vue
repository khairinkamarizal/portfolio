<template>
  <article
    class="group border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/5 bg-white dark:bg-black">
    <!-- Thumbnail -->
    <div class="w-full aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5">
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
    </div>

    <!-- Content -->
    <div class="p-4 md:p-5">
      <!-- Title + Year row -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-lg font-bold leading-tight text-black dark:text-white">
          {{ title }}
        </h3>
        <span
          class="text-xs font-mono opacity-40 shrink-0 mt-0.5 text-black dark:text-white"
          style="font-family: 'Space Mono', monospace">
          {{ year }}
        </span>
      </div>

      <!-- Description -->
      <p
        v-if="description"
        class="text-sm opacity-60 line-clamp-2 leading-relaxed mb-3 text-black dark:text-white">
        {{ description }}
      </p>

      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-[10px] tracking-wide uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60">
          {{ tag }}
        </span>
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
