---
title: "Designing Logos That Work at Favicon Scale"
description: "If your logo can't survive at 16x16 pixels, part of your brand is invisible every time someone visits your website."
date: "2023-01-23"
tags: ["logo design", "branding", "graphic design"]
draft: false
---

Favicons are the most demanding test environment for a logo. At 16x16 pixels, you have 256 pixels total. The full logo lockup doesn't work at that scale. Most wordmarks are unreadable. Even relatively simple marks become ambiguous. And yet the favicon is one of the most consistently visible brand touchpoints a website has: it appears in browser tabs, in browser bookmarks, in search results, in bookmark managers.

Designing a favicon-appropriate mark needs to be part of every logo project, not an afterthought.

## What Works at 16x16

At 16x16 pixels, only the most fundamental shape information survives. A single letter. A simple geometric mark. An icon with two or three major elements at most.

The shapes that work:
- Bold letterforms with consistent stroke weights (avoiding hairlines entirely)
- Simple geometric shapes (circle, square, rounded rectangle) with a limited interior element
- Silhouette shapes that are distinctive at small scale

The shapes that don't work:
- Wordmarks of any kind (letters are too small to read)
- Marks with fine detail (disappears at this scale)
- Marks with high-contrast thin/thick stroke variation (hairlines become invisible)
- Complex compositions with multiple elements

## The Favicon Is a Separate Design Problem

The favicon isn't a scaled-down version of the main logo. It's a separate composition designed for a specific scale.

For brands where the primary mark doesn't translate to favicon scale, I design a simplified version — sometimes called a "sub-mark" or "icon variant" — specifically for small-scale use. This is usually a single letter, the most distinctive shape from the primary mark, or a new composition that distills the brand's visual essence into the simplest possible form.

The favicon variant and the full logo should feel like they come from the same brand. They share the color, and ideally the fundamental geometric logic, of the primary mark. But they're different compositions optimized for different scales.

## The Favicon File Set

A modern favicon set includes:

**favicon.ico**: The legacy format. Contains 16x16 and 32x32 versions embedded in a single file. Required for maximum browser compatibility.

**favicon-32x32.png**: Standard resolution favicon for most browsers.

**favicon-16x16.png**: Minimum size favicon.

**apple-touch-icon.png**: 180x180px icon used when a user adds the site to their phone's home screen. At this size, more detail is possible.

**android-chrome-192x192.png** and **android-chrome-512x512.png**: Used in the Web App Manifest for Android devices.

**SVG favicon**: Modern browsers support SVG favicons, which scale cleanly to any size. This is the future of favicon delivery but isn't yet universal.

## The Design at 32x32

At 32x32 pixels, slightly more is possible. A two-letter monogram can sometimes work. The primary mark (without wordmark) can often work if it's sufficiently simple.

I design the favicon composition at 32x32 and then verify it at 16x16. If anything is unclear at the smaller size, I simplify. The 16x16 is the constraint. The 32x32 should ideally be the same composition, not a different one.

## Testing in Context

The only reliable way to evaluate a favicon is to see it in the browser tab, next to other favicons. I always test by adding a prototype to an actual browser tab and comparing it to adjacent sites. What looks distinctive in isolation may disappear in context. What reads clearly in a design document may look muddy on screen.

The favicon is your brand on the browser bar of everyone who visits your site. It deserves a conscious design decision, not a shrunk-down logo file.
