import {Product} from "@/types/Product";

export interface Category {
    id: number;
    name: string;
    parent?: Category;
    products?: Set<Product>; // Assuming a bidirectional relationship
}