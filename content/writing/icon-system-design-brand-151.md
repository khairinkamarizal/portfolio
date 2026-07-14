---
title: "The Icon System: Designing Visual Language at Small Scale"
description: "A coherent icon system is harder to design than most people expect — and more valuable to a brand than most people realize."
date: "2021-02-03"
tags: ["brand identity", "visual identity", "graphic design"]
draft: false
---

## Icons Are Not a Finishing Touch

Icon systems get treated as production work — something to knock out at the end of a project after the "real" design decisions have been made. That's backwards. A well-designed icon system is a genuine visual language that extends and reinforces the brand's identity. Done poorly, it undermines even a strong primary identity.

I treat icon system design as a design discipline in its own right.

## Establishing the Visual Language

Before drawing a single icon, I establish the visual language the system will use. This includes: the grid size the icons are built on, the stroke weight (consistent across all icons), the corner radius (sharp, slightly rounded, or fully rounded), the cap style (butt, round, or square), and the overall metaphor approach (outline icons, filled icons, or a combination).

These decisions need to be made before drawing begins. If they're made incrementally as each icon gets added, the system loses coherence.

## Grid and Geometry

Icons are built on a pixel grid. The standard export sizes (16px, 24px, 32px) determine what the grid needs to be. Elements that fall on grid lines render sharply. Elements that fall between grid lines look blurry and soft.

I design icons on a 24px or 32px grid, with all key points snapping to whole-pixel positions. When icons are exported at smaller sizes, I redraw them for that size rather than just scaling down — fine details disappear at small sizes, and the redraw ensures the simplified form reads correctly.

## Consistency vs. Expression

Every icon in the system needs to follow the same visual rules. This sounds obvious, but it's surprisingly easy to drift when you're drawing dozens of icons. The 37th icon should use the same stroke weight, the same corner radius, the same approach to perspective as the first.

I review the system periodically in a grid view while drawing, looking for consistency across the whole set rather than evaluating each icon in isolation.

## Metaphor Selection

What object or concept should represent each function? This is often harder than the drawing itself. The best icon metaphors are widely understood, not culturally specific, and visually distinct from other icons in the system.

When an obvious metaphor doesn't exist — abstract concepts are the hard case — I look for concrete representations of the action the icon represents rather than the concept itself.

## Naming and Delivery

Icons need clear, consistent naming conventions. A system with well-named files is maintainable. A system with arbitrary filenames becomes an archaeological dig for developers who need to find the right icon.

I deliver icons in SVG for maximum scalability, with PNG exports at required sizes as supplementary deliverables.
