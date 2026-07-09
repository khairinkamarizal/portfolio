<template>
  <article class="group w-full">
    <!-- Thumbnail -->
    <div class="w-full aspect-[16/9] overflow-hidden bg-black/5 dark:bg-white/5 mb-5">
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
        class="text-xs tracking-widest uppercase opacity-40 font-mono text-black dark:text-white"
        style="font-family: 'Space Mono', monospace">
        {{ category }}
      </p>

      <!-- Title -->
      <h2 class="text-2xl md:text-3xl font-bold leading-tight text-black dark:text-white">
        {{ title }}
      </h2>

      <!-- Description -->
      <p
        v-if="description"
        class="text-sm opacity-60 leading-relaxed max-w-2xl text-black dark:text-white">
        {{ description }}
      </p>

      <!-- Year + tags + CTA row -->
      <div class="flex items-center justify-between flex-wrap gap-3 pt-1">
        <div class="flex items-center gap-3 flex-wrap">
          <span
            v-if="year"
            class="text-xs font-mono opacity-40 text-black dark:text-white"
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
          class="relative text-xs tracking-widest uppercase font-mono text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          style="font-family: 'Space Mono', monospace">
          View Project →
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
