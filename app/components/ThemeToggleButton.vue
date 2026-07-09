<template>
  <ClientOnly>
    <button
      id="theme-toggle"
      @click="toggle"
      class="flex items-center transition-all duration-300 bg-neutral-50 h-5 w-5 dark:bg-neutral-50 justify-center"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`">
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
/**
 * ThemeToggleButton — preferred alias for ColorToggle.
 * Same functionality, clearer semantic name.
 */
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggle = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
