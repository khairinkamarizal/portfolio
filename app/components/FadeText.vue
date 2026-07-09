<template>
  <span
    :class="['transition-all', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2']"
    :style="{ transitionDuration: duration + 'ms', transitionDelay: delay + 'ms' }">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
  duration?: number
}>(), { delay: 0, duration: 400 })

const visible = ref(false)
onMounted(() => setTimeout(() => { visible.value = true }, props.delay))
</script>
