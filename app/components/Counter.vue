<template>
  <div>
    <span>{{ current }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: number
}>()

const current = ref(0)

onMounted(() => {
  const startTime = performance.now()
  const duration = 1200
  function tick(now: number) {
    const elapsed = now - startTime
    const t = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    current.value = Math.round(eased * props.to)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>
