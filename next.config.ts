import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    // basePath: "/next-whatsapp",
    // assetPrefix: '/next-whatsapp/',
    assetPrefix: isProd ? '/next-whatsapp/' : '',
    basePath: isProd ? "/next-whatsapp" : '',
};

export default nextConfig;
