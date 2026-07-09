<template>
  <div
    ref="el"
    :class="[
      'transition-[opacity,transform]',
      isVisible
        ? 'opacity-100 translate-y-0 translate-x-0'
        : variant === 'fade-up'   ? 'opacity-0 translate-y-6'
        : variant === 'fade-left' ? 'opacity-0 translate-x-4'
        : variant === 'fade-right'? 'opacity-0 -translate-x-4'
        : 'opacity-0',
    ]"
    :style="{
      transitionDuration: duration + 'ms',
      transitionDelay: delay + 'ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }"
  >
    <slot />
  </div>
</template>

/**
 * Reveals slot content when it enters the viewport.
 * Supports fade-up, fade-in, fade-left, fade-right variants.
 * Respects prefers-reduced-motion.
 */
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  delay?: number
  duration?: number
  variant?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right'
  once?: boolean
}>(), {
  delay: 0,
  duration: 450,
  variant: 'fade-up',
  once: true,
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

  // Skip animation for users who prefer reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) { isVisible.value = true; return }

  // Hide once we're on the client, then let the observer reveal
  isVisible.value = false

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // When once=true, disconnect after first reveal
          if (props.once) {
            observer?.disconnect()
          }
        } else if (!props.once) {
          // Re-trigger: hide again when element leaves viewport
          isVisible.value = false
        }
      })
    },
    { threshold: 0.15 }
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
