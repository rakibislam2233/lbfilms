/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'via.placeholder.com', 'www.example.com'],
  },
}

module.exports = nextConfig