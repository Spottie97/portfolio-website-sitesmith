"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const pillars = [
  {
    title: "Grounded Discovery",
    description:
      "Every engagement starts with field interviews and data capture to surface bottlenecks, seasonality risks, and regulatory pressures before writing a line of code.",
  },
  {
    title: "Operational Analytics",
    description:
      "We wire up telemetry, dashboards, and alerting that keep managers in control—from cold chain compliance to irrigation scheduling and packhouse throughput.",
  },
  {
    title: "Human-Centred Systems",
    description:
      "Tools are deployed with farmer training, SOPs, and offline-safe workflows so teams adopt the platform and trust the data during harvest pressure.",
  },
];

export function StrategyPillars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-12 text-center">
          <div className="space-y-4 mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Methodology
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Built for the realities of modern agriculture
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
              From discovery to deployment, every project combines agronomy context with software delivery best practices so your team gets platforms that stay reliable through droughts, load shedding, and peak season demand.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : index * 0.08, 
                  duration: prefersReducedMotion ? 0 : 0.4, 
                  ease: "easeOut" 
                }}
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
              >
                <SpotlightCard>
                  <article className="relative overflow-hidden rounded-2xl border-0 bg-card/60 p-6 text-left shadow-sm backdrop-blur">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </article>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


