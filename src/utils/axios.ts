import axios from "axios";

const REST_URL = "http://localhost:8010/api";

const axiosController = axios.create({
    baseURL: REST_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true"
    }
});

export default axiosController;
