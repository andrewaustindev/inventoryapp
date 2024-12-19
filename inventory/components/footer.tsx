'use client'

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import { Button } from "@/components/ui/button";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

// Define link types for type safety
type LinkType = {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Centralized link configuration
const footerLinks = {
  Links: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Create Test', href: '/create-test' },
    { label: 'Explore', href: '/explore' },
    ...(config.resend.supportEmail ? [{ label: 'Support', href: `mailto:${config.resend.supportEmail}` }] : [])
  ],
  Boring: [
    { label: 'Privacy Policy', href: '/privacypolicy' },
    { label: 'Terms of Service', href: '/termsofservice' },
  ],
  'By the Maker': [
    { label: 'ScreenFast', href: 'https://screenfa.st', isExternal: true },
    { label: 'Ideas & Bugz', href: 'https://ideasandbugz.com', isExternal: true },
    { label: 'spotlightz', href: 'https://spotlightz.app', isExternal: true },
    { label: 'X', href: 'https://twitter.com/andy_austin_dev', isExternal: true }
  ]
} as const;

// Helper component for consistent link rendering
const FooterLink = ({ link }: { link: LinkType }) => {
  if (link.isExternal) {
    return (
      <a 
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors text-sm"
      >
        {link.label}
      </a>
    );
  }
  
  return (
    <Link 
      href={link.href}
      className="text-gray-500 hover:text-gray-800 transition-colors text-sm"
    >
      {link.label}
    </Link>
  );
};

export function Footer() {
  return (
    <footer className="mt-12 border-t ">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Main content wrapper */}
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24">
          {/* Brand section */}
          <div className="mb-8 md:mb-0 md:w-64">
            {/* Logo and tagline */}
            <div>
              <Link 
                href="/" 
                className="flex text-2xl items-center font-bold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Image 
                  src={config.appLogoTransparent}
                  alt={`${config.appName} logo`}
                  width={40}
                  height={40}
                  className="object-contain mr-2"
                />
                <span>{config.appName}</span>
              </Link>
              <p className="text-sm text-gray-500 mt-2">{config.appDescription}</p>
            </div>

            {/* Copyright notice */}
            <p className="text-sm text-gray-400 mt-4">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            {/* Built by section */}
            <div className="mt-4">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 border-border"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="text-md ">Built with</span>
                <Image 
                  src={config.appLogoTransparent}
                  alt={`${config.appName} logo`}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-md font-bold text-foreground">{config.appName}</span>
              </Button>
            </div>
          </div>

          {/* Navigation grid */}
          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:mt-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-4 text-gray-600 uppercase tracking-wider">
                  {title}
                </h3>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}