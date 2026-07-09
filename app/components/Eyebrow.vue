<template>
  <p
    :class="[
      'font-mono uppercase tracking-[0.3em]',
      size === 'sm' ? 'text-[9px]' : 'text-[10px]',
      dim ? 'opacity-30' : 'opacity-50',
    ]">
    <slot />
  </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md'
  dim?: boolean
}>(), {
  size: 'md',
  dim: false
})
</script>
