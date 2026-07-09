<template>
  <div class="flex flex-col items-center gap-0.5">
    <span
      class="text-2xl font-bold tracking-tight"
      style="font-family: 'Space Mono', monospace"
      aria-label="`${prefix}${value}${suffix}`">
      {{ prefix }}{{ displayValue.toLocaleString() }}{{ suffix }}
    </span>
    <span class="text-[10px] opacity-40 tracking-widest text-center normal-case font-sans">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
// Animated counter component
// Counts up from 0 to value on mount using requestAnimationFrame

const props = withDefaults(defineProps<{
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}>(), {
  prefix: '',
  suffix: '',
  duration: 1200,
})

const displayValue = ref(0)

onMounted(() => {
  const start = performance.now()
  const end = props.value

  const step = (timestamp: number) => {
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / props.duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(eased * end)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      displayValue.value = end
    }
  }

  requestAnimationFrame(step)
})
</script>
