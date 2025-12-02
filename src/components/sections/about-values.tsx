"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Zap, 
  Target, 
  Users, 
  Lightbulb, 
  Shield,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

const softwareStartYear = 2020;
const softwareExperienceYears = dayjs().year() - softwareStartYear;

const values = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "No jargon, no surprises. I keep you informed at every step with honest updates and realistic timelines.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Zap,
    title: "Pragmatic Solutions",
    description: "I build what you need, not what looks impressive. Every feature serves a purpose and delivers value.",
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Success is measured by business outcomes—reduced costs, increased efficiency, happier users.",
    color: "from-green-500/20 to-emerald-600/20",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "I invest in understanding your business deeply. Your success is my success.",
    color: "from-purple-500/20 to-violet-600/20",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves fast. I stay current so your solutions leverage the best tools available.",
    color: "from-pink-500/20 to-rose-600/20",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Clean code, thorough testing, and robust architecture. I build things that last.",
    color: "from-cyan-500/20 to-teal-600/20",
  },
];

const stats = [
  { value: `${softwareExperienceYears}+`, label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
];

export function AboutValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My approach is shaped by years of operational experience. I understand what it takes 
            to deliver solutions that work in the real world.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-1">Ready to build something great?</h3>
              <p className="text-muted-foreground">Let&apos;s discuss your project and see how I can help.</p>
            </div>
            <Button asChild size="lg" className="group whitespace-nowrap">
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

