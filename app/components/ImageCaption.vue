<template>
  <figure class="image-caption border border-black/10 dark:border-white/10" :style="width ? { maxWidth: width } : {}">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="image-caption-img" />
    <figcaption v-if="caption" class="image-caption-text">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
/**
 * ImageCaption — accessible image with optional caption.
 *
 * @prop {string} src - Image source URL.
 * @prop {string} alt - Alt text for the image; required for accessibility.
 * @prop {string} [caption] - Optional caption rendered in a figcaption below the image.
 * @prop {string} [width] - Optional CSS max-width applied to the figure element (e.g. '600px').
 *
 * Renders a semantic figure/figcaption pair. Image is lazy-loaded and async-decoded.
 * Styled with a monospace caption and subtle border; adapts to dark mode.
 */
defineProps<{
  src: string
  alt: string
  caption?: string
  width?: string
}>()
</script>

<style scoped>
.image-caption {
  display: block;
  margin: 2rem 0;
}

.image-caption-img {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

:global(.dark) .image-caption-img {
  border-color: rgba(255, 255, 255, 0.08);
}

.image-caption-text {
  margin-top: 0.5rem;
  font-size: 0.7rem;
  line-height: 1.5;
  letter-spacing: 0.04em;
  opacity: 0.45;
  font-family: 'Space Mono', monospace;
}
</style>
