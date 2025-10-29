---
title: SLAM Simulation
---
## SLAM Simulation
**Tech:** SLAM

**Project:** SLAM and Path Planning for Drone Navigation  
Developed a system for a drone to autonomously map a jungle environment filled with unknown obstacles and navigate to extract a hidden treasure.

**Problem:** The drone entered a dense jungle with no prior knowledge of tree locations and had to rely on noisy sensor measurements. It needed to localize itself, map obstacles, and reach the treasure while avoiding collisions.

**Approach:** Implemented a SLAM algorithm to estimate both drone and tree positions from noisy distance and bearing measurements. Designed a path-planning strategy that used SLAM outputs to generate safe movement commands within turning and distance constraints, checking potential collisions with line–circle intersection tests.

**Outcome:** The system achieved accurate localization within 0.25m, successfully mapped obstacles, and navigated the drone to the treasure without collisions, completing the mission efficiently.

<div class="media-container">
  <video controls class="media-player">
    <source src="/resume/Videos_RAIT/SLAM Video.mov" type="video/mp4" />
    <source src="/resume/Videos_RAIT/SLAM Video.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</div>
