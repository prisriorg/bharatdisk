/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // assetPrefix: '/newnext/'
    // images: { unoptimized: true }
    experimental: {
        runtime: 'edge',
    }
};

export default nextConfig;
