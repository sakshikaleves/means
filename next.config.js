/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Minification for production
    images: {
      domains: ['example.com'], // Set this if you're using images from external domains
    },
  };
  
  module.exports = nextConfig;
  