// script.js

// Relationships Object
const relationships = {
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
  "postcolonialism": {
    "increases": ["migration", "culture-funding", "income-equality", "economic-regulation", "access-to-education"],
    "decreases": ["political-stability", "wealth-inequality", "racism"]
  },
  "health": {
    "increases": ["life-expectancy", "happiness", "vaccination", "public-services", "air-quality", "access-to-housing"],
    "decreases": ["pandemic-threat", "burnout", "fossil-fuel", "intensive-agriculture"]
  },
  "protected-natural-areas": {
    "increases": ["biodiversity", "air-quality", "tourism", "clean-water"],
    "decreases": ["intensive-agriculture", "built-up-area", "carbon-emissions"]
  },
  "income-equality": {
    "increases": ["happiness", "minimum-wage", "access-to-education", "public-services", "parental-leave"],
    "decreases": ["wealth-inequality", "financial-speculation", "political-polarization"]
  },
  "public-services": {
    "increases": ["health", "access-to-education", "employment-rate", "commons", "happiness"],
    "decreases": ["corruption", "wealth-inequality"]
  },
  "individualism": {
    "increases": ["innovation", "automation", "economic-regulation"],
    "decreases": ["commons", "access-to-housing", "income-equality"]
  },
  "public-transportation": {
    "increases": ["air-quality", "access-to-housing", "economic-regulation", "employment-rate"],
    "decreases": ["carbon-emissions", "built-up-area", "fossil-fuel"]
  },
  "innovation": {
    "increases": ["artificial-intelligence", "biotechnology", "automation", "3D-printing", "space-exploration"],
    "decreases": ["economic-regulation", "fossil-fuel"]
  },
  "racism": {
    "increases": ["political-polarization", "feminicides", "corruption", "wealth-inequality"],
    "decreases": ["LGBTQIA+-rights", "democracy"]
  },
  "intensive-agriculture": {
    "increases": ["GDP", "global-trade"],
    "decreases": ["biodiversity", "air-quality", "protected-natural-areas"]
  },
  "rare-earth-extraction": {
    "increases": ["innovation", "cryptocurrency"],
    "decreases": ["biodiversity", "air-quality"]
  },
  "LGBTQIA+-rights": {
    "increases": ["freedom", "happiness", "culture-funding", "democracy"],
    "decreases": ["racism", "feminicides"]
  },
  "recycling": {
    "increases": ["commons", "renewable-energy", "clean-water"],
    "decreases": ["carbon-emissions", "fossil-fuel"]
  },
  "life-expectancy": {
    "increases": ["happiness", "health", "public-services"],
    "decreases": ["pandemic-threat", "burnout"]
  },
  "renewable-energy": {
    "increases": ["air-quality", "clean-water", "democracy"],
    "decreases": ["fossil-fuel", "carbon-emissions"]
  },
  "mass-surveillance": {
    "increases": ["security", "political-stability"],
    "decreases": ["media-freedom", "democracy", "freedom"]
  },
  "retirement-age": {
    "increases": ["employment-rate"],
    "decreases": ["health", "parental-leave"]
  },
  "media-freedom": {
    "increases": ["democracy", "culture-funding", "access-to-justice"],
    "decreases": ["mass-surveillance", "corruption", "political-polarization"]
  },
  "sea-level": {
    "increases": ["natural-disasters", "migration", "global-warming"],
    "decreases": ["tourism", "glacier-conservancy"]
  },
  "migration": {
    "increases": ["demography", "global-trade"],
    "decreases": ["political-stability", "employment-rate"]
  },
  "security": {
    "increases": ["political-stability", "public-services", "military-spending"],
    "decreases": ["mass-surveillance", "corruption", "war"]
  },
  "social-media": {
    "increases": ["political-polarization", "racism", "financial-speculation"],
    "decreases": ["media-freedom", "democracy"]
  },
  "military-spending": {
    "increases": ["security", "war"],
    "decreases": ["public-services", "democracy"]
  },
  "minimum-wage": {
    "increases": ["income-equality", "parental-leave"],
    "decreases": ["wealth-inequality", "financial-speculation", "capitalism"]
  },
  "space-exploration": {
    "increases": ["innovation", "global-trade", "GDP"],
    "decreases": ["economic-regulation"]
  },
  "natural-disasters": {
    "increases": ["migration", "global-warming", "war"],
    "decreases": ["tourism"]
  },
  "taxes": {
    "increases": ["public-services", "access-to-education", "commons"],
    "decreases": ["wealth-inequality", "financial-speculation", "capitalism"]
  },
  "nuclear-energy": {
    "increases": ["security", "GDP"],
    "decreases": ["fossil-fuel", "carbon-emissions"]
  },
  "tourism": {
    "increases": ["global-trade", "GDP", "culture-funding"],
    "decreases": ["protected-natural-areas"]
  },
  "open-source": {
    "increases": ["innovation", "democracy", "access-to-education"],
    "decreases": ["capitalism"]
  },
  "vaccination": {
    "increases": ["health", "life-expectancy", "public-services"],
    "decreases": ["pandemic-threat"]
  },
  "paid-vacation": {
    "increases": ["happiness", "health", "income-equality"],
    "decreases": ["burnout"]
  },
  "war": {
    "increases": ["military-spending", "corruption", "wealth-inequality"],
    "decreases": ["political-stability", "public-services", "happiness"]
  },
  "wealth-inequality": {
    "increases": ["political-polarization", "racism", "corruption"],
    "decreases": ["income-equality", "happiness", "minimum-wage"]
  },
  "parental-leave": {
    "increases": ["happiness", "health", "income-equality"],
    "decreases": ["burnout", "capitalism"]
  },
  "pandemic-threat": {
    "increases": ["burnout", "corruption"],
    "decreases": ["vaccination", "health", "public-services"]
  },
  "commons": {
    "increases": ["public-services", "access-to-education", "income-equality"],
    "decreases": ["capitalism", "financial-speculation"]
  },
  "3D-printing": {
    "increases": ["innovation", "automation", "biotechnology"],
    "decreases": ["economic-regulation"]
  },
  "corruption": {
    "increases": ["political-polarization", "wealth-inequality", "financial-speculation"],
    "decreases": ["democracy", "media-freedom", "public-services"]
  },
  "5G": {
    "increases": ["innovation", "cloud-computing", "social-media"],
    "decreases": ["economic-regulation"]
  },
  "cryptocurrency": {
    "increases": ["financial-speculation", "global-trade"],
    "decreases": ["capitalism", "democracy"]
  },
  "access-to-education": {
    "increases": ["happiness", "income-equality", "democracy"],
    "decreases": ["wealth-inequality", "financial-speculation"]
  },
  "culture-funding": {
    "increases": ["democracy", "art", "happiness"],
    "decreases": ["capitalism"]
  },
  "access-to-housing": {
    "increases": ["happiness", "income-equality", "public-services"],
    "decreases": ["migration", "wealth-inequality"]
  },
  "democracy": {
    "increases": ["happiness", "media-freedom", "public-services", "access-to-justice"],
    "decreases": ["political-polarization", "corruption", "war"]
  },
  "access-to-justice": {
    "increases": ["democracy", "happiness", "public-services"],
    "decreases": ["corruption", "financial-speculation"]
  },
  "demography": {
    "increases": ["migration", "global-trade"],
    "decreases": ["political-stability", "war"]
  },
  "air-quality": {
    "increases": ["health", "happiness"],
    "decreases": ["global-warming", "carbon-emissions"]
  },
  "economic-regulation": {
    "increases": ["public-services", "access-to-education", "employment-rate"],
    "decreases": ["innovation", "financial-speculation"]
  },
  "animal-welfare": {
    "increases": ["biodiversity", "happiness"],
    "decreases": ["intensive-agriculture"]
  },
  "employment-rate": {
    "increases": ["GDP", "income-equality", "happiness"],
    "decreases": ["burnout"]
  },
  "art": {
    "increases": ["culture-funding", "happiness", "democracy"],
    "decreases": ["capitalism"]
  },
  "feminicides": {
    "increases": ["political-polarization", "corruption"],
    "decreases": ["LGBTQIA+-rights", "gender-equality"]
  },
  "artificial-intelligence": {
    "increases": ["innovation", "automation", "global-trade"],
    "decreases": ["employment-rate"]
  },
  "financial-speculation": {
    "increases": ["wealth-inequality", "corruption"],
    "decreases": ["income-equality", "public-services"]
  },
  "atheism": {
    "increases": ["freedom", "democracy", "individualism"],
    "decreases": ["postcolonialism"]
  },
  "food-sovereignty": {
    "increases": ["animal-welfare", "biodiversity", "health"],
    "decreases": ["intensive-agriculture", "fossil-fuel"]
  },
  "automation": {
    "increases": ["innovation", "artificial-intelligence", "global-trade"],
    "decreases": ["employment-rate", "individualism"]
  },
  "fossil-fuel": {
    "increases": ["carbon-emissions", "global-warming"],
    "decreases": ["renewable-energy", "air-quality"]
  },
  "biodiversity": {
    "increases": ["protected-natural-areas", "animal-welfare", "food-sovereignty"],
    "decreases": ["intensive-agriculture", "built-up-area"]
  },
  "freedom": {
    "increases": ["happiness", "individualism", "democracy"],
    "decreases": ["mass-surveillance", "corruption"]
  },
  "biotechnology": {
    "increases": ["innovation", "health", "global-trade"],
    "decreases": ["fossil-fuel", "intensive-agriculture"]
  },
  "GDP": {
    "increases": ["innovation", "global-trade", "employment-rate", "capitalism"],
    "decreases": ["corruption", "war", "wealth-inequality"]
  },
  "built-up-area": {
    "increases": ["GDP", "global-trade"],
    "decreases": ["protected-natural-areas", "air-quality"]
  },
  "burnout": {
    "increases": ["pandemic-threat", "political-polarization"],
    "decreases": ["happiness", "health"]
  },
  "gender-equality": {
    "increases": ["happiness", "LGBTQIA+-rights", "access-to-education"],
    "decreases": ["racism", "corruption"]
  },
  "geoengineering": {
    "increases": ["renewable-energy", "clean-water"],
    "decreases": ["global-warming", "fossil-fuel"]
  },
  "capitalism": {
    "increases": ["global-trade", "financial-speculation", "innovation"],
    "decreases": ["income-equality", "commons"]
  },
  "glacier-conservancy": {
    "increases": ["protected-natural-areas", "clean-water"],
    "decreases": ["global-warming", "carbon-emissions"]
  },
  "carbon-emissions": {
    "increases": ["global-warming"],
    "decreases": ["air-quality", "health", "protected-natural-areas"]
  },
  "global-trade": {
    "increases": ["GDP", "innovation", "employment-rate"],
    "decreases": ["income-equality", "political-stability"]
  },
  "clean-water": {
    "increases": ["health", "biodiversity", "protected-natural-areas"],
    "decreases": ["carbon-emissions", "global-warming"]
  },
  "global-warming": {
    "increases": ["sea-level", "natural-disasters", "migration"],
    "decreases": ["protected-natural-areas", "health", "air-quality"]
  },
  "cloud-computing": {
    "increases": ["innovation", "access-to-education", "democracy"],
    "decreases": ["capitalism", "financial-speculation"]
  },
  "GMO": {
    "increases": ["intensive-agriculture", "global-trade"],
    "decreases": ["biodiversity", "animal-welfare"]
  },
  "comfort": {
    "increases": ["happiness", "access-to-housing"],
    "decreases": ["burnout", "migration"]
  },
  "gravitational-constant": {
    "increases": ["space-exploration", "innovation"],
    "decreases": ["war", "fossil-fuel"]
  }
};
  





  // Function to update related sliders
  function updateRelatedSliders(changedSliderId, newValue) {
    const relationship = relationships[changedSliderId];
    if (!relationship) return;
  
    // Calculate percentage change
    const percentageChange = (newValue - 50) / 50; // Normalize around 50%
  
    // Adjust related sliders
    relationship.increases.forEach(id => {
      const slider = document.getElementById(id);
      if (slider) {
        const currentValue = parseInt(slider.value);
        const updatedValue = Math.min(100, Math.max(0, currentValue + percentageChange * 10)); // Limit to 0-100%
        slider.value = updatedValue;
        updateSliderValueDisplay(slider); // Update displayed percentage
      }
    });
  
    relationship.decreases.forEach(id => {
      const slider = document.getElementById(id);
      if (slider) {
        const currentValue = parseInt(slider.value);
        const updatedValue = Math.min(100, Math.max(0, currentValue - percentageChange * 10)); // Limit to 0-100%
        slider.value = updatedValue;
        updateSliderValueDisplay(slider); // Update displayed percentage
      }
    });
  }
  
  // Function to update displayed percentage value
  function updateSliderValueDisplay(slider) {
    const valueSpan = slider.nextElementSibling; // Get the span element
    if (valueSpan && valueSpan.classList.contains('value')) {
      valueSpan.textContent = `${slider.value}%`;
    }
  }
  
  // Function to initialize sliders with random values
  function initializeSliders() {
    document.querySelectorAll('.slider-item input[type="range"]').forEach(slider => {
      // Generate a random value between 0% and 100%
      const randomValue = Math.floor(Math.random() * 101); // Random integer between 0 and 100
      slider.value = randomValue;
  
      // Update the displayed percentage value
      updateSliderValueDisplay(slider);
  
      // Add event listener for user interaction
      slider.addEventListener('input', (event) => {
        const changedSliderId = event.target.id;
        const newValue = parseInt(event.target.value);
        updateRelatedSliders(changedSliderId, newValue);
        updateSliderValueDisplay(event.target); // Update displayed percentage
      });
    });
  }
  
  // Initialize sliders on page load
  document.addEventListener('DOMContentLoaded', () => {
    initializeSliders();
  });