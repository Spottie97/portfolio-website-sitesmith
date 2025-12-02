export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "TechStart Solutions",
    quote:
      "The web application completely transformed how we manage our operations. We're making data-driven decisions that have increased our efficiency by 35% and reduced manual overhead significantly.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Director",
    company: "Logistics Plus",
    quote:
      "The real-time tracking system and automation have been game-changing. We caught process bottlenecks 2 weeks earlier than we would have manually, saving significant time and resources.",
  },
  {
    name: "David Kruger",
    role: "Technical Lead",
    company: "Digital Ventures",
    quote:
      "Working with a developer who truly understands both business operations and technology is rare. The solutions are practical, production-tested, and actually solve real business problems.",
  },
];
