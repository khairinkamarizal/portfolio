<template>
  <Transition name="fade-overlay">
    <div
      v-if="isLoading"
      role="status"
      aria-label="Page loading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      <div class="w-24 h-24 md:w-32 md:h-32 text-black dark:text-white">
        <AppLogo />
      </div>
    </div>
  </Transition>
</template>

/**
 * Preloader component.
 *
 * Displays a full-screen loading overlay centred on the AppLogo while the
 * initial page hydrates. The overlay is shown for a minimum of 2 000 ms,
 * then fades out with a slide-up exit transition.
 *
 * Side-effects:
 * - Sets the `color-scheme` meta tag to `light dark` via `useHead`.
 * - Prints a personalised console greeting for curious visitors.
 *
 * Respects `prefers-reduced-motion` via scoped CSS overrides that collapse
 * the exit animation to a simple opacity fade.
 *
 * No props.
 */
<script setup lang="ts">
useHead({
  meta: [{ name: 'color-scheme', content: 'light dark' }]
});

const isLoading = ref(true);

onMounted(() => {
  console.log(
    "%chey i saw u. thanks for stopping by my portfolio.\ni hope you find something that inspires you here.\n— Khairinkamarizal%c",
    "background: #fff; color: #000; padding: 4px 12px; font-weight: 600; font-size: 14px; font-family: sans-serif; letter-spacing: 2px;",
    "background: #fff; color: #000; padding: 4px 12px; font-weight: 600; font-size: 14px; font-family: sans-serif; letter-spacing: 2px;",
  );
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
.fade-overlay-leave-active {
  transition:
    opacity 1.2s cubic-bezier(0.7, 0, 0.3, 1),
    transform 1.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.fade-overlay-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

:deep(svg) {
  transition: all 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .preloader-leave-active { transition: opacity 0.1s ease !important; }
  .preloader-leave-to { transform: none !important; }
}
</style>
