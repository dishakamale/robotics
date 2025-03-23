---
title: MILP for Control Synthesis with Weighted Signal Temporal Logic
summary: The user preferences for priorities and importances can be formally expressed using Weighted Signal Temporal Logic (wSTL). In this line of work, we propose efficient Mixed Integer Linear Programming formulations for globally optimal control synthesis of wSTL formulae. <p style="color:#00bbff;">This work was invited to special issue of IFAC journal Nonlinear Analysis- Hybrid Systems, 2025.</p>


date: '2023-01-07'  # Adjust date to control display order

image:
 caption: 'wSTL Control Synthesis Framework'
 focal_point: Smart
 preview_only: false

links:
 - icon: file-pdf
   icon_pack: fas
   name: Paper
   url: https://dl.acm.org/doi/abs/10.1145/3575870.3587120

 - icon: file-pdf
   icon_pack: fas
   name: Journal
   url: https://www.sciencedirect.com/science/article/pii/S1751570X25000020
---

<!-- This work introduces a Mixed Integer Linear Programming (MILP) based approach for control synthesis using weighted Signal Temporal Logic (wSTL), extending traditional STL to incorporate user preferences and priorities.

## Key Features

- Extension of Signal Temporal Logic (STL) to weighted STL
- MILP-based synthesis approach
- Support for weighted logical and temporal operators
- Extended semantics for until and release operators
- Global optimization through MILP solvers

## Technical Framework

### wSTL Components
1. **Weighted Operators**
  - Logical operator weights for task importance
  - Temporal operator weights for timing preferences
  - Until and release operator semantics
  - Quantitative semantics modulation

2. **MILP Formulation**
  - Efficient encoding of operators
  - Weighted traditional robustness
  - Global optimization capability
  - Non-convex environment handling

### Advantages over Traditional STL
- User preference integration
- Priority handling for concurrent tasks
- Flexible satisfaction timing
- Global optimization vs. local optima
- Enhanced control synthesis capabilities

## Implementation Details

### Control Synthesis
- Navigation in non-convex environments
- Multiple constraint handling
- Distinct Boolean and temporal operations
- Comparison with standard STL

### Performance Metrics
- Computational efficiency
- Solution optimality
- Complexity analysis
- Runtime comparison

## Applications

Particularly suitable for:
- Robot motion planning
- Multi-task scheduling
- Priority-based control
- Time-sensitive operations

## Case Studies

Our implementation demonstrates:
1. **Functionality Analysis**
  - Boolean operator performance
  - Temporal operator effectiveness
  - Combined operator scenarios


2. **Performance Evaluation**
  - Time complexity analysis
  - Encoding efficiency
  - Solution quality assessment -->