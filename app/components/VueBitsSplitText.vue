<template>
  <component
    :is="tag"
    ref="elementRef"
    :class="['vue-bits-split-text', className]">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText as GsapSplitText } from 'gsap/SplitText'

// Adapted from Vue Bits' SplitText component for this portfolio's Nuxt setup.
// https://vue-bits.dev/text-animations/split-text
gsap.registerPlugin(GsapSplitText)

type SplitType = 'chars' | 'words' | 'lines' | 'words, chars'
type TagName = 'h1' | 'h2' | 'h3' | 'p' | 'span'

const props = withDefaults(defineProps<{
  text: string
  tag?: TagName
  splitType?: SplitType
  delay?: number
  startDelay?: number
  duration?: number
  ease?: string
  className?: string
  threshold?: number
  rootMargin?: string
  from?: gsap.TweenVars
  to?: gsap.TweenVars
}>(), {
  tag: 'span',
  splitType: 'chars',
  delay: 40,
  startDelay: 0,
  duration: 0.9,
  ease: 'power3.out',
  className: '',
  threshold: 0.12,
  rootMargin: '0px 0px -8% 0px',
  from: () => ({ opacity: 0, yPercent: 105 }),
  to: () => ({ opacity: 1, yPercent: 0 }),
})

const emit = defineEmits<{ 'animation-complete': [] }>()
const elementRef = ref<HTMLElement | null>(null)
let split: GsapSplitText | null = null
let tween: gsap.core.Tween | null = null
let observer: IntersectionObserver | null = null
let hasAnimated = false

function targetsFor(instance: GsapSplitText): Element[] {
  if (props.splitType.includes('chars')) return instance.chars ?? []
  if (props.splitType.includes('words')) return instance.words ?? []
  return instance.lines ?? []
}

function revealImmediately() {
  if (!elementRef.value) return
  gsap.set(elementRef.value, { opacity: 1, clearProps: 'transform,willChange' })
}

function animate() {
  if (!elementRef.value || hasAnimated) return
  hasAnimated = true

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealImmediately()
    emit('animation-complete')
    return
  }

  split = new GsapSplitText(elementRef.value, {
    type: props.splitType,
    smartWrap: true,
    charsClass: 'vb-split-char',
    wordsClass: 'vb-split-word',
    linesClass: 'vb-split-line',
  })

  tween = gsap.fromTo(
    targetsFor(split),
    { ...props.from },
    {
      ...props.to,
      duration: props.duration,
      delay: props.startDelay / 1000,
      ease: props.ease,
      stagger: props.delay / 1000,
      force3D: true,
      willChange: 'transform, opacity',
      onComplete: () => {
        gsap.set(targetsFor(split!), { clearProps: 'willChange' })
        emit('animation-complete')
      },
    },
  )
}

onMounted(async () => {
  await document.fonts.ready
  if (!elementRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      animate()
      observer?.disconnect()
    },
    { threshold: props.threshold, rootMargin: props.rootMargin },
  )
  observer.observe(elementRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  tween?.kill()
  split?.revert()
})
</script>

<style scoped>
.vue-bits-split-text {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 0.12em;
  margin-bottom: -0.12em;
  vertical-align: top;
}
</style>
