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
      <p class="text-sm font-bold leading-tight">
        {{ name }}
      </p>
      <p
        v-if="title"
        class="text-xs opacity-60 mt-0.5">
        {{ title }}
      </p>
      <p
        v-if="bio"
        class="text-xs opacity-50 leading-relaxed mt-2">
        {{ bio }}
      </p>
    </div>
  </div>
</template>

/**
 * AuthorCard component.
 *
 * Displays a compact author bio card with a square photo (or initial fallback),
 * name, optional title, and optional bio text. Used in blog post pages to
 * attribute written content.
 *
 * @prop {string} name    - Author's full name (required). Used as img alt text
 *                          and to derive the initial fallback character.
 * @prop {string} [title] - Optional job title or role displayed below the name.
 * @prop {string} [bio]   - Optional short biography rendered below the title.
 * @prop {string} [photo] - Optional URL for the author's avatar image.
 *                          Falls back to a capitalised initial when omitted.
 */
<script setup lang="ts">
const props = defineProps<{
  name: string
  title?: string
  bio?: string
  photo?: string
}>()

const initial = computed(() => props.name?.[0]?.toUpperCase() ?? '?')
</script>
