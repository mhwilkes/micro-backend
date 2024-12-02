import axios from 'axios';
import {Product} from "@/types/Product";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/product', // Replace with your actual product service URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchProducts: () => Promise<Product[]> = async (): Promise<Product[]> => {
    try {
        const response = await apiClient.get('/');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};

// You can define more API interactions here