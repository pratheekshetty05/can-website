import type { NextConfig } from "next";

// Static export config for the GitHub Pages client-approval preview only.
// The real app (with the /api/enquiry route) lives on the main branch.
const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/can-website",
  images: { unoptimized: true },
};

export default nextConfig;
