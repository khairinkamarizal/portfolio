<template>
  <ClientOnly>
    <Transition name="fade">
      <nav
        v-if="visible"
        class="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:flex"
        :class="isMobile ? 'hidden' : 'flex'"
        aria-label="Page sections">
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          @click="scrollTo(section.id)"
          :aria-label="`Go to ${section.label}`"
          :title="section.label"
          :class="[
            'w-2 h-2 rounded-full border transition-all duration-200',
            activeSection === section.id
              ? 'bg-black dark:bg-white border-black dark:border-white scale-125'
              : 'bg-transparent border-black/30 dark:border-white/30 hover:border-black dark:hover:border-white',
          ]" />
      </nav>
    </Transition>
    <!-- Mobile: bottom bar -->
    <Transition name="fade">
      <nav
        v-if="visible"
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-3 border border-black/20 dark:border-white/20 bg-white dark:bg-black px-4 py-2"
        aria-label="Page sections">
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          @click="scrollTo(section.id)"
          :aria-label="`Go to ${section.label}`"
          :class="[
            'text-[9px] tracking-widest transition-opacity duration-200',
            activeSection === section.id ? 'opacity-100' : 'opacity-30 hover:opacity-60',
          ]">
          {{ section.label.toUpperCase() }}
        </button>
      </nav>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Section {
  id: string
  label: string
}

const props = defineProps<{
  sections: Section[]
}>()

const visible = ref(false)
const activeSection = ref('')
const isMobile = ref(false)

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

let _handleScroll: (() => void) | null = null

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  const handleScroll = () => {
    visible.value = window.scrollY > 100

    // Determine active section
    for (const section of [...props.sections].reverse()) {
      const el = document.getElementById(section.id)
      if (el && el.getBoundingClientRect().top <= 120) {
        activeSection.value = section.id
        break
      }
    }
  }

  _handleScroll = handleScroll
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', () => { isMobile.value = window.innerWidth < 768 })
})

onUnmounted(() => {
  if (_handleScroll) window.removeEventListener('scroll', _handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
