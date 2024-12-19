// Import necessary components and icons
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GiftIcon } from "@heroicons/react/24/outline";
import config from "@/config";
import TestimonialsAvatars from "./testimonial-avatars";


export default function HeroWithImage() {
  // Destructure configuration values from the config file for easier access
  const { badge, title, description, cta, image, promotion } = config.landingPage.hero;
  const { colors } = config.theme;

  return (
    // Main hero section with full viewport height and subtle background
    <section className="relative min-h-[90vh] flex items-center bg-secondary/95">
      <div className="container px-4 mx-auto">
        {/* Two-column grid layout that stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-left">
            {/* Badge component with dynamic styling based on theme colors */}
            <Badge 
              variant="secondary" 
              className="mb-4" 
              style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
            >
              {badge}
            </Badge>

            {/* Main headline */}
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">
              {title}
            </h1>

            {/* Subheadline/description text */}
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
            
            {/* Call-to-action button section */}
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="font-semibold px-8 py-6 text-lg hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                {cta}
              </Button>
            </div>
            
            {/* Promotion banner with dynamic content */}
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <GiftIcon className="w-4 h-4" style={{ color: colors.accentPositive }} />
              <p className="text-base">
                <span className="font-medium" style={{ color: colors.accentPositive }}>{promotion.discount}</span> for 
                the first {promotion.totalCount} customers <span className="text-muted-foreground">
                ({promotion.remainingCount} left)</span>
              </p>
            </div>
            <div className="mt-8">
              <TestimonialsAvatars priority={true} />
            </div>
            
            
          </div>

          {/* Right column - Image display */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Next.js Image component for optimized image loading */}
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto"
              priority  // Marks this image as high priority for loading
            />
            {/* Decorative gradient background behind the image */}
            <div 
              className="absolute -z-10 inset-0 rounded-2xl" 
              style={{ 
                background: `linear-gradient(to top right, ${colors.primary}10, ${colors.secondary}10)` 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
} 