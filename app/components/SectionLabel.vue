<template>
  <div class="flex items-center gap-2">
    <span
      v-if="variant === 'numbered'"
      class="font-mono text-[10px] tracking-widest opacity-40">{{ paddedNumber }}</span>
    <span class="text-[10px] tracking-widest uppercase opacity-40">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  variant?: 'default' | 'numbered'
  number?: number
}>()

const paddedNumber = computed(() => {
  if (props.number === undefined) return ''
  return String(props.number).padStart(2, '0')
})
</script>
