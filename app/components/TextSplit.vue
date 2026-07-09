<template>
  <span aria-label="text" class="text-split-wrapper">
    <span
      v-for="(unit, index) in units"
      :key="index"
      class="text-split-unit"
      :style="{ animationDelay: `${index * stagger}ms` }"
      aria-hidden="true">
      <template v-if="unit === ' '">&#32;</template>
      <template v-else>{{ unit }}</template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  by?: 'char' | 'word'
  stagger?: number
}>(), {
  by: 'word',
  stagger: 50,
})

const units = computed(() => {
  if (props.by === 'char') {
    return props.text.split('')
  }
  // Split by word — interleave spaces so layout is preserved
  return props.text.split(' ').flatMap((word, i, arr) =>
    i < arr.length - 1 ? [word, ' '] : [word]
  )
})
</script>

<style scoped>
.text-split-wrapper {
  display: inline;
}

.text-split-unit {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.3em);
  animation: text-split-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes text-split-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
