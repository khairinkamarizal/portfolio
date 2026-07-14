---
title: "After Effects Expressions for Motion Designers"
description: "The handful of expressions I use constantly and what they actually do for my motion work."
date: "2019-06-18"
tags: ["motion graphics", "motion design", "after effects"]
draft: false
---

I resisted learning expressions for longer than I should have. It felt like coding, and I came from a design background. Then I learned five expressions and realized I'd been doing manual work that I could automate — and that the automation was actually producing better results than my manual work.

Expressions aren't programming. They're design tools. Here's how I actually use them.

## wiggle()

The most common expression in motion design. Wiggle generates random oscillating motion based on frequency and amplitude parameters.

`wiggle(2, 30)` — wiggles twice per second with a maximum offset of 30 pixels.

I use wiggle for organic, imperfect motion: a camera that has slight handheld movement, a logo element that has subtle life, a particle that drifts unpredictably. The key is restraint — wiggle at low amplitude and low frequency adds humanity; at high values it looks like a technical malfunction.

## loopOut()

Makes a keyframed animation loop indefinitely. Essential for any kind of seamless loop.

`loopOut("cycle")` — repeats the keyframe sequence from the beginning.

`loopOut("pingpong")` — alternates between playing forward and backward.

I use loopOut on loading animations, background elements, and any graphic that needs to cycle continuously. The trick is making sure the last keyframe state matches or smoothly connects to the first.

## time * value

The simplest expression for creating continuous, linear motion without keyframes.

`[time * 50, 0]` on a position property moves an element 50 pixels per second horizontally, forever.

I use this for endlessly scrolling backgrounds, continuously rotating elements, and any motion that doesn't need to start or stop.

## valueAtTime()

Samples a property's value at a different point in time. This creates connections between properties and time offsets.

If I want an element to follow another element's position but with a delay, I can use `thisComp.layer("Leader").position.valueAtTime(time - 0.2)` to follow the leader's position 200ms in the past.

## index-based staggering

Using the layer index to stagger animations across multiple layers is cleaner than manually offsetting keyframes.

On the Opacity property: `startTime = (index - 1) * 0.1; linear(time, startTime, startTime + 0.3, 0, 100)`

This makes each layer fade in 100ms after the previous one — without touching individual keyframes. Change the 0.1 multiplier to change the stagger interval for all layers simultaneously.

## The Real Value

These aren't tricks. They're tools that let me design motion parametrically rather than manually. When the client asks to speed everything up by 20%, I change a value in one expression instead of rewriting every keyframe. When the stagger timing needs to be tighter, I change one number instead of dragging twenty keyframes.

Expressions make motion more editable, which makes it more responsive to real project conditions.
