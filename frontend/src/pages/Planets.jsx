import React, { useEffect, useState } from 'react';
import '../styles/Planets.css';
import { useNavigate } from 'react-router-dom';
import MoonModel from '../components/models/MoonModel';
import MarsModel from '../components/models/MarsModel';
import SaturnModel from '../components/models/SaturnModel';
import EuphoraModel from '../components/models/EuphoraModel';
import BlackModel from '../components/models/BlackHole';

const Planets = () => {
  const [planets, setPlanets] = useState([]); // State to store the fetched planet data
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch planet data from backend on component mount
  useEffect(() => {
    // Fetch data from the backend
    fetch('https://cosmo-voyage-backend.onrender.com/planet/planets')
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error('Error fetching planets:', error));
  }, []); 

  // Function to handle button click and navigate to the contact page
  const goToContactPage = () => {
    navigate('/contact'); // This will redirect to the /contact route
  };

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {/* Moon Section */}
        <section className="planet-section moon">
          <h1>THE MOON</h1>
          <div className="moon-left">
            <p>
              Embark on an unforgettable journey to the Moon, where the extraordinary meets the unknown. Our exclusive Moon Travel Package offers a once-in-a-lifetime experience of lunar exploration. Below are the details:
              <br /><br />
              <strong>Destination:</strong> The Moon<br />
              <strong>Total Days:</strong> 7 days<br />
              <strong>Price:</strong> $300,000 USD<br />
              <strong>Package Includes:</strong><br />
              - Round-trip transportation to and from the Moon<br />
              - Lunar surface exploration with guided tours<br />
              - Spectacular views of Earth from the Moon's surface<br />
              - Space-grade accommodations on the lunar base<br />
              - All meals and activities during the stay<br /><br />
              Book your adventure today and make history as you venture beyond the stars!
            </p>
          </div>

          <div className="moon-right">
            <button onClick={goToContactPage} className="contact-btn">
              Book Now
            </button>

            <div className='model-box'>
              <MoonModel />
            </div>
          </div>
        </section>

        {/* Mars Section */}
        <section className="planet-section mars">
          <h1>THE MARS</h1>
          <div className='mars-left'>
            <p>
              Embark on an exciting journey to Mars, the red planet that has fascinated humanity for centuries. Our Mars Travel Package offers an opportunity to explore the Martian landscape and experience life on the fourth planet from the Sun. Below are the details:
              <br /><br />
              <strong>Destination:</strong> Mars<br />
              <strong>Total Days:</strong> 14 days<br />
              <strong>Price:</strong> $500,000 USD<br />
              <strong>Package Includes:</strong><br />
              - Round-trip transportation to and from Mars<br />
              - Martian surface exploration with guided tours<br />
              - Incredible views of the Martian landscapes and Olympus Mons<br />
              - Space-grade accommodations in Mars' habitat modules<br />
              - All meals and activities during the stay<br /><br />
              Book your mission today and become part of the first group to set foot on Mars!
            </p>
          </div>

          <div className='mars-right'>
            <button onClick={goToContactPage} className="contact-btn">
              Book Now
            </button>

            <div className='model-box'>
              <MarsModel />
            </div>
          </div>
        </section>

        {/* Saturn Section */}
        <section className="planet-section saturn">
          <h1>THE SATURN</h1>
          <div className='saturn-left'>
            <p>
              Embark on a once-in-a-lifetime adventure to Saturn, the majestic gas giant known for its stunning rings. Our Saturn Travel Package offers an incredible opportunity to explore the mysteries of this beautiful planet and its iconic ring system. Below are the details:
              <br /><br />
              <strong>Destination:</strong> Saturn<br />
              <strong>Total Days:</strong> 21 days<br />
              <strong>Price:</strong> $1,000,000 USD<br />
              <strong>Package Includes:</strong><br />
              - Round-trip transportation to and from Saturn<br />
              - Exploration of Saturn's moons, including Titan and Enceladus<br />
              - Stunning views of Saturn's rings and the planet's gas clouds<br />
              - Space-grade accommodations on a Saturn orbiting space station<br />
              - All meals and activities during the stay<br /><br />
              Book your cosmic journey today and witness the grandeur of Saturn's rings up close!
            </p>
          </div>
          <div className='saturn-right'>
            <button onClick={goToContactPage} className="contact-btn">
              Book Now
            </button>

            <div className='model-box'>
              <SaturnModel />
            </div>
          </div>
        </section>

        {/* Euphora Section */}
        <section className="planet-section euphora">
          <h1>THE EUPHORA</h1>
          <div className='euphora-left'>
            <p>
              Explore the mesmerizing planet of Euphora, a world unlike any other. Known for its breathtaking landscapes and ethereal beauty, Euphora offers an otherworldly experience. Here are the details of the Euphora Travel Package:
              <br /><br />
              <strong>Destination:</strong> Euphora<br />
              <strong>Total Days:</strong> 10 days<br />
              <strong>Price:</strong> $500,000 USD<br />
              <strong>Package Includes:</strong><br />
              - Round-trip transportation to Euphora<br />
              - Guided tours of Euphora's surreal landscapes<br />
              - Stunning views of Euphora's glowing twin moons<br />
              - Comfortable accommodations at an interstellar resort<br />
              - All meals and activities throughout the journey<br />
              <br />
              Book your adventure now and be among the first to uncover the secrets of Euphora, the planet of light and wonder!
            </p>
          </div>
          <div className='euphora-right'>
            <button onClick={goToContactPage} className="contact-btn">
              Book Now
            </button>

            <div className='model-box'>
              <EuphoraModel />
            </div>
          </div>
        </section>

        {/* Black Hole Section */}
        <section className="planet-section black-hole">
          <h1>THE BLACK HOLE</h1>
          <div className='black-left'>
            <p>
              Venture into the enigmatic depths of space with our Black Hole Exploration Package. This one-of-a-kind journey takes you to the edge of a black hole, where the laws of physics bend and time dilates. Experience the most intense gravitational forces in the universe while observing the mysteries of space unfold before your eyes. Below are the details:
              <br /><br />
              <strong>Destination:</strong> Black Hole<br />
              <strong>Total Days:</strong> 14 days<br />
              <strong>Price:</strong> $2,000,000 USD<br />
              <strong>Package Includes:</strong><br />
              - Travel to the event horizon of a black hole<br />
              - Expert guidance from top astrophysicists<br />
              - Real-time space data and black hole phenomena observation<br />
              - Spacecraft designed to withstand extreme gravitational forces<br />
              - Onboard educational seminars about black hole science<br />
              <br /><br />
              Prepare yourself for an unforgettable experience that will alter your perception of the universe!
            </p>
          </div>

          <div className='black-right'>
            <button onClick={goToContactPage} className="contact-btn">
              Book Now
            </button>

            <div className='model-box'>
              <BlackModel />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Planets;

  
         
            
          
           
          
          
































