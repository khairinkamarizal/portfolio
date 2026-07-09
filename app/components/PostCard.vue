<template>
  <article
    class="group w-full border-b border-black/10 dark:border-white/10 py-6 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-200">
    <!-- Date -->
    <p
      class="text-xs font-mono opacity-40 mb-2 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      {{ date }}
    </p>

    <!-- Title -->
    <h2
      class="text-xl font-bold leading-tight mb-2 text-black dark:text-white group-hover:opacity-70 transition-opacity duration-200">
      {{ title }}
    </h2>

    <!-- Description -->
    <p
      v-if="description"
      class="text-sm opacity-60 line-clamp-2 leading-relaxed mb-3 text-black dark:text-white">
      {{ description }}
    </p>

    <!-- Footer: tags + reading time -->
    <div class="flex items-center gap-3 flex-wrap">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-xs opacity-40 text-black dark:text-white"
        style="font-family: 'Space Mono', monospace">
        #{{ tag }}
      </span>
      <span
        v-if="readingTime"
        class="text-xs opacity-40 ml-auto text-black dark:text-white"
        style="font-family: 'Space Mono', monospace">
        {{ readingTime }} min read
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date: string
  description?: string
  tags?: string[]
  readingTime?: number
  slug?: string
}>()
</script>
