---
title: "Easing Curves: The Grammar of Motion Design"
description: "Why the curves between keyframes are as expressive as the keyframes themselves."
date: "2022-07-08"
tags: ["motion design","motion graphics","animation"]
draft: false
---

Most designers learning motion design focus on keyframes — the positions, the values, the timing. But the character of an animation isn't determined by where things start and end, or even when. It's determined by how they move between those states. That how is the easing curve.

Easing is the single biggest difference between amateur and professional motion work. Not the assets, not the complexity, not the rendering quality — the easing. Animation with poor easing looks mechanical and lifeless regardless of how good everything else is.

## Linear Motion and Why It Feels Wrong

Linear motion — constant velocity from keyframe to keyframe — appears nowhere in the natural world. Objects don't start moving at full speed and stop instantaneously. Physics doesn't allow it. When we see linear motion in animation, something in us registers it as artificial, as robot movement, as wrong.

Linear easing is the After Effects default and it produces exactly this mechanical quality. The very first thing I do with any animation is remove all linear keyframes. Everything gets an easing curve.

## The Language of Easing Types

Ease In: the animation starts slowly and accelerates toward the keyframe. Use this when something is approaching a destination — a card sliding in, text arriving on screen. The acceleration creates anticipation.

Ease Out: the animation decelerates toward the keyframe. Use this when something is leaving or settling — an object coming to rest, a transition completing. The deceleration creates resolution.

Ease In/Out (the symmetric ease): starts slowly, peaks at mid-point, slows to the destination. This is the "considered" easing — deliberate, unhurried. Works well for premium brand motion, transitions that shouldn't feel urgent.

The specific shape of the Bezier curve within each easing type creates further variation. A very steep ease-out (object moves very fast then suddenly stops) feels snappy and modern. A gentle ease-out (gradual deceleration) feels smooth and calm.

## Matching Easing to Brand Personality

I think about easing as brand language. Every motion piece I create for a brand uses a consistent easing vocabulary that reflects the brand's personality.

A technology brand that wants to feel cutting-edge and precise: fast, slightly mechanical easing with sharp ease-outs. Movement that feels efficient.

A wellness brand that wants to feel calm and organic: slow, generous ease-in-outs. Movement that breathes.

A youth fashion brand that wants to feel energetic: springy, slightly overshooting easings with elastic qualities. Movement with personality.

I define the primary easing curves for each brand project the same way I define colors — as system decisions documented in the motion identity guidelines.

## Custom Curves in Practice

In After Effects, I use the Graph Editor to craft custom easing curves rather than using the built-in presets. The presets (Easy Ease, Linear) are starting points at best. The actual character of the animation lives in the custom Bezier handles.

I maintain a preset library of custom curves I've developed for different brand contexts. Building a good curve library saves time and ensures consistency across a project.

## The Over-Easing Trap

New motion designers often over-ease — adding extreme elastic bounces, exaggerated overshoots, playful wiggles — to everything. Used selectively, these elements add personality. Applied to every element in every animation, they create chaos.

Easing emphasis works by contrast. The element that has a bold, distinctive ease reads as intentional only when everything around it moves more simply. Reserve expressive easing for elements that deserve emphasis.
