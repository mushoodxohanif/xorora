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
  },
  async redirects() {
    return [
      ...legacyRedirectsForNextConfig(),
      {
        source: "/data-ai",
        destination: "/ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
