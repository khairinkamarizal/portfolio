<template>
  <div
    ref="containerRef"
    class="vb-tilt"
    @pointerenter="handlePointerEnter"
    @pointermove="handlePointerMove"
    @pointerleave="reset">
    <div ref="surfaceRef" class="vb-tilt__surface">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

// Adapted from Vue Bits' TiltedCard as a generic, low-amplitude slot wrapper.
// https://vue-bits.dev/components/tilted-card
const props = withDefaults(defineProps<{
  rotateAmplitude?: number
  scaleOnHover?: number
}>(), {
  rotateAmplitude: 2.2,
  scaleOnHover: 1.008,
})

const containerRef = ref<HTMLElement | null>(null)
const surfaceRef = ref<HTMLElement | null>(null)
let rotateXTo: ((value: number) => void) | null = null
let rotateYTo: ((value: number) => void) | null = null
let scaleTo: ((value: number) => void) | null = null

function canAnimate(event?: PointerEvent) {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    && window.matchMedia('(pointer: fine)').matches
    && (!event || event.pointerType !== 'touch')
}

function handlePointerEnter(event: PointerEvent) {
  if (!canAnimate(event)) return
  scaleTo?.(props.scaleOnHover)
}

function handlePointerMove(event: PointerEvent) {
  if (!containerRef.value || !canAnimate(event)) return
  const bounds = containerRef.value.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5
  rotateXTo?.(y * props.rotateAmplitude * -2)
  rotateYTo?.(x * props.rotateAmplitude * 2)
}

function reset() {
  rotateXTo?.(0)
  rotateYTo?.(0)
  scaleTo?.(1)
}

onMounted(() => {
  if (!surfaceRef.value) return
  gsap.set(surfaceRef.value, { transformPerspective: 1200, transformStyle: 'preserve-3d' })
  rotateXTo = gsap.quickTo(surfaceRef.value, 'rotationX', { duration: 0.55, ease: 'power3.out' })
  rotateYTo = gsap.quickTo(surfaceRef.value, 'rotationY', { duration: 0.55, ease: 'power3.out' })
  scaleTo = gsap.quickTo(surfaceRef.value, 'scale', { duration: 0.55, ease: 'power3.out' })
})

onBeforeUnmount(() => {
  if (surfaceRef.value) gsap.killTweensOf(surfaceRef.value)
})
</script>

<style scoped>
.vb-tilt,
.vb-tilt__surface {
  width: 100%;
  height: 100%;
}

.vb-tilt { perspective: 1200px; }
.vb-tilt__surface { will-change: transform; }

@media (prefers-reduced-motion: reduce), (pointer: coarse) {
  .vb-tilt__surface { will-change: auto; }
}
</style>
