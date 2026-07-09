<template>
  <div class="project-thumbnail relative overflow-hidden" :style="{ aspectRatio: '16/9' }">
    <!-- SVG background with geometric pattern -->
    <svg
      class="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${W} ${H}`"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true">

      <!-- Background fill -->
      <rect width="100%" height="100%" :fill="bgColor" />

      <!-- Geometric pattern overlay -->
      <g :opacity="patternOpacity">
        <!-- Grid lines horizontal -->
        <line v-for="i in 8" :key="`h${i}`"
          :x1="0" :y1="(H / 8) * i"
          :x2="W" :y2="(H / 8) * i"
          :stroke="lineColor" stroke-width="0.5" />
        <!-- Grid lines vertical -->
        <line v-for="i in 12" :key="`v${i}`"
          :x1="(W / 12) * i" :y1="0"
          :x2="(W / 12) * i" :y2="H"
          :stroke="lineColor" stroke-width="0.5" />
        <!-- Corner accent squares -->
        <rect x="0" y="0" width="24" height="24" fill="none" :stroke="lineColor" stroke-width="1" />
        <rect :x="W - 24" :y="H - 24" width="24" height="24" fill="none" :stroke="lineColor" stroke-width="1" />
        <!-- Center crosshair -->
        <line :x1="W / 2 - 8" :y1="H / 2" :x2="W / 2 + 8" :y2="H / 2" :stroke="lineColor" stroke-width="1" />
        <line :x1="W / 2" :y1="H / 2 - 8" :x2="W / 2" :y2="H / 2 + 8" :stroke="lineColor" stroke-width="1" />
      </g>

      <!-- Initial letter — centered -->
      <text
        :x="W / 2"
        :y="H / 2 + letterSize * 0.35"
        text-anchor="middle"
        dominant-baseline="auto"
        :font-size="letterSize"
        font-family="'Space Mono', 'Courier New', monospace"
        font-weight="700"
        letter-spacing="-2"
        :fill="letterColor"
        :opacity="0.85">{{ initial }}</text>
    </svg>

    <!-- Category label + year overlay -->
    <div class="absolute inset-x-0 bottom-0 flex items-end justify-between px-3 py-2 pointer-events-none">
      <span
        class="text-[9px] tracking-widest font-mono uppercase"
        :style="{ color: labelColor, opacity: 0.7 }">{{ category }}</span>
      <span
        class="text-[9px] font-mono"
        :style="{ color: labelColor, opacity: 0.5 }">{{ year }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  category: string
  year: number | string
  color?: string
}>(), {
  color: '',
})

const W = 640
const H = 360

// Category → color palette (bg, line, letter, label)
type Palette = { bg: string; line: string; letter: string; label: string; patternOp: number }

const palettes: Record<string, Palette> = {
  Branding:  { bg: '#1a1a1a', line: '#ffffff', letter: '#ffffff', label: '#ffffff', patternOp: 0.12 },
  Motion:    { bg: '#0d0d0d', line: '#ffffff', letter: '#ffffff', label: '#ffffff', patternOp: 0.08 },
  Jersey:    { bg: '#2e2e2e', line: '#cccccc', letter: '#cccccc', label: '#cccccc', patternOp: 0.15 },
  Logo:      { bg: '#f0f0f0', line: '#000000', letter: '#000000', label: '#000000', patternOp: 0.12 },
  'UI/UX':   { bg: '#181818', line: '#e0e0e0', letter: '#e0e0e0', label: '#e0e0e0', patternOp: 0.10 },
  default:   { bg: '#111111', line: '#ffffff', letter: '#ffffff', label: '#ffffff', patternOp: 0.10 },
}

const palette = computed<Palette>(() => {
  if (props.color) {
    return { bg: props.color, line: '#ffffff', letter: '#ffffff', label: '#ffffff', patternOp: 0.12 }
  }
  return palettes[props.category] ?? palettes['default']
})

const bgColor       = computed(() => palette.value.bg)
const lineColor     = computed(() => palette.value.line)
const letterColor   = computed(() => palette.value.letter)
const labelColor    = computed(() => palette.value.label)
const patternOpacity = computed(() => palette.value.patternOp)

const initial     = computed(() => props.title.trim().charAt(0).toUpperCase())
const letterSize  = computed(() => Math.round(H * 0.55))
</script>
