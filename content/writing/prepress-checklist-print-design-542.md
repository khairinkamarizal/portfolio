---
title: "Designing for Print: The Prepress Checklist I Never Skip"
description: "Every print job I've had go wrong was something on this checklist. Every job I've checked carefully has come back right."
date: "2024-05-26"
tags: ["print design", "graphic design", "process"]
draft: false
---

## Print Is Unforgiving

When something goes wrong in digital design, you push an update. When something goes wrong in print, you're reprinting 5,000 pieces at your own expense and explaining yourself to a client.

I learned prepress discipline the hard way. A logo delivered in RGB instead of CMYK. A bleed that was set to 2mm when the printer needed 5mm. A font that wasn't embedded and substituted to something unrecognizable. Each of these happened exactly once in my career, and the checklist I built afterward has been running clean ever since.

## The Full Checklist

**Color Mode**
Every element in the file is in the correct color space. Raster images are CMYK (for CMYK jobs) or appropriate color profile. Spot colors are correctly named with the exact Pantone reference. No stray RGB objects.

**Document Bleed**
Bleed is set to the printer's specification — typically 3mm in Europe, ⅛ inch in North America. Background colors and images that touch the edge extend to the bleed boundary. No important content sits in the bleed area.

**Safe Margin**
Critical content — text, logos, important imagery — sits inside the safe zone, at least 5mm from the trim edge. Nothing that matters lives in the area that might get trimmed.

**Resolution**
All placed raster images are at minimum 300 DPI at their placed size. If an image is placed at 150% of its native size, its effective resolution drops below 300 DPI. I check effective resolution, not the resolution of the source file.

**Fonts**
All fonts are embedded in the exported PDF. Alternatively, all text has been converted to outlines. No dynamic fonts that depend on the printer's system having the correct font installed.

**Overprint Settings**
Black text is set to overprint (knockout causes registration problems on small text). Spot color overprints are intentional, not accidental. White objects are set to knockout, not overprint (a white object set to overprint disappears — it's invisible ink on a white background).

**Total Ink Coverage**
For CMYK offset printing, total ink coverage (the sum of C+M+Y+K percentages) should not exceed 300% for coated stock or 280% for uncoated. Rich blacks in large areas can easily exceed this and cause drying and offset problems.

**PDF Export Settings**
Using the correct PDF preset for the printer's specification. PDF/X-1a for most offset jobs. Marks and bleeds included. Compression appropriate for press quality (no excessive image compression).

**Final Proof Review**
Looking at the packaged PDF at 100% zoom on a calibrated monitor. Reading every piece of text for errors. Checking every image for unexpected color shifts. Comparing to an approved proof or reference if one exists.

## The Version That Always Gets Skipped

The step that gets skipped under deadline pressure is the final proof review. I've done it. Exported, sent, regretted.

The final proof review is not optional. Under deadline, everything else can be rushed. The final proof review cannot. That's the last opportunity to catch the error before it's permanent.

## Working With Printers

I build relationships with printers and I ask questions before starting work, not after. What's your preferred bleed? What PDF standard do you want? Do you accept native Illustrator files?

A printer who gets a file that meets their spec exactly has less reason to call me with problems. That's the goal.

Print is precise. Respect the precision.
