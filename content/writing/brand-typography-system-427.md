---
title: "Creating a Brand Typography System From Scratch"
description: "A functional type system isn't just two typefaces. It's a complete hierarchy with rules for every context the brand appears in."
date: "2023-07-31"
tags: ["typography", "brand identity", "visual identity"]
draft: false
---

Most brand typography guidelines I've seen consist of two things: "Use TypefaceA for headlines. Use TypefaceB for body copy." That's not a type system. That's a font list. A type system is a complete set of specifications for how typography behaves across every context the brand operates in.

## Why Font Lists Fail

A font list gives you the ingredients but not the recipe. Without knowing the sizes, weights, leading, tracking, and hierarchy relationships, two different designers will produce completely different results using the same typefaces. The brand becomes inconsistent not because people are ignoring the guidelines, but because the guidelines don't contain enough information to produce consistent results.

## The Components of a Real Type System

**Scale.** A defined set of sizes for each typographic level. Not "large, medium, small" but specific point sizes or em values. Heading 1 at 48pt/52pt leading. Heading 2 at 32pt/38pt. Body at 16pt/24pt. Caption at 12pt/16pt. The exact numbers are less important than having numbers that create clear visual distinction between levels.

**Weight allocation.** Which weights are used at which levels. I usually specify no more than three weights in a system: a display weight (Bold or Heavy) for major headlines, a reading weight (Regular or Book) for body copy, and a supporting weight (Medium or SemiBold) for subheads and UI labels. Using more weights than this creates systems that are hard to apply consistently.

**Tracking specifications.** For each typographic level, what tracking adjustment applies. Display headlines often need negative tracking. All-caps elements need positive tracking. Body text stays at default. Specify this explicitly.

**Color application.** Which type levels use the primary brand color, which use neutrals, which can use secondary brand colors. This prevents the common failure mode where every piece of brand communication has random color distribution in text.

**Capitalization rules.** Are headlines sentence case or title case? Are subheads all-caps? Are navigation labels all-caps with wide tracking? These are consistency decisions, not aesthetic ones. Make them explicitly.

## Designing for the Full Range of Contexts

A brand type system needs to handle every context the brand operates in. Print applications, digital screens, presentation decks, social media, environmental signage.

These contexts have different constraints. What works in a print brochure at 10pt body copy doesn't translate to a digital context where minimum readable size is 14px. The system needs to account for this.

I usually design type systems in two registers: print and digital. They share the same typefaces and the same hierarchy logic, but the specific sizes, leading, and occasionally weights are calibrated for each medium.

## The Variable Type Problem

Variable fonts have changed what's possible in type systems, particularly for digital and motion contexts. A variable font with weight, width, and optical size axes can theoretically replace a multi-font family with a single file, while allowing more nuanced calibration for each context.

The practical reality: variable fonts work well in development environments and motion design. They're still not universally well-supported in print workflows and legacy design tools. I use variable fonts in systems where I know the team can implement them, and fall back to traditional multi-weight families where I can't guarantee that.

## Documenting It Properly

The type system documentation should include visual examples of each typographic level, not just specifications. Seeing the hierarchy in action is worth more than reading the numbers. I build a one-page type specimen that shows every level in use, with real-world content.

This specimen becomes the reference point for anyone making brand materials. If it's on the page, it's approved. If it's not on the page, check before doing it.
