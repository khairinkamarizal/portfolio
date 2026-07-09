<template>
  <div class="flex flex-col items-center justify-center text-center" role="img" :aria-label="`${displayValue} ${label}`">
    <!-- Number — the hero -->
    <span class="text-4xl md:text-5xl font-bold tabular-nums leading-none text-black dark:text-white">
      {{ displayValue }}
    </span>

    <!-- Label -->
    <span
      class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-40 mt-1 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string | number
  label: string
  suffix?: string
}>()

const displayValue = ref('0')

onMounted(() => {
  const raw = typeof props.value === 'number' ? String(props.value) : props.value
  const trailMatch = raw.match(/(\d+)(\D*)$/)
  if (!trailMatch) {
    displayValue.value = raw
    return
  }

  const target = parseInt(trailMatch[1], 10)
  const trail = props.suffix ?? trailMatch[2] ?? ''

  if (isNaN(target)) {
    displayValue.value = raw
    return
  }

  const duration = 1200
  const startTime = performance.now()

  function tick(now: number) {
    const elapsed = now - startTime
    const t = Math.min(elapsed / duration, 1)
    const progress = 1 - Math.pow(1 - t, 3) // easeOut cubic
    const current = Math.round(progress * target)
    displayValue.value = current + trail

    if (t < 1) {
      requestAnimationFrame(tick)
    }
  }

  requestAnimationFrame(tick)
})
</script>
