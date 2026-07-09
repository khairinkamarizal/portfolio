<template>
  <aside
    :class="[
      'w-56 shrink-0 min-w-0 flex flex-col px-5 py-7 border-r sticky top-0 h-screen overflow-y-auto font-mono dark:bg-[#0a0a0a]',
      transparent
        ? 'border-white/8 mix-blend-difference'
        : 'border-black/8 dark:border-white/8',
    ]"
    aria-label="Desktop sidebar">

    <!-- Logo + color toggle -->
    <div class="flex items-center justify-between mb-10">
      <NuxtLink to="/" aria-label="Go to homepage">
        <AppLogo class="w-8 h-8 hover:opacity-70 transition-opacity duration-200" />
      </NuxtLink>
      <ColorToggle
        class="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
        :class="transparent ? 'mix-blend-difference text-white' : 'text-black dark:text-white'" />
    </div>

    <!-- Vertical nav -->
    <!-- AppNav handles vertical nav with border-l-2 active states -->
    <AppNav direction="vertical" aria-label="Main navigation" />

    <!-- Spacer -->
    <div class="flex-1" />

    <!-- Divider -->
    <div class="border-t border-black/8 dark:border-white/8 -mx-5 mb-5" />

    <!-- Location + time -->
    <div class="flex flex-col gap-1 normal-case text-xs mb-4 pt-2">
      <span class="mono-label">Cyberjaya, MY</span>
      <ClientOnly>
        <div class="opacity-70 flex items-center gap-0.5 tabular-nums">
          <span>{{ hours }}</span>
          <span class="blink">:</span>
          <span>{{ minutes }}</span>
          <span class="ml-1.5 opacity-60 uppercase text-[9px]">{{ ampm }}</span>
        </div>
        <template #fallback>
          <div class="opacity-30 tabular-nums">--:-- --</div>
        </template>
      </ClientOnly>
    </div>

    <!-- Availability -->
    <div class="flex items-center gap-2 normal-case pb-2" title="Available for freelance projects">
      <span class="relative flex w-1.5 h-1.5 shrink-0">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
        <span class="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-500" />
      </span>
      <span class="mono-label">Open to work</span>
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
