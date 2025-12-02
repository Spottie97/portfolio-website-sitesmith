"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  PRIMARY_CTA,
  SECONDARY_CTA,
  SITE_LOCATION,
  SITE_TITLE,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function FloatingPaths({ position }: { position: number }) {
  const prefersReducedMotion = useReducedMotion();
  
  // Reduce from 36 to 12 paths for better performance
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.08,
    opacity: 0.1 + i * 0.08,
  }));

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full text-slate-950 dark:text-white"
          viewBox="0 0 696 316"
          fill="none"
        >
          <title>Background Paths</title>
          {paths.map((path) => (
            <path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ willChange: 'opacity' }}>
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path, index) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.5, opacity: 0.5 }}
            animate={{
              pathLength: [0.5, 1, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1] as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const },
    },
  };

  // Use static rendering if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 min-h-screen max-w-7xl">
          <div className="space-y-8 w-full max-w-4xl">
            <Badge variant="outline" className="w-fit mx-auto bg-card/50 border-border text-muted-foreground">
              {SITE_LOCATION} • {SITE_TITLE}
            </Badge>
            
            <h1 className="bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Building Digital Products That Scale
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Full-stack developer specializing in modern web applications, business automation, and custom software solutions. I help startups and businesses turn complex problems into elegant, scalable digital products.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href={SECONDARY_CTA.href}>{SECONDARY_CTA.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 min-h-screen max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8 w-full max-w-4xl"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="w-fit mx-auto bg-card/50 border-border text-muted-foreground">
              {SITE_LOCATION} • {SITE_TITLE}
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Building Digital Products That Scale
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            Full-stack developer specializing in modern web applications, business automation, and custom software solutions. I help startups and businesses turn complex problems into elegant, scalable digital products.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
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

