/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed `output: 'export'` to allow dynamic API routes

  experimental: {
    serverActions: {}, // ✅ must be an object now!
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
