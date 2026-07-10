<template>
  <div :class="['tool-badge', `tool-badge--${type}`, 'hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors duration-150 -mx-1 px-1']">
    <span class="tool-badge-initial" aria-hidden="true">{{ initial }}</span>
    <span class="tool-badge-name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  type: 'design' | 'dev' | 'other'
}>(), {
  type: 'other',
})

const initial = computed(() => props.name.charAt(0).toUpperCase())
</script>

<style scoped>
.tool-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid currentColor;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  font-family: 'Space Mono', monospace;
  cursor: default;
}

.tool-badge:hover {
  opacity: 1;
}

.tool-badge-initial {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.6rem;
  font-weight: 700;
  border: 1px solid currentColor;
  opacity: 0.5;
  flex-shrink: 0;
}

/* Type-specific left accent */
.tool-badge--design .tool-badge-initial {
  border-style: solid;
}

.tool-badge--dev .tool-badge-initial {
  border-style: dashed;
}

.tool-badge--other .tool-badge-initial {
  border-style: dotted;
}

.tool-badge-name {
  line-height: 1;
}
</style>
