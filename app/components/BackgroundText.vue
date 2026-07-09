<template>
  <div class="background-text" :style="{ opacity }" aria-hidden="true">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  opacity?: number
}>(), {
  opacity: 0.04,
})
</script>

<style scoped>
.background-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20vw;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  font-family: 'Space Mono', monospace;
  color: currentColor;
}
</style>
