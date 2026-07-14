---
title: "Ink Trapping and Other Print Details Designers Skip"
description: "The production knowledge that separates designers who deliver from those who frustrate printers."
date: "2022-06-28"
tags: ["print design","production","typography"]
draft: false
---

Print production knowledge is one of those things design education treats as a footnote. You learn the basics — bleed, crop marks, CMYK — and then you're supposed to figure out the rest by experience. The problem is that gaps in production knowledge don't announce themselves. The job goes to print, something goes wrong, and you have to reconstruct what happened from an expensive mistake.

I've been humiliated by print enough times to have learned most of these lessons the hard way. Here are the details I now consider non-negotiable.

## Ink Trapping

When two areas of ink meet at an edge, slight misregistration on press can create a white gap or an unintended overlap. Ink trapping is the technique of deliberately overlapping adjacent colors slightly to prevent visible gaps.

Most design software handles basic trapping automatically for simple cases. But complex artwork — particularly fine type printing in two or more colors, or rich black over a color background — requires manual trapping decisions.

For type under 12pt printing in any color other than black, I specify it as a single ink color to avoid registration issues entirely. For colored type or elements on color backgrounds at larger sizes, I check that trap values are set appropriately for the press and stock.

Ignoring this on a job printed in multiple spot colors is how you end up with a white halo around your headline on a colored background.

## Rich Black vs. 100K

Black in print isn't just black. Process black (100K) is a single ink — solid and deep on coated stock, slightly warm and flat on uncoated. Rich black is a mix of multiple inks, typically C60 M40 Y40 K100 or similar, which produces a deeper, more neutral black.

Rich black is right for large solid areas like backgrounds. Process black is right for type. Reversing this — using rich black for small type — creates registration nightmares and fuzzy edges. Using process black for large solid backgrounds creates a flat, slightly transparent-looking field.

I specify black values explicitly in brand guidelines and print files rather than relying on defaults.

## Paper Stock and Color Shift

Color shifts significantly between coated and uncoated stock. A vibrant CMYK color on coated stock will print as noticeably duller and often slightly different in hue on uncoated. This isn't a printing error — it's physics. Uncoated paper absorbs ink differently.

I always proof on the actual stock the job will print on before approving. Digital proofs are useful for checking composition and approximate color, but they don't simulate stock differences. If you approve a digital proof for an uncoated job and then complain the colors aren't as vibrant, you're complaining about something you should have anticipated.

## Overprint and Knockout

By default, elements set in design software knock out the layers beneath them — the background color is removed where the foreground element sits. Overprint is the alternative behavior, where inks combine instead of knocking out.

Overprint is appropriate for black text over color backgrounds (100K text should always overprint to avoid registration gaps). It's a disaster when applied incorrectly to colored elements, which can produce unexpected color mixing results.

I check overprint settings manually in every print file before handoff, and I preview with the overprint preview mode on to see exactly what the press will produce.

## The Handoff Checklist

Before any print file leaves my desk: bleed is at least 3mm (usually I use 5mm for safety), crop marks are included, all fonts are embedded or converted to outlines, linked images are collected and embedded, ICC profiles are correct for the print method, and I've confirmed specifications with the printer directly.

Talk to your printer. Not the online order form — a human. They've seen everything and they'll tell you what they need. The ones who skip this conversation are the ones posting about print disasters on design forums.
