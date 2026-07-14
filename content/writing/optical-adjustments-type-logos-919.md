---
title: "Understanding Optical Adjustments in Type-Based Logos"
description: "Why mathematically equal spacing looks wrong, and how I fix it with optical corrections in logo typography."
date: "2025-10-04"
tags: ["typography", "logo design", "type design"]
draft: false
---

## Math Isn't Perception

Here's a thing that surprises a lot of people: if you space all the letters in a wordmark using identical mathematical gaps between each character, the result will look uneven. Some pairs will appear too tight. Others will seem too loose. The letters will seem to wobble rather than march in a confident, unified line.

This is because we perceive the space between letters as the area between their optical edges, not their metric edges. The area between an A and a V looks much larger than the area between two H characters at the same mathematical spacing, because of the diagonal strokes pointing away from each other. To look even, A–V needs to be spaced tighter than H–H.

Optical adjustment — fixing what math gets wrong — is one of the most important and least visible skills in type-based logo design.

## What I'm Correcting For

The main culprits are combinations involving diagonal strokes (A, V, W, X, Y), open-sided letterforms (C, G, S), and round letters (O, Q, D) that extend slightly past their mathematical bounds.

Diagonal-diagonal combinations like WA or AV look gappy because the white space fans outward. I close these up more than the spacing metrics suggest.

Round-round combinations like OO or DO need slightly less space than straight-stroke combinations because the curves reduce the perceptual white area between them.

Combinations where a straight edge faces an open counter — like TA, LA, or LT — have a large void on one side created by the overhanging horizontal stroke. I pull these in aggressively.

## The Process in Practice

I start with the typeface's built-in kerning pairs as a baseline. Good typefaces have thousands of kern pairs built in. They're close, but they're designed for text use at moderate sizes — not for logo use at large scale where every imperfection is magnified.

After applying the built-in kerning, I set the wordmark at roughly 200pt and print it out at 100%. Looking at a physical printout rather than a screen forces me to see it differently. I mark the pairs that look off with a pen, then work through each one in the vector editor.

## Converting to Outlines First

Before I make any optical adjustments, I convert the type to outlines. This gives me direct control over every anchor point and is necessary for any letterform modification. It also means the logo isn't dependent on the typeface being installed on whatever system it's opened on.

I keep a non-outlined version as a working file. The outlined version is the master artwork. This is non-negotiable.

## Beyond Spacing: Optical Weight Correction

Optical correction isn't just about spacing. Some typefaces have weight inconsistencies at logo scale — a stroke that looks consistent at text size reveals itself as slightly heavier or lighter than its neighbors when scaled up to 300pt.

I look for these by converting to grayscale and reducing the logo to about 30% opacity on a white background. Optical weight inconsistencies become much more visible under these conditions. Then I make micro-adjustments to stroke widths directly in the vector paths.

## The Invisible Craft

Nobody who sees a finished wordmark thinks about optical correction. They see a logo that looks confident and right. That invisibility is the whole point. The work of optical adjustment is what turns a typeface setting into a logo — it's the difference between something that looks assembled and something that looks designed.

The hours spent on corrections that nobody consciously notices are among the best hours I spend on a project.
