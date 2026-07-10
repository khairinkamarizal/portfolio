<template>
  <div class="background-text select-none" :style="{ opacity }" aria-hidden="true">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
/**
 * BackgroundText — large decorative watermark text for section backgrounds.
 *
 * @prop {string} text - The text string to display as a background watermark.
 * @prop {number} [opacity=0.04] - CSS opacity applied to the element (0–1). Defaults to 0.04
 *   for a very subtle effect that doesn't interfere with foreground content.
 *
 * Renders aria-hidden so screen readers skip it entirely.
 * Absolutely positioned to fill its nearest positioned ancestor.
 * Font size is viewport-relative (20vw) for a bold, full-bleed typographic effect.
 * Pointer events are disabled to avoid blocking interactive content beneath it.
 */
withDefaults(defineProps<{
  text: string
  opacity?: number
}>(), {
  opacity: 0.04,
})
</script>

<style scoped>
.background-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20vw;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  font-family: 'Space Mono', monospace;
  color: currentColor;
}
</style>
