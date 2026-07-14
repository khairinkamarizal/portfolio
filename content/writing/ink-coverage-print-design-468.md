---
title: "Understanding Ink Coverage in Print Design"
description: "Total ink coverage limits affect every dark, saturated design decision in print. Ignoring them causes problems at press time."
date: "2023-09-15"
tags: ["print design", "graphic design", "color"]
draft: false
---

Total ink coverage (TIC) is the sum of all CMYK ink percentages at any given point on a printed page. If a pixel is specified as 80C/70M/60Y/90K, its total ink coverage is 300%. Most offset presses have a TIC limit of 280–320% for coated stock and 240–260% for uncoated stock. Exceed that limit and the ink doesn't dry properly, causing smearing, marking, and adhesion problems.

This is a technical constraint that becomes a design problem every time someone creates a rich, dark design for print.

## Where It Bites You

The most common TIC problem: a rich black background. Designers creating deep black backgrounds often use 100C/100M/100Y/100K for maximum depth. That's 400% TIC — well over any press limit. This doesn't just cause print problems; it also creates a visibly different color than a correctly specified black, because the ink layers are sitting on top of each other rather than printing clearly.

Other common problem areas:
- Deep navy blues (high C + high K values)
- Dark saturated purples (high C + high M + high K)
- Dark forest greens (high C + high Y + high K)
- Any background that's been converted from RGB black (#000000) without checking the CMYK values

## How to Check and Fix

In Adobe Illustrator and InDesign, the Separations Preview panel shows total ink coverage. With Separations Preview turned on, areas that exceed your specified TIC limit can be highlighted. I check this on any design with significant dark areas before sending to print.

The fix for excessive TIC is to reduce individual channel values while maintaining the target color appearance. For a rich black with reasonable TIC, I use 60C/40M/40Y/100K, which produces a deep, warm black at 240% TIC — within limits for any substrate.

For dark backgrounds of other colors, I reduce the black channel and compensate with the color channels. The result is often visually similar on screen and prints cleanly.

## The Uncoated Stock Problem

Uncoated stock is more absorbent than coated stock, which means ink spreads and absorbs differently. TIC limits are lower — typically 240–260% — and colors shift more dramatically in conversion.

Rich dark colors that print beautifully on coated stock can look muddy and flat on uncoated. Before specifying any dark, saturated colors for uncoated stock work, I print a test on representative stock or ask the printer for guidance on their uncoated TIC limit.

## The Black Text Rule

Black body text should always be specified as 100K, not rich black. Rich black (4-color black) has registration-dependent behavior: if the CMYK layers are even slightly misregistered, black text gets colored fringe on its edges. Single-ink black doesn't have this problem.

This rule is sometimes violated in large display type, where rich black can add perceived depth and density. But for any text under 24pt, single-color black is the only correct specification.

## Working With Your Printer

TIC limits vary by press, ink, and substrate. For any high-stakes print job with significant dark areas, I ask the printer directly what their TIC limit is for the specific stock I'm using. Their press operators know their equipment. Following their guidance prevents press problems and reprints.

TIC is one of those technical details that separates designers who produce consistently clean print results from those who get surprised at the press check. Build it into your print workflow as a final check before every file submission.
