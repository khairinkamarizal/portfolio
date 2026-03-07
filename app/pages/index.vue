<template>
  <VideoBackground />
  <div
    class="flex items-stretch justify-center transition-colors duration-300 min-h-screen text-white">
    <div class="max-w-md flex flex-col relative overflow-hidden">
      <div
        class="flex flex-col relative overflow-hidden h-screen justify-between p-5">
        <div class="flex flex-col gap-10">
          <header
            class="w-full flex justify-between items-center mix-blend-difference">
            <NuxtLink to="/"
              ><AppLogo
                class="w-8 h-8 hover:scale-125 transition-transform duration-300"
            /></NuxtLink>
            <div class="text-xs flex items-center flex-col gap-0">
              <span>Based in MY 大马</span>
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
            <ColorToggle
              class="bg-white w-8 h-8 text-black hover:scale-125 transition-transform duration-300" />
          </header>
          <div class="flex flex-row">
            <AppLogoType
              class="w-full col-span-4 text-white mix-blend-difference" />

            <div
              class="flex flex-row relative w-fit col-span-1 items-end justify-end">
              <img
                src="/assets/dp.webp"
                alt="avatar"
                class="w-14 h-14 rounded-full object-cover object-center shrink-0 !mix-blend-normal" />
              <div
                class="w-14 h-14 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-4">
                <AppLogo class="text-white dark:text-black w-7 h-7" />
              </div>
            </div>
          </div>
          <div
            class="flex flex-row justify-between items-start gap-5 mix-blend-difference">
            <ArrowRight clas="w-20 h-20" />
            <p class="dark:font-light text-2xl leading-tight w-fit">
              Ambitious and versatile creative designer skilled in branding,
              UI/UX, motion content and web development.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-8 mix-blend-difference">
          <div
            class="flex flex-col gap-4 *:bg-white *:text-black *:px-4 *:py-2 *:w-full dark:*:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center">
            <NuxtLink
              to="mailto:khairinkamarizal@gmail.com"
              class="group flex items-center">
              <div
                class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
              <span>Hit me up</span>
              <div
                class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
              <ArrowUpRight
                class="group-hover:rotate-45 transition-transform duration-300" />
            </NuxtLink>
            <NuxtLink
              to="https://be.net/khairinkamarizal"
              class="group flex items-center">
              <div
                class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
              <span>View my portfolio</span>
              <div
                class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
              <ArrowUpRight
                class="group-hover:rotate-45 transition-transform duration-300" />
            </NuxtLink>
          </div>
          <div
            class="flex flex-row justify-between items-center px-5 pb-5 *:font-medium *:text-xl *:active:opacity-50 hover:*:opacity-75 text-white">
            <NuxtLink to="https://instagram.com/khairinkamarizal"
              >Instagram</NuxtLink
            >
            <NuxtLink to="https://be.net/khairinkamarizal">Behance</NuxtLink>
            <NuxtLink to="https://linkedin.com/in/khairinkamarizal"
              >LinkedIn</NuxtLink
            >
          </div>
        </div>
      </div>

      <footer class="text-xs opacity-50 p-5 mix-blend-difference font-light">
        <div class="flex justify-between items-center">
          <p>Copyright 2026 © Khairinkamarizal</p>
          <p>—</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from "lucide-vue-next";
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

definePageMeta({
  layout: false,
});

useHead({
  title: "Khairinkamarizal",
  meta: [
    {
      name: "description",
      content:
        "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development.",
    },
  ],
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
