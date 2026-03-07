<template>
  <nav
    class="w-full max-w-screen p-6 md:p-10 flex justify-between items-start fixed top-0 z-50 mix-blend-difference text-neutral-50">
    <NuxtLink
      to="/"
      class="hover:opacity-50 transition-opacity">
      <AppLogo
        class="transition-all duration-500 ease-in-out origin-top-left h-auto w-7 md:w-10" />
    </NuxtLink>
    <div class="flex flex-row md:w-[60vw] lg:w-[50vw] gap-4 justify-between">
      <div class="text-sm hidden md:flex items-start flex-col gap-0">
        <span class="font-medium">Quick Links</span>
        <div class="flex items-center gap-2 flex-row">
          <a
            href="#"
            class="opacity-50 hover:opacity-100 transition-opacity"
            >Home,</a
          >
          <a
            href="#"
            class="opacity-50 hover:opacity-100 transition-opacity"
            >Projects,</a
          >
          <a
            href="#"
            class="opacity-50 hover:opacity-100 transition-opacity"
            >About,</a
          >
          <a
            href="#"
            class="opacity-50 hover:opacity-100 transition-opacity"
            >Contact</a
          >
        </div>
      </div>
      <div class="text-sm hidden md:flex items-start flex-col gap-0">
        <span class="font-medium">Based in MY 大马</span>
        <ClientOnly>
          <div class="opacity-50 flex items-center">
            <span>Cyberjaya,&nbsp;</span>
            <span>{{ hours }}</span>
            <span class="blink">:</span>
            <span
              >{{ minutes }} <span class="ml-1">{{ ampm }}</span></span
            >
          </div>
          <template #fallback>
            <div class="opacity-50 flex items-center">
              <span>--</span>
              <span class="mx-[1px] blink">:</span>
              <span>-- <span class="ml-1">--</span></span>
            </div>
          </template>
        </ClientOnly>
      </div>
      <span class="md:hidden">Menu</span>
      <div class="flex items-center gap-4">
        <ColorToggle />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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
