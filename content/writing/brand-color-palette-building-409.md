---
title: "Building a Brand Color Palette That Actually Works"
description: "A functional brand color system does more than look good — it handles every application from business cards to billboard without falling apart."
date: "2023-06-15"
tags: ["color", "branding", "visual identity"]
draft: false
---

Most brand color palettes fail in practice, not in the presentation deck. They look beautiful in a mockup with careful, controlled use. Then the brand gets deployed across a real organization — social media, slide decks, print materials, signage — and the colors start doing unexpected things. The palette wasn't built for the complexity of real use.

## The Anatomy of a Working Palette

A functional color palette has a clear hierarchy with distinct roles.

**Primary color.** One color. This is the brand. It appears in the logo, in key brand touchpoints, as the dominant color in brand communications. It should be ownable in its category and hold up across every medium.

**Secondary colors.** Two to four colors. These support the primary, create range for different communication contexts, and allow the brand to handle a variety of content without always defaulting to the primary. Secondary colors should relate to the primary — not match it, but not fight it either.

**Neutrals.** Two to four near-whites and near-blacks, possibly a warm or cool gray. Neutrals do the bulk of the work in actual brand materials. Body text, backgrounds, dividers — all of it runs on neutrals. They need to be as carefully chosen as the accent colors.

**Functional colors.** Many brands need specific colors for things like success states, warnings, errors, or data visualization. If the brand will be used in contexts requiring these, establish them explicitly rather than letting each application invent its own.

## Contrast is a Design Requirement, Not an Afterthought

Before I finalize any color palette, I build a contrast matrix. Every color combination that might appear in practice — text on background, primary on white, secondary on primary, white on secondary — gets tested for contrast ratio.

I'm targeting WCAG AA compliance minimum (4.5:1 for normal text, 3:1 for large text and icons) for any combination that might carry readable content. This isn't just an accessibility box-ticking exercise. Colors that fail contrast ratios will force the brand into awkward compensations — heavy text, outlines, dropshadows — that undermine the visual system.

If a beautiful palette color fails contrast requirements, I adjust it. Shift the value, not the hue. Most of the time you can preserve the feeling of a color while pushing it dark or light enough to pass.

## Specifying for Every Medium

A brand color only exists as a specification. The specification tells the world what to reproduce. If the spec is incomplete, the reproductions will drift.

A complete color specification includes:
- **Pantone (PMS)** for spot color printing, packaging, and brand-critical applications
- **CMYK** for 4-color process printing
- **RGB** for screen applications
- **Hex** for web and digital
- **HEX/RGB for dark-mode variants**, if the brand lives in digital products

Getting these right means testing them. The CMYK value that's mathematically derived from the RGB value will almost certainly be wrong. Build your CMYK values from a printed swatch, not from a software conversion.

## Testing Before Committing

Before I lock a palette, I stress-test it:

- Set three paragraphs of body text in the most likely text/background combinations. Does it read comfortably?
- Build a simple slide layout using only palette colors. Does it hold together?
- Simulate it in print by printing on an uncalibrated office laser printer. What survives?
- Apply it to a simple web page mockup. Is there enough range?

A palette that passes all four tests is probably robust enough to deploy. One that struggles with any of them needs more work before it's ready.

## The Dark-Mode Question

If the brand will live significantly in digital product environments, build the dark-mode color system at the same time as the light-mode system. Trying to reverse-engineer it later almost always fails — colors that work beautifully on white fight each other on dark backgrounds, and vice versa.

A working palette is infrastructure. Invest in it properly and every future application becomes easier.
