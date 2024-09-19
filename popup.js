// Arrays of eco-friendly phrases for each issue
const waterConservationPhrases = [
    "Every drop counts! Turn off the tap when not in use.",
    "Conserve water, save life!",
    "Limit your shower time—water is precious!",
    "Fix leaky faucets to prevent water waste.",
    "Harvest rainwater to reduce your water usage."
  ];
  
  const plasticPollutionPhrases = [
    "Reduce plastic, save the ocean!",
    "Opt for reusable bags—ditch single-use plastic.",
    "Recycle plastic properly to keep beaches clean.",
    "Choose eco-friendly alternatives to plastic bottles.",
    "Refuse plastic straws and utensils."
  ];
  
  const energyConsumptionPhrases = [
    "Turn off lights when you leave a room!",
    "Switch to energy-efficient appliances to save power.",
    "Unplug devices when not in use to reduce energy waste.",
    "Solar power: Harness the energy of the sun!",
    "Lower your energy bill by conserving power."
  ];
  
  // Function to get a random phrase from an array
  function getRandomPhrase(phrasesArray) {
    return phrasesArray[Math.floor(Math.random() * phrasesArray.length)];
  }
  
  // Insert a random phrase into each issue's section
  document.getElementById('waterMessage').innerText = getRandomPhrase(waterConservationPhrases);
  document.getElementById('plasticMessage').innerText = getRandomPhrase(plasticPollutionPhrases);
  document.getElementById('energyMessage').innerText = getRandomPhrase(energyConsumptionPhrases);
  
  // Add event listeners for the buttons
  document.getElementById('waterButton').addEventListener('click', () => {
    learnMore('water');
  });
  
  document.getElementById('plasticButton').addEventListener('click', () => {
    learnMore('plastic');
  });
  
  document.getElementById('energyButton').addEventListener('click', () => {
    learnMore('energy');
  });
  
  // Function to open a new tab with relevant info based on the topic
  function learnMore(topic) {
    let url = '';
  
    if (topic === 'water') {
      url = 'https://dlnr.hawaii.gov/cwrm/planning/conservation/'; // Replace with actual link
    } else if (topic === 'plastic') {
      url = 'https://earth.org/plastic-pollution-in-hawaii/#:~:text=Global%20plastic%20consumption%20has%20reached,surface%20of%20the%20ocean%20waters.'; // Replace with actual link
    } else if (topic === 'energy') {
      url = 'https://energy.hawaii.gov/wp-content/uploads/2011/10/EnergyFactsFigures_Jan2013.pdf'; // Replace with actual link
    }
  
    // Open the selected topic's URL in a new tab
    chrome.tabs.create({ url: url });
  }
  