/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. The site is served from
// https://<user>.github.io/visaqo/ so we need a basePath.
const repo = "visaqo";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
