<template>
  <blockquote class="blockquote">
    <span class="blockquote-mark" aria-hidden="true">&ldquo;</span>
    <p class="blockquote-text">{{ quote }}</p>
    <footer v-if="author" class="blockquote-author">
      <span>— {{ author }}</span>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
defineProps<{
  quote: string
  author?: string
}>()
</script>

<style scoped>
.blockquote {
  position: relative;
  margin: 2rem 0;
  padding: 1.5rem 0 1.5rem 2rem;
  border-left: 2px solid currentColor;
}

.blockquote-mark {
  position: absolute;
  top: -0.5rem;
  left: -0.1rem;
  font-size: 5rem;
  line-height: 1;
  opacity: 0.08;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  pointer-events: none;
  user-select: none;
}

.blockquote-text {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.blockquote-author {
  margin-top: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
  font-style: normal;
  font-family: 'Space Mono', monospace;
}
</style>
