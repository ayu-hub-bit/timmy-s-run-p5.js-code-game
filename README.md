# Timmy-s-Run-P5.JS-Code-Game

https://editor.p5js.org/Ayu26-cpu/sketches/0fqrKGmAi

Timmy's Run - Dynamic Interface Responsiveness & Sensory Load Sandbox

## 📋 Project Overview
Timmy's Run is a high-speed, canvas-based interactive project developed using the p5.js library. Rather than functioning purely as a casual arcade game, this repository serves as a technical testing environment to evaluate how quickly users process visual data streams and how smoothly software handles rapid inputs under tight time constraints.

The primary objective was to build a stable, fluid script that balances high-speed obstacle rendering with immediate user control validation.

---

## 🔬 Cognitive UX & Software Testing Frameworks Applied
The architecture of this simulation was analyzed and refined using user research guidelines and functional logic testing:

### 1. Managing User Attention & Sensory Load
Because the speed increases over time, the interface was designed to protect the user from feeling overwhelmed or frustrated:
* **Visual Data Chunking:** Standardized obstacle spacing and item sizing to respect the limits of human **Working Memory**, ensuring users can naturally calculate safe pathways ahead of time.
* **Clear Asset Separation & Foreground Contrast:** Calibrated color layers to make sure moving objects stand out sharply against the background, completely eliminating hidden visual clutter.
* **Goal-Directed Focus:** Kept the primary movement paths free of unnecessary decorative elements, maximizing the user's ability to focus on immediate goals during high-speed sections.

### 2. Interface Feedback & Usability Controls
To keep the interaction loop fair and reliable, system status tracking was matched directly to real-time player actions:
* **Real-Time Action-to-Screen Feedback:** Optimized the core rendering loops so that score counters and event triggers update instantly, giving the user immediate visual confirmation of their actions.
* **Clear State Transitions:** Programmed distinct, obvious screen updates for system resets, ensuring the user immediately knows when a trial ends and a new session begins.

### 3. Boundary Tracking & Unpredictable Input Testing
To guarantee software stability under frantic or accidental interactions, the runtime logic was put through manual quality checks:
* **Pixel-Perfect Contact Telemetry:** Tested coordinate intersection boundaries ($X/Y$ bounding boxes) to ensure hit detection works flawlessly without clipping or physics calculation failures.
* **Unpredictable Input & Stress Testing:** Simulated extreme button-mashing during mid-air frames to ensure the system handles rapid, chaotic user inputs smoothly without crashing or lagging the script execution loop.
