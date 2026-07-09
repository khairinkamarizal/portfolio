<template>
  <div
    :class="['divider', `divider--${variant}`, className]"
    aria-hidden="true" />
</template>

<script setup lang="ts">
// Reusable section divider component
// Variants: line | dots | zigzag | wave
// Editorial design, dark mode aware

withDefaults(defineProps<{
  variant?: 'line' | 'dots' | 'zigzag' | 'wave'
  className?: string
}>(), {
  variant: 'line',
  className: '',
})
</script>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
}

/* Line variant — simple hr */
.divider--line {
  background-color: currentColor;
  opacity: 0.1;
}

/* Dots variant — row of dots */
.divider--dots {
  height: auto;
  padding: 8px 0;
  background: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

.divider--dots::before {
  content: '· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·';
  display: block;
  opacity: 0.15;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  letter-spacing: 2px;
  width: 100%;
}

/* Zigzag variant — CSS zigzag pattern */
.divider--zigzag {
  height: 8px;
  background: none;
  position: relative;
  overflow: hidden;
}

.divider--zigzag::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(135deg, currentColor 25%, transparent 25%) -4px 0,
    linear-gradient(225deg, currentColor 25%, transparent 25%) -4px 0,
    linear-gradient(315deg, currentColor 25%, transparent 25%),
    linear-gradient(45deg, currentColor 25%, transparent 25%);
  background-size: 8px 8px;
  opacity: 0.12;
}

/* Wave variant — CSS wave using border-radius trick */
.divider--wave {
  height: 12px;
  background: none;
  position: relative;
  overflow: hidden;
}

.divider--wave::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10px;
  right: -10px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.15;
}
</style>
