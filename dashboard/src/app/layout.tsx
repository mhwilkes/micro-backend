"use client";
import Loader from "@/components/common/Loader";
import React, {useEffect, useState} from "react";
import "../css/tailwind-theme.css"


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState<boolean>(true);
    // const pathname = usePathname();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? <Loader/> : children}
        </div>
        </body>
        </html>
    );
}
