/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
