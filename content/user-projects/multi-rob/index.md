---
title: Optimal Control Synthesis with Relaxed Global Temporal Logic Specifications for Homogeneous Multi-robot Teams
summary: A hybrid approach combining automata-based and MILP-based methods for control synthesis of multi-robot teams with relaxable temporal logic specifications.
date: '2024-01-04'  # Adjust date to control display order

image:
  caption: 'Multi-robot Control Synthesis Framework'
  focal_point: Smart
  preview_only: false

links:
  - icon: file-pdf
    icon_pack: fas
    name: Paper
    url: #paperlink  # Add your paper link here
  - icon: code
    icon_pack: fas
    name: Code
    url: #codelink  # Add your code repository link here
---

This work presents a novel approach to control synthesis for homogeneous multi-robot teams, combining temporal logic specifications with formal user preferences for specification relaxation.

## Key Features

- Specification relaxation through Weighted Finite-state Edit Systems
- Hybrid synthesis approach combining:
  - Automata-based methods
  - Mixed Integer Linear Programming (MILP)
- Efficient handling of global temporal logic specifications
- Formal representation of user preferences for relaxation

## Technical Framework

### Relaxed Specification Automaton
- Captures all allowable mission specification relaxations
- Incorporates associated relaxation costs
- Maintains progress tracking towards specification satisfaction
- Handles complex temporal constraints

### MILP Formulation
The framework integrates:
1. Team motion planning
2. Specification satisfaction
3. Relaxation optimization

### Advantages
- Avoids state-space explosion of traditional product-automata
- Maintains explicit progress tracking
- Enables efficient optimization
- Scales well with team size

## Implementation Benefits

The hybrid approach provides:
1. Efficient problem solving
2. Scalable multi-robot coordination
3. Formal guarantees
4. Flexible specification relaxation

## Applications

Particularly suitable for:
- Multi-robot coordination
- Complex mission planning
- Time-critical operations
- Resource-constrained scenarios

## Results

Case studies demonstrate:
- Computational efficiency
- Successful mission completion
- Effective relaxation handling
- Practical applicability to real-world scenarios