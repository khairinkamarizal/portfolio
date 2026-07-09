<template>
  <span :aria-label="text" role="text">
    <span aria-hidden="true">{{ displayed }}<span class="animate-blink">|</span></span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  speed?: number
  delay?: number
}>(), { speed: 60, delay: 0 })

const displayed = ref('')

onMounted(async () => {
  await new Promise(r => setTimeout(r, props.delay))
  for (let i = 0; i <= props.text.length; i++) {
    displayed.value = props.text.slice(0, i)
    await new Promise(r => setTimeout(r, props.speed))
  }
})
</script>

<style scoped>
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.animate-blink { animation: blink 1s step-end infinite; }
</style>
