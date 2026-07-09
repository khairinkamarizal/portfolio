<template>
  <div class="relative select-none pointer-events-none" aria-hidden="true">
    <span
      class="text-[15vw] md:text-[8vw] font-bold tabular-nums leading-none text-black dark:text-white opacity-5 block">
      {{ value }}
    </span>
    <span
      v-if="label"
      class="sr-only">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number
  label?: string
}>()
</script>
