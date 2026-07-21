import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6clicks.s3.us-east-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'nexuses.s3.us-east-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
