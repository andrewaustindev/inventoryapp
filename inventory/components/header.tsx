'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import config from "@/config";
//import { ModeToggle } from "./themetoggle";

// This header component handles both logged-in and logged-out states
// It uses Clerk for authentication and shows different navigation options based on auth status
// The logged-out view includes smooth scrolling to landing page sections
// The logged-in view provides access to the dashboard and documentation

// LoggedInHeader component shows navigation options for authenticated users
const LoggedInHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-end gap-8 px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center font-semibold mr-auto">
          <Image 
            src={config.appLogoTransparent} 
            alt={`${config.appName} logo`}
            width={40}
            height={40}
          />
          <span className="text-xl">{config.appName}</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          
        </nav>
        
        {/* UserButton from Clerk provides:
         * - User profile management
         * - Account settings
         * - Sign out functionality
         * - Account deletion option
         * All handled through Clerk's pre-built UI
         */}
        <UserButton />
        
        {/* Alternative manual sign out button implementation
         * Uncomment this section if you need a custom sign out button and import SignOutButton from Clerk
         * instead of the Clerk UserButton
         */}
        {/* <SignOutButton>
          <Button variant="outline" size="lg">
            Sign Out
          </Button>
        </SignOutButton> */}
      </div>
    </header>
  );
}

const LoggedOutHeader = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center font-semibold">
          <Image 
            src={config.appLogoTransparent} 
            alt={`${config.appName} logo`}
            width={40}
            height={40}
          />
          <span className="text-xl">{config.appName}</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link 
            href="/#features" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={(e) => scrollToSection(e, 'features')}
          >
            Features
          </Link>
          <Link 
            href="/#pricing" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={(e) => scrollToSection(e, 'pricing')}
          >
            Pricing
          </Link>
          <Link 
            href="/#faq" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={(e) => scrollToSection(e, 'faq')}
          >
            FAQ
          </Link>
          <Link 
            href="/#testimonials" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={(e) => scrollToSection(e, 'testimonials')}
          >
            Testimonials
          </Link>
          
        </nav>

        <div className="flex gap-4">
          {/* <ModeToggle /> */}
          <SignInButton mode="modal">
            <Button size="lg" className="font-semibold" variant="outline">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal" >
            <Button size="lg"  className="font-semibold">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  const { userId } = useAuth();
  return userId ? <LoggedInHeader /> : <LoggedOutHeader />;
} 