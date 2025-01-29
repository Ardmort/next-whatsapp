import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    assetPrefix: '/next-whatsapp/',
    basePath: "/next-whatsapp",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
