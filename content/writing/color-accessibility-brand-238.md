---
title: "Color Accessibility in Brand Design"
description: "How I build accessible color systems without compromising brand character."
date: "2022-06-01"
tags: ["color","branding","brand identity"]
draft: false
---

Accessibility and brand design are not in opposition, despite what some designers seem to believe. The argument that accessible contrast ratios compromise brand aesthetics is almost always a rationalization for not doing the work. With a thoughtful approach, accessible color systems can be as expressive and as distinctive as any other.

I build accessibility into brand color systems from the start, not as a retrofit.

## Understanding the Standard

WCAG (Web Content Accessibility Guidelines) specifies contrast ratios for text on background:

Level AA requires 4.5:1 contrast ratio for normal text (under 18pt or 14pt bold) and 3:1 for large text.
Level AAA requires 7:1 for normal text and 4.5:1 for large text.

I treat AA as the minimum for any brand color system. AAA is the target for body text and other high-reading-volume contexts.

These ratios are calculated against the WCAG formula, which can be checked with tools like the WebAIM Contrast Checker or Adobe's Color Accessibility tools.

## Auditing Brand Colors

I audit every color combination in the brand system at the point of palette development, not after the system is finalized. I check each primary color against white, against black, and against every neutral in the palette. I document which combinations pass AA and AAA for normal and large text.

This audit produces a practical map of which combinations are safe for text use and which are decorative-only. The map goes into the brand guidelines.

## When Brand Colors Fail

Some brand colors — particularly mid-range saturated hues — fail accessibility requirements against common backgrounds because they're neither light enough nor dark enough to create sufficient contrast.

The solution isn't to abandon the color. It's to define the appropriate use context. A mid-range saturated color can be used as a background for decorative elements, large graphic elements, or icons without text. It should not be used as a background for body copy.

The brand palette can include text-safe versions of key brand colors — slightly darkened or lightened to pass requirements — for use specifically in text contexts. These don't replace the brand color; they provide a text-appropriate variant.

## Color Blindness Simulation

Approximately 8% of men and 0.5% of women have some form of color vision deficiency. The most common forms are deuteranopia (red-green) and protanopia (red-green). A brand color system that relies entirely on red/green differentiation will be ineffective for a significant portion of its audience.

I run every brand palette through color blindness simulation filters (Figma has these built in; Photoshop's Proof Colors also covers common types) and verify that the system's intended differentiations — between primary colors, between variant colors in a product line — remain distinguishable across all major types of color vision deficiency.

When a palette relies on a red/green distinction, I add a secondary differentiator — shape, pattern, position, or label — so the distinction doesn't depend on color alone.

## Documenting for Implementers

Accessibility documentation in brand guidelines needs to be specific and actionable. "Use accessible color combinations" is useless. A table showing which specific combinations pass which WCAG levels, with hex values and contrast ratios, is useful.

I include this table as a standard component of every brand color system I deliver.

Accessible design reaches more people. Build it in from the start.
