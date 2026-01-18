import axios from "axios";

// Base URL from environment variables or default to localhost
const baseUrl = "http://localhost:3000/api";
// Create and export axios instance
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Set a timeout of 5 seconds
});

export default api;