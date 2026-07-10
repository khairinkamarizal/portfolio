<template>
  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__lead">
      <p class="eyebrow">Have a project in mind?</p>
      <a class="site-footer__cta" href="mailto:khairinkamarizal@gmail.com">
        <span>Let's make it matter.</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>

    <div class="site-footer__meta">
      <div>
        <p class="eyebrow">Based in</p>
        <p>Cyberjaya, Malaysia<br>Working worldwide</p>
      </div>

      <nav aria-label="Footer navigation">
        <p class="eyebrow">Navigate</p>
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div>
        <p class="eyebrow">Elsewhere</p>
        <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">
          {{ link.label }} <ArrowUpRight :size="13" aria-hidden="true" />
        </a>
      </div>

      <div class="site-footer__mark">
        <AppLogo aria-hidden="true" />
      </div>
    </div>

    <div class="site-footer__base">
      <span>&copy; {{ currentYear }} Khairin Kamarizal</span>
      <span>Design with reason. Build with care.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/writing', label: 'Writing' },
  { to: '/message', label: 'Contact' },
]

const socialLinks = [
  { label: 'Behance', href: 'https://www.behance.net/khairinkamarizal' },
  { label: 'GitHub', href: 'https://github.com/khairinkamarizal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khairinkamarizal' },
  { label: 'Instagram', href: 'https://instagram.com/khairinkamarizal' },
]
</script>
