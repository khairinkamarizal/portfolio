<template>
  <ClientOnly>
    <div
      class="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left bg-black dark:bg-white"
      :style="{ transform: `scaleX(${progress})`, transition: 'transform 0.1s linear' }"
      role="progressbar"
      :aria-valuenow="Math.round(progress * 100)"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Reading progress" />
  </ClientOnly>
</template>

/**
 * ReadingProgress component.
 *
 * Renders a fixed 2 px progress bar at the top of the viewport that tracks
 * how far the user has scrolled through the page. The bar scales horizontally
 * from 0 to 1 using a CSS `scaleX` transform for GPU-composited animation.
 *
 * - Wrapped in `<ClientOnly>` to prevent SSR hydration mismatches.
 * - Uses a passive scroll listener for optimal scroll performance.
 * - Fully accessible: `role="progressbar"` with `aria-valuenow`,
 *   `aria-valuemin`, `aria-valuemax`, and `aria-label` attributes.
 *
 * No props.
 */
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>
