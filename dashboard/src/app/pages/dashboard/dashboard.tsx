'use client'

import React, {useEffect, useState} from 'react';
import {Product} from "@/app/types/Product";
import {getProducts} from "@/app/services/productService";
import ProductForm from "@/app/components/ProductForm";
import ProductList from "@/app/components/ProductList";
import Layout from "@/app/components/Layout";

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        })();
    }, []);

    const handleEdit = (productId: number) => {
        setEditingProductId(productId);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>
                {editingProductId ? (
                    <ProductForm productId={editingProductId}/>
                ) : (
                    <ProductForm/>
                )}

                <ProductList products={products} onEdit={(product) => handleEdit(product.id)}></ProductList>
            </div>
        </Layout>

    );
};

export default Dashboard;