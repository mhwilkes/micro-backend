import {Product} from "@/types/Product";

export interface Attribute {
    id: number;
    type: string;
    value: string;
    products?: Set<Product>; // Assuming a bidirectional relationship
}