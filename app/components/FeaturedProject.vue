<template>
  <article class="group relative flex flex-col">
    <!-- Large thumbnail -->
    <div class="relative w-full aspect-[16/9] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/8 dark:border-white/8">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      <!-- Category overlay bottom-left -->
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span v-if="category" class="font-mono text-[9px] tracking-[0.25em] uppercase text-white/80">{{ category }}</span>
      </div>
    </div>

    <!-- Content below image -->
    <div class="pt-5 flex flex-col gap-3">
      <!-- Title -->
      <h2 class="text-lg md:text-xl font-semibold tracking-tight leading-snug">{{ title }}</h2>

      <!-- Description -->
      <p v-if="description" class="text-sm opacity-55 leading-relaxed font-sans">{{ description }}</p>

      <!-- Bottom row: year + tags + CTA -->
      <div class="flex items-center justify-between gap-3 mt-1 pt-4 border-t border-black/8 dark:border-white/8">
        <div class="flex items-center gap-3 flex-wrap">
          <span v-if="year" class="font-mono text-xs opacity-40 tabular-nums">{{ year }}</span>
          <span
            v-for="tag in (tags || []).slice(0, 2)"
            :key="tag"
            class="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 border border-black/8 dark:border-white/8 opacity-60">
            {{ tag }}
          </span>
        </div>
        <a
          v-if="url || href"
          :href="url || href"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 shrink-0">
          Behance ↗
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
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
