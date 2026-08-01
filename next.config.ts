import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a production build run while `npm run dev` holds .next:
  //   NEXT_DIST_DIR=.next-build npm run build
  // Without this the two processes fight over the same directory and the
  // build fails part-way through with confusing ENOENT errors.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  images: {
    // Photography-first site: serve modern formats and a range wide enough
    // for the full-bleed portfolio tiles.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920, 2048, 3840],
    // Add hosts here if you ever serve work images from a CDN or DAM.
    remotePatterns: [],
  },
};

export default nextConfig;
