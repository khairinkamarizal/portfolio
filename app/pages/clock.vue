<template>
  <div
    class="bg-white dark:bg-black text-black dark:text-white flex items-stretch justify-center transition-colors duration-300 min-h-screen">
    <div class="max-w-md flex flex-col relative overflow-hidden">
      <div
        class="flex flex-col relative overflow-hidden h-screen justify-between p-5">
        <div class="flex flex-col gap-10">
          <header class="w-full flex justify-between items-center">
            <NuxtLink to="/"
              ><AppLogo
                class="w-8 h-8 hover:scale-125 transition-transform duration-300"
            /></NuxtLink>
            <div class="text-xs flex items-center flex-col gap-0">
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
            <ColorToggle
              class="!bg-black dark:bg-white w-8 h-8 hover:scale-125 transition-transform duration-300" />
          </header>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
          <h2 class="text-3xl">Countdown to Freedom</h2>
          <p
            class="text-6xl font-semibold tracking-tight tabular-nums leading-tight">
            {{ countdown }}
          </p>
          <p class="text-lg opacity-50">
            Targeting 4:30 PM — Time to head home!
          </p>
        </div>

        <div class="flex flex-col gap-8">
          <div
            class="flex flex-col gap-4 *:bg-black dark:*:bg-white dark:*:text-black *:text-white *:px-4 *:py-2 *:w-full dark:*:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center">
            <button
              @click="handleShare"
              class="group flex items-center">
              <div
                class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
              <span>{{ shareText }}</span>
              <div
                class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
              <ArrowUpRight
                class="group-hover:rotate-45 transition-transform duration-300" />
            </button>
            <NuxtLink
              to="/"
              class="group flex items-center border-b-2 dark:border-b border-black dark:border-white !bg-transparent !text-black dark:!text-white">
              <div
                class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
              <span>Back to home</span>
              <div
                class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
              <ArrowUpRight
                class="group-hover:rotate-45 transition-transform duration-300" />
            </NuxtLink>
          </div>
          <div
            class="flex flex-row justify-between items-center px-5 pb-5 *:font-medium *:text-xl *:active:opacity-50 hover:*:opacity-75">
            <NuxtLink to="https://instagram.com/khairinkamarizal"
              >Instagram</NuxtLink
            >
            <NuxtLink to="https://be.net/khairinkamarizal">Behance</NuxtLink>
            <NuxtLink to="https://linkedin.com/in/khairinkamarizal"
              >LinkedIn</NuxtLink
            >
          </div>
          <footer class="text-xs opacity-50 font-light">
            <div class="flex justify-between items-center">
              <p>Copyright 2026 © Khairinkamarizal</p>
              <p>—</p>
              <p>All rights reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const hours = ref("00");
const minutes = ref("00");
const ampm = ref("am");
const countdown = ref("");
const shareText = ref("Share");

function getTimeDiff() {
  const now = new Date();
  const klNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }),
  );
  klNow.setMilliseconds(now.getMilliseconds());

  const target = new Date(klNow);
  target.setHours(16, 30, 0, 0);

  return target.getTime() - klNow.getTime();
}

function buildMessage() {
  const diff = getTimeDiff();

  if (diff <= 0) return "Hi, it's already 4:30 PM 😌";

  const totalSeconds = Math.floor(diff / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);

  let message = "Hi, there's ";

  if (h > 0) message += h + " hour" + (h !== 1 ? "s" : "");

  if (m > 0) {
    if (h > 0) message += " and ";
    message += m + " minute" + (m !== 1 ? "s" : "");
  }

  message += " from 4:30 tak sabarnye 😭";

  return message;
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

async function handleShare() {
  const message = buildMessage();
  const url = "https://khair.ink/clock";

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Countdown Clock",
        text: message,
        url: url,
      });
      return;
    } catch (err) {
      console.log("Share cancelled or failed");
    }
  }

  // Fallback copy
  await copyText(message + "\n" + url);
  shareText.value = "Copied!";
  setTimeout(() => (shareText.value = "Share"), 2000);
}

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    // KL Time formatter
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

    // Countdown logic
    const klNow = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }),
    );
    klNow.setMilliseconds(now.getMilliseconds());

    const target = new Date(klNow);
    target.setHours(16, 30, 0, 0);

    if (klNow >= target) {
      countdown.value = "GOT HOME LOL 🏠";
    } else {
      const diff = target.getTime() - klNow.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const s = Math.floor((diff % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
      const ms = Math.floor((diff % 1000) / 10)
        .toString()
        .padStart(2, "0");
      countdown.value = `${h}:${m}:${s}:${ms}`;
    }
  };

  updateTime();
  const interval = setInterval(updateTime, 10);
  onUnmounted(() => clearInterval(interval));
});

definePageMeta({
  layout: false,
});

useHead({
  title: "Khairinkamarizal — Freedom",
  meta: [
    {
      name: "description",
      content:
        "Countdown to 4:30 PM — The precisely timed journey to freedom and home office escape.",
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
