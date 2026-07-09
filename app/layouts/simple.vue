<template>
  <div
    :class="[
      'w-full min-h-screen transition-colors duration-300',
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

    <!-- Custom cursor follower (desktop only) -->
    <ClientOnly>
      <CursorFollower />
    </ClientOnly>

    <!-- Film grain noise overlay -->
    <NoiseOverlay :opacity="0.03" />

    <!-- Decorative editorial grid lines -->
    <GridLines :columns="4" :opacity="0.04" />

    <!-- STICKY HEADER: full width, h-14, border-bottom -->
    <header
      :class="[
        'sticky top-0 z-40 w-full h-14 border-b flex items-center justify-between px-6 md:px-12 lg:px-20 uppercase',
        transparent
          ? 'border-white/10 bg-transparent'
          : 'border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-sm',
      ]"
      style="font-family: 'Space Mono', monospace"
      aria-label="Site header">

      <!-- Logo left -->
      <NuxtLink to="/" class="shrink-0">
        <AppLogo class="w-8 h-8 hover:scale-125 transition-transform duration-300" />
      </NuxtLink>

      <!-- Nav center (hidden on mobile) -->
      <nav class="hidden md:flex items-center" aria-label="Main navigation">
        <AppNav />
      </nav>

      <!-- Right: clock + color toggle + mobile menu -->
      <div class="flex items-center gap-4">
        <!-- Clock (hidden on mobile to save space) -->
        <ClientOnly>
          <div class="hidden sm:flex items-center gap-0.5 text-xs font-sans normal-case opacity-50 tracking-wide">
            <span>{{ hours }}</span>
            <span class="blink">:</span>
            <span>{{ minutes }}</span>
            <span class="ml-1">{{ ampm }}</span>
          </div>
          <template #fallback>
            <div class="hidden sm:block text-xs font-sans normal-case opacity-40">--:-- --</div>
          </template>
        </ClientOnly>

        <ColorToggle
          class="w-7 h-7 hover:scale-125 transition-transform duration-300 shrink-0"
          :class="transparent ? 'mix-blend-difference text-white' : 'text-black dark:text-white'" />

        <!-- Mobile hamburger (md and below) -->
        <div class="md:hidden">
          <MobileMenu :transparent="transparent" />
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT: full width, no max-w -->
    <main id="main-content" role="main" class="w-full font-sans">
      <PageTransition>
        <slot />
      </PageTransition>
    </main>

    <!-- FOOTER: full width -->
    <footer
      :class="[
        'w-full border-t font-sans',
        transparent
          ? 'border-white/10'
          : 'border-black/10 dark:border-white/10',
      ]">
      <div
        v-if="$slots['footer-actions']"
        class="px-6 md:px-12 lg:px-20 py-6 border-b border-black/10 dark:border-white/10"
        :class="
          transparent
            ? '*:bg-white *:text-black *:px-4 *:py-2 *:w-full *:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center'
            : '*:bg-black dark:*:bg-white dark:*:text-black *:text-white *:px-4 *:py-2 *:w-full dark:*:font-medium *:text-2xl *:flex *:flex-row transition-all duration-300 *:items-center'
        ">
        <slot name="footer-actions" />
      </div>
      <Footer />
    </footer>

    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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
    title ? `${title} — Khairin Kamarizal` : "Khairin Kamarizal",
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
