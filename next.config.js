/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.antaranews.com', 'akcdn.detik.net.id', 'statik.tempo.co'],
  },
};

module.exports = nextConfig;
