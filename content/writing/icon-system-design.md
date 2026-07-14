---
title: "Icon Systems as Brand Language"
description: "How I design icon families that function as a coherent visual language within a brand identity system."
date: "2020-08-30"
tags: ["brand identity", "graphic design", "icon design"]
draft: false
---

Icons are the smallest repeated unit of a brand's visual language. Individually they're functional indicators. Together, they're a vocabulary — a set of visual signals that, applied consistently, create a coherent environment for the brand.

Designing an icon system for a brand is different from designing icons for a project. The system has to work as a family, encode the brand's character, and be maintainable by different designers over time.

## The Brand Character in Icon Form

The same character principles that drove the logo and typeface selection drive the icon system. A brand that's described as "precise, technical, rigorous" produces icons with clean geometric construction, consistent stroke weights, sharp angles, and minimal decorative elements. A brand that's "warm, approachable, human" produces icons with slightly organic forms, rounded terminals, softer angles, and potentially a touch of character in the details.

The icons should feel like they come from the same visual world as the rest of the identity. When they don't — when the icons look like they were lifted from a generic icon library — the brand's visual coherence suffers at every point where icons appear.

## Structural Consistency

A coherent icon family has structural consistency across all icons:

**Grid:** All icons designed on the same grid (typically 24x24 or 32x32) with consistent optical padding within the grid.

**Stroke weight:** A defined stroke weight that's consistent across all icons. If the brand uses 1.5px strokes for linear icons, every icon in the system uses 1.5px strokes.

**Corner radius:** A defined corner radius for all rounded corners. Inconsistent corner radii across an icon set is immediately visible and makes the set feel assembled rather than designed.

**Terminal style:** How strokes end — square, round, or cut at an angle. Consistent across all icons.

**Visual weight:** The overall density and heaviness of each icon should be consistent — no icons that look dramatically heavier or lighter than their neighbors.

## Filled vs. Outlined

Icon systems typically choose between outlined (stroke-based) or filled (solid-shape) icons, with some systems offering both as two states (default and active, for example).

Outlined icons feel lighter, more refined, and slightly more neutral. Filled icons feel more solid and call more attention to themselves. The choice should align with the brand's visual character and the typical context in which icons appear.

## Extending the System

Every icon system I design includes a process for adding new icons over time. This means a documented grid, documented style specifications, and ideally a template file that new icons are designed in.

Without a clear extension process, new icons added over time drift from the original style, and the system degrades. A maintained icon system is one where new additions are indistinguishable from originals.

## Delivery and Implementation

Icon systems are delivered as a set of SVG files (optimized with minimal anchor points and clean paths), organized by category, with a naming convention that makes programmatic access predictable. Optionally, as a webfont or sprite sheet for specific implementation contexts.

Clean, optimized SVGs are non-negotiable. Poorly optimized SVGs bloat load times and create rendering issues at small scales.
