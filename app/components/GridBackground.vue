<template>
  <div
    :class="['grid-bg pointer-events-none', `grid-bg--${variant}`]"
    aria-hidden="true" />
</template>

<script setup lang="ts">
// Subtle CSS background texture component
// CSS only, no images
// Variants: dots | grid | lines
// Dark mode aware — very subtle opacity

withDefaults(defineProps<{
  variant?: 'dots' | 'grid' | 'lines'
}>(), {
  variant: 'dots',
})
</script>

<style scoped>
.grid-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* Dots variant */
.grid-bg--dots {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
  color: rgba(0, 0, 0, 0.2);
}

:global(.dark) .grid-bg--dots {
  color: rgba(255, 255, 255, 0.12);
}

/* Grid variant */
.grid-bg--grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 32px 32px;
  color: rgba(0, 0, 0, 0.06);
}

:global(.dark) .grid-bg--grid {
  color: rgba(255, 255, 255, 0.04);
}

/* Lines variant */
.grid-bg--lines {
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 23px,
    currentColor 23px,
    currentColor 24px
  );
  color: rgba(0, 0, 0, 0.05);
}

:global(.dark) .grid-bg--lines {
  color: rgba(255, 255, 255, 0.03);
}
</style>
