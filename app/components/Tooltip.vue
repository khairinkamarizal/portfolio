<template>
  <span class="relative inline-block group" :aria-describedby="tooltipId">
    <slot />
    <span
      :id="tooltipId"
      class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-[11px] tracking-wide whitespace-nowrap bg-black dark:bg-white text-white dark:text-black opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-150 z-50"
      role="tooltip">
      {{ text }}
    </span>
  </span>
</template>

<script setup lang="ts">
/**
 * Tooltip — accessible CSS-driven tooltip component.
 *
 * @prop {string} text - The tooltip text to display on hover or focus.
 *
 * Wraps slot content in a relatively positioned container and shows a tooltip
 * above the element on hover or focus-within. Visibility is handled purely via
 * CSS group-hover/group-focus-within transitions — no JS involved.
 * A unique ID is generated per instance and linked via aria-describedby for
 * screen reader accessibility.
 */
defineProps<{
  text: string
}>()

const tooltipId = 'tooltip-' + Math.random().toString(36).slice(2, 8)
</script>
