<template>
  <div class="empty-state">
    <div v-if="icon" class="empty-state-icon" aria-hidden="true">
      <!-- Render a simple SVG placeholder icon or use lucide via dynamic component -->
      <component :is="iconComponent" v-if="iconComponent" class="w-8 h-8 opacity-20" />
    </div>
    <h2 class="empty-state-title">{{ title }}</h2>
    <p v-if="description" class="empty-state-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
  title: string
  description?: string
  icon?: Component
}>()

// Render icon component directly — accepts a component reference
const iconComponent = computed(() => {
  if (!props.icon) return null
  return props.icon
})
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  gap: 0.75rem;
}

.empty-state-icon {
  margin-bottom: 0.5rem;
  opacity: 0.3;
}

.empty-state-title {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.5;
  font-family: 'Space Mono', monospace;
  margin: 0;
}

.empty-state-description {
  font-size: 0.8125rem;
  line-height: 1.6;
  opacity: 0.35;
  max-width: 28rem;
  margin: 0;
}
</style>
