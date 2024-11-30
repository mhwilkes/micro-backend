import Header from './Header';
import Sidebar from './Sidebar';
import React from "react";
import Footer from "@/app/components/Footer";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden pt-16 bg-light-gray">
                <Sidebar/>
                <main className="flex-grow overflow-y-auto bg-white p-8 ml-64">
                    <div className="container mx-auto">{children}</div>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardLayout;