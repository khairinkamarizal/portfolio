<template>
  <ClientOnly
    ><div aria-hidden="true" class="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <video
        v-if="isDark"
        ref="darkVideo"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100">
        <source
          src="/assets/dark_bg.mp4"
          type="video/mp4" />
      </video>
      <video
        v-if="!isDark"
        ref="lightVideo"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100">
        <source
          src="/assets/light_bg.mp4"
          type="video/mp4" />
      </video></div
  ></ClientOnly>
</template>

<script setup lang="ts">
/**
 * VideoBackground — full-viewport looping video background tied to color mode.
 *
 * Switches between `dark_bg.mp4` and `light_bg.mp4` based on the active color scheme.
 * Videos are autoplay, muted, loop, and playsinline for cross-browser compatibility.
 * Rendered inside ClientOnly to avoid SSR hydration issues with the color mode check.
 * Fixed positioned at z-index -50 so it underlays all page content without interfering.
 * Respects `prefers-reduced-motion`: pauses the active video on mount if the user
 * has requested reduced motion.
 */
import { computed, ref, onMounted } from "vue";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const darkVideo = ref<HTMLVideoElement | null>(null);
const lightVideo = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    darkVideo.value?.pause();
    lightVideo.value?.pause();
  }
});
</script>
