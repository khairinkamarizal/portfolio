---
title: "The Craft of the Graphic Mark: Drawing Curves"
description: "The technical discipline of drawing clean, intentional curves in vector logo work."
date: "2022-06-28"
tags: ["logo design", "graphic design", "logo marks"]
draft: false
---

Clean vector curves are one of the most underappreciated technical skills in logo design. It's entirely possible to produce a logo that looks fine at small sizes and falls apart when scaled to signage — not because the concept is wrong, but because the underlying curves are poorly constructed.

## The Pen Tool Discipline

The Bezier pen tool is the primary instrument for logo construction in Illustrator. Using it well is a skill that requires deliberate practice. The most important principle: minimize anchor points. Every anchor point is an opportunity for a curve to behave unexpectedly. The cleanest curves have the fewest anchors that can describe the shape.

A smooth curve between two points needs exactly two anchors. A curve with a directional change needs three. A circle can be approximated well with four anchors (at the cardinal points). Anything requiring more than this is usually a sign of poor tool technique or unnecessary complexity.

## Handle Length and Direction

Each anchor point on a Bezier curve has two direction handles that control the curve's behavior on each side. The length of the handle determines how much the curve bows; the direction determines where it bows toward.

For the smoothest curves, direction handles on either side of an anchor should be collinear — pointing in exactly opposite directions. A curve where the handles are not collinear creates a cusp: a visible angle or kink at the anchor point.

I evaluate curves at 400-600% zoom to check for cusps and inconsistencies that aren't visible at normal scale but show up clearly on large-format output.

## The Circle Approximation

A true circle cannot be described with Bezier curves — it can only be approximated. The standard four-point Bezier approximation uses a handle length of approximately 0.5523 × the radius. This produces a curve close enough to a circle that the difference is imperceptible in most applications.

For critical circular elements in logo marks — where true circular geometry matters — I use Illustrator's ellipse tool rather than drawing curves by hand. The ellipse tool produces geometrically precise circles; hand-drawn curves produce approximations.

## Optical vs. Geometric Curves

A geometrically perfect arc doesn't always look like the most beautiful curve. Optical refinement — adjusting a mathematically correct curve to look visually correct — is part of the craft.

Type designers do this constantly: the curves in well-crafted letterforms are not geometrically precise ellipses. They're modified to look right optically. The same principle applies to logo marks. I check every curve against the standard of "does this look right" as well as "is this geometrically correct."

## Handoff-Ready Vectors

Before delivering any logo work, I audit the vector files: check for stray anchor points, close all open paths, remove duplicate points, verify smooth transitions at all anchors, and confirm the mark is built from as few anchors as the shape requires. A clean vector file is part of the professional deliverable.
