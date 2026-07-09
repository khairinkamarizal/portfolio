<template>
  <span
    :class="[
      'tag-pill',
      `tag-pill--${size}`,
      active ? 'tag-pill--active' : 'tag-pill--inactive',
    ]"
    style="font-family: 'Space Mono', monospace">
    {{ tag }}
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag: string
  active?: boolean
  size?: 'sm' | 'md'
}>(), {
  active: false,
  size: 'sm',
})
</script>

<style scoped>
.tag-pill {
  display: inline-block;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  cursor: default;
  white-space: nowrap;
}

/* Sizes */
.tag-pill--sm {
  font-size: 0.625rem;
  padding: 0.2em 0.6em;
}

.tag-pill--md {
  font-size: 0.75rem;
  padding: 0.3em 0.75em;
}

/* Inactive: border only */
.tag-pill--inactive {
  border: 1px solid currentColor;
  opacity: 0.4;
  background-color: transparent;
  color: inherit;
}

.tag-pill--inactive:hover {
  opacity: 0.75;
}

/* Active: filled */
.tag-pill--active {
  background-color: black;
  color: white;
  border: 1px solid black;
  opacity: 1;
}

.dark .tag-pill--active {
  background-color: white;
  color: black;
  border-color: white;
}
</style>
