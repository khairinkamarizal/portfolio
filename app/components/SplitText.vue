<template>
  <span :aria-label="text" role="text">
    <span
      v-for="(char, i) in characters"
      :key="i"
      aria-hidden="true"
      :class="['inline-block transition-all', animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']"
      :style="{ transitionDelay: (i * 30) + 'ms', transitionDuration: '400ms' }">
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  animated?: boolean
}>(), { animated: false })

const characters = computed(() => props.text.split(''))
</script>
