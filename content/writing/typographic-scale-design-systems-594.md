---
title: "Understanding Typographic Scale in Design Systems"
description: "A type scale isn't just a list of sizes — it's the proportional logic that makes all your typographic decisions feel related."
date: "2024-05-31"
tags: ["typography", "brand identity", "graphic design"]
draft: false
---

## What a Type Scale Is

A type scale is a set of typographic sizes that follow a consistent proportional relationship. Instead of choosing sizes arbitrarily — 12px, 18px, 24px, 36px, 52px because they feel right — a type scale derives sizes from a mathematical ratio applied to a base size.

The result is a set of sizes that feel harmonically related. When you use them together in a composition, they create proportional coherence that arbitrary size choices can't achieve.

## The Modular Scale

The most principled approach to type scales is the modular scale, developed by Tim Brown and popularized in contemporary design systems. You choose a base size and a ratio, and each step in the scale is the previous step multiplied by the ratio.

Common ratios and their characters:

**1.067 (minor second)** — very tight steps, lots of sizes available. Good for complex systems with many distinct text levels.

**1.125 (major second)** — tight but usable. Subtle hierarchy.

**1.250 (major third)** — the most-used ratio. Creates clear hierarchy without dramatic jumps.

**1.333 (perfect fourth)** — more dramatic steps. Clearer hierarchy with fewer available sizes.

**1.500 (perfect fifth)** — large steps. Very bold hierarchy. Works for display-heavy work.

**1.618 (golden ratio)** — very dramatic jumps. Works for compositions with minimal text levels.

## Building a Scale for a Brand System

I typically build a type scale around a base body text size — usually 16pt or 17pt for screen, 10pt or 11pt for print. Then I apply the ratio in both directions: smaller sizes for captions and labels, larger sizes for headings and display.

For a brand system, I name the scale steps rather than referring to them by size: caption, body, lead, heading-3, heading-2, heading-1, display, hero. The names make the scale usable without requiring designers to memorize specific numbers.

## Why Arbitrary Sizes Are a Problem

Without a scale, every size decision is made independently. The headline is 48pt because it seemed right. The subhead is 32pt because that felt about right. The body is 16pt. The caption is 12pt.

These sizes have no mathematical relationship to each other. They look approximately right in isolation but don't create the proportional coherence a scale would.

Over a full design system — many people, many touchpoints, many templates — arbitrary sizes compound into visual inconsistency. The scale is the guardrail that keeps everyone's decisions in the same proportional world.

## The Scale in Practice

I don't apply a scale robotically. The scale gives me the options; I choose among them based on the specific composition needs.

But having the scale means I'm choosing from a set of harmonically related sizes rather than inventing new ones. The hierarchy emerges from the scale's logic, and the consistency is structural rather than a matter of constant vigilance.

Scale thinking extends beyond type. Spacing, margin sizes, grid proportions — all benefit from the same proportional logic. A design system built on a consistent proportional language at every level produces work that feels unified in ways that can't be easily articulated but are clearly felt.
