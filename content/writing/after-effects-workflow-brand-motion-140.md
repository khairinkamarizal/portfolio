---
title: "The After Effects Workflow I Actually Use for Brand Motion"
description: "There's no shortage of advice about motion design tools. Here's the actual workflow I've settled into after years of brand motion work."
date: "2021-12-19"
tags: ["motion design", "motion graphics", "branding"]
draft: false
---

## Why Workflow Matters

Motion design tools are complex, and the way you set up a project affects everything that follows. A poorly organized project becomes a nightmare to revise. A well-structured one lets you iterate quickly and respond to feedback without rebuilding from scratch.

I've iterated on my workflow over many years and many projects. This is what I've settled on.

## Starting in Illustrator

I begin all brand motion work in Illustrator, not After Effects. I build the static versions of every element first — logos, type lockups, graphic elements — in the vector format I'll be importing into AE. This gives me clean, scalable source files and forces me to resolve the static design before introducing motion complexity.

Trying to design and animate simultaneously is a trap. Resolve the design, then animate it.

## Organized Imports

When I import Illustrator files into After Effects, I import as compositions with layer sizes set to document size. This preserves the spatial relationships from the static design and gives me properly sized layers from the start.

I name every layer clearly before it enters After Effects. Untamed layer names ("Layer 47," "Shape Layer 6") make complex projects impossible to navigate.

## Pre-Composing for Reuse

Any element that appears more than once — or that will need to be treated as a unit — gets pre-composed before I start animating. A logo animation that appears in multiple deliverables lives in a single pre-comp that feeds into every sequence. When the animation needs to change, I change it once.

This sounds like preparation overhead. It saves enormous time on any project of real complexity.

## The Motion Library

Over the years I've built a library of motion presets — easing curves, animation presets, transition components — that I reuse across brand projects. These represent animation decisions that have proved effective, calibrated to reflect specific motion design qualities (premium, energetic, clean, etc.).

A custom motion preset library is one of the most valuable assets in a motion design practice. Start building it on your first project and add to it deliberately.

## Rendering and Delivery

I use Media Encoder for rendering, not the AE render queue. It keeps After Effects available during renders and handles format conversion more flexibly. For client delivery, I render master files (usually ProRes or DNxHD for video, PNG sequences for transparent elements) and then transcode to delivery formats as needed.

I never give clients only the compressed delivery format. Masters always get archived.

## Version Control for Motion

I save new versions of project files at significant milestones. Not just as backup — as a record of the design process that I can return to if a direction gets abandoned and then revisited. In a shared project, descriptive version names ("v3-postClient-feedback" not "v3-final-FINAL") prevent confusion.

Organization is the difference between a smooth project and a chaotic one.
