import {Product} from '../types/Product';
import {apiClient} from '../utils/apiClient';

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get('/product');
    return response.data;
};

export const getProduct: (id: number) => Promise<Product> = async (id): Promise<Product> => {
    const response = await apiClient.get(`/product/${id}`);
    return response.data;
}

export const updateProduct = async (id: number, product: Product) => {
    await apiClient.put(`/product/${id}`, product);
};

export const submitProduct = async (product: Product) => {
    await apiClient.post('/product', product);
};

// Add other CRUD operations as needed