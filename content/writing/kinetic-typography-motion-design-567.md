---
title: "The Physics of Kinetic Typography in Motion Design"
description: "Making type move well requires understanding how letterforms behave as physical objects — weight, momentum, and gravity all apply."
date: "2024-01-24"
tags: ["motion design", "typography", "motion graphics"]
draft: false
---

## Type Is Not Weightless

When I animate type, I think about it as having physical properties: weight, momentum, inertia. Letterforms that feel like they have mass move differently from letterforms that feel weightless. The difference between the two is the difference between motion that feels real and motion that feels like a software demonstration.

This isn't metaphor. It's a practical framework for making easing and timing decisions. A heavy slab serif headline should behave like something heavy. A delicate thin-weight italic should behave like something light. The typography's physical character should be reflected in its motion character.

## Weight and Easing

Heavy letterforms — bold, extended, condensed with thick strokes — should ease in with momentum. They start slow, build speed, and hit their target with force. The ease-in curve should be steep toward the end, reflecting the momentum of a heavy object in motion.

They should also land. When a heavy letterform reaches its target position, there may be a slight overshoot — a small amount of travel past the target, then a settle back. This overshoot is what creates the sensation of weight. A perfectly positioned letter with no overshoot feels like it was placed, not like it arrived.

Light letterforms — thin weights, condensed scripts, delicate serifs — can be more nimble. Quicker eases, smaller overshoots or none. They respond faster to forces and change direction more readily.

## Gravity and Baseline

In physical reality, objects fall. Gravity is constant and pervasive. In kinetic typography, the baseline is like the floor — the natural resting place for letterforms.

Type that drops to its baseline from above should accelerate as it falls, arriving quickly at the end of its descent (ease-in for the Y-axis). Type that rises from below the baseline should decelerate as it arrives, like something thrown upward and reaching the peak of its arc (ease-out).

When type breaks these expectations — floating up without gravity's pull, or moving horizontally without inertia — it feels unreal. Sometimes that unreality is the effect you want. But it should be intentional.

## Individual Letters vs. Words vs. Lines

One of the expressive choices in kinetic typography is whether to animate by letter, by word, or by line. Each has different implications:

**Letter-by-letter** animation creates the most granular control and the most expressive range. It's slow to produce and requires careful attention to stagger timing. It can feel playful, labored, or mechanical depending on execution.

**Word-by-word** animation is a good middle ground. It maintains reading rhythm — we naturally read in word units — while allowing meaningful stagger and sequencing.

**Line-by-line** animation is the cleanest and most legible for complex text. It maintains the typography's integrity as a block and is appropriate for more formal contexts.

## The Reading Speed Problem

Animated text has to move at a speed the viewer can read. This sounds obvious but is constantly violated in practice. The duration of each text element on screen must be sufficient for comfortable reading.

A rough guide: words need a minimum of about 300ms per word to be readable. A five-word phrase needs at least 1.5 seconds of display time before exit. For complex sentences, more.

When in doubt: slow down. A viewer who can't read the text has received nothing. Speed impresses no one if the content doesn't land.
