<template>
  <ol class="numbered-list" role="list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="numbered-list-item">
      <span
        class="numbered-list-number font-mono"
        aria-hidden="true">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
      <span class="numbered-list-text">{{ item }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<style scoped>
.numbered-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.numbered-list-item {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

:global(.dark) .numbered-list-item {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.numbered-list-item:last-child {
  border-bottom: none;
}

.numbered-list-number {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1;
  opacity: 0.2;
  min-width: 3ch;
  flex-shrink: 0;
  letter-spacing: -0.02em;
}

.numbered-list-text {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
}
</style>
