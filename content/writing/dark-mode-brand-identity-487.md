---
title: "Designing for Dark Mode in Brand Identity"
description: "Dark mode is now a mainstream interface expectation. Brand identities that don't account for it create problems in digital contexts."
date: "2023-11-17"
tags: ["brand identity", "visual identity", "graphic design"]
draft: false
---

Dark mode has moved from a developer preference to a mainstream consumer expectation. Operating systems, applications, and websites offer dark mode as a standard option. A significant percentage of users have their systems set to dark mode by default. A brand identity designed only for light backgrounds will look wrong, degraded, or broken in dark contexts.

This isn't a new problem for experienced digital designers, but it's still frequently ignored in brand identity work. Identity systems get designed for light contexts and then struggle to adapt. The result is either a brand that looks inconsistent across contexts or a brand that's actively avoided in dark-mode environments.

## What Changes in Dark Mode

The fundamental inversion in dark mode — dark backgrounds where there was light, light text where there was dark — affects brand identity in several ways:

**Logo presentation.** Most logos are designed with dark marks on light backgrounds. In dark mode, these need to invert: light marks on dark backgrounds. This sounds simple but is complicated by colored logos, logos with fine lines that behave differently reversed, and brand guidelines that specify only one color variant.

**Color perception.** Colors behave differently against dark backgrounds than light. Warm colors appear more vibrant in dark mode. Cool colors can appear colder. Saturated colors that looked appropriate on white may appear harsh and overwhelming on dark. Muted colors that looked sophisticated on white may disappear entirely on dark.

**Typography contrast.** White text on dark backgrounds has different optical characteristics than black text on white. The same typeface at the same size may appear heavier in reversed setting and need weight adjustment.

**Imagery.** Photographs and illustrations that were optimized for light backgrounds may look flat or poorly contrasted in dark contexts.

## Building the Dark Mode System

I now build dark mode specifications as part of every brand identity deliverable for brands with digital presence. The dark mode system isn't a separate design exercise — it's derived from the same brand character and design logic as the light mode system.

The process:

**Define the dark background color.** Pure black (#000000) is rarely the right choice. Most dark modes use a very dark gray with subtle warm or cool cast (Apple's dark mode background is approximately #1C1C1E). The background color sets the tone for everything else.

**Adapt the logo.** Test the primary logo on the dark background. Determine whether an inverted (white or light) version works, and whether colored versions need adjustment for the dark context. Document the approved dark-mode logo variants.

**Adapt the color palette.** Check each palette color against the dark background. Typically, lighter tints replace mid-values for secondary elements, and highly saturated colors need to be used with more restraint. Create a dark-mode color map that specifies which light-mode color is replaced by which dark-mode color in which usage context.

**Adapt typography colors.** Primary text rarely needs to be pure white. Most dark mode text uses a slightly off-white (around 85-90% white) that reduces the harsh contrast while maintaining legibility.

## Automatic vs. Manual Dark Mode

For brands implementing dark mode in digital products, there are two approaches: automatic (CSS prefers-color-scheme detects the user's system preference and applies the appropriate theme) and manual (a toggle that users control).

Both have valid use cases. Automatic dark mode requires that both themes be fully implemented and tested. Manual dark mode allows users to override the system preference.

In brand identity documentation, I specify both themes fully and note which elements change between them.

## Testing the Dark Mode System

I test dark mode implementations in actual dark mode on real devices, not just in design software with a black background color applied. The rendering environment affects how colors and typography appear. What looks correct in Figma may look different in Safari on macOS in dark mode.

Iterate until both themes feel intentional and on-brand, not like one is the original and the other is the afterthought.
