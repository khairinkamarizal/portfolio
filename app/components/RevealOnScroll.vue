<template>
  <div ref="el" :class="['reveal-on-scroll', revealed ? 'revealed' : 'hidden-initial', `direction-${direction}`]" :style="{ transitionDelay: `${delay}ms` }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  delay?: number
  direction?: 'up' | 'left'
}>(), {
  delay: 0,
  direction: 'up',
})

const el = ref<HTMLElement | null>(null)
const revealed = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !revealed.value) {
          revealed.value = true
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

<style scoped>
.reveal-on-scroll {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hidden-initial.direction-up {
  opacity: 0;
  transform: translateY(24px);
}

.hidden-initial.direction-left {
  opacity: 0;
  transform: translateX(-24px);
}

.revealed {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
