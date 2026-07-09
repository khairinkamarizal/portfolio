<template>
  <div class="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
    <div class="h-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
      <div
        v-for="i in cols"
        :key="i"
        class="h-full border-l border-black/[0.03] dark:border-white/[0.03] last:border-r" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  cols?: number
}>(), { cols: 12 })
</script>
