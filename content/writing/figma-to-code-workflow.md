---
title: "My Figma to Code Workflow"
description: "How I bridge design and development using Figma variables, tokens, and Nuxt"
date: "2026-07-01"
tags: ["figma", "workflow", "design", "development"]
draft: false
---

Designing in Figma is one thing. Getting that design into a production Nuxt app — pixel-accurate, maintainable, and not a mess of hardcoded hex values — is another challenge entirely. After a few years of doing both, I've settled into a workflow that keeps the handoff gap as tight as possible.

## Start with variables, not styles

The biggest shift in my process came when Figma variables dropped. Before that, I was using colour styles and text styles, which worked fine but had no real structure. Variables changed everything because they map almost directly to CSS custom properties.

I now set up every new project with a variable collection called `tokens`. Inside that I have:

- `color/background/default`
- `color/background/subtle`
- `color/text/default`
- `color/text/muted`
- `color/border/default`
- `spacing/1` through `spacing/12`
- `radius/sm`, `radius/md`, `radius/lg`

Each of those maps to a CSS variable I define in my Tailwind config or a global CSS file. The naming is deliberate — it mirrors Tailwind's convention close enough that I can usually copy the token name into a class and be done.

## Mode-aware from day one

I build light and dark mode into the variable collection from the start. Figma's variable modes let you define the same token for both appearances, so you're never guessing what something looks like in dark mode when you're designing in light.

In Nuxt, I use `@nuxtjs/color-mode` with the `classSuffix: ""` option, which means dark mode is applied via a `dark` class on `<html>`. This maps perfectly to Tailwind's `dark:` variant. The design token maps cleanly — `color/text/default` becomes `text-black dark:text-white` in the component.

## Component-first, not page-first

I design components before pages. This sounds obvious but it's easy to start laying out full screens and then extract components later — which always results in inconsistent spacing and sizing.

My Figma file structure mirrors my Nuxt component directory:

```
components/
  PostCard
  WorkCard
  PageHeader
  SkillBadge
```

Each component in Figma is a published library component with documented props. When I build the Vue component, I follow the same prop surface: the same names, the same optional/required structure.

## Tokens to Tailwind

I don't use a token export plugin. I find they add overhead and the output usually needs manual cleanup anyway. Instead, I maintain a small `tokens.css` file that I update manually when the Figma variables change. It's maybe 30 lines and takes two minutes.

```css
:root {
  --color-bg: #ffffff;
  --color-text: #000000;
  --color-border: rgba(0, 0, 0, 0.12);
}

.dark {
  --color-bg: #0a0a0a;
  --color-text: #ffffff;
  --color-border: rgba(255, 255, 255, 0.12);
}
```

These then get extended in `tailwind.config.ts` where needed. For spacing and sizing I just use Tailwind's built-in scale — it's close enough to what I define in Figma that the translation is usually obvious.

## Inspecting without obsessing

One habit I've dropped is pixel-perfect obsession. In Figma's dev mode, I look at spacing and sizing in terms of the token values, not absolute pixels. If a gap is 16px and my spacing scale has `spacing/4 = 16px`, I write `gap-4` and move on.

The cases where I deviate are typography and specific layout constraints — things where the design intent is genuinely specific and the nearest Tailwind class is visibly wrong. For those I write inline values and add a comment.

## Handoff to myself

Since I'm usually designing and building the same thing, the "handoff" is really a mental context switch. I close Figma, open VS Code, and try to build from memory. If I can't remember how something was supposed to behave, I go back and look — but I try not to have Figma open while coding. It forces me to understand the design rather than trace it.

This approach has cut my build time down noticeably. The design system work upfront pays back fast once you're in the implementation phase.
