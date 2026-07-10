<template>
  <div
    :class="['animate-pulse bg-black/10 dark:bg-white/10', widthClass, heightClass, rounded ? 'rounded' : '']"
    :style="{ width: width, height: height }"
    :aria-busy="true"
    role="status"
    :aria-label="label || 'Loading...'" />
</template>

<script setup lang="ts">
defineProps<{
  width?: string
  height?: string
  widthClass?: string
  heightClass?: string
  rounded?: boolean
  label?: string
}>()
</script>
