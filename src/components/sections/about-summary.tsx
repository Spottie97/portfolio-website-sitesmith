"use client";

import { AboutHero } from "@/components/sections/about-hero";
import { AboutJourney } from "@/components/sections/about-journey";
import { AboutValues } from "@/components/sections/about-values";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { motion } from "framer-motion";

export function AboutSummary() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Journey/Timeline Section */}
      <AboutJourney />

      {/* Technical Skills Section */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The same tools as the skills page, grouped by the kind of work they show up in.
            </p>
          </motion.div>
          <SkillsGrid variant="compact" />
        </div>
      </section>

      {/* Values & Work Philosophy Section */}
      <AboutValues />
    </>
  );
}
