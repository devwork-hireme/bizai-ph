import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog",
          destination: "https://bizaiph.hashnode.dev/",
        },
        {
          source: "/blog/:path*",
          destination: "https://bizaiph.hashnode.dev/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
