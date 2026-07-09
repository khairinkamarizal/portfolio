<template>
  <span class="inline-block overflow-hidden relative h-[1.2em]">
    <Transition name="ticker">
      <span :key="current" class="absolute inset-0 flex items-center">{{ items[current] }}</span>
    </Transition>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: string[]
  interval?: number
}>(), { interval: 3000 })

const current = ref(0)
onMounted(() => {
  const t = setInterval(() => {
    current.value = (current.value + 1) % props.items.length
  }, props.interval)
  onUnmounted(() => clearInterval(t))
})
</script>

<style scoped>
.ticker-enter-active, .ticker-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.ticker-enter-from { transform: translateY(100%); opacity: 0; }
.ticker-leave-to { transform: translateY(-100%); opacity: 0; }
</style>
