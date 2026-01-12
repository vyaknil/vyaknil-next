import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'out',
  basePath: '/vyaknil-next',
  assetPrefix: '/vyaknil-next/', 
};

export default nextConfig;
