"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Database, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2024 – Present",
    title: "Head of Operations",
    company: "Food Fair Pty Ltd",
    icon: TrendingUp,
    description:
      "Leading operations across three factories while directing the entire Data Analytics function. Overseeing technology implementation, integrations, and IT infrastructure. Within a broader family group, I set standards for software, networking, AI integration, and analytics.",
    highlights: ["3 Factories", "Tech Leadership", "AI Integration"],
  },
  {
    year: "Jun – Sep 2024",
    title: "Full-Stack Engineer",
    company: "MethodData (US)",
    icon: Code,
    description:
      "Delivered end-to-end features in a React/TypeScript front end with a Node.js back end. Built typed APIs, component libraries, and CI/CD improvements aligned with modern TypeScript and React best practices.",
    highlights: ["React", "TypeScript", "Node.js"],
  },
  {
    year: "2023 – 2024",
    title: "Backend Engineer",
    company: "Talent Digital Art",
    icon: Code,
    description:
      "Contributed to backend systems for Super Dragon Punch Force 3, a cross-platform 2.5D fighting game. Responsibilities included API design, authentication, matchmaking, and live-ops support.",
    highlights: ["Game Dev", "API Design", "Matchmaking"],
  },
  {
    year: "2020 – 2023",
    title: "Data Analyst & IT Manager",
    company: "Food Fair Pty Ltd",
    icon: Database,
    description:
      "Built and maintained the company's data and IT backbone across manufacturing sites. Introduced process automation and BI tools to improve decision-making and operational visibility.",
    highlights: ["Data Analytics", "BI", "Automation"],
  },
];

export function AboutJourney() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From managing factory operations to building software—my path has always been about 
            solving complex problems with practical solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    >
                      {/* Year badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        {item.year}
                      </div>

                      {/* Title and company */}
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-3">{item.company}</p>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey from operations management to software engineering means I don&apos;t just 
              build technology—I build solutions that make sense for{" "}
              <span className="text-foreground font-medium">real-world business needs</span>. 
              I understand operational pressures, resource constraints, and most importantly, 
              the problems that actually need solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

