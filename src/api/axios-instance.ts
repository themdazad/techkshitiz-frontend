import axios from "axios";

// Base URL from environment variables or default to localhost
// const API_BASE_URL = "http://localhost:3000/api";
const API_BASE_URL = "https://techkshitiz-backend.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Set a timeout of 5 seconds
});

export default api;