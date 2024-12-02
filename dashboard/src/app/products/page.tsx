import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProductDashboard from "@/components/Dashboard/ProductDashboard";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title:
        "Pyke Dashboard | Products",
    description: "Pyke Dashboard",
};

export default function ProductPage() {
    return (
        <>
            <DefaultLayout>
                <ProductDashboard/>
            </DefaultLayout>
        </>
    );
}