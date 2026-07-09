<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      type="button"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-9 h-9 p-2.5 flex items-center justify-center border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:border-black dark:hover:border-white transition-all duration-200"
      aria-label="Back to top">
      <ArrowUp :size="14" aria-hidden="true" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
