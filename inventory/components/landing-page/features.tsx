"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { 
  Database, CreditCard, Check, AtSign,
  FileSearch, Paintbrush, MoreHorizontal, User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import config from "@/config";

const iconMap = {
  Database,
  CreditCard,
  AtSign,
  FileSearch,
  Paintbrush,
  MoreHorizontal,
  User
};

function FeatureCard({ 
  techIcon, 
  title, 
  features, 
  timeSaved, 
  link, 
  isActive 
}: { 
  techIcon: React.ReactNode, 
  title: string, 
  features: string[], 
  timeSaved: string, 
  link: string, 
  isActive: boolean 
}) {

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 ${
        isActive ? `scale-105 shadow-lg bg-card/50` : ''
      }`}
    >
      <CardHeader>
        <CardTitle className="mb-4">{title}</CardTitle>
        {isActive && (
          <div className="space-y-4">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check 
                    className={`w-5 h-5 text-primary mt-0.5`} 
                    style={{ color: config.theme.colors.primary }} 
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t space-y-4">
              <div 
                className="text-lg font-semibold" 
                style={{ color: config.theme.colors.accentPositive }}
              >
                {timeSaved}
              </div>
              {techIcon && (
                <div className="flex items-center gap-2">
                  <div className="text-blue-400">
                    {techIcon}
                  </div>
                  <span className="text-muted-foreground">with</span>
                  <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground hover:text-primary transition-colors underline`}
                  >
                    {title.split(' ')[0]}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </CardHeader>
    </Card>
  );
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const { features } = config.landingPage;

  const getIcon = (iconName: keyof typeof iconMap) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  const processedFeatures = features.items.map(feature => ({
    ...feature,
    icon: getIcon(feature.icon as keyof typeof iconMap),
    techIcon: feature.techIcon ? (
      <Image 
        src={feature.techIcon} 
        alt={feature.title} 
        width={32} 
        height={32} 
        className="w-8 h-8"
        
      />
    ) : null
  }));

  return (
    <section id="features" className="py-20 bg-secondary/95">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
        <Badge 
            className="mb-4" 
            variant="outline"
            style={{ 
              borderColor: config.theme.colors.primary,
              color: config.theme.colors.primary,
              backgroundColor: `${config.theme.colors.primary}10`
            }}
          >
            {features.badge}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {features.description}
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-1 mb-8 max-w-4xl mx-auto">
          {processedFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
              onClick={() => setActiveFeature(index)}
            >
              <div className={`
                p-3 cursor-pointer transition-all
                ${activeFeature === index ? 'scale-110' : 'text-muted-foreground hover:text-primary'}
              `}
                style={activeFeature === index ? { color: config.theme.colors.primary } : undefined}
              >
                {feature.icon}
              </div>
              <span className={`text-sm mt-2 ${activeFeature === index ? 'text-primary' : 'text-muted-foreground'}`}>
                {feature.iconTitle}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center animate-fadeIn">
          <div className="w-full max-w-2xl">
            <FeatureCard
              {...processedFeatures[activeFeature]}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 