<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    xmlns="http://www.w3.org/2000/svg"
    class="border border-black/10 dark:border-white/10">
    <!-- Geometric pattern background -->
    <defs>
      <pattern :id="patternId" :width="20" :height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      </pattern>
    </defs>
    <rect :width="width" :height="height" fill="currentColor" opacity="0.02" />
    <rect :width="width" :height="height" :fill="'url(#' + patternId + ')'" />
    <!-- Diagonal lines -->
    <line x1="0" y1="0" :x2="width" :y2="height" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
    <line :x1="width" y1="0" x2="0" :y2="height" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
    <!-- Center label -->
    <text
      :x="width / 2"
      :y="height / 2"
      text-anchor="middle"
      dominant-baseline="middle"
      :font-size="Math.min(width, height) / 10"
      fill="currentColor"
      opacity="0.3"
      style="font-family: 'Space Mono', monospace; letter-spacing: 0.1em">
      {{ label || `${width}×${height}` }}
    </text>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  width: number
  height: number
  label?: string
}>()

const patternId = 'grid-' + Math.random().toString(36).slice(2, 8)
</script>
