/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ // Allow Images from POKE API urls
      'raw.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
