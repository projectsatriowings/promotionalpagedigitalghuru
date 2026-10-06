/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/chennai',
        destination: '/',
      },
    ]
  }
};
export default nextConfig;
