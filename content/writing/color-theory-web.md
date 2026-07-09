---
title: "Color Theory for Web Designers"
description: "Practical color theory concepts every web designer should know"
date: "2026-04-22"
tags: ["design", "color", "css"]
draft: false
---

Color theory is one of those topics that gets taught in design school but often doesn't transfer well to web work. The traditional concepts — color wheels, complementary pairs, triadic schemes — are real, but they need translation to be useful when you're working in a browser with CSS and dark mode and accessibility constraints.

## The color models you actually use

In web work you'll encounter three color models constantly:

**RGB / hex** — The native color model of screens. You think in terms of red, green, and blue channels. Useful for understanding what CSS does, but not intuitive for choosing colors.

**HSL** — Hue, saturation, lightness. This is the model that maps to how humans think about color. To darken a color, reduce the lightness. To desaturate, reduce the saturation. To shift the hue, change the first value. Once you switch to HSL in your workflow, going back to hex feels like writing assembly code.

**OKLCH** — The newer model that CSS Color Level 4 brought into browsers. Unlike HSL, OKLCH is perceptually uniform — equal steps in lightness actually look like equal steps. This matters when you're building color scales. A 10% lightness increase in HSL looks different depending on the hue. In OKLCH it looks consistent.

```css
/* The same color in three models */
color: #3b82f6;
color: hsl(217, 91%, 60%);
color: oklch(60% 0.2 255);
```

## Building a color scale

Most design systems need a color scale — a range of values from light to dark for a given hue. A common approach is 50 through 950 (like Tailwind's default palette).

The mistake most designers make is eyeballing it. The result is a scale where some steps are visually very similar and others jump too much.

A better approach: define the scale mathematically in OKLCH by stepping lightness at even intervals. The perceptual uniformity of OKLCH means equal lightness steps will actually look equal.

```css
:root {
  --blue-50: oklch(97% 0.05 255);
  --blue-100: oklch(93% 0.08 255);
  --blue-200: oklch(87% 0.12 255);
  --blue-300: oklch(78% 0.16 255);
  --blue-400: oklch(68% 0.20 255);
  --blue-500: oklch(57% 0.22 255);
  --blue-600: oklch(48% 0.21 255);
  --blue-700: oklch(40% 0.19 255);
  --blue-800: oklch(32% 0.16 255);
  --blue-900: oklch(24% 0.12 255);
  --blue-950: oklch(16% 0.08 255);
}
```

## Contrast and accessibility

WCAG 2.1 specifies a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. This is the floor, not the ceiling.

The problem with the WCAG contrast formula is that it's based on relative luminance, which doesn't account for perceptual factors. Two color pairs can pass the same contrast ratio but have very different legibility. Dark text on a saturated background often reads worse than the numbers suggest.

APCA (Advanced Perceptual Contrast Algorithm) is the candidate replacement for WCAG 3.0. It's more accurate and more nuanced, but it's not yet required. Worth learning regardless.

In practice: test your color combinations in the browser at actual size, not just with a contrast checker. And test in dark mode separately — colors that pass in light mode often fail when their dark-mode equivalents are calculated.

## Color and dark mode

The most common dark mode mistake is inverting colors. White becomes black, light grey becomes dark grey. This works technically but usually looks flat and cold.

A better approach is to think about dark mode as a separate palette that evokes the same visual tone, not a mathematical inversion. Slightly warm dark backgrounds read as more refined than pure neutral ones. Slightly desaturated accent colors read better at high lightness on dark backgrounds than their fully saturated light-mode counterparts.

The tool for this is CSS custom properties. Define your semantic tokens once, then reassign them per mode:

```css
:root {
  --color-surface: oklch(99% 0.005 270);
  --color-text: oklch(10% 0.01 270);
}

.dark {
  --color-surface: oklch(12% 0.01 270);
  --color-text: oklch(96% 0.005 270);
}
```

This separates the "what it means" from the "what it looks like" — which is the core idea behind any good design token system.
