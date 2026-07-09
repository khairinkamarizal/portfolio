<template>
  <footer class="flex flex-col gap-4 pt-8 border-t border-black/10 dark:border-white/10 font-sans normal-case" aria-label="Site footer">
    <!-- Social links -->
    <div class="flex items-center gap-4">
      <a
        href="https://instagram.com/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-150">
        Instagram
      </a>
      <a
        href="https://be.net/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-150">
        Behance
      </a>
      <a
        href="https://linkedin.com/in/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-150">
        LinkedIn
      </a>
      <a
        href="https://github.com/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-150">
        GitHub
      </a>
    </div>

    <!-- Bottom row -->
    <div class="flex justify-between items-center">
      <span class="text-[10px] opacity-30">
        &copy; {{ year }} Khairinkamarizal
      </span>
      <span class="text-[10px] opacity-30">
        Built with Nuxt
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
