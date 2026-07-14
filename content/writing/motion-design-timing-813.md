---
title: "Motion Design: Timing Is Everything"
description: "The single most important skill in motion graphics is understanding timing — and most designers learn it too late."
date: "2025-04-02"
tags: ["motion design", "animation timing", "motion graphics"]
draft: false
---

## What Timing Actually Means

When designers new to motion ask me what separates good animation from great animation, my answer is always timing. Not the complexity of the motion path, not the richness of the effects, not the resolution of the render. Timing.

Timing is the relationship between when things happen and how long they take. A logo reveal that takes 600ms feels snappy and confident. The same reveal at 1200ms feels considered and deliberate. At 2400ms it feels slow and uncertain. Same motion, completely different emotional register.

## The Physics Intuition

Good motion timing is grounded in physical intuition. Objects in the real world don't start or stop instantaneously — they accelerate and decelerate. When animation ignores this, it looks wrong even to viewers who can't explain why.

This is what easing curves are for. I almost never use linear easing for anything except very specific mechanical effects. Everything else gets an ease-in-out at minimum, and usually a custom curve tuned to the specific feel I'm after.

For elements entering a composition: ease in slowly, arrive with a slight overshoot and settle. This mimics the physical behavior of something moving toward you and stopping. For elements leaving: quick deceleration into the exit, as if pulled away.

## The 12fps Test

Here's a timing test I use constantly: scrub through the animation at 12fps. At this reduced frame rate, bad timing becomes obvious. If an element appears to jump rather than move, the keyframes are too far apart or the easing is wrong. If a transition looks abrupt at 12fps, it'll look abrupt at 24fps too — just less obviously.

## Staggered Timing

One of the most powerful timing tools I use is staggered animation — offsetting the start times of related elements so they feel like they belong together but move as individuals.

A list of items that all animate in at exactly the same time feels like a data table. The same list with 80ms stagger between each item feels like a living sequence. The difference is trivial to implement and enormous to experience.

The stagger amount matters. Too short and it reads as simultaneity. Too long and it reads as unrelated events. For most work I stay in the 60-120ms range per element.

## Music and Rhythm

When I'm working with a music track, I map the beat structure first. Thirty-second notes, quarter notes, bar boundaries — I lay these out as markers in After Effects before animating anything. Then I time major transitions and arrivals to hit on strong beats.

This isn't rigid. I'll deliberately land something slightly off the beat for tension, or let a transition breathe through a beat for emotional weight. But having the beat map means these are intentional decisions, not accidents.

## The Watch-and-Feel Review

Before any client delivery I do a watch-and-feel review: I play the animation on a real screen at real size, look away, and then look back at the start as if I'm seeing it for the first time. What do I feel in the first three seconds? Does the timing serve that feeling?

If the answer is no, I go back and fix the timing. Everything else can be right and wrong timing will still make it feel off.
