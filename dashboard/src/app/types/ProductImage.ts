export interface ProductImage {
    id: number; // Corresponds to BIGINT - primary key
    productId: number | null; // BIGINT, nullable due to the foreign key to products
    height: number; // INTEGER - not null
    width: number; // INTEGER - not null
    sizeInBytes: number; // BIGINT - not null
    createdAt: string; // TIMESTAMP(6) - ISO string format for timestamps
    updatedAt: string; // TIMESTAMP(6) - ISO string format for timestamps
    altText: string; // VARCHAR(255) - not null
    format: 'JPEG' | 'PNG' | 'WEBP' | 'SVG' | 'GIF' | 'NONE'; // ENUM-like constraint for valid formats
    title?: string; // VARCHAR(255), nullable
    type: 'THUMBNAIL' | 'MAIN' | 'GALLERY' | 'ICON' | 'BANNER' | 'NONE'; // ENUM-like constraint for valid types
    url: string; // VARCHAR(255) - unique, not null
}