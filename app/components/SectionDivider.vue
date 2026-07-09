<template>
  <div
    :class="[
      'w-full flex items-center gap-3 py-2',
      align === 'center' ? 'justify-center' : 'justify-start',
    ]">
    <!-- Left line (always shown, grows to fill) -->
    <span
      v-if="align !== 'left'"
      class="flex-1 border-t border-black/20 dark:border-white/20" />

    <!-- Number -->
    <span
      v-if="number"
      class="text-[10px] tracking-[0.25em] uppercase font-mono opacity-40 shrink-0 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      {{ number }}
    </span>

    <!-- Separator dot (only if both number and title) -->
    <span
      v-if="number && title"
      class="text-[10px] font-mono opacity-20 shrink-0 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      /
    </span>

    <!-- Title -->
    <span
      v-if="title"
      class="text-[10px] tracking-[0.25em] uppercase font-mono opacity-40 shrink-0 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      {{ title }}
    </span>

    <!-- Right growing line -->
    <span class="flex-1 border-t border-black/20 dark:border-white/20" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number?: string
  title?: string
  align?: 'left' | 'center'
}>()
</script>
