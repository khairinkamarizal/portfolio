<template>
  <span class="glitch-wrapper" :data-text="text" :class="`glitch-${intensity}`" :aria-label="text" aria-hidden="false">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
/**
 * GlitchText — CSS glitch animation component for inline text.
 *
 * @prop {string} text - The text string to display and apply the glitch effect to.
 * @prop {'low'|'medium'|'high'} [intensity='low'] - Controls animation speed and repeat count.
 *   - low: single pass, 0.4s, 2 steps
 *   - medium: 2 passes, 0.3s, 3 steps
 *   - high: 3 passes, 0.2s, 4 steps
 *
 * Uses CSS pseudo-elements (::before, ::after) with clip-path and keyframe transforms
 * to produce a glitch slice effect on hover. The text prop is mirrored via data-text
 * so pseudo-elements can replicate it with `content: attr(data-text)`.
 * Respects `prefers-reduced-motion`: animations are suppressed via CSS media query.
 */
withDefaults(defineProps<{
  text: string
  intensity?: 'low' | 'medium' | 'high'
}>(), {
  intensity: 'low',
})
</script>

<style scoped>
.glitch-wrapper {
  position: relative;
  display: inline-block;
}

/* Pseudo-elements for glitch layers */
.glitch-wrapper::before,
.glitch-wrapper::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.glitch-wrapper::before {
  color: currentColor;
  clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
}

.glitch-wrapper::after {
  color: currentColor;
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
}

/* ── LOW intensity ── */
.glitch-low:hover::before {
  animation: glitch-shift-a 0.4s steps(2) 1;
}
.glitch-low:hover::after {
  animation: glitch-shift-b 0.4s steps(2) 1;
}

/* ── MEDIUM intensity ── */
.glitch-medium:hover::before {
  animation: glitch-shift-a 0.3s steps(3) 2;
}
.glitch-medium:hover::after {
  animation: glitch-shift-b 0.3s steps(3) 2;
}

/* ── HIGH intensity ── */
.glitch-high:hover::before {
  animation: glitch-shift-a 0.2s steps(4) 3;
}
.glitch-high:hover::after {
  animation: glitch-shift-b 0.2s steps(4) 3;
}

@keyframes glitch-shift-a {
  0% {
    opacity: 0;
    transform: translate(0);
  }
  20% {
    opacity: 0.8;
    transform: translate(-3px, 1px);
  }
  40% {
    opacity: 0.6;
    transform: translate(3px, -1px);
  }
  60% {
    opacity: 0.8;
    transform: translate(-2px, 0);
  }
  80% {
    opacity: 0.4;
    transform: translate(1px, 1px);
  }
  100% {
    opacity: 0;
    transform: translate(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .glitch-wrapper::before, .glitch-wrapper::after { animation: none !important; }
}

@keyframes glitch-shift-b {
  0% {
    opacity: 0;
    transform: translate(0);
  }
  20% {
    opacity: 0.7;
    transform: translate(3px, -1px);
  }
  40% {
    opacity: 0.5;
    transform: translate(-3px, 1px);
  }
  60% {
    opacity: 0.7;
    transform: translate(2px, 0);
  }
  80% {
    opacity: 0.3;
    transform: translate(-1px, -1px);
  }
  100% {
    opacity: 0;
    transform: translate(0);
  }
}
</style>
