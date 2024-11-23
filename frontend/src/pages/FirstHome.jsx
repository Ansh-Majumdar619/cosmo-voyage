import React, { useState, useRef, useEffect } from 'react';
import '../styles/FirstHome.css';
import { Link } from 'react-router-dom';
import { useGsapScroll } from '../utils/gsapScrollSetup';

const FirstHome = () => {
  const [isPlaying, setIsPlaying] = useState(true); // State for audio play/pause
  const audioRef = useRef(null); // Reference to the audio element

  // Automatically play audio when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
    }
  }, []);

  // Function to toggle play/pause
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio
      } else {
        audioRef.current.play(); // Play the audio
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  useGsapScroll();

  return (
    <div className="container-fluid">
      {/* Background Color Instead of Video */}
      <div className="background-color"></div>

      {/* Content Section */}
      <div className="content">
        <div className="scrollable-box shadow-lg">
          {/* Logo Inside Black Box */}
          <div className="logo-container">
            <img
              src="../assets/images/COSMO LOGO.png"
              alt="Cosmo Voyage Logo"
              className="box-logo mb-3"
            />
            {/* Play/Pause Button for Audio */}
            <button className="audio-button" onClick={toggleAudio}>
              <img
                src={
                  isPlaying
                    ? "../assets/icons/play button.png" // Speaker On Icon
                    : "../assets/icons/pause button.png" // Speaker Off Icon
                }
                alt={isPlaying ? "Speaker On" : "Speaker Off"}
                className="speaker-icon"
              />
            </button>
          </div>

          {/* Audio Element */}
          <audio ref={audioRef} loop>
            <source src="../assets/music/interstellar.mp3" type="audio/mp3" />
          </audio>

          {/* Flex Container for Text and Image */}
          <div className="flex-container">
            {/* Left Box for Text */}
            <div className="left-box">
              <h2>TAKING HUMANS TO SPACE</h2>
              <p>
                Cosmo Voyage is an ambitious space exploration initiative dedicated to making human space travel a reality. With cutting-edge technology and an unwavering commitment to innovation, Cosmo Voyage is paving the way for humanity to explore the final frontier. Our mission is to provide an extraordinary opportunity for people to experience the wonder of space, offering unparalleled journeys that take you beyond Earth's atmosphere.
              </p>
            </div>

            {/* Right Box for Image */}
            <div className="right-box">
              <img
                src="../assets/images/astro4.png"
                alt="Space Journey"
                className="right-image"
              />
            </div>
          </div>

          {/* New Section */}
          <div className="circle-container">
            <div className="circle">
              <img src="../assets/images/rocket launch.jpg" alt="Satellite" className="circle-image" />
            </div>
          </div>

          <div className="third-container">
            <div className="leftbox2">
              <h2>FALCON 9</h2>
              <p>Redefining Boundaries, Exploring Infinite Cosmos.</p>
            </div>

            <div className="rightbox2">
              <img
                src="../assets/images/rocket blast.jpg"
                alt="Space Journey"
                className="right-image2"
              />
            </div>
          </div>

          <div className="fourth-container">
            <div className="fourth-1">
              <h1>199</h1>
              <h4>TOTAL LAUNCHES</h4>
              <img
                src="../assets/images/white line.png"
                alt="whiteline"
                className="whiteline"
              />
            </div>

            <div className="fourth-2">
              <h1>256</h1>
              <h4>TOTAL LANDINGS</h4>
              <img
                src="../assets/images/white line.png"
                alt="whiteline"
                className="whiteline"
              />
            </div>

            <div className="fourth-3">
              <h1>87</h1>
              <h4>TOTAL REFLIGHTS</h4>
              <img
                src="../assets/images/white line.png"
                alt="whiteline"
                className="whiteline"
              />
            </div>
          </div>

          <div className="fifth-container">
            <div className="fifth-1">
              <h4>COSMO USES</h4>
              <h1>SATELLITES</h1>
              <p>
                Cosmo is designed to deliver satellites further and at a lower marginal cost per launch than our current Falcon vehicles. With a payload compartment larger than any fairing currently in operation or development, Cosmo creates possibilities for new missions, including space telescopes even larger than James Webb.
              </p>
            </div>

            <div className="fifth-2">
              <img
                src="../assets/images/rocket1.png"
                alt="Space Journey"
                className="fifth-image"
              />
            </div>
          </div>

          <div className="sixth-container">
            <div className="sixth-1">
              <img
                src="../assets/images/dribble vector.png"
                alt="Space Journey"
                className="sixth-image"
              />
            </div>

            <div className="sixth-2">
              <h1>Take Me to the Moon... and Back (Please!)</h1>
              <p>
                Ready to escape the daily grind? Join the Cosmo Voyage and embark on a galactic adventure so thrilling, you might just forget Earth exists. From the chaos of "total landings" to the unpredictability of "reflights," we’ve got you covered—though, honestly, we hope the spacecraft doesn't need to relaunch again. It's the ultimate interstellar getaway, complete with breathtaking views, random space anomalies, and a 3% chance you’ll run into an alien. Pack your bags (and possibly your sense of humor) for the ride of a lifetime!
              </p>
              <Link to="/signup">
                <button className="adventure-button">Blast Off to Adventure!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstHome;