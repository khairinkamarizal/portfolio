<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="project-card"
    :class="`project-card--${tone}`"
    :aria-label="`${title}, ${category || 'project'} (opens on Behance)`">
    <div class="project-card__media">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="`${title} project cover`"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        width="808"
        height="632" />
      <ProjectThumbnail v-else :category="category" :title="title" />

      <div class="project-card__index" aria-hidden="true">
        {{ String(index).padStart(2, '0') }}
      </div>
      <div class="project-card__open" aria-hidden="true">
        <ArrowUpRight :size="20" />
      </div>
    </div>

    <div class="project-card__body">
      <div class="project-card__heading">
        <p class="eyebrow">{{ category }} / {{ year }}</p>
        <h3>{{ title }}</h3>
      </div>
      <p v-if="description" class="project-card__description">{{ description }}</p>
      <div class="project-card__details">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <p v-if="outcome" class="project-card__outcome">{{ outcome }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  title: string
  year?: string | number
  description?: string
  tags?: string[]
  thumbnail?: string
  category?: string
  url?: string
  outcome?: string
  index?: number
  tone?: 'red' | 'blue' | 'ink' | 'yellow'
  eager?: boolean
}>(), {
  year: '',
  description: '',
  tags: () => [],
  thumbnail: '',
  category: '',
  url: '#',
  outcome: '',
  index: 1,
  tone: 'ink',
  eager: false,
})
</script>
