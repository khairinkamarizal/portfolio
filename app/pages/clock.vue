<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col h-full justify-center gap-12">
        <div class="flex flex-col justify-center items-center gap-2">
          <h2 class="text-3xl">Countdown to Freedom</h2>
          <p
            class="text-6xl text-center font-semibold tracking-tight tabular-nums leading-tight">
            {{ countdown }}
          </p>
          <p class="text-lg opacity-50 text-center">
            Targeting 6:00 PM — Time to head home!
          </p>
        </div>
      </div>
    </template>

    <template #footer-actions>
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
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const countdown = ref("");
const shareText = ref("Share");

function getTimeDiff() {
  const now = new Date();
  const klNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }),
  );
  klNow.setMilliseconds(now.getMilliseconds());

  const target = new Date(klNow);
  target.setHours(18, 0, 0, 0);

  return target.getTime() - klNow.getTime();
}

function buildMessage() {
  const diff = getTimeDiff();
  let message = "";

  if (diff <= 0) {
    message = "Hi, it's already 6:00 PM 😌\n\n";
  } else {
    const totalSeconds = Math.floor(diff / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const parts: string[] = [];
    if (h > 0) parts.push(`${h} hour${h !== 1 ? "s" : ""}`);
    if (m > 0) parts.push(`${m} minute${m !== 1 ? "s" : ""}`);
    if (s > 0 || parts.length === 0)
      parts.push(`${s} second${s !== 1 ? "s" : ""}`);

    let timeStr = "";
    if (parts.length === 1) {
      timeStr = parts[0]!;
    } else if (parts.length === 2) {
      timeStr = `${parts[0]} and ${parts[1]}`;
    } else if (parts.length > 2) {
      timeStr = `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
    }

    message = `Hi, there's ${timeStr} from 6:00 tak sabarnye 😭\n\n`;
  }

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

    // Countdown logic
    const klNow = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }),
    );
    klNow.setMilliseconds(now.getMilliseconds());

    const target = new Date(klNow);
    target.setHours(18, 0, 0, 0);

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
  title: "Freedom",
  meta: [
    {
      name: "description",
      content:
        "Countdown to 6:00 PM — The precisely timed journey to freedom and home office escape.",
    },
  ],
});
</script>
