import {Category} from './Category';
import {Attribute} from './Attribute';
import {Promotion} from './Promotion';

export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrls?: string[];
    stockLevel: number;
    availability: boolean;
    category?: Category;
    attributes?: Set<Attribute>; // Relationship with attributes
    promotions?: Set<Promotion>; // Relationship with promotions
}