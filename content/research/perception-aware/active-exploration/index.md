# content/research/perception-aware/active_exploration/index.md
---
title: Energy-constrained Active Exploration with Incremental Perception
summary: An autonomous exploration framework that optimizes target search under energy constraints while leveraging incremental-resolution symbolic perception.
date: '2024-01-02'
image:
  caption: 'Active Exploration Framework'
  focal_point: Smart
  preview_only: false
  width: 60%    # Match the size of your first project

links:
  - icon: file-pdf
    icon_pack: fas
    name: Paper
    url: #paperlink
  - icon: code
    icon_pack: fas
    name: Code
    url: #codelink
---

We consider the problem of autonomous exploration in search of targets while respecting a fixed energy budget. The robot is equipped with an incremental-resolution symbolic perception module wherein the perception of targets in the environment improves as the robot's distance from targets decreases.

## Key Features

- Handles unknown target count and locations
- Respects fixed energy budget constraints
- Implements incremental-resolution perception
- Combines automata-based and MILP-based techniques

## Technical Approach

The framework consists of:

1. **Problem Formulation**
   - Conversion to reward maximization problem
   - Product graph computation (offline)
   - Sequential decision-making under constraints

2. **Solution Method**
   - Mixed-Integer Linear Programming (MILP)
   - Online environment knowledge updates
   - Efficient runtime performance

3. **Implementation**
   - Suitable for moderately-sized grid environments
   - Real-time decision making
   - Dynamic path planning

## Results

The framework demonstrates:
- Efficient online planning capabilities
- Effective target discovery
- Energy-aware exploration strategies
- Robust performance in unknown environments