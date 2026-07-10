<template>
  <ClientOnly>
    <template #fallback><span class="icon-button" aria-hidden="true" /></template>
    <button
      id="color-mode-toggle"
      type="button"
      class="icon-button"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="toggleTheme">
      <Transition name="icon-swap" mode="out-in">
        <Moon v-if="!isDark" key="moon" :size="17" :stroke-width="1.8" aria-hidden="true" />
        <Sun v-else key="sun" :size="17" :stroke-width="1.8" aria-hidden="true" />
      </Transition>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(20deg) scale(0.8);
}
</style>
