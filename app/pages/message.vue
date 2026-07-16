<template>
  <NuxtLayout name="simple">
    <header class="editorial-header contact-header">
      <div><p class="eyebrow">Contact 04 / Project enquiry</p><h1>Start with context.</h1></div>
      <div class="editorial-header__copy"><p>Tell me what you are making, where the work stands, and what a useful outcome looks like.</p><p class="contact-status"><span aria-hidden="true" /> Accepting selected projects</p></div>
    </header>

    <section class="contact-layout">
      <form novalidate @submit.prevent="handleSubmit">
        <div class="form-heading"><p class="eyebrow">Email handoff</p><span class="eyebrow">Required fields *</span></div>
        <div class="field-row" :class="{ invalid: errors.name }">
          <label for="name">01 / Your name *</label><input id="name" ref="nameInput" v-model="form.name" name="name" autocomplete="name" placeholder="Name or studio" :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'name-error' : undefined">
          <p v-if="errors.name" id="name-error" class="form-error">{{ errors.name }}</p>
        </div>
        <div class="field-row" :class="{ invalid: errors.email }">
          <label for="email">02 / Email address *</label><input id="email" ref="emailInput" v-model="form.email" name="email" type="email" autocomplete="email" placeholder="you@company.com" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'email-error' : undefined">
          <p v-if="errors.email" id="email-error" class="form-error">{{ errors.email }}</p>
        </div>
        <div class="field-row"><label for="subject">03 / Project type</label><input id="subject" v-model="form.subject" name="subject" placeholder="Identity, website, campaign..."></div>
        <div class="field-row field-row--message" :class="{ invalid: errors.message }">
          <label for="message">04 / Context *</label><textarea id="message" ref="messageInput" v-model="form.message" name="message" rows="6" placeholder="Goals, timing, scope, or where the idea is right now." :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'message-error' : undefined" />
          <p v-if="errors.message" id="message-error" class="form-error">{{ errors.message }}</p>
        </div>
        <button type="submit" class="contact-submit">Continue in email <ArrowUpRight aria-hidden="true" /></button>
        <p class="form-note">Submitting opens your default email client. Nothing is stored on this site.</p>
      </form>

      <aside class="contact-details" aria-label="Contact details">
        <div><p class="eyebrow">Direct email</p><a href="mailto:khairinkamarizal@gmail.com" class="contact-email">khairinkamarizal<wbr>@gmail.com</a></div>
        <dl><dt>Location</dt><dd>Cyberjaya, Malaysia</dd><dt>Time zone</dt><dd>UTC +8</dd><dt>Working mode</dt><dd>Remote worldwide / Klang Valley on-site</dd></dl>
        <nav aria-label="Social links"><a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} <ArrowUpRight :size="14" aria-hidden="true" /></a></nav>
      </aside>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
