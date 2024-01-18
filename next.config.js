/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/2023W-frontend-for-nestjs'
}

module.exports = nextConfig
