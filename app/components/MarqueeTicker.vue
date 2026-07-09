<template>
  <div class="overflow-hidden" :style="{ '--speed': `${speed}s` }">
    <div class="marquee-track flex gap-6 w-max">
      <!-- Duplicate items for seamless infinite loop -->
      <template v-for="n in 2" :key="n">
        <span
          v-for="item in items"
          :key="`${n}-${item}`"
          class="text-xs opacity-50 tracking-widest whitespace-nowrap shrink-0 normal-case font-sans">
          {{ item }}
          <span class="opacity-30 mx-1">{{ separator }}</span>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// Horizontal scrolling marquee/ticker component
// Props: items (string[]), speed (number seconds, default 30), separator (string, default "·")

withDefaults(defineProps<{
  items: string[]
  speed?: number
  separator?: string
}>(), {
  speed: 30,
  separator: '·',
})
</script>

<style scoped>
.marquee-track {
  animation: marquee var(--speed, 30s) linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
