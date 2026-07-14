---
title: "Motion Graphics: Timing Is Everything"
description: "How I think about timing and easing in motion design as the primary carriers of character."
date: "2019-03-28"
tags: ["motion graphics", "motion design", "animation"]
draft: false
---

Every designer who transitions from static to motion goes through the same revelation: the timing is the design. You can have beautiful shapes, perfect color, and impeccable composition, but if the timing is wrong, the motion feels wrong. And feeling wrong in motion is worse than looking wrong in static — the viewer can't look away and let it improve.

Timing in motion is what spacing is in typography. It's the invisible structure everything hangs on.

## The Easing Vocabulary

Linear motion looks mechanical and wrong because nothing in the physical world moves linearly. Real objects accelerate and decelerate. They have inertia. They overshoot and settle. Easing is how motion design borrows the physical world's visual grammar to create motion that feels believable.

The basic easing vocabulary:

**Ease in:** Slow start, fast end. Feels like something gathering momentum, or being pulled toward a destination. Good for elements entering from off-screen, or transitions that should feel decisive.

**Ease out:** Fast start, slow end. Feels like something settling, landing, coming to rest. Good for elements arriving at their final position, or state changes that should feel gentle.

**Ease in-out:** Slow start, fast middle, slow end. The most natural-feeling motion — like a car accelerating and then decelerating. Good for most UI animation and transitions.

**Custom curves:** Beyond the standard easing options, precise control over the curve shape allows for specific character. A very extreme ease-out with a slight overshoot creates a bouncy, energetic character. A very gradual ease-in-out creates a slower, more considered quality.

## Duration and Perception

Duration is relative. A 200ms transition on a small element in the corner of the screen feels appropriate. A 200ms transition on a full-screen element feels abrupt and jarring. Duration needs to be calibrated to the scale of the motion and the importance of the moment.

I test duration by watching transitions multiple times at different speeds and asking: does this feel considered, or rushed? Does it give the viewer enough time to register the change without overstaying its welcome?

## Staggering and Sequence

When multiple elements animate together, stagger is one of the most powerful tools available. Offsetting the start time of each element's animation by a consistent small interval creates a sense of choreography and rhythm that reads as intentional and controlled.

The interval needs to be consistent to feel designed and varied enough to be perceptible. Too tight and the elements feel simultaneous. Too loose and they feel disconnected.

## Building a Motion Language

For brand motion work, I develop a motion language before designing specific pieces — a set of characteristics that define how this brand moves. The easing curves, the typical durations, the types of transitions, the characteristic behaviors.

A motion language is to animation what a type system is to typography. It defines the vocabulary of choices so that any motion piece made within the system feels like it belongs to the same brand.
