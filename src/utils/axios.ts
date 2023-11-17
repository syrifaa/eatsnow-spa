import axios from "axios";

export const REST_API_URL = "http://localhost:8000/api/";

export const axiosInstance = axios.create({
  baseURL: REST_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

