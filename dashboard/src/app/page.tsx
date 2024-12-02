import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomeDashboard from "@/components/Dashboard/HomeDashboard";
import {Metadata} from "next";

export const metadata: Metadata = {
    title:
        "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Home Micro-Backend Dashboard",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <HomeDashboard />
            </DefaultLayout>
        </>
    );
}