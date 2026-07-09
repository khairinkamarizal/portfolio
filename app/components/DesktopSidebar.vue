<template>
  <aside
    :class="[
      'w-56 shrink-0 flex flex-col gap-8 px-6 py-8 border-r uppercase sticky top-0 h-screen overflow-y-auto',
      transparent
        ? 'border-white/8 mix-blend-difference'
        : 'border-black/8 dark:border-white/8',
    ]"
    style="font-family: 'Space Mono', monospace"
    aria-label="Desktop sidebar">
    
    <!-- Logo + color toggle -->
    <div class="flex items-center justify-between">
      <NuxtLink to="/" aria-label="Go to homepage">
        <AppLogo
          class="w-8 h-8 hover:scale-110 transition-transform duration-300" />
      </NuxtLink>
      <ColorToggle
        class="w-7 h-7 hover:scale-110 transition-transform duration-300"
        :class="
          transparent
            ? 'mix-blend-difference text-white'
            : 'text-black dark:text-white'
        " />
    </div>

    <!-- Vertical nav -->
    <AppNav direction="vertical" aria-label="Main navigation" />

    <div class="border-t border-black/8 dark:border-white/8 -mx-6" />

    <!-- Spacer pushes info to bottom -->
    <div class="flex-1" />

    <!-- Location + time -->
    <div class="flex flex-col gap-1.5 font-sans normal-case text-xs">
      <span class="opacity-50 tracking-widest text-xs">CYBERJAYA, MY</span>
      <ClientOnly>
        <div class="opacity-70 flex items-center gap-0.5">
          <span>{{ hours }}</span>
          <span class="blink">:</span>
          <span>{{ minutes }}</span>
          <span class="ml-1 opacity-70">{{ ampm }}</span>
        </div>
        <template #fallback>
          <div class="opacity-40">--:-- --</div>
        </template>
      </ClientOnly>
    </div>

    <!-- Availability dot -->
    <div class="flex items-center gap-2 font-sans normal-case">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500 ring-2 ring-green-500/20 shrink-0 animate-pulse"></span>
      <span class="text-[10px] opacity-60 tracking-[0.15em]">OPEN TO WORK</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
});

const hours = ref("00");
const minutes = ref("00");
const ampm = ref("am");

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const parts = formatter.formatToParts(now);
    hours.value = parts.find((p) => p.type === "hour")?.value || "00";
    minutes.value = parts.find((p) => p.type === "minute")?.value || "00";
    ampm.value = (
      parts.find((p) => p.type === "dayPeriod")?.value || "am"
    ).toLowerCase();
  };

  updateTime();
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}
.blink {
  animation: blink 1s ease-in-out infinite;
}
</style>
