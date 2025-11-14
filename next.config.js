/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp'], // Prefer WebP format
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School/' : '',
  
  // Cache busting with timestamp-based build ID
  // This ensures every build has a unique ID, preventing browser caching issues
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  // Advanced Performance Features
  compress: true, // Enable gzip compression
  
  // Optimize build output
  swcMinify: true, // Use faster SWC compiler for minification
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
  
  // React compiler optimization
  reactStrictMode: true,
  
  // Experimental features for better performance
  // Note: optimizeCss requires 'critters' package - disabled for now
  experimental: {
    // optimizeCss: true, // Disabled - requires additional package
    optimizePackageImports: ['lucide-react'], // Tree-shake unused icons
  },
  
  // Enable static page generation optimizations
  staticPageGenerationTimeout: 180,
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
            },
          },
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig
