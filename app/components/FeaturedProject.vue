<template>
  <article class="group/featured group/card relative flex flex-col transition-transform duration-300 group-hover/card:translate-y-[-2px] overflow-hidden">
    <!-- Large thumbnail -->
    <div class="relative w-full aspect-[16/9] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/8 dark:border-white/8">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/featured:scale-[1.02]" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-700 ease-out group-hover/featured:scale-[1.02]" />
      <!-- Category overlay bottom-left -->
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-300">
        <span v-if="category" class="font-mono text-[9px] tracking-[0.25em] uppercase text-white/80">{{ category }}</span>
      </div>
    </div>

    <!-- Content below image -->
    <div class="pt-5 flex flex-col gap-3">
      <!-- Title -->
      <h2 class="text-base md:text-lg font-semibold tracking-tight leading-snug">{{ title }}</h2>

      <!-- Description -->
      <p v-if="description" class="text-sm opacity-60 leading-relaxed font-sans">{{ description }}</p>

      <!-- Bottom row: year + tags + CTA -->
      <div class="flex items-center justify-between gap-3 mt-1 pt-4 border-t border-black/8 dark:border-white/8">
        <div class="flex items-center gap-3 flex-wrap">
          <span v-if="year" class="font-mono text-xs opacity-40 tabular-nums">{{ year }}</span>
          <span
            v-for="tag in (tags || []).slice(0, 2)"
            :key="tag"
            class="tag-base">
            {{ tag }}
          </span>
        </div>
        <a
          v-if="url || href"
          :href="url || href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="'View ' + title + ' on Behance (opens in new tab)'"
          class="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2">
          Behance ↗
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
/**
 * FeaturedProject
 *
 * Displays a single featured project card with a large 16:9 thumbnail,
 * title, description, year, tags, and an optional Behance link.
 * Falls back to a generated ProjectThumbnail when no image is provided.
 * Supports hover animations and is intended for use in the Work section.
 */
defineProps<{
  title: string
  description?: string
  category?: string
  year?: string | number
  tags?: string[]
  thumbnail?: string
  href?: string
  url?: string
}>()
</script>
