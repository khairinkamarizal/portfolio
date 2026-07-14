---
title: "Brand Iconography: Designing a Consistent Icon Language"
description: "How I develop icon systems that feel like a natural extension of the brand identity."
date: "2022-04-25"
tags: ["brand identity","visual identity","graphic design"]
draft: false
---

Icons are infrastructure. They're everywhere in brand communications — in apps, in presentations, in wayfinding, in print documents — and they're almost universally under-designed. Most brands accumulate icons from multiple sources over time: some from a stock library, some drawn by an in-house designer, some copied from a UI kit. The result is a visual cacophony where every icon feels like it came from a different brand.

Building a proper brand icon system prevents this. It's one of the most practical investments a brand can make in visual consistency.

## The Style Parameters

An icon system's visual consistency comes from a set of shared style parameters that every icon in the set follows. I define these parameters before drawing a single icon:

Grid: the size and proportions of the bounding box every icon inhabits. Usually a square — 24×24px, 32×32px, or 48×48px depending on the primary use context.

Stroke weight: for outline-style icons, the consistent stroke width. For filled icons, the visual weight of the positive forms.

Corner radius: how rounded or sharp are corners in the geometric forms? Rounded corners feel friendly and modern. Sharp corners feel precise and technical.

Terminal style: for strokes that end without closing, do they end square, rounded, or with a specific shape? This affects the character of the entire set significantly.

These parameters should connect to the brand's visual identity — a brand with circular geometry in its logo benefits from icons with rounded corners; a brand with angular geometry benefits from sharp corners.

## Optical Consistency Over Mathematical Consistency

A common mistake in icon system design is applying style parameters mathematically. Every stroke exactly 2px. Every corner radius exactly 4px. This produces icons that are technically consistent but visually inconsistent — because different shapes require different optical compensations to look equally weighted.

A circle and a square at the same stroke weight look different. The square looks heavier because it has more horizontal and vertical strokes. To make them feel equally weighted, the circle needs a slightly heavier stroke.

I apply style parameters as optical targets, not absolute values. The goal is that every icon in the set looks like it belongs — not that every icon has identical specifications.

## The Metaphor Problem

Icons fail more often at the conceptual level than the visual level. The visual craft is learnable; finding the right visual metaphor for an abstract concept is genuinely hard.

For each icon, I start with the question: what is the simplest visual metaphor that communicates this concept unambiguously? I generate multiple options and test them with people who haven't been in the briefing. If they can identify what an icon represents without being told, the metaphor works. If they're guessing, it doesn't.

Icons that require labels to be understood aren't icons — they're decorative shapes with labels. A good icon system should work without labels in most contexts.

## Pixel Rendering at Small Sizes

Icons destined for screen use need to render cleanly at small sizes. At 16px or 20px, anti-aliasing can blur icon edges unless the design accounts for the pixel grid.

I design icons on the pixel grid — snapping stroke edges to whole pixel values at the target size — to ensure clean rendering. This requires slightly different artwork than print or large-scale icons, and I maintain separate optimized versions for small digital sizes when necessary.

## Maintaining the Set

Icon systems grow over time. New products, new features, new communications needs generate requests for new icons. Without governance, new icons are drawn by whoever needs them, using whatever style they think matches, and the set drifts.

I include a contribution guide with every icon system: the parameters, the process for requesting or adding new icons, and examples of how to apply the parameters to new concepts. This keeps the set coherent as it grows.
