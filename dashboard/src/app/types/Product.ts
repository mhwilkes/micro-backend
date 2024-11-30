import {ProductImage} from "@/app/types/ProductImage";

// Define the Product interface with TypeScript
export interface Product {
    id: number; // Corresponds to BIGINT - primary key
    name: string; // VARCHAR(255), unique, not null
    description?: string; // VARCHAR(1000), nullable
    price: number; // NUMERIC(38, 2) - not null
    images: Array<ProductImage>
    createdAt: string; // TIMESTAMP(6) - ISO string format for timestamps
    updatedAt: string; // TIMESTAMP(6) - ISO string format for timestamps
}