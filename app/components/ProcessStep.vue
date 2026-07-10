<template>
  <div class="process-step">
    <div class="flex flex-col items-start" aria-hidden="true">
      <span class="font-mono text-[8px] tracking-[0.25em] uppercase opacity-30 mb-0.5">Step</span>
      <div
        class="process-step-number font-mono">
        {{ number }}
      </div>
    </div>
    <div class="process-step-content">
      <h3 class="process-step-title">{{ title }}</h3>
      <slot name="description">
        <p class="process-step-description">{{ description }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ProcessStep
 *
 * Displays a single step in a multi-step process. Renders a large decorative
 * step number alongside a title and description. The "Step" label and number
 * are marked aria-hidden since they are purely visual; the title conveys
 * semantic meaning to assistive technologies.
 *
 * Supports an optional named slot "description" to replace the default
 * paragraph with custom markup.
 *
 * @prop {string} number      - The step identifier displayed as the large number (e.g. "01").
 * @prop {string} title       - Heading text for this process step.
 * @prop {string} description - Fallback description text rendered when the
 *                              "description" slot is not provided.
 */
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
  opacity: 0.2;
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
