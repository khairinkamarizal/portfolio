<template>
  <!-- v-once: grid is purely decorative and static, skip re-renders -->
  <div
    v-once
    :class="['grid-bg pointer-events-none', `grid-bg--${variant}`]"
    :style="gridStyle"
    class="pointer-events-none"
    aria-hidden="true" />
</template>

<script setup lang="ts">
/**
 * GridBackground — full-screen decorative CSS background texture.
 *
 * Renders a fixed, pointer-events-none background pattern behind page content.
 * Pure CSS — no images. Rendered with `v-once` since the pattern is static.
 * Dark mode aware via scoped CSS custom colors.
 *
 * @prop {'dots'|'grid'|'lines'} [variant='dots'] - Pattern style
 * @prop {number} [size=24] - Grid cell size in pixels
 *
 * @example <GridBackground variant="dots" :size="24" />
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'dots' | 'grid' | 'lines'
  size?: number
}>(), {
  variant: 'dots',
  size: 24,
})

const gridStyle = computed(() => {
  const s = props.size
  if (props.variant === 'dots') {
    return { backgroundSize: `${s}px ${s}px` }
  }
  if (props.variant === 'grid') {
    return { backgroundSize: `${s}px ${s}px` }
  }
  if (props.variant === 'lines') {
    return {
      backgroundImage: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent ${s - 1}px,
        currentColor ${s - 1}px,
        currentColor ${s}px
      )`,
    }
  }
  return {}
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
  background-image: radial-gradient(circle, currentColor 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  color: rgba(0, 0, 0, 0.18);
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
