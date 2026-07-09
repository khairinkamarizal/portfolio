<template>
  <span class="tabular-nums font-mono">{{ formattedValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  suffix?: string
  format?: boolean
  duration?: number
}>(), { duration: 1200, format: false })

const current = ref(0)

const formattedValue = computed(() => {
  if (props.format) return new Intl.NumberFormat().format(Math.round(current.value))
  return Math.round(current.value)
})

onMounted(() => {
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / props.duration, 1)
    current.value = (1 - Math.pow(1 - t, 3)) * props.value
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>
