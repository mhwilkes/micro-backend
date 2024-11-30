import React from "react";
import DashboardLayout from "@/app/components/DashboardLayout";
import './globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
            <DashboardLayout>{children}</DashboardLayout>
        </body>
        </html>
    );
}