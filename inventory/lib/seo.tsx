import type { Metadata } from "next";
import config from "@/config";

/**
 * Generates SEO metadata for Next.js pages
 * This function centralizes all SEO-related configurations
 * Import and use in layout.tsx as: export const metadata = getSEOTags();
 */
export const getSEOTags = (): Metadata => ({
  // Basic metadata
  title: {
    // Main title for your app - appears in search results and browser tabs
    default: `${config.appName} - Full-Stack Boilerplate with Convex/Supabase`,
    // Template for other pages: "Page Name | Your App Name"
    template: "%s | ${config.appName}"
  },
  // Main description used for search results and social sharing
  description: config.appDescription,
  // Favicon and other icons
  icons: {
    icon: config.appIcon,
  },
  // Keywords help with SEO - add or remove based on your specific features
  keywords: [
    "Next.js boilerplate",
    "Convex database",
    "Supabase starter",
    "full-stack template",
    "real-time database",
    "relational database",
    "MVP starter kit",
    "authentication template",
    "React boilerplate",
    "TypeScript starter"
  ],
  // Author and creator information
  authors: [{ name: "Andy Oz" }],
  creator: "Andy Oz",
  // Base URL for all metadata - IMPORTANT: Update with your production domain
  metadataBase: new URL(`https://${config.domainName}`),

  // OpenGraph metadata (for social media sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${config.domainName}`,
    siteName: config.appName,
    title: `${config.appName} - Next.js Boilerplate with Convex/Supabase`,
    description: config.appDescription,
    // OG Image should be 1200x630px for best display on social platforms
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${config.appName} Preview`,
      },
    ],
  },

  // Twitter card metadata (for Twitter sharing)
  twitter: {
    card: 'summary_large_image',
    title: `${config.appName} - Next.js Boilerplate with Convex/Supabase`,
    description: config.appDescription,
    images: ['/og-image.png'],
    // Update with your Twitter handle in config
    creator: config.social.x,
  },

  // Search engine crawler settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Search engine verification codes
  // Get these from Google Search Console, Bing Webmaster Tools, etc.
  verification: {
    google: 'your-google-verification-code',
  },
});

/**
 * Renders Schema.org structured data
 * This helps search engines better understand your content
 * Import and use in layout.tsx within the <body> tag: {renderSchemaTags()}
 */
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Marc Lou",
          },
          // Update these values based on your application
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          // Update or remove if not applicable
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          // Update or remove if not applicable
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};
