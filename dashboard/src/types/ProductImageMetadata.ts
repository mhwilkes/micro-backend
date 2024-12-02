// TypeScript interface for ProductImageMetadata
import {ImageFormat} from "@/types/ImageFormat";

export interface ProductImageMetadata {
    width: number;
    height: number;
    sizeInBytes: number;
    format: ImageFormat;
}