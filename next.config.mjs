/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/:city(chennai|hyderabad)',
        destination: '/',
      },
    ]
  }
};
export default nextConfig;
