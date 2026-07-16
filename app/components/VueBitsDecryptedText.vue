<template>
  <span
    ref="containerRef"
    class="vb-decrypted"
    v-bind="interactionListeners">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">
      <span
        v-for="(character, index) in displayText.split('')"
        :key="index"
        :class="revealedIndices.has(index) || !isAnimating ? '' : 'vb-decrypted__encrypted'">
        {{ character }}
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
// Adapted from Vue Bits' DecryptedText with a smaller API for editorial metadata.
// https://vue-bits.dev/text-animations/decrypted-text
type AnimateOn = 'view' | 'hover' | 'inViewHover'
type RevealDirection = 'start' | 'end' | 'center'

const props = withDefaults(defineProps<{
  text: string
  speed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: RevealDirection
  animateOn?: AnimateOn
  characters?: string
}>(), {
  speed: 28,
  maxIterations: 7,
  sequential: true,
  revealDirection: 'start',
  animateOn: 'hover',
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/.-',
})

const containerRef = ref<HTMLElement | null>(null)
const displayText = ref(props.text)
const revealedIndices = ref<Set<number>>(new Set())
const isAnimating = ref(false)
let interval: ReturnType<typeof setInterval> | null = null
let observer: IntersectionObserver | null = null
let hasAnimatedInView = false

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function revealOrder() {
  const indices = Array.from({ length: props.text.length }, (_, index) => index)
  if (props.revealDirection === 'end') return indices.reverse()
  if (props.revealDirection !== 'center') return indices

  const middle = (props.text.length - 1) / 2
  return indices.sort((a, b) => Math.abs(a - middle) - Math.abs(b - middle))
}

function shuffleText() {
  const characters = props.characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  displayText.value = props.text
    .split('')
    .map((character, index) => {
      if (/\s/.test(character) || revealedIndices.value.has(index)) return character
      return characters[Math.floor(Math.random() * characters.length)]
    })
    .join('')
}

function stop() {
  if (interval) clearInterval(interval)
  interval = null
}

function reset() {
  stop()
  isAnimating.value = false
  revealedIndices.value = new Set()
  displayText.value = props.text
}

function animate() {
  if (isAnimating.value || reducedMotion()) return
  stop()
  isAnimating.value = true
  revealedIndices.value = new Set()
  let iteration = 0
  const order = revealOrder()

  interval = setInterval(() => {
    if (props.sequential) {
      const next = order[iteration]
      if (next !== undefined) {
        revealedIndices.value = new Set([...revealedIndices.value, next])
      }
    }

    shuffleText()
    iteration += 1

    const complete = props.sequential
      ? iteration >= order.length
      : iteration >= props.maxIterations

    if (complete) reset()
  }, props.speed)
}

const interactionListeners = computed(() => {
  if (props.animateOn === 'hover' || props.animateOn === 'inViewHover') {
    return { onMouseenter: animate, onMouseleave: reset }
  }
  return {}
})

onMounted(() => {
  if (props.animateOn !== 'view' && props.animateOn !== 'inViewHover') return
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting || hasAnimatedInView) return
    hasAnimatedInView = true
    animate()
  }, { threshold: 0.4 })
  if (containerRef.value) observer.observe(containerRef.value)
})

watch(() => props.text, reset)

onBeforeUnmount(() => {
  stop()
  observer?.disconnect()
})
</script>

<style scoped>
.vb-decrypted { display: inline-block; white-space: pre-wrap; }
.vb-decrypted__encrypted { opacity: 0.52; }
</style>
