---
title: "Creating Motion Brand Guidelines"
description: "Motion brand guidelines are the newest addition to brand systems — and one of the most urgently needed."
date: "2024-12-15"
tags: ["motion design", "brand identity", "brand guidelines"]
draft: false
---

Static brand guidelines have been standard practice for decades. Motion brand guidelines — documentation of how a brand behaves in time — are far less common, even as motion has become one of the primary contexts where brands are experienced. This gap produces the motion equivalent of a brand without guidelines: every animated piece that gets made for the brand looks slightly different, uses different timing, different easing, different transitions.

Motion guidelines close that gap.

## What Motion Guidelines Need to Cover

A motion brand guidelines document needs to document the same categories of decision that static guidelines cover, translated into temporal terms.

**Easing and timing character:** The personality of the brand's motion. Is it crisp and snappy (fast easing, decisive arrivals)? Organic and flowing (gradual easing, smooth transitions)? Playful (overshooting, bouncing)? The easing character is as much an identity element as the typeface.

**Duration standards:** What's the standard duration for common animation types? A standard element reveal. A transition between scenes. A logo hold. Documented as specific values (300ms, 1.2 seconds) rather than vague descriptions.

**Transition types:** The approved transitions between scenes and states. Cut? Dissolve? A specific wipe or slide? The direction of transitions (left-to-right vs. right-to-left reads differently). These should be defined and limited to a small vocabulary that can be applied consistently.

**Color behavior in motion:** Any specific treatments for how brand colors appear in motion — gradients, color transitions, color overlays. Particularly relevant for brands that use color transitions as a design element.

**Sound design direction:** If the brand has sonic identity elements, how they're integrated with motion. Entry sounds for the logo. Transition sounds. The overall audio character.

## The Easing Specification Challenge

The hardest thing to document in motion guidelines is easing, because easing is most accurately described as a visual curve — a Bezier control point specification — rather than words. Words like "smooth" and "snappy" mean different things to different animators.

I document easing in motion guidelines as:
1. A visual curve diagram (the easing graph)
2. The specific Bezier handle values (cubic-bezier in CSS notation, or equivalent AE values)
3. A short video example of the easing applied to a simple element

All three are necessary. The visual curve communicates the shape. The numerical values are the implementation spec. The video example shows what it actually looks like in practice.

## Maintaining Motion Guidelines

Static guidelines need periodic updates but are relatively stable. Motion guidelines need more frequent maintenance because motion technology and platforms evolve faster than print production.

I build motion guidelines with explicit version numbers and technology notes — "these specifications assume After Effects 2024 / Lottie for web delivery" — so the guidance is clearly tied to a specific technical context and can be updated when that context changes.

## Who Uses Motion Guidelines

Unlike static guidelines, which are used primarily by designers, motion guidelines are used by motion designers, video editors, developers (for web animations), and social media managers. The documentation needs to be legible to all of these audiences, which often means more detailed explanation of intent alongside the technical specifications.

A motion guideline that only a senior motion designer can implement hasn't solved the consistency problem — it's just created a single point of failure.
