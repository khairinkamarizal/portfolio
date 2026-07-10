<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="project-card"
    :style="{ '--project-ratio': ratio }"
    :aria-label="`${project.title}, ${project.discipline} project (opens on Behance)`">
    <div class="project-card__media">
      <img
        v-if="project.thumbnail"
        :src="project.thumbnail"
        :alt="`${project.title} project cover`"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        width="1200"
        height="900">
      <ProjectThumbnail v-else :category="project.discipline" :title="project.title" />
      <div class="project-card__index" aria-hidden="true">{{ String(index).padStart(2, '0') }}</div>
      <div class="project-card__open" aria-hidden="true"><ArrowUpRight :size="18" /></div>
    </div>

    <div class="project-card__body">
      <div class="project-card__top">
        <h3>{{ project.title }}</h3>
        <span class="project-card__year">{{ project.year }}</span>
      </div>
      <dl class="project-card__ledger">
        <dt>Discipline</dt><dd>{{ project.discipline }}</dd>
        <dt>Role</dt><dd>{{ project.role }}</dd>
        <dt>Medium</dt><dd>{{ project.medium }}</dd>
        <dt>Scope</dt><dd>{{ project.scope.join(' / ') }}</dd>
      </dl>
      <p class="project-card__description">{{ project.description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { PortfolioProject } from '~/data/projects'

const props = withDefaults(defineProps<{ project: PortfolioProject; index?: number; eager?: boolean }>(), { index: 1, eager: false })
const ratio = computed(() => props.project.layout === 'portrait' ? '4 / 5' : props.project.layout === 'wide' ? '16 / 10' : '4 / 3')
</script>
