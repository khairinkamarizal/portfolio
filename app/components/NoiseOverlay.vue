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
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2%, -3%); }
  20% { transform: translate(3%, 2%); }
  30% { transform: translate(-1%, 4%); }
  40% { transform: translate(4%, -1%); }
  50% { transform: translate(-3%, 2%); }
  60% { transform: translate(2%, -4%); }
  70% { transform: translate(-4%, 1%); }
  80% { transform: translate(3%, -2%); }
  90% { transform: translate(-2%, 3%); }
}

.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  mix-blend-mode: overlay;
  animation: grain 8s steps(10) infinite;
}

.noise-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
