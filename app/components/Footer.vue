<template>
  <footer class="site-footer">
    <div class="site-footer__row">
      <p class="site-footer__prompt">Have a considered project in mind?</p>
      <NuxtLink to="/message" class="button-primary">Open a conversation <ArrowUpRight :size="15" aria-hidden="true" /></NuxtLink>
    </div>
    <div class="site-footer__base">
      <span>&copy; {{ currentYear }} Khairin Kamarizal</span>
      <span><VueBitsDecryptedText text="Index system / Set in Inter Tight" animate-on="inViewHover" /></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
const currentYear = new Date().getFullYear()
</script>
