<template>
  <div ref="el" :style="{ transform: `translateY(${offset}px)` }" class="will-change-transform">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  speed?: number
}>(), { speed: 0.15 })

const el = ref<HTMLElement | null>(null)
const offset = ref(0)

onMounted(() => {
  const update = () => {
    if (!el.value) return
    const rect = el.value.getBoundingClientRect()
    const center = rect.top + rect.height / 2 - window.innerHeight / 2
    offset.value = center * props.speed
  }
  window.addEventListener('scroll', update, { passive: true })
  update()
  onUnmounted(() => window.removeEventListener('scroll', update))
})
</script>
