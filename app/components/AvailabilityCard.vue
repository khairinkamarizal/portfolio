<template>
  <div class="border border-black/10 dark:border-white/10 p-6 flex flex-col gap-4">
    <!-- Status -->
    <div class="flex items-center gap-2">
      <span class="relative flex h-2.5 w-2.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span class="text-sm font-medium text-green-600 dark:text-green-400 tracking-wide">
        Available for Freelance & Fulltime
      </span>
    </div>

    <!-- Timezone -->
    <div class="flex flex-col gap-1">
      <span class="text-xs opacity-40 tracking-widest">CURRENT TIME</span>
      <ClientOnly>
        <div class="text-sm opacity-70">
          <span>Kuala Lumpur, Malaysia</span>
          <span class="mx-2">·</span>
          <span>UTC+8</span>
        </div>
        <template #fallback>
          <div class="text-sm opacity-70">
            <span>Kuala Lumpur, Malaysia · UTC+8</span>
          </div>
        </template>
      </ClientOnly>
    </div>

    <!-- CTA -->
    <a
      href="mailto:khairinkamarizal@gmail.com"
      class="mt-2 text-xs tracking-wider px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity duration-200 text-center font-medium">
      Let's work together
    </a>
  </div>
</template>

<script setup lang="ts">
// Availability card component
// Shows availability status with green pulse dot
// Displays current timezone (Kuala Lumpur, UTC+8)
// CTA button linking to mailto
</script>
