/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School/' : '',
}

module.exports = nextConfig
