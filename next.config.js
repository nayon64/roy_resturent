/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "ncmaz-nextjs.vercel.app",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig
