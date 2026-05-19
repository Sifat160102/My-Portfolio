/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/My-Portfolio',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
