import type { NextConfig } from "next";
import { legacyRedirectsForNextConfig } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      ...legacyRedirectsForNextConfig(),
      {
        source: "/data-ai",
        destination: "/ai",
        permanent: true,
      },
      {
        source: "/engagement-models",
        destination: "/",
        permanent: true,
      },
      {
        source: "/engagement-models/staff-augmentation-services",
        destination: "/consulting/staff-augmentation-services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/amazon-a-to-z/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
