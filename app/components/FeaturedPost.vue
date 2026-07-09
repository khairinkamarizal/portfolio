<template>
  <NuxtLink
    :to="`/writing/${slug}`"
    :aria-labelledby="`featured-post-title-${slug}`"
    class="group flex flex-col gap-4 p-6 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-200">

    <!-- Featured label -->
    <div class="flex items-center justify-between">
      <span class="text-[10px] tracking-widest opacity-40">FEATURED</span>
      <span v-if="readingTime" class="text-[10px] opacity-30 font-mono">{{ readingTime }}</span>
    </div>

    <!-- Border accent -->
    <div class="w-8 h-px bg-black dark:bg-white opacity-30"></div>

    <!-- Title -->
    <h2 :id="`featured-post-title-${slug}`" class="text-2xl leading-tight dark:font-light group-hover:opacity-70 transition-opacity duration-200">
      {{ title }}
    </h2>

    <!-- Description -->
    <p class="text-sm opacity-60 leading-relaxed dark:font-light">
      {{ description }}
    </p>

    <!-- Meta row: date + tags + CTA -->
    <div class="flex items-end justify-between gap-4 mt-auto pt-2">
      <div class="flex flex-col gap-2">
        <TagList v-if="tags?.length" :tags="tags" size="sm" />
        <span class="text-xs opacity-40">{{ formattedDate }}</span>
      </div>
      <span class="text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-200 shrink-0 flex items-center">
        <span>Read</span><ArrowRight class="w-3 h-3 ml-1" aria-hidden="true" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
/**
 * FeaturedPost — hero/pinned post card, larger than PostCard.
 * Props: title, description, date, tags, slug, readingTime
 */
const props = defineProps<{
  title: string
  description: string
  date: string
  tags?: string[]
  slug: string
  readingTime?: string
}>()

const { formatDate } = useFormatDate()

const formattedDate = computed(() => {
  return formatDate(props.date)
})
</script>
