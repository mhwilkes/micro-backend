// TypeScript interface for Product
import {ProductImage} from "@/types/ProductImage";

export interface Product {
    id: number
    name: string;
    description?: string;
    price: number; // Using number to represent price; consider Decimal.js for precision
    images: ProductImage[];
    createdAt: Date;
    updatedAt: Date;
}