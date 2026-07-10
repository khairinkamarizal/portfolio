<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
    <div class="flex flex-col items-center text-center gap-4 max-w-md w-full">
      <p class="font-mono text-[8vw] font-bold leading-none opacity-10 select-none">
        {{ error?.statusCode || 404 }}
      </p>

      <div class="flex flex-col gap-2">
        <p class="text-xl font-medium">
          {{ errorMessage }}
        </p>
        <p class="text-sm opacity-60">
          {{ errorDescription }}
        </p>
      </div>

      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs tracking-wider font-medium hover:opacity-80 transition-opacity duration-150 mt-6">
        <span>&larr; Back to home</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as () => { statusCode?: number; statusMessage?: string; message?: string },
})

const errorMessage = computed(() => {
  const code = props.error?.statusCode || 404
  if (code === 404) return "Page not found"
  if (code === 500) return "Something went wrong"
  return props.error?.statusMessage || "An error occurred"
})

const errorDescription = computed(() => {
  const code = props.error?.statusCode || 404
  if (code === 404) {
    return "The page you're looking for doesn't exist or has been moved."
  }
  if (code === 500) {
    return "We encountered an unexpected error. Please try again later."
  }
  return props.error?.message || "Please try refreshing the page or return home."
})
</script>
