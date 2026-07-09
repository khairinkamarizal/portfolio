<template>
  <div class="flex flex-col gap-2">
    <a
      href="https://instagram.com/khairinkamarizal"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
      <Instagram class="w-4 h-4" />
      <span>Instagram</span>
      <ExternalLink class="w-3 h-3 ml-auto" />
    </a>
    <a
      href="https://be.net/khairinkamarizal"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
      <ExternalLink class="w-4 h-4" />
      <span>Behance</span>
      <ExternalLink class="w-3 h-3 ml-auto" />
    </a>
    <a
      href="https://linkedin.com/in/khairinkamarizal"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
      <Linkedin class="w-4 h-4" />
      <span>LinkedIn</span>
      <ExternalLink class="w-3 h-3 ml-auto" />
    </a>
    <a
      href="mailto:khairinkamarizal@gmail.com"
      class="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
      <Mail class="w-4 h-4" />
      <span>Email</span>
      <ExternalLink class="w-3 h-3 ml-auto" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-vue-next"
</script>
