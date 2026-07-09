<template>
  <div :class="['prose prose-sm max-w-none', dark ? 'dark:prose-invert' : '']">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  dark?: boolean
}>(), {
  dark: true
})
</script>
