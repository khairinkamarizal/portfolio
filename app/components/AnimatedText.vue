<template>
  <span class="animated-text">
    <span
      v-for="(char, index) in chars"
      :key="index"
      :style="{ animationDelay: `${index * delay}ms` }"
      class="char">
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  text: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 50,
})

const chars = computed(() => props.text.split(''))
</script>

<style scoped>
.char {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
