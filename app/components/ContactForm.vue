<template>
  <div class="flex flex-col gap-4">
    <Transition name="fade" mode="out-in">
      <div v-if="submitted" key="success" class="flex flex-col gap-2">
        <p class="text-sm opacity-70">Message received. I'll get back to you soon.</p>
      </div>

      <form v-else key="form" class="flex flex-col gap-3" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-1.5">
          <label for="contact-name" class="text-xs opacity-40 tracking-wider">Name</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            placeholder="Your name"
            class="text-sm px-3 py-2 border border-black/20 dark:border-white/20 bg-transparent placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-150"
            :disabled="loading" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="contact-email" class="text-xs opacity-40 tracking-wider">Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            placeholder="your@email.com"
            class="text-sm px-3 py-2 border border-black/20 dark:border-white/20 bg-transparent placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-150"
            :disabled="loading" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="contact-message" class="text-xs opacity-40 tracking-wider">Message</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            required
            rows="4"
            placeholder="What's on your mind?"
            class="text-sm px-3 py-2 border border-black/20 dark:border-white/20 bg-transparent placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-150 resize-none"
            :disabled="loading"></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading || !form.name || !form.email || !form.message"
          class="self-start text-xs tracking-wider px-4 py-2 bg-black dark:bg-white text-white dark:text-black transition-opacity duration-150 disabled:opacity-40">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <!-- Error state -->
        <p v-if="errorMessage" class="text-[11px] text-red-500 dark:text-red-400">{{ errorMessage }}</p>
      </form>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  loading.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    })
    submitted.value = true
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
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
