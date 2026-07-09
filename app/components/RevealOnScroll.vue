<template>
  <div
    ref="el"
    :class="[
      'transition-[opacity,transform] ease-out',
      isVisible ? 'opacity-100 translate-y-0' : (variant === 'fade-up' ? 'opacity-0 translate-y-4' : 'opacity-0'),
    ]"
    :style="{
      transitionDuration: '0.5s',
      transitionDelay: `${delay}ms`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  delay?: number
  variant?: 'fade-up' | 'fade-in'
}>(), {
  delay: 0,
  variant: 'fade-up',
})

const el = ref<HTMLElement | null>(null)
// Default true so SSR renders content visible; flipped to false on mount before observer fires
const isVisible = ref(true)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value || typeof IntersectionObserver === 'undefined') {
    isVisible.value = true
    return
  }

  // Hide once we're on the client, then let the observer reveal
  isVisible.value = false

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
