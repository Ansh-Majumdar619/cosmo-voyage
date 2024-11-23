import React from 'react';
import '../styles/SecondHome.css';
import AstronautModel from '../components/models/FloatingAstronaut';
// import Footer from './Footer';


const Home = () => {


  return (
    <>

      <div className="home">
        <div className="model-container">
          <AstronautModel />
        </div>

        <div className='box-1'>
          <h1>Voyage Through the Cosmos, Experience the Extraordinary.</h1>
        </div>

        <div className="box-2">
          <p>Ready to explore the cosmos? Dive into the unknown and discover the wonders of space.</p>
        </div>

        <div className='page1'>
          <h2>CHECK OUT WHERE WE'VE BEEN TRAVELLING</h2>

          <div className="container mt-4">
            <div className="row justify-content-center" style={{ marginTop: '70px' }}>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card" style={{ width: '100%' }}>
                  <img src="../assets/images/girl in mars.jpg" className="card-img-top" alt="Astronaut on Mars" />
                  <div className="card-body">
                    <p className="card-text">
                      Explore the captivating view of an astronaut standing on the red planet, Mars. This stunning image captures the essence of space exploration, showcasing the vast, rocky landscape beneath a striking Martian sky.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card" style={{ width: '100%' }}>
                  <img src="../assets/images/pexels2.jpg" className="card-img-top" alt="Mars Landscape" />
                  <div className="card-body">
                    <p className="card-text">
                      Embark on an unforgettable adventure with Cosmo Voyage as we take travelers beyond Earth to the majestic red landscapes of Mars. Our recent expedition was a groundbreaking journey, offering passengers the chance to explore Mars up close.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card" style={{ width: '100%' }}>
                  <img src="../assets/images/pexels.jpg" className="card-img-top" alt="Space Adventure" />
                  <div className="card-body">
                    <p className="card-text">
                      The astronaut, clad in a state-of-the-art spacesuit, symbolizes humanity's quest for knowledge and adventure beyond Earth. This artwork inspires dreams of interplanetary travel and ignites curiosity about what lies beyond our world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container p-3 my-4" style={{ backgroundColor: '#DDDBCB', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '100vh' }}>
          <div className="row align-items-center h-100">

            {/* <!-- Left Column for Image --> */}
            <div className="col-md-4 text-center">
              <img src="../assets/images/pexels3.jpg" alt="Description of image" style={{ width: '100%', borderRadius: '8px' }} />
            </div>

            {/* <!-- Right Column for Content --> */}
            <div className="col-md-8 p-0" id="sidetext">
              <h2 className="heading" style={{ marginBottom: '2rem', marginLeft: '20vw' }}>WHY WE'RE COOL</h2>
              <p className="paragraph" style={{ marginBottom: '1rem', padding: '0 2vw', marginLeft: '5vw' }}>
                At Cosmo Voyage, we do more than just journey beyond Earth; we craft experiences that resonate with the heart of exploration and wonder. Our travelers don’t just witness the vast beauty of space—they immerse themselves in it, breathing in the boundless charm of the cosmos.<br />

                Imagine gazing at the Martian sunsets or drifting alongside a constellation, feeling the hum of distant stars. Our journeys are designed to be a harmonious blend of adventure and tranquility, where every voyage unravels a new chapter of the universe. With cutting-edge technology, unparalleled safety, and personalized experiences, we bridge dreams with reality.<br />

                Cosmo Voyage is not just about seeing the cosmos; it's about becoming a part of it. Our commitment to sustainable space travel, coupled with our drive to push the boundaries of possibility, makes each voyage an intimate journey to the farthest reaches of human aspiration.<br />

                Embark with Cosmo Voyage and let the stars become your guides, as we redefine cool by taking you where no one else can—across the infinite canvas of the universe. 🌠
              </p>
            </div>

          </div>
        </div>


        {/* <Footer /> */}
      </div >
    </>
  );
};

export default Home;