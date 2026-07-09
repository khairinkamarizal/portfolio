<template>
  <div class="flex justify-between gap-4 pt-8 border-t border-black/10 dark:border-white/10">
    <NuxtLink
      v-if="prevPost"
      :to="`/writing/${prevPost.slug}`"
      class="flex flex-col gap-1 group w-1/2">
      <span class="text-[10px] opacity-40 tracking-wider flex items-center gap-1">
        <ArrowLeft class="w-3 h-3" /> Previous
      </span>
      <span class="text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity duration-200">
        {{ prevPost.title }}
      </span>
    </NuxtLink>
    <div v-else class="w-1/2" />

    <NuxtLink
      v-if="nextPost"
      :to="`/writing/${nextPost.slug}`"
      class="flex flex-col gap-1 items-end text-right group w-1/2">
      <span class="text-[10px] opacity-40 tracking-wider flex items-center gap-1">
        Next <ArrowRight class="w-3 h-3" />
      </span>
      <span class="text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity duration-200">
        {{ nextPost.title }}
      </span>
    </NuxtLink>
    <div v-else class="w-1/2" />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

defineProps<{
  prevPost: { title: string; slug: string } | null
  nextPost: { title: string; slug: string } | null
}>()
</script>
