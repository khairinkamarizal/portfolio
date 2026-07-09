<template>
  <component :is="tag" class="hover-underline-wrapper">
    <span class="hover-underline-text">{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  tag?: 'span' | 'div'
}>(), {
  tag: 'span',
})
</script>

<style scoped>
.hover-underline-wrapper {
  display: inline-block;
}

.hover-underline-text {
  position: relative;
  display: inline-block;
}

.hover-underline-text::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-underline-wrapper:hover .hover-underline-text::after {
  transform: scaleX(1);
}
</style>
