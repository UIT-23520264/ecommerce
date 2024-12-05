/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['ecofriend.vn', 'growgreen.com.vn', 'www.dhresource.com', 'skfoods.vn','onghutco.vn'], // Add the domains you need here
    },
};

module.exports = nextConfig;
