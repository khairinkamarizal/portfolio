<template>
  <div class="grid-lines" aria-hidden="true">
    <div v-for="i in columns" :key="i" class="grid-line" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  columns?: number
  opacity?: number
}>(), {
  columns: 4,
  opacity: 0.04,
})
</script>

<style scoped>
.grid-lines {
  position: fixed;
  inset: 0;
  display: flex;
  pointer-events: none;
  z-index: 0;
}

.grid-line {
  flex: 1;
  border-right: 1px solid currentColor;
  opacity: v-bind(opacity);
}

.grid-line:last-child {
  border-right: none;
}
</style>
