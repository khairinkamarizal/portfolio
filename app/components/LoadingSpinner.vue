<template>
  <div
    role="status"
    aria-label="Loading"
    class="flex items-center justify-center">
    <span class="spinner" aria-hidden="true"></span>
  </div>
</template>

<script setup lang="ts">
// No props needed — drop in wherever a loading state is required
</script>

<style scoped>
.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  opacity: 0.5;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
