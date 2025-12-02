"use client";

import { motion } from "framer-motion";
import { servicePackages } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
            >
              What I Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Services That Drive Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From concept to launch, I provide end-to-end solutions tailored to your business needs. 
              Each service is designed to deliver measurable impact and long-term value.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {servicePackages.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-8"
          >
            <p className="text-muted-foreground">
              Not sure which service is right for you?{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                Let&apos;s chat
              </a>{" "}
              and find the perfect fit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
