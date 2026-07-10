<template>
  <Transition name="page-fade" mode="out-in">
    <slot />
  </Transition>
</template>

/**
 * PageTransition component.
 *
 * Wraps its slot in a Vue `<Transition>` with `mode="out-in"` to animate
 * between page navigations in the app layout.
 *
 * Animation: fade + subtle vertical slide (6 px) using CSS transitions at
 * 250 ms with a smooth ease curve. `will-change` is applied to
 * opacity and transform for GPU compositing.
 *
 * No props. Drop it around `<slot />` or `<NuxtPage />` in a layout file.
 */
<script setup lang="ts">
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
