---
title: Implementing Dark Mode with Tailwind CSS and @nuxtjs/color-mode
description: A practical guide to setting up dark mode in a Nuxt 4 project using Tailwind CSS and the @nuxtjs/color-mode module — including class strategy, transitions, and SSR pitfalls.
date: "2026-06-15"
tags: ["tailwind", "nuxt", "css"]
draft: false
---

# Implementing Dark Mode with Tailwind CSS and @nuxtjs/color-mode

Dark mode has gone from a nice-to-have to a near-expectation. Getting it right — no flash of unstyled content, smooth transitions, respecting system preference — takes more than a quick class toggle. Here's how I set it up in Nuxt 4 with Tailwind CSS.

## The Setup

You need two things working together: Tailwind's dark mode utility and a module to manage the color scheme state. `@nuxtjs/color-mode` handles the latter cleanly, with SSR support and a composable for reading and toggling the current mode.

Install the module:

```bash
npm install @nuxtjs/color-mode
```

Add it to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
})
```

The `classSuffix: ''` is important. By default the module adds a `-mode` suffix, so you'd get `class="dark-mode"` on the `<html>` element. Setting it to an empty string gives you `class="dark"`, which is what Tailwind expects.

## Configuring Tailwind

In your `tailwind.config.ts`, set the dark mode strategy to `class`:

```typescript
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,ts}',
    './content/**/*.md',
  ],
}
```

With this in place, any `dark:` prefixed class in your templates will activate when the `dark` class is on the root `<html>` element.

## Writing Dark Mode Styles

The pattern is straightforward. Every color you define, you define twice:

```html
<div class="bg-white dark:bg-black text-black dark:text-white">
  <p class="opacity-70 dark:font-light">Some content</p>
</div>
```

A few patterns I use consistently across this site:

- Borders: `border-black/20 dark:border-white/20` — opacity-based borders that invert cleanly
- Dividers: `divide-black/10 dark:divide-white/10`
- Subtle text: `opacity-50` works in both modes without needing a separate dark variant
- Body text: `dark:font-light` compensates for the visual weight difference between dark text on white vs light text on black

## The Toggle Component

The `useColorMode` composable from `@nuxtjs/color-mode` gives you everything you need:

```typescript
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
```

`colorMode.value` is the resolved value (accounting for system preference), while `colorMode.preference` is what the user has explicitly set. Always read from `value`, write to `preference`.

## Adding Transitions

A hard color switch looks jarring. A short transition on background and color smooths it out:

```css
/* In your global CSS */
*, *::before, *::after {
  transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease;
}
```

Or with Tailwind's `transition-colors` utility on the root layout element:

```html
<div class="transition-colors duration-300 bg-white dark:bg-black">
```

I prefer the CSS approach — it catches everything without needing to remember to add the class to every container.

## The SSR Flash Problem

Without care, SSR will render the page in the default (light) mode, and then the client-side JS switches to dark. The user sees a flash.

`@nuxtjs/color-mode` mitigates this by injecting a blocking script into the `<head>` that reads `localStorage` and applies the class before the page renders. This is the main reason to use the module rather than rolling your own solution.

The `<ClientOnly>` wrapper is still useful for UI elements that are meaningless without JS — like the clock display in my layout header — but for the core color scheme, the module handles it.

## Respecting System Preference

Setting `preference: 'system'` as the default means new visitors get their OS preference automatically. If they toggle, that choice is persisted to `localStorage`. This is the right default — don't force a mode on someone who hasn't asked for one.

## Testing

Check these scenarios before shipping:

1. First visit with system in light mode — should show light
2. First visit with system in dark mode — should show dark
3. Manual toggle — should override system preference
4. Page reload after toggle — should persist the choice
5. Disable JS — should fall back to the `fallback` value in config

Dark mode done right is invisible to the user. They get what they expect, it switches smoothly, and it stays that way.