definePageMeta({ layout: false })
const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const nameInput = ref<HTMLInputElement | null>(null)
const emailInput = ref<HTMLInputElement | null>(null)
const messageInput = ref<HTMLTextAreaElement | null>(null)
const socialLinks = [
  { label: 'Behance', href: 'https://www.behance.net/khairinkamarizal' }, { label: 'LinkedIn', href: 'https://linkedin.com/in/khairinkamarizal' },
  { label: 'GitHub', href: 'https://github.com/khairinkamarizal' }, { label: 'Instagram', href: 'https://instagram.com/khairinkamarizal' },
]
function validate() {
  errors.name = form.name.trim() ? '' : 'Add your name so I know who is writing.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Enter a valid email address.'
  errors.message = form.message.trim() ? '' : 'Add a little context about the project.'
  return !errors.name && !errors.email && !errors.message
}
function handleSubmit() {
  if (!validate()) {
    nextTick(() => {
      if (errors.name) nameInput.value?.focus()
      else if (errors.email) emailInput.value?.focus()
      else messageInput.value?.focus()
    })
    return
  }
  const subject = form.subject.trim() || `Project enquiry from ${form.name}`
  const body = ['Hi Khairin,', '', form.message.trim(), '', `From: ${form.name}`, `Email: ${form.email}`].join('\n')
  window.location.href = `mailto:khairinkamarizal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
useSeoMeta({ title: 'Contact', description: 'Start a design or development project with Khairin Kamarizal.', ogTitle: 'Contact | Khairin Kamarizal', ogUrl: 'https://khair.ink/message' })
</script>

<style scoped>
.contact-header .editorial-header__copy { display: grid; gap: 2rem; }
.contact-status { display: flex; align-items: center; gap: 0.6rem; color: var(--ink); font-size: 0.7rem; font-weight: 500; text-transform: uppercase; }
.contact-status span { width: 0.45rem; height: 0.45rem; border-radius: 50%; background: var(--ink); }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(16rem, 0.7fr); gap: clamp(4rem, 9vw, 10rem); padding: clamp(5rem, 9vw, 9rem) var(--page) clamp(7rem, 12vw, 12rem); }
.form-heading { display: flex; justify-content: space-between; padding-bottom: 1.2rem; border-bottom: 1px solid var(--line-strong); }
.field-row { display: grid; grid-template-columns: minmax(9rem, 0.45fr) minmax(0, 1fr); gap: 0.75rem 2rem; padding: 1.55rem 0; border-bottom: 1px solid var(--line); }
.field-row:focus-within { border-color: var(--ink); }
.field-row.invalid { border-color: var(--line-strong); }
.field-row label { padding-top: 0.35rem; color: var(--muted); font-size: 0.72rem; font-weight: 500; text-transform: uppercase; }
.field-row input, .field-row textarea { width: 100%; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: clamp(1.15rem, 2vw, 1.7rem); line-height: 1.3; resize: vertical; }
.field-row input::placeholder, .field-row textarea::placeholder { color: var(--muted); opacity: 0.6; }
.form-error { grid-column: 2; font-size: 0.72rem; font-weight: 500; }
.contact-submit { position: relative; width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 1.4rem; padding: 1.15rem 1.2rem; border: 1px solid var(--ink); background: var(--ink); color: var(--paper); box-shadow: none; font-size: clamp(1.8rem, 3.5vw, 3.5rem); line-height: 1; font-weight: 500; text-align: left; transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 180ms var(--ease); }
.contact-submit::after { content: ''; position: absolute; inset: 0 clamp(4.5rem, 8vw, 7rem) 0 auto; width: 1px; background: currentColor; opacity: 0.35; }
.contact-submit svg { position: relative; z-index: 1; width: 2.5rem; height: 2.5rem; flex: 0 0 auto; margin-left: clamp(2.5rem, 6vw, 6rem); transition: transform 180ms var(--ease); }
.contact-submit:hover, .contact-submit:focus-visible { background: var(--paper); color: var(--ink); transform: none; }
.contact-submit:hover svg, .contact-submit:focus-visible svg { transform: translate(0.25rem, -0.25rem); }
.contact-submit:active { opacity: 0.72; transform: translateY(1px); }
.form-note { margin-top: 0.8rem; color: var(--muted); font-size: 0.68rem; }
.contact-details { display: flex; flex-direction: column; gap: 4rem; }
.contact-email { display: block; margin-top: 1rem; font-size: clamp(1.6rem, 3vw, 3rem); line-height: 1; font-weight: 500; overflow-wrap: anywhere; }
.contact-details dl { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 0; border-top: 1px solid var(--line); font-size: 0.78rem; }
.contact-details dt, .contact-details dd { margin: 0; padding: 0.7rem 0; border-bottom: 1px solid var(--line); }
.contact-details dt { color: var(--muted); text-transform: uppercase; }
.contact-details nav { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
.contact-details nav a { display: flex; justify-content: space-between; padding: 0.7rem 0; border-bottom: 1px solid var(--line); font-size: 0.75rem; text-transform: uppercase; }
.contact-details nav a:nth-child(odd) { padding-right: 0.75rem; }
.contact-details nav a:nth-child(even) { padding-left: 0.75rem; border-left: 1px solid var(--line); }
@media (max-width: 800px) { .contact-layout { grid-template-columns: 1fr; } .contact-details { padding-top: 4rem; border-top: 1px solid var(--line); } }
@media (max-width: 520px) { .field-row { grid-template-columns: 1fr; } .form-error { grid-column: 1; } .contact-details nav { grid-template-columns: 1fr; } .contact-details nav a:nth-child(n) { padding-left: 0; padding-right: 0; border-left: 0; } }
</style>
