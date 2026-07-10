<template>
  <span
    :class="[
      'inline-flex items-center font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5',
      variants[variant],
    ]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'outline' | 'solid'
}>(), {
  variant: 'outline'
})

const variants = {
  default: 'border border-black/10 dark:border-white/10 opacity-60',
  outline: 'border border-black/20 dark:border-white/20',
  solid: 'bg-black dark:bg-white text-white dark:text-black',
}
</script>
