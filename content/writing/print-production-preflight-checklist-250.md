---
title: "Designing for Print Production: A Pre-Flight Checklist I Actually Use"
description: "The file preparation checks that prevent expensive print mistakes."
date: "2022-12-19"
tags: ["print design", "graphic design", "production"]
draft: false
---

## Print mistakes are expensive and irreversible

A mistake caught before a file goes to print costs nothing. A mistake caught after the run costs you the reprint, the client's trust, and sometimes the client. Pre-flight — the process of checking a file for print readiness before submitting it — is one of the most practically important skills in print design.

I've made print mistakes. We all have. The ones I've made more than once are the ones I added to my checklist. Here's what's on it.

## Bleed and safe zone

Every print job that goes to the edge of the sheet (full bleed) needs bleed — artwork that extends beyond the trim edge. Standard is 3mm on all sides, though some printers want 5mm. I check that all edge elements extend to the bleed boundary, not just to the trim edge.

Equally important: text and critical elements need to be inside the safe zone, inset from the trim edge. The standard is 3mm inset from trim — 6mm total from the bleed edge. Text too close to the trim edge will look precarious even if it survives the cut, and will get cut off if the cut is slightly off register.

## Color mode

Print jobs go to press in CMYK (or Pantone spot colors). Files created in RGB will be converted by the printer's RIP, and that conversion is often ugly — the printer's default conversion settings may produce colors that look nothing like what you designed on screen.

I convert all RGB elements to CMYK manually before submitting, using my calibrated conversion settings rather than the printer's default. I check every element in the file — placed images, embedded graphics, spot color swatches — for RGB values.

## Image resolution

The minimum resolution for quality print reproduction is 300 DPI at the final print size. An image that's 300 DPI at 4 inches wide becomes 150 DPI if placed at 8 inches wide — half the resolution, visually soft.

I check every placed image's effective resolution (in InDesign: Links panel > effective PPI) before finalizing. Any image below 250 effective DPI at print size gets flagged for replacement.

## Fonts

All fonts need to be embedded or outlined before print submission. Missing fonts produce either substituted text (usually in a default system font that ruins the layout) or a print error. I either embed fonts through the export settings or convert all text to outlines before submitting.

The downside of converting to outlines: the file becomes uneditable. I always save an outlined version separately, keeping the editable version for future revisions.

## Overprint and knockout

Overprint settings determine whether elements print on top of each other or knock out the elements beneath them. Black type on a colored background should almost always overprint — this prevents the white knockout around letters that happens if black text is set to knock out on a digital file with even slight misregistration.

I check overprint settings for all black elements and for any elements intentionally set to overprint. The wrong overprint setting on a colored element can produce an unexpected mixed color at press.

## The soft proof

Before I submit any file, I soft proof it — a screen simulation of the CMYK print output. This is not the same as looking at the design on screen; it's using a calibrated ICC profile to simulate how the file will reproduce in print. Colors that looked vivid on screen often show a significant gamut reduction in the soft proof, and it's better to see and address this before print than after.
