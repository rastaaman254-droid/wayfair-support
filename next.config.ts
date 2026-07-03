import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

export default nextConfig
