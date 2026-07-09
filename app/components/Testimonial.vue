<template>
  <figure class="testimonial">
    <span class="testimonial-mark" aria-hidden="true">&ldquo;</span>
    <blockquote class="testimonial-quote">{{ quote }}</blockquote>
    <figcaption class="testimonial-footer">
      <span class="testimonial-name">{{ name }}</span>
      <span class="testimonial-sep" aria-hidden="true">·</span>
      <span class="testimonial-role">{{ role }}<template v-if="company">, {{ company }}</template></span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  quote: string
  name: string
  role: string
  company?: string
}>()
</script>

<style scoped>
.testimonial {
  position: relative;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  margin: 0;
}

:global(.dark) .testimonial {
  border-color: rgba(255, 255, 255, 0.08);
}

.testimonial-mark {
  display: block;
  font-size: 4rem;
  line-height: 1;
  opacity: 0.12;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  margin-bottom: -1rem;
}

.testimonial-quote {
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.7;
  opacity: 0.85;
  margin: 0 0 1.5rem;
}

.testimonial-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'Space Mono', monospace;
  opacity: 0.65;
}

.testimonial-name {
  font-weight: 700;
  opacity: 1;
}

.testimonial-sep {
  opacity: 0.4;
}
</style>
