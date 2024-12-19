// Import necessary components and icons
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GiftIcon } from "@heroicons/react/24/outline";
import config from "@/config";
import TestimonialsAvatars from "./testimonial-avatars";

export default function HeroWithNoImage() {
  const { badge, title, description, cta, promotion } = config.landingPage.hero;
  const { colors } = config.theme;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary/95">
      <div className="container px-4 mx-auto flex items-center justify-center">
        <div className="max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <Badge 
              variant="secondary" 
              className="mb-4" 
              style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
            >
              {badge}
            </Badge>

            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">
              {title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-semibold px-8 py-6 text-lg hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                {cta}
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-muted-foreground justify-center">
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
        </div>
      </div>
    </section>
  );
} 