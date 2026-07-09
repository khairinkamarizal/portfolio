<template>
  <Transition name="divider-fade">
    <div
      v-show="mounted"
      :class="['divider', `divider--${variant}`, extraClass]"
      aria-hidden="true" />
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Reusable section divider component
// Variants: line | dots | zigzag | wave
// Editorial design, dark mode aware

withDefaults(defineProps<{
  variant?: 'line' | 'dots' | 'zigzag' | 'wave'
  extraClass?: string
}>(), {
  variant: 'line',
  extraClass: '',
})

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
}

/* Line variant — simple hr */
.divider--line {
  background-color: currentColor;
  opacity: 0.1;
}

/* Dots variant — CSS gradient dots */
.divider--dots {
  height: 16px;
  background-image: radial-gradient(circle, currentColor 1.5px, transparent 1.5px);
  background-size: 16px 16px;
  background-position: 0 50%;
  opacity: 0.15;
}

.divider--dots::before {
  content: none;
}

/* Zigzag variant — CSS zigzag pattern */
.divider--zigzag {
  height: 8px;
  background: none;
  position: relative;
  overflow: hidden;
}

.divider--zigzag::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(135deg, currentColor 25%, transparent 25%) -4px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -4px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: 8px 8px;
  opacity: 0.12;
}

/* Wave variant — CSS wave using border-radius trick */
.divider--wave {
  height: 12px;
  background: none;
  position: relative;
  overflow: hidden;
}

.divider--wave::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 20px);
  height: 24px;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.15;
}

/* Fade-in transition */
.divider-fade-enter-active {
  transition: opacity 0.4s ease;
}

.divider-fade-enter-from {
  opacity: 0;
}
</style>
