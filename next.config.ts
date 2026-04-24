import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://bizaiph.hashnode.dev/",
      },
      {
        source: "/blog/:path*",
        destination: "https://bizaiph.hashnode.dev/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "x-forwarded-host",
            value: "bizaiph.hashnode.dev",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
