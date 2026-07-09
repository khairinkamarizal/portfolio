<template>
  <MarqueeTicker v-bind="$attrs" />
</template>

<script setup lang="ts">
// Alias for MarqueeTicker with inheritAttrs passthrough
defineOptions({ inheritAttrs: false })
</script>
