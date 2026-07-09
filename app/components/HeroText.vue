<template>
  <div class="flex flex-col gap-0" aria-label="Hero text">
    <span
      v-for="(line, i) in lines"
      :key="i"
      :ref="el => setLineRef(el as HTMLElement | null, i)"
      :class="['hero-line block font-bold leading-none tracking-tight', { 'is-visible': visible }]"
      :style="{ transitionDelay: `${i * 120}ms` }">
      {{ line }}
    </span>
  </div>
</template>

<script setup lang="ts">
// Large animated hero text component
// Props: lines (string[]) — each line fades in sequentially with CSS transitions
// Bold, editorial typography

const props = defineProps<{
  lines: string[]
}>()

const visible = ref(false)
const lineRefs: HTMLElement[] = []

function setLineRef(el: HTMLElement | null, i: number) {
  if (el) lineRefs[i] = el
}

onMounted(() => {
  // Set will-change before animation starts
  lineRefs.forEach(el => {
    if (el) el.style.willChange = 'transform'
  })

  // Trigger animation on next frame to ensure CSS transition fires
  requestAnimationFrame(() => {
    visible.value = true
  })

  // Clear will-change after the last line's transition ends
  const lastIndex = props.lines.length - 1
  const lastEl = lineRefs[lastIndex]
  if (lastEl) {
    lastEl.addEventListener('transitionend', () => {
      lineRefs.forEach(el => {
        if (el) el.style.willChange = 'auto'
      })
    }, { once: true })
  }
})
</script>

<style scoped>
.hero-line {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.hero-line.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
