---
title: Energy-constrained Active Exploration with Incremental Perception
summary: An active exploration framework that optimizes target search under energy constraints given no prior information.
date: '2024-01-02'
categories:
  - Perception-Aware
image:
  caption: 'Active Exploration Framework'
  focal_point: Smart
  preview_only: true
  width: 10%

links:
  - icon: file-pdf
    icon_pack: fas
    name: Paper
    url: https://ieeexplore.ieee.org/abstract/document/10383606/
---

An active exploration framework that optimizes target search under energy constraints given no prior information. We consider a robot with an incremental-resolution symbolic perception deployed in an environment with known geometry and unknown semantics. Casting this energy-constrained sequential decision-making problem as a flow maximization problem, we leverage tools from optimization and graph theory to efficiently plan online as the robot's knowledge about the semantics of the surroundings is updated. 

<!-- We consider the problem of autonomous exploration in search of targets while respecting a fixed energy budget. The robot is equipped with an incremental-resolution symbolic perception module wherein the perception of targets in the environment improves as the robot's distance from targets decreases.

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
- Robust performance in unknown environments -->