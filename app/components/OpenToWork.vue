<template>
  <div class="flex flex-col gap-4 border border-black/20 dark:border-white/20 p-5 relative open-to-work-border">
    <!-- Availability indicator -->
    <div class="flex items-center gap-2">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span class="text-[10px] tracking-widest opacity-60">AVAILABLE FOR FREELANCE &amp; FULLTIME</span>
    </div>

    <!-- What kind of work -->
    <div class="flex flex-col gap-1">
      <p class="text-sm dark:font-light leading-relaxed">
        Open to <span class="font-medium">Brand Identity</span>, <span class="font-medium">UI/UX Design</span>,
        <span class="font-medium">Web Development</span>, <span class="font-medium">Motion Design</span>, and <span class="font-medium">Creative Direction</span> projects.
      </p>
      <p class="text-xs opacity-50">Remote · On-site Cyberjaya</p>
    </div>

    <!-- CTA -->
    <a
      href="mailto:khairinkamarizal@gmail.com"
      class="group self-start flex items-center gap-1.5 text-xs tracking-wider border border-black/20 dark:border-white/20 px-3 py-1.5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-200">
      <span>Get in touch</span>
      <ArrowUpRight class="w-3 h-3 group-hover:rotate-45 transition-transform duration-200" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<style scoped>
.open-to-work-border {
  animation: border-pulse 3s ease-in-out infinite;
}

@keyframes border-pulse {
  0%, 100% { border-color: rgba(0, 0, 0, 0.2); }
  50% { border-color: rgba(0, 0, 0, 0.5); }
}

@media (prefers-color-scheme: dark) {
  @keyframes border-pulse {
    0%, 100% { border-color: rgba(255, 255, 255, 0.2); }
    50% { border-color: rgba(255, 255, 255, 0.5); }
  }
}
</style>
