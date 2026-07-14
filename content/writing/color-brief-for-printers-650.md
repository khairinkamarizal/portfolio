---
title: "The Color Brief I Give to Printers"
description: "Clear color communication with your printer prevents most production disasters — here's exactly what I specify."
date: "2024-11-25"
tags: ["print design", "color", "production"]
draft: false
---

The most common print production problem I encounter isn't file format or resolution — it's color. Specifically, it's color that was specified imprecisely, communicated ambiguously, or assumed to transfer automatically from screen to press. It doesn't.

Every print project I deliver includes a color brief. Here's what goes in it.

## The Color Specification Table

For every color in the project, I provide a table with every relevant specification:

| Color Name | Pantone (Coated) | Pantone (Uncoated) | CMYK | RGB | HEX |
|---|---|---|---|---|---|
| Brand Blue | PMS 281 C | PMS 281 U | 100/72/0/18 | 0/56/147 | #003893 |

Every column matters for different contexts. The printer uses Pantone and CMYK. The digital team uses RGB and HEX. The Pantone coated vs. uncoated distinction matters when the job prints on different stocks.

## The Stock Specification

Color looks different on different paper stocks, and I specify which Pantone variant to use on which stock. On coated stock, I specify the C (coated) Pantone variants. On uncoated stock, I specify the U (uncoated) variants — which are often different chip numbers to achieve a consistent visual result despite the substrate difference.

I also specify the intended stock by Pantone's paper category system for uncoated work, or provide the exact stock specification if I've already confirmed the paper choice.

## The Tolerance Note

No printing process achieves perfect Pantone match. I note acceptable tolerance for color-critical elements:

**Brand identity elements** (logo, brand colors in feature applications): minimal tolerance, request a press proof or color pull before the full run.

**Background and structural elements:** standard press tolerance acceptable.

**Graduated colors and blends:** note that blends may show banding on certain press configurations and specify whether this is acceptable or requires special attention.

## The Critical Color Elements List

I explicitly flag which elements in the job are color-critical — where a significant color shift would be unacceptable and would require a reprint. This list typically includes:

- Logo in brand color applications
- Any use of specific Pantone colors that are central to the communication
- Large solid color fields that will be highly visible

Elements not on this list can be understood to be acceptable within normal press tolerance.

## Overprint Instructions

For jobs with spot colors or elements that overlap, I specify overprint behavior explicitly. I don't rely on the file settings alone — I describe in the brief which elements overprint and which knock out.

This redundancy has saved me from production errors. File settings can be interpreted differently by different RIP systems. Written instructions alongside the file are a second check.

## The Proof Request

I specify whether a proof is required before full production, and what type:

- **Inkjet proof on similar stock:** Acceptable for color orientation but not for final approval on critical color work
- **Press proof on actual stock:** Required for color-critical brand work, especially on uncoated stocks where color behavior is less predictable
- **Digital proof only:** Acceptable for jobs with less critical color requirements

The proof request and the critical elements list work together. If an element is on the critical list, a press proof on actual stock is the right standard.

## What This Costs

Clear color briefs take time to produce. They also save print jobs, prevent reprints, and build the kind of trust with printers that makes future production smoother. The time investment is worth it on any job where color matters.
