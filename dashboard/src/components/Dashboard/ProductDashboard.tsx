'use client'
import React, {useEffect, useState} from 'react';
import {fetchProducts} from '@/service/productApiService';
import {Product} from "@/types/Product";
import ProductTable from "@/app/products/ProductTable";

const ProductDashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch {
                setError('Failed to load products');
            }
        };

        getAllProducts();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-4xl text-center font-semibold mb-4 dark:text-gray-100">Product Dashboard</h1>
            <ProductTable products={products}/>
        </div>
    );
};

export default ProductDashboard;