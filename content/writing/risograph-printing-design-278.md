---
title: "Designing for Risograph Printing"
description: "How to work with risograph's unique constraints and turn them into distinctive visual character."
date: "2022-05-14"
tags: ["print design", "graphic design", "poster design"]
draft: false
---

## Risograph is not offset printing

Risograph printing uses a stencil process with soy-based inks to produce prints with a distinctive quality: colors that are transparent and slightly variable, registration between passes that's approximate rather than precise, and a texture that reflects the print process visibly. It's faster and cheaper than silkscreen but produces a similar tactile, visible-process aesthetic.

Designing for risograph without understanding these properties produces work that looks like it failed at being something else. Designing with these properties produces work that looks unmistakably like risograph — and that aesthetic is genuinely beautiful and increasingly sought after.

## The transparency property

Risograph inks are semi-transparent. Where two colors overlap, they mix to create a third color that's the visual combination of the two inks. This is not an adjustable property — it's inherent to the process. Understanding the likely mix colors before designing is essential.

I use a color mixing preview before finalizing any riso design. Common riso color pairings and their typical overlap results: fluorescent pink + yellow = orange-red. Blue + yellow = green. Blue + pink = purple. Knowing these outcomes lets me design overlap areas intentionally rather than being surprised by the result at pickup.

## Registration as a feature

Risograph registration — the alignment between successive color passes — is inherently imprecise. Expect 0.5-2mm of misregistration in any risograph job. Designs that require perfect registration will always look wrong. Designs that treat misregistration as a visual quality will always look right.

I design riso work with deliberate registration slack: important elements slightly separated so a 1mm shift doesn't cause them to overlap incorrectly. And I use overlap zones intentionally, accepting that the exact position of the overlap mix zone will vary slightly.

## Color selection from the risograph palette

Risograph printers use a limited set of available ink colors — typically 15-20 options varying by the printer. The available colors don't correspond to Pantone or CMYK values; they're their own system. I always request the specific printer's current ink inventory before specifying colors.

The most interesting riso work often uses fluorescent or unusual colors that aren't available in any other printing process — fluorescent orange, neon pink, metallic gold (in some machines). These colors are what give risograph its distinctive visual energy.

## File preparation for riso

Riso files are prepared as separate single-color layers, one per ink. Each layer should be pure black — the printer uses the black value to determine where to apply the ink. Gray values create halftone dots; solid black creates solid ink areas.

I prepare riso files in Photoshop or Illustrator with separate layers for each ink, then export each layer as a separate black-and-white file. Clear file naming — "layer-1-blue.pdf," "layer-2-pink.pdf" — prevents confusion at the printer.
