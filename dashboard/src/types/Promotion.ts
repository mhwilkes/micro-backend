import {Product} from './Product';

export interface Promotion {
    id: number;
    name: string;
    description?: string;
    discountPercentage: number;
    startDate: Date;
    endDate: Date;
    products?: Set<Product>; // Assuming a bidirectional relationship
}