"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  PRIMARY_CTA,
  SECONDARY_CTA,
  SITE_LOCATION,
  SITE_TITLE,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function FloatingPaths({ position }: { position: number }) {
  // Reduced from 36 to 18 paths for better performance
  const paths = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.05,
    opacity: 0.15 + i * 0.04,
  })), [position]);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
        style={{ willChange: 'opacity' }}
      >
        <title>Background Paths</title>
        <defs>
          <style>{`
            @keyframes pathFade {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.6; }
            }
            .animated-path {
              animation: pathFade 25s ease-in-out infinite;
            }
          `}</style>
        </defs>
        {paths.map((path, index) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            fill="none"
            className="animated-path"
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 min-h-screen max-w-7xl">
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
    </div>
  );
}

