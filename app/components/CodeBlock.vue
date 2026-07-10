<template>
  <div class="flex flex-col border border-black/10 dark:border-white/10 my-4">
    <!-- Header with filename and copy button -->
    <div
      v-if="filename || language"
      class="flex items-center justify-between px-4 py-2 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
      <span v-if="filename" class="text-xs font-mono opacity-50">{{ filename }}</span>
      <span v-else class="text-xs font-mono opacity-30">{{ language || 'code' }}</span>
      <CopyButton v-if="code" :text="code" :aria-describedby="blockId" />
    </div>

    <!-- Code content -->
    <pre :id="blockId" class="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-black/[0.03] dark:bg-white/[0.03] m-0"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
/**
 * CodeBlock — styled code block with syntax-highlighted look.
 * Props: code (string), language (string, optional), filename (string, optional)
 * Shows filename as a tab label, CopyButton to copy code, monospace font.
 * Used to enhance prose code blocks.
 */
defineProps<{
  code: string
  language?: string
  filename?: string
}>()

const blockId = 'code-' + Math.random().toString(36).slice(2, 6)
</script>
