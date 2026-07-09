<template>
  <div class="flex flex-col gap-4 pt-8 border-t border-black/10 dark:border-white/10">
    <div class="flex flex-col gap-1">
      <h2 class="text-xs opacity-50 tracking-widest">Newsletter</h2>
      <p class="text-sm opacity-70 leading-relaxed dark:font-light">
        Get notified when I publish something new. No spam, unsubscribe anytime.
      </p>
      <!-- UI only — no backend connected yet -->
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="submitted" key="success" role="status" aria-live="polite" class="flex items-center gap-2 text-sm">
        <span class="opacity-70">You're subscribed. Talk soon.</span>
      </div>

      <form v-else key="form" class="flex flex-col gap-2" @submit.prevent="handleSubmit">
        <div class="flex gap-2">
          <input
            v-model="email"
            type="email"
            required
            placeholder="your@email.com"
            class="flex-1 text-sm px-3 py-2 border border-black/20 dark:border-white/20 bg-transparent placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-150"
            :disabled="loading"
            aria-label="Email address" />
          <button
            type="submit"
            :disabled="loading || !email"
            class="text-xs tracking-wider px-4 py-2 bg-black dark:bg-white text-white dark:text-black transition-opacity duration-150 disabled:opacity-40">
            {{ loading ? '...' : 'Subscribe' }}
          </button>
        </div>
        <p v-if="error" class="text-xs opacity-50">{{ error }}</p>
      </form>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const submitted = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!email.value) return
  loading.value = true
  error.value = ''

  // UI only — replace with real API call when backend is ready
  await new Promise((resolve) => setTimeout(resolve, 600))

  submitted.value = true
  loading.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
