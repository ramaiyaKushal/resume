---
title: Solar System Particle Filter
---
## Solar System Particle Filter
**Tech:** Machine Learning, Kalman Filter

**Project:** Particle Filter for Satellite Localization  
Implemented a particle filter to localize a satellite in its home solar system using noisy gravimetric and illumination sensor data, enabling accurate positioning and communication.

**Problem:** The satellite warped back into orbit with unknown position and orientation, limited resources, and only noisy gravitational/illumination measurements available. It needed to determine its location quickly and efficiently to survive and send rescue signals.

**Approach:** Developed a particle filter that initialized candidate satellite positions, updated their weights based on noisy sensor data, resampled iteratively, and modeled orbital motion with Gaussian noise. Combined localization with planetary phase-angle calculations to determine the correct transmission direction.

**Outcome:** The filter localized the satellite within 0.01 AU accuracy, operated under strict CPU time limits, and successfully enabled reliable SOS message transmission to the home planet.

<div class="media-container">
  <video controls class="media-player">
    <source src="/resume/Videos_RAIT/Particle Filter.mov" type="video/mp4" />
    <source src="/resume/Videos_RAIT/Particle Filter.mov" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</div>
