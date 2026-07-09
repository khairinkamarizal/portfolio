<template>
  <div class="process-step">
    <div
      class="process-step-number font-mono"
      aria-hidden="true">
      {{ number }}
    </div>
    <div class="process-step-content">
      <h3 class="process-step-title">{{ title }}</h3>
      <p class="process-step-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>

<style scoped>
.process-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

:global(.dark) .process-step {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.process-step:last-child {
  border-bottom: none;
}

.process-step-number {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1;
  opacity: 0.1;
  min-width: 4ch;
  flex-shrink: 0;
  letter-spacing: -0.04em;
}

.process-step-content {
  padding-top: 0.25rem;
  flex: 1;
}

.process-step-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 0.5rem;
}

.process-step-description {
  font-size: 0.875rem;
  line-height: 1.65;
  opacity: 0.6;
  margin: 0;
}
</style>
