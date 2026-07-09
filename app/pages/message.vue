<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 mt-10">

        <!-- ============================================ -->
        <!-- HERO: page heading                           -->
        <!-- ============================================ -->
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-none uppercase font-mono">
            Message
          </h1>
          <p class="text-sm opacity-60 max-w-lg leading-relaxed">
            Have a project in mind, a question, or just want to say hello?
            Fill in the form or reach out directly.
          </p>
        </div>

        <!-- ============================================ -->
        <!-- MAIN: form + contact info side by side       -->
        <!-- ============================================ -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <!-- LEFT: contact form -->
          <div>
            <h2 class="text-xs tracking-widest uppercase font-mono opacity-50 mb-8">
              Send a Message
            </h2>

            <form
              class="flex flex-col gap-6"
              novalidate
              @submit.prevent="handleSubmit">

              <!-- Name -->
              <div class="flex flex-col gap-2">
                <label
                  for="name"
                  class="text-xs tracking-widest uppercase font-mono opacity-50">
                   Name <span class="opacity-50">*</span><span class="sr-only">(required)</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  :class="[
                    'w-full border px-4 py-3 text-sm bg-transparent focus:outline-none transition-colors duration-150 placeholder:opacity-30',
                    'focus:border-black dark:focus:border-white',
                    errors.name
                      ? 'border-red-500'
                      : 'border-black/20 dark:border-white/20',
                  ]"
                  :aria-describedby="errors.name ? 'name-error' : undefined"
                  placeholder="Your name" />
                <span v-if="errors.name" id="name-error" class="text-xs text-red-500">{{ errors.name }}</span>
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2">
                <label
                  for="email"
                  class="text-xs tracking-widest uppercase font-mono opacity-50">
                   Email <span class="opacity-50">*</span><span class="sr-only">(required)</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  :class="[
                    'w-full border px-4 py-3 text-sm bg-transparent focus:outline-none transition-colors duration-150 placeholder:opacity-30',
                    'focus:border-black dark:focus:border-white',
                    errors.email
                      ? 'border-red-500'
                      : 'border-black/20 dark:border-white/20',
                  ]"
                  :aria-describedby="errors.email ? 'email-error' : undefined"
                  placeholder="your@email.com" />
                <span v-if="errors.email" id="email-error" class="text-xs text-red-500">{{ errors.email }}</span>
              </div>

              <!-- Subject -->
              <div class="flex flex-col gap-2">
                <label
                  for="subject"
                  class="text-xs tracking-widest uppercase font-mono opacity-50">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  class="w-full border border-black/20 dark:border-white/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-150 placeholder:opacity-30"
                  placeholder="What's this about?" />
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-2">
                <label
                  for="message"
                  class="text-xs tracking-widest uppercase font-mono opacity-50">
                   Message <span class="opacity-50">*</span><span class="sr-only">(required)</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="6"
                  required
                  :class="[
                    'w-full border px-4 py-3 text-sm bg-transparent focus:outline-none transition-colors duration-150 resize-none placeholder:opacity-30',
                    'focus:border-black dark:focus:border-white',
                    errors.message
                      ? 'border-red-500'
                      : 'border-black/20 dark:border-white/20',
                  ]"
                  :aria-describedby="errors.message ? 'message-error' : undefined"
                  placeholder="Tell me what you're thinking..." />
                <span v-if="errors.message" id="message-error" class="text-xs text-red-500">{{ errors.message }}</span>
              </div>

              <!-- Submit -->
              <div class="flex flex-col gap-4">
                <p
                  v-if="hasErrors"
                  aria-live="assertive"
                  class="text-xs text-red-500 font-mono">
                  Please fix the errors above before submitting.
                </p>
                <div class="flex items-center gap-4">
                  <button
                    type="submit"
                    :disabled="submitting"
                    class="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs tracking-wider font-medium hover:opacity-80 transition-opacity duration-150 disabled:opacity-40 disabled:cursor-not-allowed">
                    {{ submitting ? "Sending..." : "Send Message" }}
                  </button>

                  <Transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0">
                    <span
                      v-if="submitted"
                      aria-live="polite"
                      class="text-xs tracking-widest uppercase font-mono opacity-60">
                      Message sent ✓
                    </span>
                  </Transition>
                </div>
              </div>
            </form>
          </div>

          <!-- RIGHT: direct contact info + availability -->
          <div class="flex flex-col gap-10">
            <div>
              <h2 class="text-xs tracking-widest uppercase font-mono opacity-50 mb-6">
                Direct Contact
              </h2>
              <div class="flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
                <div
                  v-for="contact in contactLinks"
                  :key="contact.label"
                  class="py-4 flex items-center justify-between">
                  <span class="text-xs tracking-widest uppercase font-mono opacity-50">
                    {{ contact.label }}
                  </span>
                  <a
                    :href="contact.href"
                    :target="contact.external ? '_blank' : undefined"
                    :rel="contact.external ? 'noopener noreferrer' : undefined"
                    class="text-sm hover:opacity-60 transition-opacity duration-150">
                    {{ contact.value }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Availability -->
            <div>
              <h2 class="text-xs tracking-widest uppercase font-mono opacity-50 mb-6">
                Availability
              </h2>
              <div class="flex items-start gap-3 p-4 border border-black/10 dark:border-white/10">
                <span class="w-2 h-2 rounded-full bg-green-500 mt-1 shrink-0" aria-hidden="true" />
                <div class="flex flex-col gap-1">
                  <span class="text-sm font-medium">Open to opportunities</span>
                  <span class="text-xs opacity-50 leading-relaxed">
                    Available for full-time roles, freelance projects, and consulting
                    engagements. Response time: 1–2 business days.
                  </span>
                </div>
              </div>
            </div>

            <!-- Location / timezone -->
            <div>
              <h2 class="text-xs tracking-widest uppercase font-mono opacity-50 mb-6">
                Location
              </h2>
              <p class="text-sm opacity-70 leading-relaxed">
                Cyberjaya, Malaysia (UTC+8).<br />
                Available for remote work worldwide and on-site in the Klang Valley.
              </p>
            </div>
          </div>
        </div>

      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

useSeoMeta({
  title: "Message",
  description: "Get in touch — project inquiries, questions, or just to say hello.",
});

definePageMeta({
  layout: false,
});

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const submitting = ref(false);
const submitted = ref(false);

const hasErrors = computed(() => Object.values(errors).some((e) => e !== ""));

function validate() {
  let valid = true;
  errors.name = "";
  errors.email = "";
  errors.message = "";

  if (!form.name.trim()) {
    errors.name = "Name is required.";
    valid = false;
  }
  if (!form.email.trim()) {
    errors.email = "Email is required.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
    valid = false;
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    valid = false;
  }

  return valid;
}

async function handleSubmit() {
  if (!validate()) return;

  submitting.value = true;
  // Simulate async send — replace with real API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  submitting.value = false;
  submitted.value = true;

  // Reset form
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";

  setTimeout(() => {
    submitted.value = false;
  }, 4000);
}

const contactLinks = [
  { label: "Email", value: "hello@khairin.dev", href: "mailto:hello@khairin.dev", external: false },
  { label: "GitHub", value: "github.com/khairinkamarizal", href: "https://github.com/khairinkamarizal", external: true },
  { label: "LinkedIn", value: "linkedin.com/in/khairinkamarizal", href: "https://linkedin.com/in/khairinkamarizal", external: true },
  { label: "Twitter", value: "@khairinkamarizal", href: "https://x.com/khairinkamarizal", external: true },
];
</script>
