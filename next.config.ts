import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  transpilePackages: ["three"],
};

export default nextConfig;
