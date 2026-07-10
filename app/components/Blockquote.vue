<template>
  <blockquote class="relative border-l-2 border-black/20 dark:border-white/20 pl-5 py-1 my-6">
    <p class="text-base md:text-lg font-light leading-relaxed opacity-80 italic">{{ quote }}</p>
    <footer v-if="author" class="mt-3 text-xs font-mono opacity-50">
      <cite>— {{ author }}</cite>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
/**
 * Blockquote — styled pull-quote component.
 *
 * @prop {string} quote - The quotation text to display.
 * @prop {string} [author] - Optional attribution shown below the quote as a cite element.
 *
 * Renders a left-bordered blockquote with an optional author footer.
 * Typography is light/italic; adapts to light and dark color schemes.
 */
defineProps<{
  quote: string
  author?: string
}>()
</script>
