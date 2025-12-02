"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Search, Users } from "lucide-react";

import type { ServicePackage } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const iconMap = {
  code: Code,
  search: Search,
  users: Users,
} as const;

type ServiceCardProps = {
  service: ServicePackage;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard>
        <Card id={service.slug} className="h-full border-0 group overflow-hidden">
          <CardHeader className="pb-4">
            {/* Animated Icon */}
            <div className="mb-4 relative">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {service.name}
            </h3>

            {/* Summary */}
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              {service.summary}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Features with checkmarks */}
            <div className="space-y-3">
              {service.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Ideal For Badge */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">
                Ideal for
              </p>
              <p className="text-sm text-foreground/80">{service.idealFor}</p>
            </div>
          </CardContent>

          <CardFooter className="pt-4">
            <Button asChild className="w-full group/btn">
              <Link href={`/contact?service=${service.slug}`} className="flex items-center justify-center gap-2">
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
}
