<template>
  <div class="w-full overflow-hidden py-3">
    <div
      class="marquee-track flex gap-0 whitespace-nowrap"
      :style="{ '--marquee-duration': `${(100 / speed) * 20}s` }">
      <!-- Primary content — accessible -->
      <span class="marquee-content inline-flex shrink-0 items-center">
        <template v-for="(item, i) in items" :key="i">
          <span
            class="text-xs tracking-[0.2em] uppercase font-mono text-black dark:text-white opacity-60"
            style="font-family: 'Space Mono', monospace">
            {{ item }}
          </span>
          <span
            aria-hidden="true"
            class="text-xs font-mono text-black dark:text-white opacity-30 mx-4"
            style="font-family: 'Space Mono', monospace">
            ·
          </span>
        </template>
      </span>
      <!-- Duplicate for seamless loop — hidden from assistive tech -->
      <span aria-hidden="true" class="marquee-content inline-flex shrink-0 items-center">
        <template v-for="(item, i) in items" :key="i">
          <span
            class="text-xs tracking-[0.2em] uppercase font-mono text-black dark:text-white opacity-60"
            style="font-family: 'Space Mono', monospace">
            {{ item }}
          </span>
          <span
            aria-hidden="true"
            class="text-xs font-mono text-black dark:text-white opacity-30 mx-4"
            style="font-family: 'Space Mono', monospace">
            ·
          </span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { speed = 30 } = defineProps<{
  items: string[]
  speed?: number
}>()
</script>

<style scoped>
.marquee-track {
  animation: marquee var(--marquee-duration, 30s) linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
