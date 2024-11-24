// controllers/planetController.js

// Example data to match the information in Planet.jsx
const planetsData = [
  {
    name: 'Moon',
    description: 'Embark on an unforgettable journey to the Moon...',
    duration: '7 days',
    price: '$300,000 USD',
    packageDetails: [
      'Round-trip transportation to and from the Moon',
      'Lunar surface exploration with guided tours',
      'Spectacular views of Earth from the Moon\'s surface',
      'Space-grade accommodations on the lunar base',
      'All meals and activities during the stay'
    ]
  },
  {
    name: 'Mars',
    description: 'Embark on an exciting journey to Mars...',
    duration: '14 days',
    price: '$500,000 USD',
    packageDetails: [
      'Round-trip transportation to and from Mars',
      'Martian surface exploration with guided tours',
      'Incredible views of the Martian landscapes and Olympus Mons',
      'Space-grade accommodations in Mars\' habitat modules',
      'All meals and activities during the stay'
    ]
  },
  {
    name: 'Saturn',
    description: 'Embark on a once-in-a-lifetime adventure to Saturn...',
    duration: '21 days',
    price: '$1,000,000 USD',
    packageDetails: [
      'Round-trip transportation to and from Saturn',
      'Exploration of Saturn\'s moons, including Titan and Enceladus',
      'Stunning views of Saturn\'s rings and the planet\'s gas clouds',
      'Space-grade accommodations on a Saturn orbiting space station',
      'All meals and activities during the stay'
    ]
  },
  {
    name: 'Euphora',
    description: 'Explore the mesmerizing planet of Euphora...',
    duration: '10 days',
    price: '$500,000 USD',
    packageDetails: [
      'Round-trip transportation to Euphora',
      'Guided tours of Euphora\'s surreal landscapes',
      'Stunning views of Euphora\'s glowing twin moons',
      'Comfortable accommodations at an interstellar resort',
      'All meals and activities throughout the journey'
    ]
  },
  {
    name: 'Black Hole',
    description: 'Venture into the enigmatic depths of space...',
    duration: '14 days',
    price: '$2,000,000 USD',
    packageDetails: [
      'Travel to the event horizon of a black hole',
      'Expert guidance from top astrophysicists',
      'Real-time space data and black hole phenomena observation',
      'Spacecraft designed to withstand extreme gravitational forces',
      'Onboard educational seminars about black hole science'
    ]
  }
];

// Controller function to get planets data
const getPlanets = (req, res) => {
  try {
    res.status(200).json(planetsData);  // Send planets data as response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planets data', error: error.message });
  }
};

module.exports = { getPlanets };
