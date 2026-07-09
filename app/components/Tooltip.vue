<template>
  <span class="relative inline-block group">
    <slot />
    <span
      class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-[11px] tracking-wide whitespace-nowrap bg-black dark:bg-white text-white dark:text-black opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-150 z-50"
      role="tooltip">
      {{ text }}
    </span>
  </span>
</template>

<script setup lang="ts">
/**
 * Tooltip — simple CSS-only tooltip component.
 * Props: text (string)
 * Wraps slot in a container, shows tooltip on hover.
 * No JS — pure CSS transition via group-hover.
 */
defineProps<{
  text: string
}>()
</script>
