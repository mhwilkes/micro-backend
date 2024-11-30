// components/ProductForm.tsx

import React, {useEffect, useState} from 'react';
import {getProduct, submitProduct, updateProduct} from '../services/productService';
import {Product} from "@/app/types/Product";
import {ProductImage} from "@/app/types/ProductImage";

type ProductFormProps = {
    productId?: number; // Optional productId prop for editing
};

const ProductForm: React.FC<ProductFormProps> = ({productId}) => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        description: '',
        price: 0,
        images: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    });

    useEffect(() => {
        if (productId) {
            (async () => {
                const existingProduct = await getProduct(productId);
                if (existingProduct) {
                    setProduct(existingProduct);
                }
            })();
        }
    }, [productId]);

    const handleImageChange = (index: number, field: keyof ProductImage, value: any) => {
        const newImages = [...product.images];
        newImages[index] = {...newImages[index], [field]: value};
        setProduct({...product, images: newImages});
    };

    const addImage = () => {
        setProduct({
            ...product,
            images: [
                ...product.images,
                {
                    id: 0,
                    productId: product.id,
                    height: 0,
                    width: 0,
                    sizeInBytes: 0,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    altText: '',
                    format: 'NONE',
                    title: '',
                    type: 'NONE',
                    url: '',
                },
            ],
        });
    };

    const removeImage = (index: number) => {
        const newImages = product.images.filter((_, i) => i !== index);
        setProduct({...product, images: newImages});
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await submitProduct(product);
    };

    const handleUpdate = async (event: React.FormEvent) => {
        event.preventDefault()
        await updateProduct(productId as number, product)
    }

    return (
        <form onSubmit={productId ? handleUpdate : handleSubmit} className="space-y-4">
            <div className="border p-4">
                <h3 className="text-lg font-bold">Product Details</h3>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}
                    required
                    className="block"
                />
                <textarea
                    placeholder="Description"
                    value={product.description || ''}
                    onChange={(e) => setProduct({...product, description: e.target.value})}
                    className="block"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})}
                    step="0.01"
                    required
                    className="block"
                />
            </div>

            <div className="border p-4">
                <h3 className="text-lg font-bold">Images</h3>
                {product.images.map((image, index) => (
                    <div key={index} className="border p-2 mb-4 flex items-center">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={image.url}
                                onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                                required
                                className="block mb-2"
                            />
                            <input
                                type="text"
                                placeholder="Alt Text"
                                value={image.altText}
                                onChange={(e) => handleImageChange(index, 'altText', e.target.value)}
                                className="block mb-2"
                            />
                            <select
                                value={image.format}
                                onChange={(e) => handleImageChange(index, 'format', e.target.value as ProductImage['format'])}
                                className="block mb-2"
                            >
                                <option value="NONE">Select Format</option>
                                <option value="JPEG">JPEG</option>
                                <option value="PNG">PNG</option>
                                <option value="WEBP">WEBP</option>
                                <option value="SVG">SVG</option>
                                <option value="GIF">GIF</option>
                            </select>
                            <select
                                value={image.type}
                                onChange={(e) => handleImageChange(index, 'type', e.target.value as ProductImage['type'])}
                                className="block mb-2"
                            >
                                <option value="NONE">Select Type</option>
                                <option value="THUMBNAIL">Thumbnail</option>
                                <option value="MAIN">Main</option>
                                <option value="GALLERY">Gallery</option>
                                <option value="ICON">Icon</option>
                                <option value="BANNER">Banner</option>
                            </select>
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="text-red-500 mt-2"
                            >
                                Remove
                            </button>
                        </div>
                        <div className="ml-4">
                            <img src={image.url} alt={image.altText} style={{maxWidth: '150px', maxHeight: '150px'}}/>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addImage}
                    className="text-blue-500"
                >
                    Add Image
                </button>
            </div>

            <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded">
                {productId ? 'Update' : 'Submit'}
            </button>
        </form>
    );
};

export default ProductForm;