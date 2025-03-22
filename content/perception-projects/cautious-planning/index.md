---
title: Reactive Planning using Incrementally-Improving Symbolic Perception
summary: Given a mobile robot with incrementally improving perception module, this work addresses the problem of correct-by-construction reactive synthesis for correctly, safely navigating traffic rules. 
tags:
  - Perception-Aware
date: '2024-01-01'
featured: true
show_date: false

image:
  caption: 'Reactive Planning Framework'
  focal_point: Smart
  preview_only: false
  width: 30%

links:
  - icon: file-pdf
    icon_pack: fas
    name: Paper
    url: https://ieeexplore.ieee.org/abstract/document/10160960
  - icon: newspaper
    icon_pack: fas
    name: Article
    url: https://wordpress.lehigh.edu/gsrs/2023/11/29/the-world-through-a-robots-lens-enabling-complex-decision-making-with-the-help-of-reactive-games/
---

<!-- This work presents a step towards utilizing incrementally-improving symbolic perception knowledge of the robot's surroundings for provably correct reactive control synthesis applied to an autonomous driving problem.

## Key Features

- Combines abstract models of motion control and information gathering
- Uses assume-guarantee specifications (a subclass of Linear Temporal Logic) to define and resolve traffic rules
- Introduces a novel "symbolic refinement tree" representation for perception
- Captures incremental knowledge about the environment
- Embodies relationships between various symbolic perception inputs

## Framework Components

### Robot Actions
- Move forward
- Turn Right
- Turn Left
- Slow Down
- Stop

### Observations
- Triangular sign
- Red sign
- Yield sign
- Other car
- No Sign

### Rules
1. If No Sign → Move Forward
2. If Red Sign → Slow Down
3. If Yield Sign → Slow Down then Turn Left/Right

## Implementation

The system demonstrates the efficacy of the proposed approach in synthesizing control inputs even in partially occluded environments. The symbolic refinement tree structure enables:

1. Progressive refinement of perception data
2. Real-time decision making with partial information
3. Safe behavior in uncertain conditions
4. Verified reactive planning

The framework ensures that the autonomous vehicle behaves cautiously while gathering more information about its environment, making it particularly suitable for real-world driving scenarios where complete information may not be immediately available. -->