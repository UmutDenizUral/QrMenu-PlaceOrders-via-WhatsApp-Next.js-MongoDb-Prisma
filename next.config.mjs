/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                // pathname'i isteğe bağlı olarak belirtebilirsiniz
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
