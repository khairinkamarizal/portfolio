<template>
  <div class="flex gap-4 items-start">
    <!-- Photo: square, editorial -->
    <div class="w-12 h-12 shrink-0 overflow-hidden bg-black/10 dark:bg-white/10">
      <img
        v-if="photo"
        :src="photo"
        :alt="name"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover" />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-sm font-bold text-black/40 dark:text-white/40">
        {{ initial }}
      </div>
    </div>

    <!-- Text -->
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-black dark:text-white leading-tight">
        {{ name }}
      </p>
      <p
        v-if="title"
        class="text-xs opacity-50 text-black dark:text-white mt-0.5">
        {{ title }}
      </p>
      <p
        v-if="bio"
        class="text-xs opacity-60 leading-relaxed text-black dark:text-white mt-2">
        {{ bio }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  title?: string
  bio?: string
  photo?: string
}>()

const initial = computed(() => props.name?.[0]?.toUpperCase() ?? '?')
</script>
