<template>
  <Transition name="fade">
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-9 h-9 flex items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black hover:border-black dark:hover:border-white transition-all duration-200"
      aria-label="Back to top">
      <ArrowUp :size="14" />
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
