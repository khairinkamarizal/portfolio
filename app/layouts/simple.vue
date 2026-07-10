<template>
  <div class="site-shell">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <NoiseOverlay :opacity="0.018" />

    <header class="site-header">
      <div class="site-header__inner">
        <NuxtLink to="/" class="site-brand" aria-label="Khairin Kamarizal, home">
          <AppLogo class="h-7 w-7" />
          <span>Khairin Kamarizal</span>
        </NuxtLink>

        <div class="site-header__actions">
          <AppNav />
          <ClientOnly>
            <ColorToggle />
            <template #fallback><span class="icon-button" aria-hidden="true" /></template>
          </ClientOnly>
        </div>
      </div>
    </header>

    <main id="main-content" class="site-main">
      <slot />
    </main>

    <Footer />

    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: 'antialiased' },
  titleTemplate: (title) => title ? `${title} | Khairin Kamarizal` : 'Khairin Kamarizal',
})

useKeyboardShortcuts()
</script>
