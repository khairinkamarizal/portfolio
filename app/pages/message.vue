<template>
  <div
    class="bg-white dark:bg-black text-black dark:text-white flex items-stretch justify-center transition-colors duration-300 min-h-screen">
    <div class="w-full max-w-md flex flex-col relative overflow-hidden">
      <div class="flex flex-col relative overflow-hidden h-screen p-5 gap-12">
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
              class="!bg-black dark:!bg-white w-8 h-8 hover:scale-125 transition-transform duration-300" />
          </header>
        </div>

        <!-- Form Section -->
        <section class="relative group">
          <form
            @submit.prevent="submitMessage"
            class="relative z-10 space-y-5">
            <div class="flex flex-col gap-1.5">
              <label
                for="name"
                class="text-xs opacity-50 px-1"
                >Name (optional)</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Leave blank to stay anon"
                class="w-full border-b border-neutral-200/60 dark:border-neutral-800 px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-black/5 dark:focus:ring-white/10 focus:border-neutral-300 dark:focus:neutral-600 transition-all duration-300 dark:bg-black"
                :disabled="isSubmitting" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label
                for="message"
                class="text-xs opacity-50 px-1"
                >Message</label
              >
              <div class="relative">
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="3"
                  placeholder="What's on your mind?..."
                  required
                  maxlength="200"
                  class="w-full border-b border-neutral-200/60 dark:border-neutral-800 px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-black/5 dark:focus:ring-white/10 focus:border-neutral-300 dark:focus:neutral-600 transition-all duration-300 dark:bg-black"
                  :disabled="isSubmitting"></textarea>
                <div
                  class="absolute bottom-3 right-4 text-[10px] font-medium transition-colors"
                  :class="
                    form.message.length > 180 ? 'text-red-500' : 'opacity-40'
                  ">
                  {{ form.message.length }}/200
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-2">
              <div class="text-sm font-medium">
                <span
                  v-if="errorMsg"
                  class="text-red-500 animate-pulse"
                  >{{ errorMsg }}</span
                >
                <span
                  v-else-if="successMsg"
                  class="text-green-500 dark:text-green-400"
                  >Message sent ✨</span
                >
              </div>
              <button
                type="submit"
                :disabled="isSubmitting || !form.message.trim()"
                class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-medium hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-2">
                <span
                  v-if="isSubmitting"
                  class="animate-spin inline-block w-4 h-4 border-[3px] border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full"></span>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </section>

        <!-- Messages List -->
        <section
          ref="messagesContainer"
          class="space-y-4 relative max-h-[300px] overflow-y-auto no-scrollbar scroll-smooth"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
          @touchstart="isHovering = true"
          @touchend="isHovering = false"
        >
          <div
            v-if="isLoading && messages.length === 0"
            class="absolute inset-0 flex flex-col items-center justify-center opacity-50 gap-3">
            <div
              class="animate-spin w-6 h-6 border-2 border-black dark:border-white border-t-transparent rounded-full"></div>
            <p class="text-sm">Loading messages...</p>
          </div>

          <div
            v-else-if="apiFailed"
            class="bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 p-8 border border-red-200 dark:border-red-900/25 text-center flex flex-col items-center gap-3">
            <p class="font-medium">Couldn't load messages</p>
            <button
              @click="fetchMessages(false)"
              class="text-sm px-4 py-2 bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
              Try again
            </button>
          </div>

          <div
            v-else-if="messages.length === 0"
            class="text-center py-16 opacity-40 flex flex-col items-center gap-2">
            <p class="font-medium">It's quiet here...</p>
            <p class="text-sm">Be the first to leave a message!</p>
          </div>

          <TransitionGroup
            name="list"
            tag="div"
            class="flex flex-col gap-4">
            <article
              v-for="msg in messages"
              :key="msg.id"
              class="group bg-white dark:bg-neutral-950 p-5 lg:p-6 border border-neutral-200 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden relative flex flex-col gap-3">
              <div class="flex justify-between items-center z-10 w-full gap-4">
                <h3 class="font-medium text-base truncate max-w-[70%]">
                  {{ msg.name }}
                </h3>
                <time
                  :datetime="msg.created_at"
                  class="text-xs font-medium tracking-wide uppercase opacity-40 shrink-0">
                  {{ formatTimeAgo(msg.created_at) }}
                </time>
              </div>
              <p
                class="text-base opacity-80 leading-relaxed break-words whitespace-pre-wrap z-10">
                {{ msg.message }}
              </p>

              <!-- Hover gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-neutral-100 to-transparent dark:from-white/[0.1] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          </TransitionGroup>
        </section>

        <div class="flex flex-col gap-8">
          <div
            class="flex flex-col gap-4 *:bg-black dark:*:bg-white dark:*:text-black *:text-white *:px-4 *:py-2 *:w-full dark:*:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center">
            <NuxtLink
              to="/"
              class="group flex items-center">
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
            class="flex flex-row justify-between items-center *:font-medium *:text-lg *:active:opacity-50 hover:*:opacity-75">
            <NuxtLink to="https://instagram.com/khairinkamarizal"
              >Instagram</NuxtLink
            >
            <NuxtLink to="https://be.net/khairinkamarizal">Behance</NuxtLink>
            <NuxtLink to="https://linkedin.com/in/khairinkamarizal"
              >LinkedIn</NuxtLink
            >
          </div>
          <footer class="text-xs opacity-40 font-light">
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
import { ref, onMounted, onUnmounted } from "vue";
import { useHead, definePageMeta } from "#imports";
import { ArrowUpRight } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

