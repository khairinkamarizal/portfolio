<template>
  <span class="glitch-wrapper" :data-text="text" :class="`glitch-${intensity}`">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
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
