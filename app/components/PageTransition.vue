<template>
  <Transition name="page-fade" mode="out-in">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// PageTransition: wraps slot in Vue Transition for page fade animation.
// No runtime logic — animation is handled entirely via scoped CSS.
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
