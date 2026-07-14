---
title: "Designing for Print Production: A Pre-Flight Checklist"
description: "Every print job I've ever had go wrong failed a check I should have done before sending the file. Here's my actual pre-flight process."
date: "2024-08-12"
tags: ["print design", "production", "graphic design"]
draft: false
---

I've had business cards come back with the logo shifted because I forgot to expand the appearance before outlining. I've had posters print with the wrong black because I used RGB black in a CMYK file. I've had a book cover arrive with a soft white edge where it should have been clean because I forgot to extend the background color into the bleed.

Every one of these failures was preventable. I pre-flight every single print file now, without exception, against a checklist that's evolved through actual mistakes. Here it is.

## Color Mode

First, confirm the file is in the correct color mode for the print process.

- Offset and digital print: CMYK
- Screen printing: spot color (Pantone)
- Large format: usually CMYK, check with vendor

Check for RGB or LAB elements that slipped in — placed images, effects, pasted elements from other files. In Illustrator: Edit > Edit Colors > Convert to CMYK. In InDesign: use the Preflight panel to flag all RGB images.

## Bleeds and Safe Zones

Any element that should print to the edge of the sheet needs to extend into the bleed zone — typically 3mm on each edge for standard offset print. Check:

- Background colors and images extend to the bleed boundary
- No text or important visual elements within the safe zone (minimum 3mm inside trim)
- Slug/bleed is set correctly in document setup

I zoom to 100% and manually inspect all four edges of every page. The Preflight panel catches some bleed issues but not all.

## Image Resolution

For offset print, raster images should be minimum 300 DPI at the final print size. For large format print, 100-150 DPI at final size is typically acceptable because viewing distance is greater.

Check in InDesign via the Links panel — it shows effective PPI for all placed images. An image that's 300 DPI in the file but scaled up to 150% in the layout is effectively 200 DPI and should be flagged.

## Fonts

Fonts that aren't embedded or outlined can print incorrectly or revert to defaults.

In Illustrator: outline all type (Type > Create Outlines) before final save. Check that no locked or hidden layers contain type that hasn't been outlined.

In InDesign: use Document Fonts folder and embed all fonts in the exported PDF. Check the Preflight panel for missing fonts.

## Black Specification

This catches me more often than I like to admit. Verify:

- Small black text: 100K only (0C 0M 0Y 100K). Avoids registration issues.
- Large black areas (backgrounds, heavy graphic elements): rich black (typically 60C 40M 40Y 100K). Pure 100K in large areas looks flat and brownish.
- The overprint settings for black elements are correct. Black should typically be set to overprint in offset print.

## File Format for Delivery

Export to PDF/X-1a (compatible with all offset workflows) or PDF/X-4 (supports transparency, better for newer workflows). Confirm with the printer which they prefer.

Check the PDF export settings include: all fonts embedded, images downsampled to 300 DPI for offset, marks and bleeds included, no crop mark conflicts with bleed boundary.

## Final Check

Print a proof at actual size before sending. Look at it on paper, not on screen. Problems that are invisible on screen become apparent immediately in print. The five minutes this takes has saved me hours of reprints.
