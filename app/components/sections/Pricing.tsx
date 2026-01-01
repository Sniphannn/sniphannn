"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PricingPlan {
  name: string;
  description?: string;
  price: string | number;
  period: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  cta?: string;
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Project",
    description: "Design And Development",
    price: 1500,
    period: "+$25/mo Hosting",
    features: [
      { text: "Design And Development", included: true },
      { text: "$25/mo Hosting", included: true },
      { text: "$100 fee Per Page after 5", included: true },
      { text: "+$50/mo Unlimited Edits Add-on", included: true },
      { text: "+$250 To Add A Blog", included: true },
      { text: "24/7 Support", included: true },
      { text: "Lifetime Updates", included: false },
    ],
  },
  {
    name: "MONTHLY",
    description: "Design And Development",
    price: 175,
    period: "Per Month",
    highlighted: true,
    features: [
      { text: "Design And Development", included: true },
      { text: "Includes Hosting", included: true },
      { text: "$100 fee Per Page After 5", included: true },
      { text: "+$250 To Add A Blog", included: true },
      { text: "Unlimited Edits", included: true },
      { text: "24/7 Support", included: true },
      { text: "Lifetime Updates", included: true },
    ],
  },
  {
    name: "ECOMMERCE",
    description: "Custom Shopify Store",
    price: 1200,
    period: "k Starting",
    features: [
      { text: "Custom Shopify Store", included: true },
      { text: "Configure Any And All Apps", included: true },
      { text: "Integrated Shipping", included: true },
      { text: "Shopify Tutorial Walkthrough", included: true },
      { text: "Fully Editable In Shopify CMS", included: true },
      { text: "+$50/mo Unlimited Edits", included: true },
      { text: "24/7 Support", included: false },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="container-cls relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center">
          <span className="section-label">Pricing Plans</span>
          <h2 className="section-title uppercase">
            Choose Your Perfect<span className="gradient-text"> Package</span>
          </h2>
          <p className="text-muted max-w-4xl mx-auto">
            Flexible pricing options designed to fit your business needs. Pick the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 animate-fadeInUp opacity-0 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary shadow-lg shadow-primary/20 md:scale-105"
                  : "bg-card-bg border border-card-border card-hover"
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.description && (
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8 space-y-3 min-h-64">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 opacity-40" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground opacity-60"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 border-t border-card-border pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                    : "bg-secondary text-secondary-foreground border border-card-border hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
