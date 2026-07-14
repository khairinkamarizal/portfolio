---
title: "Designing for Dark Mode: Color Systems That Work Both Ways"
description: "How I build brand color systems that maintain integrity in both light and dark contexts."
date: "2020-10-28"
tags: ["branding", "color theory", "brand identity"]
draft: false
---

Dark mode isn't a trend anymore — it's a permanent feature of digital environments. Brand color systems that were built only for light backgrounds now need to work equally well in dark contexts, and retrofitting a light-mode palette for dark contexts almost never works cleanly.

Building for both from the start is the right approach.

## Why Simple Inversion Fails

The instinct is to invert — flip light to dark, dark to light. The problem is that color relationships don't survive inversion cleanly. A warm cream background with a rich navy type has a specific quality. Inverted to dark navy background with cream type, the relationship shifts: the navy now feels colder, the cream feels almost luminous.

The perceived colors change because the visual context changes. The eye adapts differently to dark environments than light ones, and the colors that read correctly in one context often need adjustment to read the same way in the other.

## Designing the Dark Palette Intentionally

I design dark mode palettes as parallel systems, derived from the same brand character but optimized for dark contexts rather than mechanically inverted from the light palette.

The dark palette takes the brand's primary color as a reference point and builds a palette that expresses the same character under different conditions. The brand's primary color might be a vivid teal — in light mode it appears on white or cream backgrounds; in dark mode it might be slightly lighter and cooler to maintain its character against a dark background.

## Surface Colors

The choice of dark background color significantly affects everything on top of it. Pure black (#000000) creates very high contrast — sometimes uncomfortably so. Most design systems use dark gray values in the #1C1C1E to #121212 range as background surfaces.

The background's color temperature matters. A warm dark background creates a different character than a cool neutral or blue-tinted dark. I align the background color temperature with the brand's overall warmth direction.

## Contrast Ratios in Dark Mode

Accessibility contrast ratios (4.5:1 for body text, 3:1 for large text and UI components) apply in dark mode as rigorously as in light mode. Text that's dark gray on a dark background and technically visible may still fail accessibility thresholds.

I check every text/background combination in the dark palette against WCAG contrast ratios before finalizing.

## Brand Color Performance in Dark Mode

Brand colors — particularly mid-value colors — often need adjustment for dark contexts. A medium blue that reads as a brand color on white might feel washed out on a dark background. Bringing the value up (making it lighter) maintains its presence and brand recognition in dark contexts.

The adjustment needed is usually small — enough to maintain perceptual consistency across contexts — but it's necessary. I specify separate hex values for light and dark mode versions of each brand color when the difference is meaningful.
