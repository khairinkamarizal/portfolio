<template>
  <div ref="rootRef" class="vb-velocity">
    <span class="sr-only">{{ text }}</span>
    <div ref="trackRef" class="vb-velocity__track" aria-hidden="true">
      <span
        v-for="copy in copies"
        :key="copy"
        :ref="copy === 1 ? setMeasureRef : undefined"
        class="vb-velocity__copy">
        {{ text }}<span class="vb-velocity__separator">↗</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// A monochrome, dependency-light adaptation of Vue Bits' ScrollVelocity.
// https://vue-bits.dev/text-animations/scroll-velocity
const props = withDefaults(defineProps<{
  text: string
  velocity?: number
}>(), {
  velocity: 18,
})

const rootRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const measureRef = ref<HTMLElement | null>(null)
const copies = ref(8)

let frame = 0
let copyWidth = 0
let position = 0
let smoothVelocity = 0
let lastScrollY = 0
let lastScrollTime = 0
let lastFrameTime = 0
let resizeObserver: ResizeObserver | null = null

function setMeasureRef(element: unknown) {
  measureRef.value = element instanceof HTMLElement ? element : null
}

function wrap(value: number, width: number) {
  return ((value % width) + width) % width
}

function measure() {
  if (!rootRef.value || !measureRef.value) return
  copyWidth = measureRef.value.offsetWidth
  if (!copyWidth) return
  copies.value = Math.max(8, Math.ceil((rootRef.value.offsetWidth * 2.5) / copyWidth))
}

function handleScroll() {
  const now = performance.now()
  const elapsed = Math.max(now - lastScrollTime, 16)
  smoothVelocity += ((window.scrollY - lastScrollY) / elapsed) * 260
  lastScrollY = window.scrollY
  lastScrollTime = now
}

function animate(now: number) {
  const elapsed = lastFrameTime ? Math.min(now - lastFrameTime, 40) : 16
  lastFrameTime = now
  smoothVelocity *= 0.91
  position -= (props.velocity + smoothVelocity) * (elapsed / 1000)

  if (trackRef.value && copyWidth) {
    trackRef.value.style.transform = `translate3d(${-wrap(-position, copyWidth)}px, 0, 0)`
  }
  frame = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    measure()
    resizeObserver = new ResizeObserver(measure)
    if (rootRef.value) resizeObserver.observe(rootRef.value)

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lastScrollY = window.scrollY
      lastScrollTime = performance.now()
      window.addEventListener('scroll', handleScroll, { passive: true })
      frame = requestAnimationFrame(animate)
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  resizeObserver?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<style scoped>
.vb-velocity {
  width: 100%;
  overflow: hidden;
}

.vb-velocity__track {
  display: flex;
  width: max-content;
  white-space: nowrap;
  will-change: transform;
}

.vb-velocity__copy {
  flex: 0 0 auto;
  padding-right: clamp(2.5rem, 5vw, 5rem);
}

.vb-velocity__separator {
  display: inline-block;
  margin-left: clamp(2.5rem, 5vw, 5rem);
}

@media (prefers-reduced-motion: reduce) {
  .vb-velocity__track { will-change: auto; }
}
</style>
