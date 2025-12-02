"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We dive deep into your business goals, challenges, and requirements to define the perfect solution.",
    icon: MessageSquare,
    details: ["Stakeholder interviews", "Requirements gathering", "Technical assessment"],
  },
  {
    id: 2,
    title: "Build",
    description: "Iterative development with regular check-ins, ensuring the solution evolves with your feedback.",
    icon: Wrench,
    details: ["Agile sprints", "Progress demos", "Quality assurance"],
  },
  {
    id: 3,
    title: "Launch",
    description: "Seamless deployment, thorough testing, and ongoing support to ensure your success.",
    icon: Rocket,
    details: ["Production deployment", "Performance monitoring", "Continued support"],
  },
];

export function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight md:text-4xl mb-4"
          >
            A Process Built for Results
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Every project follows a proven methodology designed to deliver on time, on budget, and beyond expectations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-1 rounded-full bg-primary/10 scale-100 group-hover:scale-105 transition-transform duration-500 delay-75" />
                      
                      {/* Icon Circle */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
                        <Icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-sm text-muted-foreground flex items-center justify-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-8">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-primary/20" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