useHead({
  title: "Guestbook — Khairinkamarizal",
  meta: [
    { name: "description", content: "Drop a message on my digital guestbook." },
  ],
});

interface Message {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

const form = ref({ name: "", message: "" });
const messages = ref<Message[]>([]);
const isLoading = ref(true);
const isSubmitting = ref(false);
const errorMsg = ref("");
const successMsg = ref(false);
const apiFailed = ref(false);

const hours = ref("00");
const minutes = ref("00");
const ampm = ref("am");

const messagesContainer = ref<HTMLElement | null>(null);
const isHovering = ref(false);
let autoScrollFrame: number;

let refreshInterval: ReturnType<typeof setInterval>;
let timeInterval: ReturnType<typeof setInterval>;

const formatTimeAgo = (dateString: string) => {
  let dt = dateString;
  if (!dt.endsWith("Z") && !dt.includes("T")) {
    dt = dt.replace(" ", "T") + "Z";
  }

  const date = new Date(dt);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return `Just now`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

const fetchMessages = async (silent = false) => {
  if (!silent) isLoading.value = true;
  apiFailed.value = false;
  try {
    const res = await $fetch<Message[]>("/api/messages");
    messages.value = res;
  } catch (err) {
    if (!silent) apiFailed.value = true;
    console.error("Failed to fetch messages:", err);
  } finally {
    if (!silent) isLoading.value = false;
  }
};

const submitMessage = async () => {
  if (!form.value.message.trim() || isSubmitting.value) return;

  isSubmitting.value = true;
  errorMsg.value = "";
  successMsg.value = false;

  try {
    await $fetch("/api/messages", {
      method: "POST",
      body: {
        name: form.value.name,
        message: form.value.message,
      },
    });

    successMsg.value = true;
    form.value.name = "";
    form.value.message = "";

    await fetchMessages(true);

    // Auto scroll to latest message smoothly on submit
    setTimeout(() => {
      messagesContainer.value?.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    setTimeout(() => {
      successMsg.value = false;
    }, 3000);
  } catch (err: any) {
    errorMsg.value =
      err.data?.statusMessage ||
      err.message ||
      "Failed to send message. Please try again.";
    setTimeout(() => {
      errorMsg.value = "";
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  fetchMessages();
  refreshInterval = setInterval(() => {
    if (!isSubmitting.value) {
      fetchMessages(true);
    }
  }, 5000);

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
  };

  updateTime();
  timeInterval = setInterval(updateTime, 1000);

  // Auto-scrolling ticker behavior
  const startAutoScroll = () => {
    if (messagesContainer.value && !isHovering.value) {
      if (
        messagesContainer.value.scrollTop + messagesContainer.value.clientHeight >=
        messagesContainer.value.scrollHeight
      ) {
        // Option to loop or stop. Let's just hold it here or reset?
        // Let's reset cleanly to 0 if it reaches bottom
        messagesContainer.value.scrollTop = 0;
      } else {
        messagesContainer.value.scrollTop += 0.5;
      }
    }
    autoScrollFrame = requestAnimationFrame(startAutoScroll);
  };
  
  // Wait a moment for rendering before initiating the autoscroll
  setTimeout(startAutoScroll, 1000);
});

onUnmounted(() => {
  if (refreshInterval) clearInterval(refreshInterval);
  if (timeInterval) clearInterval(timeInterval);
  if (autoScrollFrame) cancelAnimationFrame(autoScrollFrame);
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
