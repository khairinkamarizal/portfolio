<template>
  <div
    :class="[
      'flex items-stretch justify-center transition-colors duration-300 min-h-screen',
      transparent
        ? 'text-white'
        : 'bg-white dark:bg-black text-black dark:text-white',
    ]">
    <!-- Skip to content link for keyboard users -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:text-sm">
      Skip to content
    </a>
    <div class="w-full max-w-md md:max-w-xl lg:max-w-2xl flex flex-col relative">
      <div
        class="flex flex-col relative min-h-screen px-5 md:px-8 lg:px-10 py-5 gap-12 uppercase"
        style="font-family: &quot;Space Mono&quot;, monospace">
        <!-- Header -->
        <div
          :class="[
            'flex flex-col gap-10',
            transparent ? 'mix-blend-difference' : '',
          ]">
          <header class="w-full flex justify-between items-center" aria-label="Site header">
            <NuxtLink to="/"
              ><AppLogo
                class="w-8 h-8 hover:scale-125 transition-transform duration-300"
            /></NuxtLink>
            <div
              class="text-xs flex items-center flex-col gap-0 font-sans tracking-wide normal-case">
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
              class="w-8 h-8 hover:scale-125 transition-transform duration-300"
              :class="
                transparent ? 'bg-white text-black' : '!bg-black dark:!bg-white'
              " />
          </header>

          <!-- Navigation -->
          <AppNav aria-label="Main navigation" />
        </div>

        <main id="main-content" role="main" class="flex-1 flex flex-col font-sans normal-case">
          <slot />
        </main>

        <!-- Footer -->
        <div
          :class="[
            'flex flex-col gap-8 font-sans normal-case',
            transparent ? 'mix-blend-difference' : '',
          ]">
          <div
            class="flex flex-col gap-4 w-full"
            :class="
              transparent
                ? '*:bg-white *:text-black *:px-4 *:py-2 *:w-full *:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center'
                : '*:bg-black dark:*:bg-white dark:*:text-black *:text-white *:px-4 *:py-2 *:w-full dark:*:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center'
            ">
            <slot name="footer-actions">
              <NuxtLink
                to="/"
                class="group flex items-center w-full">
                <div
                  class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
                <span>Back to home</span>
                <div
                  class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
                <ArrowUpRight
                  class="group-hover:rotate-45 transition-transform duration-300" />
              </NuxtLink>
            </slot>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <!-- Back to top button -->
    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUpRight } from "lucide-vue-next";

defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
});

useHead({
  htmlAttrs: { lang: "en" },
  bodyAttrs: { class: "antialiased" },
  titleTemplate: (title) =>
    title ? `${title} — Khairin Kamarizal ` : "Khairin Kamarizal",
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
