---
title: "Designing for Offset Lithography: What Every Print Designer Should Know"
description: "The technical realities of offset printing and how they shape my design decisions from the start."
date: "2019-07-24"
tags: ["print design", "production", "graphic design"]
draft: false
---

Offset lithography is still the dominant commercial printing process for most mid-to-high volume print work — brochures, magazines, packaging, posters. Understanding how it works is not optional knowledge for a print designer. The process has specific characteristics that affect every color, image, and typographic decision.

## How Offset Works

In offset printing, ink is transferred from a plate to a rubber blanket cylinder, then from the blanket to the substrate. The "offset" refers to this indirect transfer — the plate never touches the paper.

The key implication: the quality and character of the print is affected by the plate, the blanket, the ink density, the paper, and the environmental conditions of the press room. These variables produce a print that is a very accurate — but not perfect — reproduction of the digital file.

## Dot Gain

When ink transfers to paper, the ink dot is slightly larger than the plate specification because of physical spreading during the transfer process. This is dot gain — a predictable increase in the effective size of the halftone dots that make up the image.

Dot gain varies by paper type. Uncoated paper absorbs more ink and has higher dot gain than coated paper. A calibrated workflow accounts for dot gain by compensating in the image — slightly lightening tones and reducing ink density to allow for the expected spreading.

Working with uncalibrated images on papers with high dot gain produces prints that are darker and muddier than the design file. I always ask the printer for their ICC profile for the specific paper stock and apply it when preparing image files.

## The CMYK Color Space

Offset printing in process color uses four inks: Cyan, Magenta, Yellow, and Black (Key). These four inks, overlaid in varying densities, approximate the colors in the design file.

The CMYK gamut is significantly smaller than the RGB gamut of a monitor. Colors that look vibrant on screen — certain electric blues, vivid oranges, bright greens — may be outside the printable CMYK range. Soft proofing in the correct CMYK profile before finalizing color decisions is essential.

## Paper as a Variable

Coated paper holds ink on the surface, producing brighter colors and sharper edges. Uncoated paper absorbs ink, producing softer colors and slightly reduced sharpness. Tinted papers affect every color printed on them — white ink isn't available in standard offset, so the paper color is the lightest value available.

I specify paper before finalizing designs because the paper selection affects every color decision. The same design on coated gloss, coated matte, and uncoated stock looks like three different designs.

## Press Proofs

For color-critical work, press proofs — samples pulled on the actual press with the actual inks on the actual stock — are the gold standard for verification. Digital contract proofs (high-quality inkjet proofs that simulate press output) are more practical and accurate enough for most work.

I always proof high-value print jobs before approving for press. The cost of a proof is a fraction of the cost of reprinting.
