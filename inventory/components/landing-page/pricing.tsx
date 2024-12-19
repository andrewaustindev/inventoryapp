'use client';

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, XMarkIcon, GiftIcon } from "@heroicons/react/24/outline";
import config from "@/config";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>(
    config.stripe.plans.find(plan => plan.isFeatured)?.priceId || config.stripe.plans[0].priceId
  );

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary" 
            style={{ 
              borderColor: config.theme.colors.primary,
              color: config.theme.colors.primary,
              backgroundColor: `${config.theme.colors.primary}10`
            }}
          >
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to build your next big thing</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <GiftIcon className="w-6 h-6 text-emerald-500" />
            <p className="text-base">
              <span className="text-emerald-500 font-medium">$100 off</span> for the first 100 customers <span className="text-muted-foreground">(7 left)</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.stripe.plans.map((plan) => (
              <Card 
                key={plan.priceId}
                className={`relative bg-secondary flex flex-col cursor-pointer ${
                  selectedPlan === plan.priceId 
                    ? 'border-2' 
                    : "border-border"
                }`}
                style={{ 
                  
                  borderColor: selectedPlan === plan.priceId ? config.theme.colors.primary : undefined 
                }}
                onClick={() => setSelectedPlan(plan.priceId)}
              >
                {plan.isFeatured && selectedPlan === plan.priceId && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2">
                    <Badge 
                      style={{ 
                        backgroundColor: config.theme.colors.primary,
                        color: 'white'
                      }}
                    >
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price} </span>
                      <span className="text-xl font-bold">{plan.currency}</span>
                      <span className="text-muted-foreground ml-2"></span>
                    </div>
                    {plan.priceAnchor && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          ${plan.priceAnchor} {plan.currency}
                        </span>
                        <Badge variant="secondary" className="bg-emerald-200 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                          Save ${plan.priceAnchor - plan.price} {plan.currency}
                        </Badge>
                      </div>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <CheckIcon className="w-5 h-5 mr-3" style={{ color: config.theme.colors.primary }} />
                        ) : (
                          <XMarkIcon className="w-5 h-5 mr-3" style={{ color: config.theme.colors.accentNegative }} />
                        )}
                        <span className={!feature.included ? "text-muted-foreground" : ""}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    style={{ backgroundColor: config.theme.colors.primary }}
                    className={`w-full hover:opacity-90 ${
                      selectedPlan !== plan.priceId && "opacity-70"
                    }`}
                  >
                    Get Shipping
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Pay once. Build forever.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 