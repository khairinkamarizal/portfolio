<template>
  <Transition name="page-fade" mode="out-in">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// Page transition component
// Wraps slot in a fade transition
// Used in layout to animate between page navigations
// Uses Vue's <Transition> component with CSS
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
