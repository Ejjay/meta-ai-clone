import type { NextConfig } from 'next'
import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    serverActions: true,
  },
  
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'api.unsplash.com',
    ],
  },

  // Headers for API security
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ]
  },

  // Redirects if needed
  async redirects() {
    return []
  },

  // Webpack configuration if needed
  webpack: (config) => {
    return config
  },
}

export default withPWA(nextConfig)