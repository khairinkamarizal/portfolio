---
title: "Color in Motion: How Palette Behaves When Things Move"
description: "Static color theory doesn't fully prepare you for how color reads in motion — here's what changes."
date: "2022-12-28"
tags: ["motion design", "color", "motion graphics"]
draft: false
---

Color in motion design follows the same principles as color in static design — until it doesn't. When colors move, transition, and change over time, new phenomena emerge that static theory doesn't account for. I've been navigating this gap for years, and these are the lessons that matter most.

## Afterimages and Persistence

When a color holds on screen for more than a second and then cuts or transitions, the eye briefly retains the previous color as an afterimage. This affects how the incoming color is perceived. A cut from red to white makes the white look slightly cyan. A cut from yellow to neutral gray makes the gray look briefly violet.

I account for this when designing transitions between high-saturation colors. Either I build in a fast desaturation step before the color change, or I cut through black — a momentary black frame resets the eye and eliminates afterimage contamination.

## Flicker and Strobing

Rapidly alternating between high-contrast colors at certain frame rates creates flicker that can be uncomfortable or, for some viewers, dangerous. The photosensitive epilepsy threshold is roughly three flashes per second at high contrast.

I never use rapid alternating color flashes in motion work. If the design calls for a stroboscopic effect, I test it against flicker safety guidelines. This isn't just an accessibility concern — it's a liability concern.

## Saturation in Motion

Highly saturated colors are more fatiguing to watch in motion than they are in static contexts. A poster with a vivid orange accent reads as energetic. A motion piece that sustains that same vivid orange for fifteen seconds reads as assaulting.

I typically pull saturation down 10–15% from what I'd use in print when translating color to motion. The motion itself provides energy; the color doesn't need to work as hard.

## Warm Colors Lead

Warm colors (reds, oranges, yellows) appear to move faster than cool colors even at identical velocities. A red element crossing the frame reads as quicker than a blue element at the same speed. I use this perceptual bias intentionally — warm-colored elements drive the energy of a sequence, cool-colored elements provide the settling and resolution.

## Gradient Transitions

Gradients transitioning over time — one color morphing to another — are one of the most powerful tools in motion color design. The key is choosing transition paths that don't pass through muddied midpoints. Transitioning between complementary colors through their RGB midpoint produces a desaturated gray at the midpoint, which looks like the animation is losing energy.

I use Lab color space for gradient transitions when the software supports it. Lab interpolation follows perceptual uniformity, which means the midpoints of the transition are equally vivid and equally luminous — no muddy midpoints.
