<template>
  <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="block"
    :aria-label="title + (category ? ' — ' + category : '') + ' (opens in new tab)'"
  >
  <article class="group/card relative border-l-2 border-transparent hover:border-black/25 dark:hover:border-white/25 transition-colors duration-200 translate-y-0">
    <!-- Thumbnail -->
    <div class="relative w-full aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.02]" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-700 ease-out group-hover/card:scale-[1.02]" />
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover/card:bg-black/[0.04] dark:group-hover/card:bg-white/[0.04] transition-colors duration-500" />
      <!-- Year badge top-right -->
      <span class="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] opacity-0 group-hover/card:opacity-60 transition-opacity duration-300 bg-white dark:bg-black px-2 py-0.5 tabular-nums">
        {{ year }}
      </span>
    </div>

    <!-- Content -->
    <div class="pt-3 pb-2">
      <!-- Category + title row -->
      <div class="flex items-start justify-between gap-4 mb-1.5">
        <div class="flex flex-col gap-0.5 min-w-0">
          <p v-if="category" class="font-mono text-[9px] tracking-[0.25em] uppercase opacity-40 mb-1">{{ category }}</p>
          <h3 class="text-sm font-semibold tracking-tight leading-snug truncate">{{ title }}</h3>
        </div>
        <!-- Arrow that appears on hover -->
        <span class="opacity-0 group-hover/card:opacity-40 transition-opacity duration-200 shrink-0 mt-0.5 text-xs">↗</span>
      </div>

      <!-- Description -->
      <p v-if="description" class="text-xs opacity-[0.65] line-clamp-2 leading-relaxed font-sans">
        {{ description }}
      </p>

      <!-- Tags row -->
      <div v-if="tags?.length" class="flex flex-wrap gap-1 mt-3">
        <span
          v-for="(tag, index) in tags.slice(0, 3)"
          :key="tag"
          :style="{ transitionDelay: (index * 30) + 'ms' }"
          class="tag-base opacity-0 group-hover/card:opacity-60 transition-opacity duration-150">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
  </a>
  <div v-else class="block">
  <article class="group/card relative border-l-2 border-transparent hover:border-black/25 dark:hover:border-white/25 transition-colors duration-200">
    <!-- Thumbnail -->
    <div class="relative w-full aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.02]" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-700 ease-out group-hover/card:scale-[1.02]" />
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover/card:bg-black/[0.04] dark:group-hover/card:bg-white/[0.04] transition-colors duration-500" />
      <!-- Year badge top-right -->
      <span class="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] opacity-0 group-hover/card:opacity-60 transition-opacity duration-300 bg-white dark:bg-black px-2 py-0.5 tabular-nums">
        {{ year }}
      </span>
    </div>

    <!-- Content -->
    <div class="pt-4 pb-2">
      <!-- Category + title row -->
      <div class="flex items-start justify-between gap-4 mb-1.5">
        <div class="flex flex-col gap-0.5 min-w-0">
          <p v-if="category" class="font-mono text-[9px] tracking-[0.25em] uppercase opacity-40 mb-1">{{ category }}</p>
          <h3 class="text-sm font-semibold tracking-tight leading-snug truncate">{{ title }}</h3>
        </div>
        <!-- Arrow that appears on hover -->
        <span class="opacity-0 group-hover/card:opacity-40 transition-opacity duration-200 shrink-0 mt-0.5 text-xs">↗</span>
      </div>

      <!-- Description -->
      <p v-if="description" class="text-xs opacity-[0.65] line-clamp-2 leading-relaxed font-sans">
        {{ description }}
      </p>

      <!-- Tags row -->
      <div v-if="tags?.length" class="flex flex-wrap gap-1 mt-3">
        <span
          v-for="(tag, index) in tags.slice(0, 3)"
          :key="tag"
          :style="{ transitionDelay: (index * 30) + 'ms' }"
          class="tag-base opacity-0 group-hover/card:opacity-60 transition-opacity duration-150">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
  </div>
</template>

<script setup lang="ts">
/**
 * WorkCard — project portfolio card.
 *
 * Displays a project card with thumbnail, title, category, description, and tags.
 * Links to an external URL when provided. Falls back to a generated ProjectThumbnail
 * when no thumbnail image is supplied.
 *
 * @prop {string} title - Project title (required)
 * @prop {string|number} [year] - Year the project was completed
 * @prop {string} [description] - Short description shown below the title
 * @prop {string[]} [tags] - Up to 3 technology/skill tags displayed on hover
 * @prop {string} [thumbnail] - Optional image URL; uses ProjectThumbnail when omitted
 * @prop {string} [category] - Project category shown as a small label above the title
 * @prop {string} [url] - External link; wraps the card in an <a> tag when provided
 */
defineProps<{
  title: string
  year?: string | number
  description?: string
  tags?: string[]
  thumbnail?: string
  category?: string
  url?: string
}>()
</script>
