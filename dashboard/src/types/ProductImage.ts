// TypeScript interface for ProductImage
import {ProductImageMetadata} from "@/types/ProductImageMetadata";

export interface ProductImage {
    url: string;
    altText: string;
    title?: string;
    type: ImageType;
    metadata: ProductImageMetadata;
    createdAt: Date;
    updatedAt: Date;
}

