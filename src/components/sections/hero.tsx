"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  PRIMARY_CTA,
  SECONDARY_CTA,
  SITE_DESCRIPTION,
  SITE_LOCATION,
  SITE_TITLE,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
  return (
    <LampContainer className="min-h-screen">
      <div className="container relative z-50 mx-auto flex -translate-y-32 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 min-h-screen max-w-7xl">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="space-y-8 w-full max-w-4xl"
        >
          <Badge variant="outline" className="w-fit mx-auto bg-card/50 border-border text-muted-foreground">
            {SITE_LOCATION} • {SITE_TITLE}
          </Badge>
          
          <h1 className="bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Full-stack platforms built for modern agriculture
          </h1>
          
          <motion.p 
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            From irrigation telemetry to traceability analytics, I partner with farm and agri teams to ship software that ties field operations, compliance, and leadership dashboards together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-3 sm:flex-row justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <Link href={SECONDARY_CTA.href}>{SECONDARY_CTA.label}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </LampContainer>
  );
}

