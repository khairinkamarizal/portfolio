<template>
  <div :class="['w-full mb-0', showLine ? 'pt-px' : '']">
    <!-- Optional top border line with width transition -->
    <div
      v-if="showLine"
      ref="lineRef"
      :class="['h-px bg-black/10 dark:bg-white/10 mb-3 transition-all duration-500', lineVisible ? 'w-full' : 'w-0']" />

    <!-- Label row -->
    <p
      class="text-xs tracking-[0.25em] uppercase font-mono opacity-50 text-black dark:text-white">
      <span v-if="number !== undefined" class="mr-3">{{ String(number).padStart(2, '0') }} /</span>
      <slot>{{ label }}</slot>
    </p>
    <p v-if="description" class="text-xs font-sans opacity-50 mt-1">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
/**
 * SectionLabel
 *
 * Small all-caps monospaced section heading, optionally preceded by a
 * numbered prefix (e.g. "01 /") and an animated top border line.
 * The border line expands from 0 to full width when the element enters
 * the viewport, using an IntersectionObserver. Accepts content via the
 * default slot or the `label` prop, with an optional `description` below.
 */
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  label?: string
  showLine?: boolean
  number?: number | string
  description?: string
}>()

const lineRef = ref<HTMLElement | null>(null)
const lineVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!lineRef.value || typeof IntersectionObserver === 'undefined') {
    lineVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lineVisible.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(lineRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
