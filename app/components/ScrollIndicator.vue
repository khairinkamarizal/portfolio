<template>
  <Transition name="fade">
    <div
      v-if="showIndicator"
      class="scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      aria-hidden="true">
      <span class="text-xs tracking-widest opacity-70 normal-case font-mono">Scroll</span>
      <span class="text-sm nudge">↓</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
/**
 * ScrollIndicator — animated "scroll down" hint.
 *
 * Displays a fixed, centered arrow and label at the bottom of the viewport to
 * prompt the user to scroll. Automatically hides with a fade transition once
 * the page has been scrolled more than 200px. Uses a passive scroll listener
 * that self-removes after triggering.
 *
 * @example <ScrollIndicator />
 */

const showIndicator = ref(true)

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
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

@keyframes nudge-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

.nudge {
  animation: nudge-down 2s ease-in-out infinite;
}
</style>
