<template>
  <div
    v-if="isDesktop"
    class="cursor-follower"
    :class="{ 'is-visible': isVisible, 'is-hovering-link': isHoveringLink }"
    :style="{ transform: `translate(${x}px, ${y}px)` }"
    aria-hidden="true" />
</template>

<script setup lang="ts">
// Custom cursor follower component
// Client-side only — only renders on desktop (md+, pointer: fine)
// Small circle that follows the mouse with slight lag via CSS transition
// Dark mode aware (inverts color)

const x = ref(-100)
const y = ref(-100)
const isVisible = ref(false)
const isDesktop = ref(false)
const isHoveringLink = ref(false)

onMounted(() => {
  // Only activate on devices with fine pointer (mouse)
  const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 768px)')
  isDesktop.value = mediaQuery.matches

  if (!isDesktop.value) return

  document.body.style.cursor = 'none'

  let targetX = -100
  let targetY = -100
  let currentX = -100
  let currentY = -100
  let rafId: number

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animate = () => {
    currentX = lerp(currentX, targetX, 0.16)
    currentY = lerp(currentY, targetY, 0.16)
    x.value = currentX
    y.value = currentY
    rafId = requestAnimationFrame(animate)
  }

  const handleMouseMove = (e: MouseEvent) => {
    targetX = e.clientX - 5
    targetY = e.clientY - 5
    if (!isVisible.value) isVisible.value = true
  }

  const handleMouseLeave = () => {
    isVisible.value = false
  }

  const onLinkEnter = () => { isHoveringLink.value = true }
  const onLinkLeave = () => { isHoveringLink.value = false }
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', onLinkEnter)
    el.addEventListener('mouseleave', onLinkLeave)
  })

  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  rafId = requestAnimationFrame(animate)

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    cancelAnimationFrame(rafId)
    document.querySelectorAll('a, button').forEach(el => {
      el.removeEventListener('mouseenter', onLinkEnter)
      el.removeEventListener('mouseleave', onLinkLeave)
    })
    document.body.style.cursor = ''
  })
})
</script>

<style scoped>
.cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 0.2s ease;
  will-change: transform;
}

.cursor-follower.is-visible {
  opacity: 1;
}

.cursor-follower.is-hovering-link {
  width: 24px;
  height: 24px;
  transition: opacity 0.2s ease, width 0.15s ease, height 0.15s ease;
}

:global(.dark) .cursor-follower {
  background-color: white;
}
</style>
