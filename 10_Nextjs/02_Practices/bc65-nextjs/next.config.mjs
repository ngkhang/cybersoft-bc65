/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config script
  // assetPrefix: 'https://cdn.jsdelivr.net',
  // Config Image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'apistore.cybersoft.edu.vn',
        pathname: '**',
      },
    ]
  }
};

export default nextConfig;
