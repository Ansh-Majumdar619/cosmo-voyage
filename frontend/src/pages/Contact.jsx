import React, { useState } from 'react';
import '../styles/Contact.css';
import { Alert } from 'react-bootstrap';
import API from '../api'; // Importing the API instance

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [numPersons, setNumPersons] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [planetPrice, setPlanetPrice] = useState(0);

  const planetPricing = {
    Moon: 300000,
    Mars: 500000,
    Saturn: 1000000,
    Euphora: 500000,
    'Black Hole': 2000000,
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('age', document.getElementById('age').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('planet', selectedPlanet);
    formData.append('numPersons', numPersons);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('idVerification', document.getElementById('idVerification').files[0]);
    formData.append('passportPhoto', document.getElementById('passportPhoto').files[0]);
    formData.append('price', price);

    try {
      // Send data to backend using the correct API route
      const response = await API.post('/forms/submit', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response.data);
      setShowSuccess(true);
      setShowCancel(false);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowCancel(true);
  };

  const handlePlanetChange = (e) => {
    const planet = e.target.value;
    const perPersonPrice = planetPricing[planet] || 0;
    setSelectedPlanet(planet);
    setPlanetPrice(perPersonPrice);
    setPrice(perPersonPrice * numPersons);
  };

  const calculatePrice = (e) => {
    const persons = e.target.value;
    setNumPersons(persons);
    setPrice(planetPrice * persons);
  };

  return (
    <div className="contact-container mt-5">
      <h2 className="contact-heading my-4">BOOK YOUR DREAM</h2>
      {showSuccess && <Alert variant="success" className="contact-alert">Booking successful! Enjoy your trip to {selectedPlanet}!</Alert>}
      {showCancel && <Alert variant="danger" className="contact-alert">Trip canceled. We hope to see you again!</Alert>}

      <form onSubmit={handleBooking} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="contact-form-label">Name</label>
          <input type="text" className="contact-form-control" id="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="contact-form-label">Age</label>
          <input type="number" className="contact-form-control" id="age" min="1" max="120" required />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="contact-form-label">Date of Travel</label>
          <input type="date" className="contact-form-control" id="date" required />
        </div>

        <div className="mb-3">
          <label htmlFor="planet" className="contact-form-label">Choose Destination</label>
          <select className="contact-form-control" id="planet" onChange={handlePlanetChange} required>
            <option value="">Select Your Destination</option>
            <option value="Moon">Moon - $300,000 per person</option>
            <option value="Mars">Mars - $500,000 per person</option>
            <option value="Saturn">Saturn - $1,000,000 per person</option>
            <option value="Euphora">Euphora - $500,000 per person</option>
            <option value="Black Hole">Black Hole - $2,000,000 per person</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="numPersons" className="contact-form-label">Number of Persons</label>
          <input 
            type="number" 
            className="contact-form-control" 
            id="numPersons" 
            value={numPersons}
            min="1" 
            onChange={calculatePrice} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="contact-form-label">Email Address</label>
          <input type="email" className="contact-form-control" id="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="contact-form-label">Phone Number</label>
          <input type="tel" className="contact-form-control" id="phone" required />
        </div>

        <div className="mb-3">
          <label htmlFor="idVerification" className="contact-form-label">ID Verification</label>
          <input type="file" className="contact-form-control" id="idVerification" required />
        </div>

        <div className="mb-3">
          <label htmlFor="passportPhoto" className="contact-form-label">Passport Size Photo</label>
          <input type="file" className="contact-form-control" id="passportPhoto" required />
        </div>

        {/* Price Section */}
        <div className="mb-3">
          <label htmlFor="price" className="contact-form-label">Total Price</label>
          <input 
            type="text" 
            className="contact-form-control" 
            id="price" 
            value={`$${price.toLocaleString()}`} 
            readOnly 
          />
        </div>

        <button type="submit" className="contact-btn-primary me-2">Book Trip</button>
        <button type="button" className="contact-btn-danger" onClick={handleCancel}>Cancel Trip</button>
      </form>
    </div>
  );
};

export default Contact;
