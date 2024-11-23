import axios from 'axios';

const API = axios.create({
  baseURL: "https://cosmo-voyage-backend.onrender.com", // Replace with your backend URL if hosted elsewhere
});

export default API;
