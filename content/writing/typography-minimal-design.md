---
title: Typography Choices in Minimal Design
description: How to make type do more with less — choosing typefaces, setting a scale, and using typographic contrast when you've stripped everything else away.
date: "2026-02-14"
tags: ["typography", "design"]
draft: false
---

# Typography Choices in Minimal Design

Minimal design puts typography under a spotlight. When there's no decorative illustration, no elaborate color palette, no complex layout to carry the visual weight — the type has to work harder. Every choice becomes more consequential: the typeface, the scale, the spacing, the weight, the contrast between elements.

This is what makes minimal design both demanding and clarifying. You can't hide poor typographic decisions behind visual noise.

## Start with One Typeface

The instinct when beginning a minimal project is often to pair two typefaces — a serif for headings, a sans-serif for body, or vice versa. Resist this initially. Start with one typeface and see how far you can get.

A good typeface has enough variation in its family — weights, widths, optical sizes — to create hierarchy without introducing a second family. The contrast between a light and a bold weight of the same face can be more elegant than mixing two different typefaces.

When you do pair typefaces, choose them for functional contrast rather than aesthetic interest. A humanist sans-serif for body text reads clearly at small sizes. A geometric display face draws the eye for headings. The pairing works because the jobs are different, not because the faces look different.

## Building a Type Scale

A type scale gives you a constrained set of sizes to work from. Rather than choosing sizes ad hoc, you establish relationships upfront and stick to them.

A simple modular scale based on a 1.25 ratio:

```
xs:   12px  — labels, captions, metadata
sm:   14px  — secondary body, interface text
base: 16px  — primary body text
lg:   20px  — large body, lead paragraphs
xl:   24px  — small headings
2xl:  32px  — page headings
3xl:  40px  — display, hero text
```

In practice, minimal interfaces often use fewer sizes than this. My own work tends toward three or four: a small size for metadata, a standard size for body, and a large size for headings. Fewer options, more consistency.

In Tailwind, the default type scale is already well-considered. `text-sm`, `text-base`, `text-2xl` — these are enough for most projects. The discipline is in not reaching for sizes outside the scale.

## Weight as Hierarchy

In minimal design, weight is one of your primary tools for hierarchy. You have less to work with, so what you have needs to be precise.

A few patterns that work consistently:

- **Labels and metadata**: Regular weight, reduced opacity (`opacity-50`). This reads as secondary information without changing size.
- **Body copy**: Regular weight at full opacity — the base state.
- **Titles and headings**: Medium or semibold weight. In dark mode, font-light can compensate for the perceived weight increase of light text on dark backgrounds.
- **Display text**: Regular weight at a large size, or light weight for a refined, editorial feel.

The key insight: opacity is often more elegant than weight changes for creating hierarchy within body text. `opacity-60` on a supporting paragraph feels calmer than making it lighter weight, especially at smaller sizes.

## Spacing and Rhythm

Line height determines the vertical rhythm of your text. For body copy, `1.5` to `1.7` is comfortable. For headings at large sizes, tighten to `1.1` or `1.2` — large type with generous line height looks accidental.

Letter spacing should generally be left alone for body text. Where it becomes useful: small caps, all-caps labels, and metadata. `tracking-widest` on a label set in all-caps adds air and formality. It signals "this is a category label, not content."

```html
<span class="text-xs tracking-widest opacity-50 uppercase">Category</span>
```

This pattern appears throughout my work — small, spaced, faded labels that orient the reader without competing with the content.

## Measure: Line Length

Measure is the length of a line of text. For comfortable reading, 50–75 characters per line is the established range for body copy. At wider measures, the eye struggles to track from line end back to line start.

`max-w-prose` in Tailwind enforces `65ch` — a good default for content columns. My portfolio uses `max-w-md` (28rem) for the main column, which keeps measures tight and reading comfortable on any screen size.

Constrained measure is one of the most underused tools in minimal design. A narrow column of well-set type looks considered and purposeful. An unconstrained column stretching to full-width feels unresolved.

## Dark Mode Adjustments

Type behaves differently on dark backgrounds. Light text on dark backgrounds appears bolder and heavier than the same weight on light. This is a physiological effect — irradiation illusion — not a rendering issue.

Compensate by:
- Using `font-light` in dark mode for body text that you want to read at the same visual weight as regular on light backgrounds
- Reducing opacity slightly less aggressively — `opacity-60` in dark mode may read closer to `opacity-40` in light mode
- Being more conservative with contrast ratios — very dark grey on black can drop below accessible contrast faster than you expect

Type in minimal design is the design. Everything else — spacing, color, layout — exists to support the text. Treat every typographic decision as a first-order design decision, not a detail to resolve at the end.
