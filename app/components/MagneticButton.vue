<template>
  <div
    ref="el"
    class="magnetic-button"
    :style="{ transform: `translate(${offsetX}px, ${offsetY}px)`, willChange: isHovering ? 'transform' : 'auto' }"
    @mouseenter="isHovering = true"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * MagneticButton — wrapper that applies a magnetic cursor attraction effect.
 *
 * @prop {number} [strength=20] - Maximum pixel offset the element moves toward the cursor.
 *   Higher values produce a more pronounced magnetic pull.
 *
 * Tracks mousemove within the element and translates it toward the cursor position,
 * normalized relative to the element's own dimensions so strength is consistent
 * regardless of element size. Resets to origin on mouseleave with a CSS transition.
 * Automatically disabled on touch/pointer-coarse devices (no hover capability)
 * to avoid unexpected layout shifts on mobile.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  strength?: number
}>(), {
  strength: 20,
})

const el = ref<HTMLElement | null>(null)
const offsetX = ref(0)
const offsetY = ref(0)
const isHovering = ref(false)

// Only activate on non-touch devices
const isTouch = ref(false)

onMounted(() => {
  isTouch.value = window.matchMedia('(hover: none)').matches
})

function onMouseMove(e: MouseEvent) {
  if (isTouch.value || !el.value) return

  const rect = el.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = e.clientX - centerX
  const dy = e.clientY - centerY

  // Normalize by half the element size so strength is relative
  offsetX.value = (dx / (rect.width / 2)) * props.strength
  offsetY.value = (dy / (rect.height / 2)) * props.strength
}

function onMouseLeave() {
  isHovering.value = false
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<style scoped>
.magnetic-button {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-button:hover {
  transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
