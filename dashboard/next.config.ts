import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',  // Usually no port is required unless you have a custom setup
                pathname: '/**', // Adjust the path as necessary; this allows all paths under this domain
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
