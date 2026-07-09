<template>
  <div class="project-meta" style="font-family: 'Space Mono', monospace">
    <span class="project-meta-item">{{ year }}</span>
    <span class="project-meta-sep" aria-hidden="true">·</span>
    <span class="project-meta-item">{{ category }}</span>
    <template v-if="tags?.length">
      <span class="project-meta-sep" aria-hidden="true">·</span>
      <span class="flex flex-wrap gap-1 items-center">
        <TagPill
          v-for="tag in tags"
          :key="tag"
          :tag="tag"
          size="sm" />
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year: number | string
  category: string
  tags?: string[]
}>()
</script>

<style scoped>
.project-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.5;
}

.project-meta-sep {
  opacity: 0.4;
}
</style>
