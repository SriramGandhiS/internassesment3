/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.crif.com' },
      { protocol: 'https', hostname: 'logos-world.net' },
      { protocol: 'https', hostname: 'www.adp.com' },
    ],
  },
};

export default nextConfig;
