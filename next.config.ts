import type {NextConfig} from "next"

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required: GitHub Pages doesn't support Next.js Image Optimization API
  },
}
module.exports = nextConfig
