/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
    }
};

export default nextConfig;
