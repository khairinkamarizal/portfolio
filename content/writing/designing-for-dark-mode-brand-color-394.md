---
title: "Designing for Dark Mode: Brand Color Challenges"
description: "How brand color systems need to adapt when designs move between light and dark contexts."
date: "2023-04-08"
tags: ["color", "branding", "brand identity"]
draft: false
---

Dark mode has become a standard expectation in digital brand contexts. Email clients, apps, operating systems — all of them offer dark mode options, and many users run dark mode by default. A brand color system that wasn't designed with dark mode in mind produces results ranging from slightly wrong to completely illegible when the environment inverts.

## The Problem With Direct Inversion

The simplest approach to dark mode is to invert the color scheme: what was dark becomes light, what was light becomes dark. This doesn't work for most brand color systems.

A primary color that reads well on white often becomes harsh or loses distinction on dark backgrounds. A secondary neutral that worked as a subtle tone on light backgrounds can become an overpowering dark mass. The proportional relationships between colors that created harmony in light mode are completely disrupted by inversion.

## Designing Dual Color Systems

The right approach is a dual color system: a light-mode palette and a dark-mode palette that are designed in parallel. The dark-mode palette isn't inverted from the light — it's designed from scratch against a dark background, with the same brand personality attributes as the light-mode palette.

The primary brand color may shift slightly in value or saturation between modes. The neutral system will shift more dramatically — light-mode neutrals are light grays; dark-mode neutrals are dark grays. The accent colors should maintain their relative prominence in both contexts.

## The Brand Color on Dark

The most critical test: how does the primary brand color read against a dark background? Some colors are naturally versatile — a mid-value blue reads well against both light and dark backgrounds. Other colors are optimized for one context — a pale yellow that's warm and elegant on white backgrounds becomes nearly invisible on dark backgrounds.

When a primary brand color doesn't work on dark, I either modify it for dark contexts (slightly increasing saturation and adjusting the hue) or designate the primary color as a light-mode element and specify a different accent for dark contexts.

## Email and Uncontrolled Environments

Email is particularly challenging for dark mode because different clients handle color differently. Outlook's dark mode replaces background colors with dark ones but sometimes doesn't invert text color appropriately. Gmail's dark mode rewrites some background and text colors.

I design email templates with explicit dark mode styles in the CSS, using media queries to specify the dark-mode color assignments. I test against the major email clients in both modes before finalizing any email design.

## Documentation

Dark mode color specifications need to be documented as clearly as the main color system. Every color in the system should have its light-mode and dark-mode values specified, with notes on which contexts require each. Without this documentation, dark mode gets handled inconsistently by different teams.
