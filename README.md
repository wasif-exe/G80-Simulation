# G80 Simulation

The G80 Simulation is an interactive web-based tool designed to explore the interconnected relationships between global, societal, and environmental factors. It provides a thought-provoking framework for understanding how changes in one area can ripple through the fabric of existence.
---
## Live Demo

You can view and interact with the live demo of the **G80 Simulation** project here:  
[https://wasif-exe.io/G80-Simulation/](https://singular-figolla-57b700.netlify.app/)
## How to Run Locally

---
## Features

- 80 Sliders: Each slider represents a variable (e.g., Political Polarization, GDP, Biodiversity) that influences other variables.
- Dynamic Relationships: Adjusting one slider dynamically updates related sliders based on predefined relationships.
- Responsive Design: Optimized for desktop and mobile devices.
- Modern UI: Clean, intuitive interface with a futuristic aesthetic.
- Thought-Provoking Framework: Encourages users to think critically about the interconnectedness of global systems.

---

## Technologies Used

- HTML: Structure of the simulation.
- CSS: Styling and layout.
- JavaScript: Interactive slider functionality.
- Google Fonts: Custom fonts (Orbitron for titles, Exo 2 for body text).

---

1. Clone the repository:
   git clone https://github.com/your-username/G80-Simulation.git
2. Navigate to the project folder:
   cd G80-Simulation
3. Open the index.html file in your browser:
   - Double-click the index.html file, or
   - Use a local server if needed:
     python -m http.server
     Then navigate to http://localhost:8000 in your browser.

---


## Knowledge Base

The simulation includes **80 variables**, each representing a factor that influences global, societal, and environmental systems. Below is a sample of the knowledge base, detailing how each variable interacts with others:

```json
{
  "political-polarization": {
    "increases": ["mass-surveillance", "racism", "war", "social-media", "military-spending", "corruption"],
    "decreases": ["political-stability", "media-freedom", "democracy", "happiness"]
  },
  "political-stability": {
    "increases": ["happiness", "public-services", "security", "democracy", "economic-regulation", "employment-rate"],
    "decreases": ["migration", "corruption", "war", "political-polarization"]
  },
  "happiness": {
    "increases": ["health", "income-equality", "freedom", "life-expectancy", "public-services", "protected-natural-areas"],
    "decreases": ["burnout", "political-polarization", "wealth-inequality", "corruption"]
  },
  "health": {
    "increases": ["life-expectancy", "happiness", "vaccination", "public-services", "air-quality", "access-to-housing"],
    "decreases": ["pandemic-threat", "burnout", "fossil-fuel", "intensive-agriculture"]
  },
  "protected-natural-areas": {
    "increases": ["biodiversity", "air-quality", "tourism", "clean-water"],
    "decreases": ["intensive-agriculture", "built-up-area", "carbon-emissions"]
  }
}
```

Each variable has two arrays:
- Increases: Factors that are positively influenced by this variable.
- Decreases: Factors that are negatively influenced by this variable.

For example:
- Increasing Political Polarization will increase Mass Surveillance, Racism, and War, but decrease Political Stability, Media Freedom, and Democracy.

---

Credits

This project was inspired by the original artwork and concept created by Fragment[https://fragment.in/artworks/g80/]. Their work provided the foundational ideas for this simulation.

---

License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Final Notes

The G80 Simulation is designed to be both educational and thought-provoking. By exploring the interconnectedness of various global factors, users can gain a deeper understanding of the complex systems shaping our world.

Feel free to contribute, report issues, or suggest improvements! 🌍✨
