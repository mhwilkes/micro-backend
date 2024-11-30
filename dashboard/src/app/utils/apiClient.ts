import axios from "axios";

const API_URL = 'http://localhost:8080';

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        // Add more headers as needed, like authorization tokens
        // 'Authorization': `Bearer ${YOUR_TOKEN}`,
    },
});

// Optionally, you can set up interceptors for request or response
apiClient.interceptors.request.use((config) => {
    // For example, append authorization token here
    // config.headers['Authorization'] = `Bearer ${YOUR_TOKEN}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Handle response errors globally here
    return Promise.reject(error);
});