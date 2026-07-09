<template>
  <div class="flex flex-col gap-6 p-6 border border-black/10 dark:border-white/10 text-center items-center">
    <!-- Headline -->
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl leading-tight dark:font-light">Let's Build Something</h2>
      <p class="text-sm opacity-60 leading-relaxed dark:font-light max-w-sm">
        Open to freelance work in branding and web, and exploring full-time roles with product teams that care about craft.
      </p>
    </div>

    <!-- Decorative line -->
    <div class="w-8 h-px bg-black dark:bg-white opacity-20"></div>

    <!-- Email CTA -->
    <a
      href="mailto:khairinkamarizal@gmail.com"
      class="text-sm tracking-wider px-6 py-3 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-150">
      khairinkamarizal@gmail.com
    </a>

    <!-- Social links -->
    <div class="flex items-center gap-6">
      <a
        href="https://be.net/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs tracking-widest opacity-40 hover:opacity-100 transition-opacity duration-150">
        BEHANCE
      </a>
      <a
        href="https://linkedin.com/in/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs tracking-widest opacity-40 hover:opacity-100 transition-opacity duration-150">
        LINKEDIN
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ContactCTA — call-to-action section for contact.
 * Shows headline, subtext about open-to-work, email link, Behance link, LinkedIn link.
 * Bold, centered design with subtle border.
 * Used on the about page above the ContactForm.
 */
</script>
