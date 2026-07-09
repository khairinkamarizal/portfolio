<template>
  <NuxtLink
    :to="`/writing/${slug}`"
    class="group flex flex-col gap-1.5 py-5 first:pt-0 hover:opacity-70 transition-opacity duration-200 lg:border-b lg:border-black/10 lg:dark:border-white/10 lg:pb-6">
    <h2 class="text-sm font-medium leading-snug">{{ title }}</h2>
    <p class="text-sm opacity-60 leading-relaxed dark:font-light line-clamp-2">{{ description }}</p>
    <PostMeta :date="date" :reading-time="readingTime" :tags="tags" class="mt-0.5" />
  </NuxtLink>
</template>

<script setup lang="ts">
/**
 * PostCard — compact post list item.
 * Works in both single-column list (divided by parent) and 2-column grid contexts.
 * In grid context (lg:grid-cols-2), each card gets its own bottom border.
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
