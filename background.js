// Arrays of eco-friendly phrases for notifications
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

const allEcoPhrases = [
    ...waterConservationPhrases,
    ...plasticPollutionPhrases,
    ...energyConsumptionPhrases
];

// Function to get a random phrase from the combined array
function getRandomEcoPhrase() {
    return allEcoPhrases[Math.floor(Math.random() * allEcoPhrases.length)];
}

// Function to create a notification with a random eco-friendly phrase
function createEcoNotification() {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "extensionicon.png",  // Ensure this is a valid path to your icon
        title: "Eco-Friendly Reminder",
        message: getRandomEcoPhrase(),  // Use the random phrase generator
        priority: 2
    });
}


// Handle notification click to open the popup.html page in a new window
chrome.notifications.onClicked.addListener((notificationId) => {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 400,
        height: 600
    });
});

//notification 
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed. Triggering a test notification.');
    setInterval(() => {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "extensionicon.png",
            title: "Test Notification",
            message: createEcoNotification(),
            priority: 2
        });
    }, 3600000);
});

