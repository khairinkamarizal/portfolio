<template>
  <article class="group w-full">
    <!-- Thumbnail -->
    <div class="w-full aspect-[16/9] overflow-hidden bg-black/5 dark:bg-white/5 mb-5 border border-black/8 dark:border-white/8">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <ProjectThumbnail
        v-else
        :category="category"
        :title="title"
        class="w-full h-full transition-transform duration-700 group-hover:scale-105" />
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-3">
      <!-- Eyebrow category -->
      <p
        v-if="category"
        class="text-xs tracking-widest uppercase opacity-50 font-mono text-black dark:text-white"
        style="font-family: 'Space Mono', monospace">
        {{ category }}
      </p>

      <!-- Title -->
      <h2 class="text-xl md:text-2xl font-bold tracking-tight leading-snug text-black dark:text-white">
        {{ title }}
      </h2>

      <!-- Description -->
      <p
        v-if="description"
        class="text-sm opacity-55 leading-relaxed text-black dark:text-white">
        {{ description }}
      </p>

      <!-- Year + tags + CTA row -->
      <div class="flex items-center justify-between flex-wrap gap-3 mt-4 pt-4 border-t border-black/8 dark:border-white/8">
        <div class="flex items-center gap-3 flex-wrap">
          <span
            v-if="year"
            class="text-xs font-mono tabular-nums opacity-40 text-black dark:text-white"
            style="font-family: 'Space Mono', monospace">
            {{ year }}
          </span>
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-[10px] tracking-wide uppercase px-2 py-0.5 border border-black/15 dark:border-white/15 text-black/60 dark:text-white/60">
            {{ tag }}
          </span>
        </div>

        <!-- CTA -->
        <NuxtLink
          v-if="href"
          :to="href"
          class="link-underline relative text-xs tracking-widest uppercase font-mono text-black dark:text-white"
          style="font-family: 'Space Mono', monospace">
          View on Behance →
        </NuxtLink>
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
}>()
</script>
