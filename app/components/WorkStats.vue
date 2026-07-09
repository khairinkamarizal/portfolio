<template>
  <div class="flex flex-row border border-black/8 dark:border-white/8 divide-x divide-black/8 dark:divide-white/8">
    <div v-for="stat in stats" :key="stat.label" class="flex-1 flex flex-col gap-0.5 px-4 py-4">
      <span class="text-3xl font-medium tracking-tight tabular-nums">{{ stat.displayed }}</span>
      <span class="text-[10px] tracking-[0.15em] opacity-50 font-mono">{{ stat.label.toUpperCase() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const rawStats = [
  { value: '8+', label: 'Projects' },
  { value: '5+', label: 'Years exp.' },
  { value: '12+', label: 'Technologies' },
]

// Parse numeric value and suffix (e.g. "8+" -> { num: 8, suffix: '+' })
function parse(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/)
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: '' }
}

const stats = rawStats.map((s) => {
  const { num, suffix } = parse(s.value)
  return { ...s, num, suffix, displayed: ref('0' + suffix) }
})

onMounted(() => {
  const duration = 1000 // ms
  const start = performance.now()

  function easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  function tick(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOut(progress)

    for (const stat of stats) {
      const current = Math.round(eased * stat.num)
      stat.displayed.value = current + stat.suffix
    }

    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }

  requestAnimationFrame(tick)
})
</script>
