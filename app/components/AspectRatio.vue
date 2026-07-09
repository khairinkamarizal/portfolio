<template>
  <div :style="{ aspectRatio: ratio }" class="overflow-hidden">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  ratio?: string
}>(), {
  ratio: '16/9'
})
</script>
