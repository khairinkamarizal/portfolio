<template>
  <Transition name="fade">
    <div
      v-if="showIndicator"
      class="scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200"
      aria-hidden="true">
      <span class="text-xs tracking-widest opacity-70 normal-case font-sans">Scroll</span>
      <svg
        class="w-4 h-4 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
// Scroll indicator component
// Shows animated arrow/line indicating "scroll down"
// Fades out after user scrolls

const showIndicator = ref(true)

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      showIndicator.value = false
      window.removeEventListener('scroll', handleScroll)
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
