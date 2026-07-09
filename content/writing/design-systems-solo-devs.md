---
title: Building Design Systems as a Solo Developer
description: How to create scalable, maintainable design systems when you're the only one designing and building — without the overhead of enterprise tooling.
date: "2026-05-20"
tags: ["design", "figma", "systems"]
draft: false
---

# Building Design Systems as a Solo Developer

Design systems are often associated with large teams — Atlassian, Shopify, Airbnb. Multi-person design orgs with dedicated system teams. But the principles scale down. As a solo designer-developer, a lightweight design system is one of the most valuable things you can build for yourself.

## What You Actually Need

A design system is just consistent, reusable decisions. You don't need Storybook, a component library site, or exhaustive documentation. You need:

1. A set of design tokens (colors, spacing, typography)
2. A Figma file with those tokens applied to reusable components
3. Code components that match those Figma components
4. A convention for naming and using them

That's it. Everything else is optional.

## Start with Tokens

Design tokens are the foundation. They're the smallest, atomic design decisions — the color palette, type scale, spacing scale, border radii, shadows.

In Figma, define these as local styles and variables. In code, define them in your CSS or Tailwind config. Keep them in sync manually — don't over-engineer a build pipeline unless you're making changes daily.

Example token set:

```javascript
// tailwind.config.ts
export default {
  theme: {
    colors: {
      neutral: {
        50: '#fafafa',
        // ...
        950: '#0a0a0a',
      },
    },
    spacing: {
      // 4px base scale
      1: '0.25rem',
      2: '0.5rem',
      4: '1rem',
      // ...
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      // ...
    },
  },
}
```

Define these once, reference them everywhere. No more one-off colors or spacing values.

## Build a Component Library in Figma

Create a single Figma file for your system. Organize it into pages — one for tokens, one for components, one for patterns.

Your component library doesn't need to be exhaustive. Focus on the components you actually use:

- Buttons (primary, secondary, ghost)
- Input fields
- Cards
- Navigation elements
- Typography specimens

Use Figma's component variants to handle states (hover, active, disabled). Use auto-layout aggressively — it forces you to think in terms of flex patterns, which translates directly to CSS.

Name components with a clear convention. I use `Component/Variant/State` — e.g., `Button/Primary/Default`, `Button/Primary/Hover`. This makes it easy to find what you need and mirrors how you'll name code components.

## Translate to Code Components

For each Figma component, build a matching code component. The goal is consistency, not pixel perfection. If your Figma button has 16px vertical padding and 24px horizontal padding, your code button should too.

Use a component-driven framework like Vue or React. Props should map directly to Figma variants:

```vue
<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}>()

const classes = computed(() => [
  'button',
  `button--${props.variant || 'primary'}`,
  `button--${props.size || 'md'}`,
])
</script>
```

Keep the API simple. Fewer props, more constraints. A design system is about reducing decisions, not maximizing flexibility.

## Document by Example

Comprehensive documentation is overkill when you're the only user. Instead, create a single reference page in your project that demonstrates every component in use. This serves as both documentation and a visual regression test.

In my projects, I often have a `/design-system` route that's hidden from navigation but renders every component with its variants. I can see everything at a glance and confirm nothing broke after a Tailwind upgrade or refactor.

## Maintenance is the Real Cost

The cost of a design system isn't the initial build — it's keeping it in sync. Every new component is a commitment. Every variant adds surface area.

Be ruthless about what makes it into the system. If you've only needed a component once, keep it local. If you've needed it three times, extract it. This prevents the system from becoming a graveyard of unused components.

When you update a token — say, adjusting your primary color — update it in Figma first, then in code. Confirm the change across your reference page before shipping. This is the benefit of being a solo dev: you control the whole stack, so updates can happen atomically.

## The Payoff

A lightweight design system pays off quickly:

- **Faster iteration** — you're composing, not designing from scratch every time
- **Consistency by default** — using the system is easier than going off-pattern
- **Easier handoff to future you** — six months later, you'll know exactly where to look

You don't need a big team to benefit from systems thinking. You just need a little discipline and a clear separation between design decisions and implementation details.
