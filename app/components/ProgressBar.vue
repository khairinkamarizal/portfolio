<template>
  <div
    class="fixed top-0 left-0 right-0 h-1 z-50 bg-black/10 dark:bg-white/10"
    role="progressbar"
    aria-label="Reading progress"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100">
    <div
      class="h-full bg-black dark:bg-white transition-[width] duration-150 ease-out"
      :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * ProgressBar — reading progress indicator for long-form content.
 * Shows a horizontal bar at the top indicating scroll progress.
 */
const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>
