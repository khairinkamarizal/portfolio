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

onMounted(() => {
  const duration = 800
  const steps = 30
  const increment = props.count / steps
  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= props.count) {
      displayCount.value = props.count
      clearInterval(timer)
    } else {
      displayCount.value = Math.floor(current)
    }
  }, duration / steps)
})
</script>
