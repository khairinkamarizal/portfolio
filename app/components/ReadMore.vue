<template>
  <div>
    <div
      :class="['overflow-hidden transition-all duration-500', expanded ? '' : 'max-h-24']"
      :style="expanded ? {} : { WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }">
      <slot />
    </div>
    <button
      type="button"
      @click="expanded = !expanded"
      class="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-150">
      {{ expanded ? 'Show less' : 'Read more' }}
    </button>
  </div>
</template>

<script setup lang="ts">
const expanded = ref(false)
</script>
