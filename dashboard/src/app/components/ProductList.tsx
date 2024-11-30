// components/ProductList.tsx
import React from 'react';
import {Product} from '../types/Product';

interface ProductListProps {
    products: Product[];
    onEdit: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, onEdit}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <span>{product.name}</span>
                        {product && product.images && product.images.map((image) => (
                            <img
                                key={image.id}
                                src={image.url}
                                alt="Product preview"
                                className="h-16 w-16 object-cover rounded-lg"
                            />
                        ))}

                        <button onClick={() => onEdit(product)} className="ml-4 text-blue-500">
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;