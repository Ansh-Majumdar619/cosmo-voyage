import axios from 'axios';

const API = axios.create({
  baseURL: "https://cosmo-voyage-backend.onrender.com/api", // Replace with your backend URL if hosted elsewhere
});

export default API;
