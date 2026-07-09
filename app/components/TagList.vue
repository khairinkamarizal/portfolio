<template>
  <div v-if="tags?.length" class="flex flex-wrap gap-1.5">
    <component
      :is="clickable ? 'button' : 'span'"
      v-for="tag in tags"
      :key="tag"
      v-bind="clickable ? { type: 'button', onClick: () => onTagClick?.(tag) } : {}"
      :class="[
        'tracking-wider border transition-colors duration-150',
        size === 'md' ? 'text-xs px-2.5 py-1' : 'text-[10px] px-2 py-0.5',
        clickable
          ? 'cursor-pointer border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white'
          : 'border-black/20 dark:border-white/20',
        clickable && selectedTag === tag
          ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
          : '',
      ]">
      {{ tag.toUpperCase() }}
    </component>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
  size?: 'sm' | 'md'
  clickable?: boolean
  selectedTag?: string
  onTagClick?: (tag: string) => void
}>()
</script>
