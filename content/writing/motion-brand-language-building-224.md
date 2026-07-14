---
title: "Motion Design for Brand: Building a Motion Language from Scratch"
description: "How I develop a coherent motion personality for a brand that's never had one."
date: "2022-11-19"
tags: ["motion design", "brand identity", "motion graphics"]
draft: false
---

## Most brands have no motion language

Static brand identity systems are common. Motion brand identity systems are rare. Most brands that have existed for more than a decade developed their visual identity in an era when motion was limited to broadcast television — expensive, specialized, and not part of most brand budgets.

Today, every brand has motion touchpoints: website transitions, social media content, presentation animations, app interfaces. But most brands are approaching these touchpoints without any systematic thinking about how they should move. The result is inconsistency that undermines brand coherence in exactly the contexts where audiences spend the most time.

## Translating static personality to motion principles

The starting point for any motion brand language is the existing static identity. A brand's visual personality — expressed in its typeface choices, color relationships, and mark construction — contains implicit motion principles that I work to make explicit.

A brand that's angular, precise, and geometric in its static identity should have a motion language that reflects those qualities: linear transitions, mechanical timing, no overshoot or organic settling. A brand that's warm, rounded, and humanist should have motion that breathes and settles — gentle ease-outs, slight anticipation, a sense of weight.

These mappings aren't mechanical, but they're directional. The motion language should feel like it belongs to the same design mind that created the static identity.

## The four motion properties

When I'm building a motion language, I define four core properties: timing, easing, directionality, and choreography.

Timing is the duration of standard transitions — I usually establish a short (100-200ms), medium (300-400ms), and long (600-800ms) duration value. Easing is the acceleration curve that governs how elements accelerate and decelerate. Directionality is whether elements typically enter and exit from specific directions — a brand might always enter from the bottom and exit to the top, or always move horizontally. Choreography is the relationship between multiple elements moving together — whether they move in unison, cascade, or interact with each other.

## Documenting with code or video references

Motion principles that are documented only in words are almost impossible to implement consistently. "Smooth and elegant" means nothing to an animator without a reference. I always document motion principles with either video references — short clips showing the exact quality I mean — or, for digital applications, with code specifications (CSS easing values, specific duration values in milliseconds).

For digital-native brands, I provide CSS custom property specifications: `--motion-duration-standard: 350ms; --motion-easing-enter: cubic-bezier(0.0, 0.0, 0.2, 1.0);`. These are directly implementable and leave no room for subjective interpretation.

## Starting with the logo animation

When introducing motion to a brand system, I start with the logo animation. It's the most visible and most repeated animation the brand will have, and it sets the motion personality more clearly than any other single element. Get the logo animation right and the motion language for everything else follows from it.
