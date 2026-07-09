<template>
  <div class="flex flex-wrap gap-2">
    <TagPill
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
      :size="size"
      :active="activeTag === tag"
      @click="$emit('tag-click', tag)" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tags: string[]
  activeTag?: string
  size?: 'sm' | 'md'
}>(), {
  size: 'sm',
})

defineEmits<{
  'tag-click': [tag: string]
}>()
</script>
