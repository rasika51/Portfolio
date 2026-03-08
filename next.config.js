/** @type {import('next').NextConfig} */
// If you host this app under a sub-path (e.g. http://localhost/Portfolio/Portfolio),
// set NEXT_PUBLIC_BASE_PATH=/Portfolio/Portfolio in your environment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  // Helpful when serving from a sub-path or as a static build without Next's `/_next/image` optimizer route.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
