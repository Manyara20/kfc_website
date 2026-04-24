// next.config.mjs
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kenyaforestservice.org",
      },
      {
        protocol: "https",
        hostname: "whatthelogo.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "cdn.standardmedia.co.ke",
      },
      {
        protocol: "https",
        hostname: "www.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.transparenttextures.com",
      },
    ],
  },
};

export default nextConfig;
