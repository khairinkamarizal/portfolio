<template>
  <NuxtLayout name="simple">
    <section class="contact-hero">
      <div>
        <p class="eyebrow">Start a project / Say hello</p>
        <h1>Bring the brief.<br><em>I’ll bring the questions.</em></h1>
      </div>
      <div class="contact-hero__aside">
        <p>Tell me what you are making, where you are stuck, or what you want people to feel. A clear next step can start with a rough idea.</p>
        <div class="contact-status"><span aria-hidden="true" /> Currently accepting selected projects</div>
      </div>
    </section>

    <section class="contact-main">
      <form novalidate @submit.prevent="handleSubmit">
        <div class="contact-form__heading">
          <p class="eyebrow">Project enquiry</p>
          <span class="eyebrow">01 / 04</span>
        </div>

        <div class="form-row">
          <label for="name">Your name</label>
          <input id="name" v-model="form.name" name="name" autocomplete="name" placeholder="Name or studio" required>
          <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
        </div>

        <div class="form-row">
          <label for="email">Email address</label>
          <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required>
          <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
        </div>

        <div class="form-row">
          <label for="subject">What are we making?</label>
          <input id="subject" v-model="form.subject" name="subject" placeholder="Identity, website, campaign...">
        </div>

        <div class="form-row form-row--message">
          <label for="message">A little context</label>
          <textarea id="message" v-model="form.message" name="message" rows="5" placeholder="Goals, timing, scope, or simply where the idea is right now." required />
          <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
        </div>

        <button type="submit" class="contact-submit">
          Continue in email <ArrowUpRight aria-hidden="true" />
        </button>
      </form>

      <aside class="contact-details">
        <div>
          <p class="eyebrow">Direct</p>
          <a class="contact-email" href="mailto:khairinkamarizal@gmail.com">khairinkamarizal<br>@gmail.com</a>
        </div>

        <div class="contact-detail-grid">
          <div>
            <p class="eyebrow">Based in</p>
            <p>Cyberjaya, Malaysia<br>UTC +8</p>
          </div>
          <div>
            <p class="eyebrow">Working</p>
            <p>Remote worldwide<br>Klang Valley on-site</p>
          </div>
        </div>

        <div>
          <p class="eyebrow">Elsewhere</p>
          <div class="contact-socials">
            <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer">
              {{ link.label }} <ArrowUpRight :size="14" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

definePageMeta({ layout: false })

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })

const socialLinks = [
  { label: 'Behance', href: 'https://www.behance.net/khairinkamarizal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/khairinkamarizal' },
  { label: 'GitHub', href: 'https://github.com/khairinkamarizal' },
  { label: 'Instagram', href: 'https://instagram.com/khairinkamarizal' },
]

function validate() {
  errors.name = form.name.trim() ? '' : 'Please add your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please add a valid email.'
  errors.message = form.message.trim() ? '' : 'Please share a little context.'
  return !errors.name && !errors.email && !errors.message
}

function handleSubmit() {
  if (!validate()) return

  const subject = form.subject.trim() || `Project enquiry from ${form.name}`
  const body = [`Hi Khairin,`, '', form.message.trim(), '', `From: ${form.name}`, `Email: ${form.email}`].join('\n')
  window.location.href = `mailto:khairinkamarizal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

useSeoMeta({
  title: 'Contact',
  description: 'Start a design or development project with Khairin Kamarizal.',
  ogTitle: 'Contact | Khairin Kamarizal',
  ogUrl: 'https://khair.ink/message',
})
</script>

<style scoped>
.contact-hero {
  min-height: 60svh;
  display: grid;
  grid-template-columns: 1.45fr 0.55fr;
  gap: clamp(3rem, 8vw, 9rem);
  align-items: end;
  padding: clamp(4rem, 9vw, 9rem) var(--page) clamp(3rem, 6vw, 6rem);
  border-bottom: 1px solid var(--line);
}

.contact-hero h1 {
  margin-top: 1.5rem;
  font-size: clamp(3.7rem, 8.5vw, 9rem);
  line-height: 0.86;
  font-weight: 630;
}

.contact-hero h1 em {
  color: var(--red);
  font-family: Georgia, serif;
  font-weight: 400;
}

.contact-hero__aside {
  display: grid;
  gap: 2rem;
  color: var(--muted);
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  line-height: 1.5;
}

.contact-status {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.64rem;
  text-transform: uppercase;
}

.contact-status span {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #24a148;
}

.contact-main {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: clamp(3rem, 9vw, 10rem);
  padding: clamp(5rem, 9vw, 9rem) var(--page) clamp(7rem, 12vw, 12rem);
}

.contact-form__heading {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--ink);
}

.form-row {
  display: grid;
  grid-template-columns: minmax(8rem, 0.4fr) minmax(0, 1fr);
  gap: 1rem 2rem;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--line);
}

.form-row label {
  font-size: 0.92rem;
  font-weight: 600;
}

.form-row input,
.form-row textarea {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-size: clamp(1.15rem, 2vw, 1.7rem);
  line-height: 1.35;
  resize: vertical;
}

.form-row input::placeholder,
.form-row textarea::placeholder {
  color: var(--muted);
  opacity: 0.55;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: 0;
}

.form-row:focus-within {
  border-color: var(--blue);
}

.form-row--message {
  align-items: start;
}

.form-error {
  grid-column: 2;
  color: var(--red);
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  text-transform: uppercase;
}

.contact-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 1.25rem 0;
  border-bottom: 2px solid var(--ink);
  font-size: clamp(1.8rem, 3.5vw, 3.5rem);
  line-height: 1;
  font-weight: 600;
  text-align: left;
}

.contact-submit svg {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 200ms var(--ease);
}

.contact-submit:hover svg {
  transform: translate(0.35rem, -0.35rem);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 6rem);
}

.contact-email {
  display: block;
  margin-top: 1.25rem;
  font-size: clamp(2rem, 4vw, 4.5rem);
  line-height: 0.95;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-details .eyebrow {
  margin-bottom: 0.8rem;
  color: var(--muted);
}

.contact-detail-grid p:last-child {
  line-height: 1.5;
}

.contact-socials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--line);
}

.contact-socials a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--line);
}

.contact-socials a:nth-child(odd) {
  padding-right: 1rem;
}

.contact-socials a:nth-child(even) {
  padding-left: 1rem;
  border-left: 1px solid var(--line);
}

@media (max-width: 850px) {
  .contact-hero,
  .contact-main {
    grid-template-columns: 1fr;
  }

  .contact-details {
    padding-top: 4rem;
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 540px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .form-error {
    grid-column: 1;
  }

  .contact-detail-grid,
  .contact-socials {
    grid-template-columns: 1fr;
  }

  .contact-socials a:nth-child(odd),
  .contact-socials a:nth-child(even) {
    padding-right: 0;
    padding-left: 0;
    border-left: 0;
  }
}
</style>
