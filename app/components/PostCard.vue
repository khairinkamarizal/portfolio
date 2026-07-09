<template>
  <NuxtLink
    :to="`/writing/${slug}`"
    class="group flex flex-col gap-1.5 py-5 first:pt-0 hover:opacity-70 transition-opacity duration-200">
    <h2 class="text-sm font-medium leading-snug">{{ title }}</h2>
    <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ description }}</p>
    <PostMeta :date="date" :reading-time="readingTime" :tags="tags" class="mt-0.5" />
  </NuxtLink>
</template>

<script setup lang="ts">
/**
 * PostCard — compact post list item using PostMeta for metadata display.
 */
defineProps<{
  title: string
  description: string
  date: string
  tags?: string[]
  slug: string
  readingTime?: string
}>()
</script>
