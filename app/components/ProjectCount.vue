<template>
  <div class="flex items-baseline gap-1.5">
    <span class="text-2xl font-medium tracking-tight tabular-nums">{{ displayCount }}</span>
    <span class="text-xs opacity-40 tracking-wider">PROJECTS</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const displayCount = ref(0)

function animateTo(target: number) {
  const duration = 800
  const start = displayCount.value
  const startTime = performance.now()

  function tick(now: number) {
    const elapsed = now - startTime
    const t = Math.min(elapsed / duration, 1)
    const progress = 1 - Math.pow(1 - t, 3)
    displayCount.value = Math.floor(start + (target - start) * progress)
    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      displayCount.value = target
    }
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  animateTo(props.count)
})
</script>
