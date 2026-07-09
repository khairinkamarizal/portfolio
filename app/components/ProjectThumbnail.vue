<template>
  <div class="w-full h-full relative overflow-hidden bg-black/8 dark:bg-white/8">
    <!-- Branding / Motion category -->
    <svg
      v-if="resolvedCategory === 'branding'"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full">
      <!-- Concentric circles -->
      <circle cx="200" cy="150" r="20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.15" />
      <circle cx="200" cy="150" r="50" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.12" />
      <circle cx="200" cy="150" r="90" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.10" />
      <circle cx="200" cy="150" r="130" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.08" />
      <circle cx="200" cy="150" r="180" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.06" />
      <circle cx="200" cy="150" r="240" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.04" />
      <!-- Initial letter -->
      <text
        x="200" y="150"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="120"
        font-family="'Space Mono', monospace"
        font-weight="700"
        fill="currentColor"
        opacity="0.15">
        {{ initial }}
      </text>
    </svg>

    <!-- Motion category -->
    <svg
      v-else-if="resolvedCategory === 'motion'"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full">
      <!-- Wave lines -->
      <path d="M0 150 Q50 100 100 150 T200 150 T300 150 T400 150" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.15" />
      <path d="M0 150 Q50 80 100 150 T200 150 T300 150 T400 150" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.12" />
      <path d="M0 150 Q50 60 100 150 T200 150 T300 150 T400 150" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.10" />
      <path d="M0 150 Q50 120 100 150 T200 150 T300 150 T400 150" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.08" />
      <path d="M0 150 Q50 40 100 150 T200 150 T300 150 T400 150" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.06" />
      <!-- Initial letter -->
      <text
        x="200" y="150"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="120"
        font-family="'Space Mono', monospace"
        font-weight="700"
        fill="currentColor"
        opacity="0.15">
        {{ initial }}
      </text>
    </svg>

    <!-- Jersey category -->
    <svg
      v-else-if="resolvedCategory === 'jersey'"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full">
      <!-- Diagonal stripes -->
      <line x1="-50" y1="0" x2="150" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <line x1="50" y1="0" x2="250" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <line x1="150" y1="0" x2="350" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <line x1="250" y1="0" x2="450" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <line x1="350" y1="0" x2="550" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <line x1="-150" y1="0" x2="50" y2="300" stroke="currentColor" stroke-width="18" opacity="0.04" />
      <!-- Initial letter -->
      <text
        x="200" y="150"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="120"
        font-family="'Space Mono', monospace"
        font-weight="700"
        fill="currentColor"
        opacity="0.15">
        {{ initial }}
      </text>
    </svg>

    <!-- Logo category -->
    <svg
      v-else-if="resolvedCategory === 'logo'"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full">
      <!-- Centered geometric shape (hexagon) -->
      <polygon
        points="200,90 245,112 245,188 200,210 155,188 155,112"
        fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.12" />
      <polygon
        points="200,60 270,100 270,200 200,240 130,200 130,100"
        fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.08" />
      <polygon
        points="200,30 300,90 300,210 200,270 100,210 100,90"
        fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.05" />
      <!-- Initial letter -->
      <text
        x="200" y="150"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="120"
        font-family="'Space Mono', monospace"
        font-weight="700"
        fill="currentColor"
        opacity="0.15">
        {{ initial }}
      </text>
    </svg>

    <!-- Default / wordmark-style grid -->
    <svg
      v-else
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full">
      <!-- Grid lines -->
      <line x1="0" y1="75" x2="400" y2="75" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <line x1="0" y1="225" x2="400" y2="225" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <line x1="200" y1="0" x2="200" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <line x1="300" y1="0" x2="300" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
      <!-- Diagonal accent -->
      <line x1="0" y1="0" x2="400" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.06" />
      <line x1="400" y1="0" x2="0" y2="300" stroke="currentColor" stroke-width="0.5" opacity="0.06" />
      <!-- Initial letter -->
      <text
        x="200" y="150"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="120"
        font-family="'Space Mono', monospace"
        font-weight="700"
        fill="currentColor"
        opacity="0.15">
        {{ initial }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  category?: string
}>()

const initial = computed(() => (props.title?.[0] ?? '?').toUpperCase())

const resolvedCategory = computed(() => {
  const c = (props.category ?? '').toLowerCase()
  if (c.includes('brand')) return 'branding'
  if (c.includes('motion') || c.includes('animation')) return 'motion'
  if (c.includes('jersey') || c.includes('sport')) return 'jersey'
  if (c.includes('logo') || c.includes('identity')) return 'logo'
  return 'default'
})
</script>
