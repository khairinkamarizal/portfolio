<template>
  <ClientOnly>
    <template #fallback><div class="w-5 h-5" /></template>
    <button
      id="color-mode-toggle"
      type="button"
      @click="toggleTheme"
      class="flex items-center justify-center hover:opacity-70 transition-opacity duration-150"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`">
      <Transition name="icon-swap" mode="out-in">
        <!-- Moon: shown in light mode → clicking switches to dark -->
        <svg
          v-if="!isDark"
          key="moon"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-inherit"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <!-- Sun: shown in dark mode → clicking switches to light -->
        <svg
          v-else
          key="sun"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-inherit"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </Transition>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-swap-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
