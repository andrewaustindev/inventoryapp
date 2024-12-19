import type { NextConfig } from "next";

/**
 * Next.js Configuration File
 * This file configures various Next.js project settings and features.
 * 
 * Key uses:
 * 1. Configure image domains for Next.js Image component
 * 2. Set up redirects, rewrites
 * 3. Enable/disable Next.js features
 * 4. Configure build settings
 */
const nextConfig: NextConfig = {
  images: {
    // Configure allowed external image domains for next/image
    // Without this, external images won't load with next/image component
    // Usage example: <Image src="https://images.unsplash.com/photo-123" />
    remotePatterns: [
      // NextJS <Image> component needs to whitelist domains for src={}
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google OAuth profile pictures
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com', // Twitter profile pictures and media
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash image library
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net', // Logo images
      },
    ],
  },
  // Other common config options (currently not used):
  // - rewrites(): Modify incoming request paths
  // - redirects(): Set up URL redirects
  // - webpack: Custom webpack config
  // - env: Environment variables
  // - i18n: Internationalization settings
};

export default nextConfig;
