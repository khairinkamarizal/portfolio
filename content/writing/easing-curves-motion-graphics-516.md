---
title: "What Easing Curves Actually Do in Motion Graphics"
description: "Easing is the difference between animation that feels alive and animation that feels like a software demo."
date: "2023-12-18"
tags: ["motion graphics", "motion design", "animation"]
draft: false
---

## Linear Is a Lie

Nothing in the physical world moves at a constant speed. Objects accelerate when they start moving and decelerate when they stop. Forces act on them — friction, gravity, momentum. Linear animation, where an element moves at the same speed from start to finish, looks mechanical because it has no relationship to physical reality.

The moment I understood easing, my motion work changed completely. Everything I had made before looked stiff. Everything after felt natural.

## What Easing Actually Does

An easing curve defines the relationship between time and progress in an animation. A linear curve is a diagonal line — equal progress per unit of time. An ease-in curve is shallow at the start and steep at the end — the element starts slowly and accelerates. An ease-out curve is steep at the start and shallow at the end — the element starts fast and decelerates.

An ease-in-out combines both: slow start, fast middle, slow end. This is the most natural-feeling motion for most UI and graphic design animations because it most closely resembles how physical objects move.

## The Four Curves I Use Most

**Ease Out** — for elements entering the frame. They arrive with momentum and settle. A card dropping into position, a headline appearing from off-screen. The fast start suggests it was in motion before we saw it.

**Ease In** — for elements leaving the frame. They start slowly and accelerate away. This feels like a natural departure — a slight hesitation before committing to the exit.

**Ease In Out** — for elements moving within the frame. They accelerate into the motion and decelerate out of it. This works for any movement where the element stays visible through the full animation.

**Custom Curves** — when none of the defaults feel right. I use the Bezier curve editor in After Effects constantly. A bounce-like overshoot, an elastic settle, a sharp anticipation before a motion — these require custom curves.

## Overshoots and Anticipation

Two motion principles from classic animation that translate directly to motion graphics:

An **overshoot** means the element goes slightly past its target position before settling back. This creates elasticity and personality. It says the element has mass. Used subtly — just a few percent past the destination — it makes branded animations feel premium.

**Anticipation** means a small movement in the opposite direction before the main motion. Before a headline slides right, it nudges slightly left. This is more useful in character animation than in graphic design, but understanding it helps explain why some animations feel more alive than others.

## Duration and What It Communicates

Fast animations feel energetic, modern, confident. Slow animations feel luxurious, deliberate, heavy.

Most graphic design animations should be faster than you think. The sweet spot for a simple element transition is 200–400 milliseconds. Anything over 600ms starts to feel slow. Anything under 150ms can feel abrupt.

For complex multi-element sequences, I stagger elements by 50–100ms intervals. This creates a cascade effect where each element arrives fractionally after the previous one, building the composition piece by piece.

## The Test

I always watch my animations at half speed to evaluate the easing. Problems that are invisible at normal speed become obvious in slow motion: a brief pause before motion starts, a moment where two elements are moving at the same linear speed, an exit that feels abrupt.

Fix it at half speed. Watch it at full speed. If it feels natural at full speed, it's done.

Easing is not a technical detail. It's the difference between motion that communicates and motion that just moves.
