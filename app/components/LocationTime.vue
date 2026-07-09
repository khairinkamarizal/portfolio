<template>
  <div class="flex flex-col gap-0.5">
    <span class="text-xs opacity-40 tracking-widest">{{ location }}</span>
    <ClientOnly>
      <div class="flex items-center gap-1.5 font-sans normal-case">
        <span class="text-sm opacity-70">
          {{ hours }}<span class="blink">:</span>{{ minutes }}
          <span class="ml-0.5 text-xs opacity-60">{{ ampm }}</span>
        </span>
        <span class="text-xs opacity-30">{{ timezone }}</span>
      </div>
      <template #fallback>
        <div class="text-sm opacity-40 font-sans normal-case">--:-- --</div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// Live clock component showing current time in Kuala Lumpur
// Uses setInterval to update every second
// Shows location label and timezone

const props = withDefaults(defineProps<{
  location?: string
  timezone?: string
  tz?: string
}>(), {
  location: 'Cyberjaya, MY',
  timezone: 'UTC+8',
  tz: 'Asia/Kuala_Lumpur',
})

const hours = ref('--')
const minutes = ref('--')
const ampm = ref('--')

onMounted(() => {
  const updateTime = () => {
    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: props.tz ?? 'Asia/Kuala_Lumpur',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    const parts = formatter.formatToParts(now)
    hours.value = parts.find((p) => p.type === 'hour')?.value ?? '--'
    minutes.value = parts.find((p) => p.type === 'minute')?.value ?? '--'
    ampm.value = (parts.find((p) => p.type === 'dayPeriod')?.value ?? '--').toLowerCase()
  }

  updateTime()
  const interval = setInterval(updateTime, 1000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}
.blink {
  animation: blink 1s ease-in-out infinite;
}
</style>
