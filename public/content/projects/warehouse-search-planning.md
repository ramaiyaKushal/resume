---
title: Warehouse Search Planning
---
## Warehouse Search Planning
**Tech:** Search Algorithm, A Star Search

**Project:** Warehouse Robot Path Planning with Deterministic and Stochastic Policies  
Built algorithms for a warehouse robot to pick up and deliver boxes efficiently under conditions that included deterministic movement, uneven floor costs, and stochastic motion uncertainty.

**Problem:** The robot had to collect and deliver boxes in the correct order within a grid-based warehouse, navigating around walls and minimizing total delivery costs. Challenges included limited cell access in the deterministic case, additional floor costs in uneven terrains, and uncertain robot movements due to stochastic effects.

**Approach:** Designed efficient search-based algorithms to generate delivery plans under strict viewing constraints. Extended the solution with cost-aware pathfinding (similar to Dijkstra/A*) to handle varying floor costs. For stochastic environments, developed optimal policies that account for motion uncertainty using probability distributions, ensuring reliable pickup and delivery.

**Outcome:** The system produced near-optimal delivery plans with minimal warehouse cell access, adapted to floor cost variations for reduced overall cost, and successfully generated robust stochastic policies that enabled the robot to complete deliveries despite uncertainty.

<div class="media-container">
  <video controls class="media-player">
    <source src="/resume/Videos_RAIT/Warehouse Astar Search.mov" type="video/mp4" />
    <source src="/resume/Videos_RAIT/Warehouse Astar Search.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</div>
