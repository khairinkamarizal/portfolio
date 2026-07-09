---
title: "Accessibility in Web Design"
description: "Why accessibility matters and how to build more inclusive web experiences"
date: "2026-03-18"
tags: ["accessibility", "design", "css"]
draft: false
---

Accessibility is one of those topics that exists in a weird liminal space in web design. Everyone agrees it matters. Most teams deprioritize it. The gap between stated values and actual practice is wider here than almost anywhere else in the field.

I've spent time fixing accessibility problems in my own work and auditing others'. Here's what I've learned is actually practical.

## Why it gets deprioritized

The honest answer is that accessibility improvements are often invisible to people who don't need them. A client reviewing a design doesn't notice that the focus ring is missing or that the heading hierarchy is wrong. A developer doesn't see a complaint because screen reader users rarely send feedback — they just leave.

Compound that with the fact that proper accessibility review requires either specialized knowledge or external auditing, neither of which is cheap, and the incentive structure becomes clear.

This is worth naming because the solution isn't just "care more." It's building accessible patterns into your workflow so they happen by default rather than as an extra step.

## The baseline you can hit without an audit

A few things that catch a large proportion of common accessibility failures:

**Semantic HTML.** Use `<button>` for buttons, `<a>` for links, `<nav>` for navigation, heading elements in logical order. This alone handles a huge chunk of keyboard navigation and screen reader compatibility. Don't use `<div>` with click handlers where a semantic element exists.

**Focus visible.** Every interactive element needs a visible focus indicator. CSS resets often strip this. Put it back:

```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
```

**Contrast.** Text against its background needs to meet WCAG AA minimums — 4.5:1 for body text, 3:1 for large text. Check with the browser's devtools color picker or a dedicated contrast tool. Don't guess.

**Alt text.** Every `<img>` needs an `alt` attribute. Decorative images get an empty alt (`alt=""`). Informative images get a meaningful description. Don't describe what the image looks like — describe what it conveys.

**Labels on form inputs.** Every input needs an associated `<label>`. Don't use placeholder text as the only label — it disappears when the user starts typing.

## Color isn't the only signal

A common mistake is using color as the only way to convey information. A red error state, a green success state, an active nav item that's just a different color — all of these fail for users who can't distinguish those colors.

The fix is to add a secondary signal: an icon, a border, a text indicator. The information should be perceivable without color perception.

## Keyboard navigation

Test your interface with just the keyboard. Tab through every interactive element. Check that the focus order is logical. Check that modals trap focus when open and release it when closed. Check that dropdown menus are operable without a mouse.

Most interfaces fail this test faster than you'd expect. The common culprits: custom dropdown components that don't handle arrow keys, modals that don't trap focus, click-only interactions with no keyboard equivalent.

## Motion and animation

The `prefers-reduced-motion` media query is widely supported and easy to implement. Users who experience motion sickness or have vestibular disorders often have this set. Respect it:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is a one-time addition that immediately improves the experience for a meaningful percentage of users.

## Starting points

WCAG 2.1 at the AA level is the practical standard. The WebAIM website has a checklist that's more readable than the spec itself. The axe browser extension catches many common issues automatically. Manual keyboard testing catches the rest.

The goal isn't a perfect audit score. It's building things that more people can actually use.
