<template>
  <ClientOnly
    ><div aria-hidden="true" class="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <video
        ref="darkVideo"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0"
        :class="{ 'opacity-100': isDark }">
        <source
          src="/assets/dark_bg.mp4"
          type="video/mp4" />
      </video>
      <video
        ref="lightVideo"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0"
        :class="{ 'opacity-100': !isDark }">
        <source
          src="/assets/light_bg.mp4"
          type="video/mp4" />
      </video></div
  ></ClientOnly>
</template>

<script setup lang="ts">
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
