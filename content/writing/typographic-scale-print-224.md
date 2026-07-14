---
title: "Building a Typographic Scale for Print"
description: "How I establish a modular scale and why it makes print layouts more coherent."
date: "2022-11-28"
tags: ["typography","print design","scale"]
draft: false
---

Random type sizing is one of the clearest markers of design inexperience. When I see a layout where the headline is 34pt, the subhead is 21pt, the pull quote is 16pt, and the body text is 10pt, I know those numbers were arrived at by dragging a slider until something looked right. There's no underlying logic, no relationship between the sizes.

A modular typographic scale solves this. It's a set of type sizes derived from a mathematical ratio, which means every size in the system is proportionally related to every other size. The result is a layout where the typographic hierarchy feels inevitable rather than arbitrary.

## The Basic Principle

A modular scale is built by choosing a base size and a ratio, then multiplying up and dividing down from that base to generate the scale steps.

The base size is typically the body text size — the most-used size in the layout. For print work, this is usually 9–12pt depending on the typeface and application. The ratio determines how dramatically the scale expands. A tight ratio (1.2 or 1.25) produces subtle jumps between levels. A wider ratio (1.5 or 1.618, the golden ratio) produces dramatic jumps.

Starting from a 10pt base with a 1.333 ratio (a musical fourth): 10, 13.3, 17.8, 23.7, 31.6, 42.2. These become my body text, small subhead, subhead, large subhead, headline, display sizes.

## Why the Math Matters

The proportional relationships in a modular scale mean that type at different levels shares a visual logic even when the sizes feel very different. A 40pt headline and a 10pt body text that are four steps apart in a 1.333 scale feel related in a way that a 40pt and 10pt chosen independently don't.

This relationship doesn't need to be consciously perceived by readers to be effective. They experience the layout as coherent and resolved without knowing why. The underlying math produces a visual harmony that's felt rather than analyzed.

## Adapting to Real-World Constraints

Pure modular scale values — 13.3pt, 17.8pt — aren't always practical. InDesign allows fractional point sizes, but some workflows require whole numbers. I round scale values to the nearest whole or half point when necessary, accepting slight deviations from the theoretical scale in service of practical usability.

I also adjust scale selections based on the typeface. A typeface with a large x-height reads larger at any given point size, so I might drop one scale step for body text. A condensed face with a small x-height might need to move up a step to maintain readability.

## The Baseline Grid Connection

The modular scale and the baseline grid should be designed together. My baseline grid value is always the body text leading, which is itself derived from the scale. If body text is 10/14pt, the baseline grid is 14pt. Heading sizes are then selected from the scale to land on multiples of that baseline increment: a 28pt heading sits on exactly two baseline units.

When this alignment works, the entire typographic system locks together with a geometric precision that produces an almost audible click. Multi-column layouts share baselines. Headings land cleanly. Nothing floats.

## Starting with the Scale

I build the scale before I start layout work. It's a pre-design constraint, not a post-hoc system imposed on decisions already made. Five minutes spent defining a scale at the start of a project saves an hour of "why doesn't this feel right" adjustments at the end.

Write down your six or seven scale values. Label them. Put them in your paragraph styles. Then work exclusively from those styles. The constraint is the point.
