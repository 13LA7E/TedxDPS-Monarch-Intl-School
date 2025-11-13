/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School/' : '',
  
  // Cache busting with timestamp-based build ID
  // This ensures every build has a unique ID, preventing browser caching issues
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  // Optimize build output
  compress: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
