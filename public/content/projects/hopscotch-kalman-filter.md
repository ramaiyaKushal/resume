---
title: Hopscotch Kalman Filter
---
## Hopscotch Kalman Filter
**Tech:** Machine Learning, Kalman Filter

**Project:** Kalman Filter for Asteroid Navigation  
Implemented a navigation system for a spaceship using a Kalman filter to estimate asteroid positions and plan safe jumps through a cosmic field.

**Problem:** The spaceship could only jump within a limited radius and relied on noisy sensor measurements of asteroid locations. Invalid moves occurred if the ship tried to jump outside its range or beyond the field boundaries.

**Approach:** Built a Kalman filter to predict asteroid trajectories from noisy observations. Designed a traversal algorithm to choose valid asteroids within range and navigate toward the home base.

**Outcome:** The algorithm successfully guided the spaceship across moving asteroids, updating its position with true states after each jump while relying only on noisy observations for planning.

<div class="media-container">
  <video controls class="media-player">
    <source src="/resume/Videos_RAIT/Hopscotch Kalman Filter.mov" type="video/mp4" />
    <source src="/resume/Videos_RAIT/Hopscotch Kalman Filter.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</div>
