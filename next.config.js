/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "ncmaz-nextjs.vercel.app",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig
