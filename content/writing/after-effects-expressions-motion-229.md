---
title: "After Effects Expressions I Actually Use in Motion Design Work"
description: "Practical expressions for motion designers who want efficiency without writing code."
date: "2022-08-22"
tags: ["motion graphics", "motion design", "after effects"]
draft: false
---

## Expressions solve repetition problems

After Effects expressions are small pieces of JavaScript that drive animation properties dynamically, without manual keyframing. I'm not a developer, and I don't write complex code in my motion work. But there are a handful of expressions I use constantly because they solve real, recurring problems in practical motion design work.

These are not for showing off. They're for working faster and getting better results.

## The wiggle expression

`wiggle(frequency, amplitude)` is the most widely used expression in motion design. It adds random, continuous movement to a property — position, rotation, scale — based on two parameters: how often it wiggles per second, and how far it moves.

I use it for adding organic life to otherwise mechanical animations. A logo lockup that just sits static on screen feels dead. Add `wiggle(0.5, 3)` to the position — half a wiggle per second, 3 pixels of movement — and it breathes. The subtlety is everything. If the amplitude is too high, it reads as unstable rather than alive.

## The loopOut expression

For infinitely repeating animations — background loops, loading indicators, animated patterns — `loopOut("cycle")` is essential. Set up your keyframes for one complete cycle, apply the expression to loop them indefinitely, and the animation repeats seamlessly without any additional keyframing.

The variant `loopOut("pingpong")` plays the animation forward and then backward in alternation, which creates a very different feeling — useful for oscillating elements like pendulums or breathing effects.

## Linking properties with pick whip

Not exactly an expression you type, but the pick whip tool — which links one property's value to another — is the most practical expression tool in After Effects for non-coders. Link an element's opacity to a null object's rotation. Link a text layer's position to a shape layer's position. When the parent property changes, all linked properties follow automatically.

I use this constantly in complex motion graphics to create relationships between elements that would be tedious to keyframe independently.

## The time expression for continuous rotation

`time * 30` applied to a rotation property creates continuous rotation at 30 degrees per second. Change the multiplier to change the speed. No keyframes needed. Clean, perfectly consistent.

This is the basis for every spinning logo, rotating background element, and clock-hand animation I've done in the last five years. Simple, reliable, controllable.

## Value at time for delayed copies

`valueAtTime(time - 0.1)` applied to a property makes that property follow the same animation as its parent but delayed by 0.1 seconds. This creates the trailing/echo effect you see in kinetic typography where letters follow a leading letter's movement with a slight delay.

The delay value controls the feel: tight delays (0.05s) create a cohesive group movement; loose delays (0.2-0.3s) create a visible cascade. Adjust to taste.
