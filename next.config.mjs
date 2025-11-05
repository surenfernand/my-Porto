/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 replaces next export
  images: {
    unoptimized: true, // 👈 important for GitHub Pages
  },
  basePath: '/suren-fernando', // 👈 use your repo name here
  assetPrefix: '/suren-fernando/',
};

export default nextConfig;
