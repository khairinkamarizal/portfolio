---
title: "After Effects Expressions I Use on Every Motion Project"
description: "The small but powerful After Effects expressions that save time and improve consistency in motion graphics work."
date: "2025-07-30"
tags: ["motion graphics", "After Effects", "motion design"]
draft: false
---

## Why Expressions Matter

Expressions in After Effects are small pieces of JavaScript that drive property values dynamically rather than through static keyframes. Learning even a handful of essential expressions fundamentally changes how you work — making animations more adaptable, more consistent, and faster to produce.

I'm not a developer and I don't write complex expression systems. But I use a small set of expressions so frequently they've become muscle memory.

## wiggle()

The wiggle expression is the entry point for most people: `wiggle(frequency, amplitude)`. It creates random oscillation on any property — position, rotation, opacity. The two arguments control how many times per second the value changes and how large the changes are.

I use it most on camera position for documentary-style motion graphics, on position and rotation for organic-feeling text entries, and on scale for subtle breathing effects on static graphics. The key is keeping amplitudes small — visible wiggle is usually too much wiggle.

## loopOut()

`loopOut("cycle")` loops an animation infinitely. Set up a few keyframes for a loading spinner, a pulsing icon, or a background pattern cycle, then add this expression to loop it without additional keyframes.

I use `loopOut("pingpong")` for oscillating animations — it plays forward, then backward, creating a smooth loop from a one-way animation.

## The Time-Based Value

`time * value` drives a property as a function of elapsed time. My most common use: `[0, time * 30]` on a texture layer's position to create a constantly scrolling background. No keyframes needed — it just runs at 30 pixels per second for as long as the composition runs.

## Linear Remapping

`linear(t, tMin, tMax, value1, value2)` remaps one range of values to another. I use this to drive multiple properties from a single slider control, keeping the animation parameters in one place. Change the slider, every property linked to it updates proportionally.

This is especially useful in explainer-style motion graphics where the same animation timing principle needs to apply across many elements.

## The Null Object Workflow

Expressions become much more powerful combined with null objects (control objects). I'll parent multiple layers to a null, then apply expressions that reference that null's properties. The null becomes a single control point for the behavior of multiple elements.

For a text reveal sequence with 12 elements, I'll set up one null with a timing slider and write expressions on each element that offset their entry time relative to that slider. Adjusting the one slider adjusts the entire sequence. This is enormously faster than adjusting 12 sets of keyframes.

## The Entry Point

If you haven't used expressions before, start with wiggle. Apply it to the position of something that's supposed to feel organic — a camera, a hand-held title, a natural element. Keep the amplitude at 2–5 pixels and the frequency at 1–3. Watch how it changes the feel of the piece.

Once you've felt what expressions can do, the others follow naturally.
