<template>
  <div class="noise-overlay" :style="{ opacity }" aria-hidden="true">
    <svg class="noise-svg" xmlns="http://www.w3.org/2000/svg">
      <filter :id="filterId">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" :filter="`url(#${filterId})`" />
    </svg>
  </div>
</template>

<script setup lang="ts">
// Subtle CSS noise/grain overlay for the page
// Creates a film grain effect using an inline SVG feTurbulence filter
// Very subtle — default opacity 0.04
// Optional prop: opacity (default 0.04)

withDefaults(defineProps<{
  opacity?: number
}>(), {
  opacity: 0.04,
})

const filterId = 'noise-' + Math.random().toString(36).slice(2, 8)
</script>

<style scoped>
.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.noise-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
