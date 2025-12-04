"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

export function ProjectsHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient - enhanced for light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary/12 dark:from-primary/5 dark:via-background dark:to-primary/10" />
      
      {/* Decorative elements - more visible in light mode */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/15 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay - more visible in light mode */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 dark:bg-primary/10 text-primary text-sm font-medium border border-primary/20"
          >
            <Briefcase className="w-4 h-4" />
            Portfolio & Case Studies
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Work That{" "}
            <span className="text-primary relative">
              Speaks
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-1 bg-primary/40 dark:bg-primary/30 rounded-full"
              />
            </span>{" "}
            for Itself
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Real projects with{" "}
            <span className="text-foreground font-medium">measurable results</span>. 
            From custom web applications to business automation platforms—each case study 
            shows how technology solves real problems.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-6"
          >
            {[
              { value: "15+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "5+", label: "Industries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative sparkle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center pt-4"
          >
            <Sparkles className="w-5 h-5 text-primary/50 dark:text-primary/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
