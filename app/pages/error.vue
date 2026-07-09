<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 mt-10">
        <div class="flex flex-col gap-4">
          <h1 class="text-xs opacity-50 tracking-widest">Error {{ error?.statusCode || 404 }}</h1>
          <p class="text-2xl leading-tight dark:font-light">
            {{ errorMessage }}
          </p>
          <p class="text-sm opacity-60 leading-relaxed dark:font-light">
            {{ errorDescription }}
          </p>
        </div>

        <NuxtLink
          to="/"
          class="group flex items-center gap-2 text-sm hover:opacity-70 transition-opacity duration-200">
          <span>← Back to home</span>
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as () => { statusCode?: number; statusMessage?: string; message?: string },
})

definePageMeta({
  layout: false,
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
