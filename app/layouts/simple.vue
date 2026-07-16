<template>
  <div class="site-shell">
    <a href="#main-content" class="skip-link">Skip to content</a>

    <aside class="index-sidebar" aria-label="Site index">
      <NuxtLink to="/" class="sidebar-identity" aria-label="Khairin Kamarizal, home">
        <AppLogo class="sidebar-logo" />
        <span class="index-label">Independent<br>Designer + Developer</span>
      </NuxtLink>

      <div class="sidebar-status">
        <span class="status-mark" aria-hidden="true" />
        <span><VueBitsDecryptedText text="Available for selected work" animate-on="inViewHover" /><br>Cyberjaya / UTC+8</span>
      </div>

      <AppNav />

      <div class="sidebar-bottom">
        <nav class="sidebar-socials" aria-label="Social links">
          <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.label }} <ArrowUpRight :size="12" aria-hidden="true" />
          </a>
        </nav>
        <div class="sidebar-theme">
          <span class="index-label">Interface / {{ colorModeLabel }}</span>
          <ColorToggle />
        </div>
      </div>
    </aside>

    <header class="mobile-rail">
      <NuxtLink to="/" class="mobile-brand" aria-label="Khairin Kamarizal, home">
        <AppLogo />
        <span>Index</span>
      </NuxtLink>
      <span class="mobile-section">{{ currentSection }}</span>
      <button
        type="button"
        class="mobile-menu-button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="20" aria-hidden="true" />
        <Menu v-else :size="20" aria-hidden="true" />
      </button>
    </header>

    <Transition name="drawer">
      <div v-if="menuOpen" id="mobile-navigation" class="mobile-drawer">
        <AppNav @navigate="menuOpen = false" />
        <div class="mobile-drawer__meta">
          <p>Independent designer + developer<br>Cyberjaya, Malaysia</p>
          <ColorToggle show-label />
        </div>
      </div>
    </Transition>

    <div class="site-content">
      <main id="main-content" class="site-main">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const menuOpen = ref(false)
const { isDark } = useTheme()

const currentSection = computed(() => route.path === '/' ? 'Cover' : route.path.split('/').filter(Boolean)[0] || 'Index')
const colorModeLabel = computed(() => isDark.value ? 'Inverted' : 'Standard')

const socialLinks = [
  { label: 'Behance', href: 'https://www.behance.net/khairinkamarizal' },
  { label: 'GitHub', href: 'https://github.com/khairinkamarizal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khairinkamarizal' },
]

watch(() => route.fullPath, () => { menuOpen.value = false })
watch(menuOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})

useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: 'antialiased' },
  titleTemplate: (title) => title ? `${title} | Khairin Kamarizal` : 'Khairin Kamarizal',
})

useKeyboardShortcuts()
</script>

<style scoped>
.index-sidebar {
  position: fixed; inset: 0 auto 0 0; z-index: 60;
  width: var(--sidebar); display: flex; flex-direction: column;
  padding: 1.5rem; border-right: 1px solid var(--line); background: var(--paper);
}
.sidebar-identity { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--line); }
.sidebar-logo { width: 2.25rem; height: 2.25rem; }
.sidebar-identity .index-label { color: var(--muted); line-height: 1.35; }
.sidebar-status { display: flex; gap: 0.65rem; padding: 1rem 0; color: var(--muted); font-size: 0.68rem; line-height: 1.35; text-transform: uppercase; border-bottom: 1px solid var(--line); }
.status-mark { width: 0.45rem; height: 0.45rem; flex: 0 0 auto; margin-top: 0.15rem; border-radius: 50%; background: var(--ink); }
.sidebar-bottom { display: grid; gap: 1.5rem; margin-top: auto; }
.sidebar-socials { display: grid; gap: 0.45rem; }
.sidebar-socials a { display: flex; align-items: center; justify-content: space-between; color: var(--muted); font-size: 0.72rem; }
.sidebar-socials a:hover { color: var(--ink); }
.sidebar-theme { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--line); }
.mobile-rail, .mobile-drawer { display: none; }

@media (max-width: 900px) {
  .index-sidebar { display: none; }
  .mobile-rail {
    position: fixed; inset: 0 0 auto 0; z-index: 80; height: var(--rail);
    display: grid; grid-template-columns: 1fr auto 2.5rem; gap: 1rem; align-items: center;
    padding: 0 var(--page); border-bottom: 1px solid var(--line); background: var(--paper);
  }
  .mobile-brand { display: inline-flex; align-items: center; gap: 0.65rem; }
  .mobile-brand svg { width: 1.35rem; height: 1.35rem; }
  .mobile-brand span, .mobile-section { font-size: 0.7rem; font-weight: 500; text-transform: uppercase; }
  .mobile-section { color: var(--muted); }
  .mobile-menu-button { width: 2.5rem; height: 2.5rem; display: grid; place-items: center; }
  .mobile-drawer {
    position: fixed; inset: var(--rail) 0 0 0; z-index: 70;
    display: flex; flex-direction: column; padding: 2rem var(--page); background: var(--paper);
  }
  .mobile-drawer__meta { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--line); color: var(--muted); font-size: 0.75rem; line-height: 1.4; text-transform: uppercase; }
  .drawer-enter-active, .drawer-leave-active { transition: opacity 180ms ease, transform 250ms var(--ease); }
  .drawer-enter-from, .drawer-leave-to { opacity: 0; transform: translateY(-0.75rem); }
}
</style>
