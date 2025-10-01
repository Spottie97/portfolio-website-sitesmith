export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Pieter van der Merwe",
    role: "Farm Manager",
    company: "Green Valley Farms",
    quote:
      "FarmFlow completely transformed how we manage our 5 properties. We're making data-driven decisions that have increased our yield by 35% and reduced water usage significantly.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Director",
    company: "Harvest Co-op",
    quote:
      "The IoT integration and predictive analytics have been game-changing. We caught a disease outbreak 2 weeks earlier than we would have visually, saving an entire season's crop.",
  },
  {
    name: "Johan Botha",
    role: "Agricultural Consultant",
    company: "AgriConsult ZA",
    quote:
      "Working with a developer who truly understands both agriculture and technology is rare. The solutions are practical, field-tested, and actually solve real farming problems.",
  },
];




