export type ServicePackage = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  cta: string;
  features: string[];
  iconName: "code" | "search" | "users";
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePackages: ServicePackage[] = [
  {
    name: "Full-Stack Web Development",
    slug: "full-stack-development",
    iconName: "code",
    summary: "Modern, scalable web applications built with the latest tech stack—from responsive marketing sites to complex SaaS platforms.",
    description:
      "End-to-end web development services using modern frameworks like Next.js and React. We build secure, scalable, and maintainable applications that grow with your business.",
    deliverables: [
      "Custom web application development (SaaS, dashboards, e-commerce)",
      "Responsive, mobile-first interface design",
      "Secure database design and API development",
      "CMS integration for easy content management",
      "Automated testing and CI/CD pipeline setup",
    ],
    idealFor: "Businesses needing a new digital product or upgrading legacy systems",
    cta: "Discuss your project",
    features: [
      "Modern Tech Stack (Next.js, React, TypeScript)",
      "Secure Authentication & Authorization",
      "Scalable Cloud Infrastructure",
      "Clean, Maintainable Codebase",
    ],
    faqs: [
      {
        question: "What is your preferred tech stack?",
        answer:
          "I specialize in the React ecosystem (Next.js), TypeScript, and Node.js/Supabase for backend services, but I can adapt to your existing infrastructure needs.",
      },
      {
        question: "Do you offer maintenance after launch?",
        answer:
          "Yes, I offer ongoing maintenance packages to ensure your application remains secure, updated, and performant as your user base grows.",
      },
    ],
  },
  {
    name: "Technical SEO & Performance",
    slug: "seo-performance",
    iconName: "search",
    summary: "Optimize your digital presence for search engines and users—technical audits, speed optimization, and keyword strategies that drive qualified traffic.",
    description:
      "Comprehensive SEO and performance optimization package designed to make your application fast, discoverable, and user-friendly. We focus on technical excellence that search engines reward.",
    deliverables: [
      "Complete technical SEO audit (Core Web Vitals, crawlability, indexing)",
      "Performance optimization (code splitting, asset compression, caching strategies)",
      "Keyword research and content strategy aligned with your target market",
      "On-page optimization for improved conversion rates",
      "Accessibility (a11y) compliance checks and fixes",
    ],
    idealFor: "Startups and businesses looking to improve their organic reach and user experience",
    cta: "Get a free performance audit",
    features: [
      "Technical health score improvement",
      "Page speed optimization",
      "Content gap analysis",
      "Competitor benchmarking",
    ],
    faqs: [
      {
        question: "How long does it take to see results?",
        answer:
          "Technical improvements often show immediate speed gains, while search ranking improvements typically mature over 3-6 months as search engines re-index your optimized site.",
      },
      {
        question: "Do you handle content creation?",
        answer:
          "I provide detailed content briefs and strategies based on keyword research, and can partner with copywriters to execute the full content plan.",
      },
    ],
  },
  {
    name: "Technical Consultation",
    slug: "technical-consultation",
    iconName: "users",
    summary: "Strategic technical guidance for your digital roadmap—architecture planning, code reviews, and technology selection.",
    description:
      "Expert advice to help you make informed technology decisions. Whether you're planning a new product or scaling an existing one, we provide the technical roadmap you need.",
    deliverables: [
      "System architecture design and review",
      "Technology stack selection and evaluation",
      "Code quality audits and security reviews",
      "Development process optimization (Agile, CI/CD)",
      "Technical hiring support and team mentoring",
    ],
    idealFor: "Founders, CTOs, and product managers needing technical expertise",
    cta: "Book a consultation",
    features: [
      "Detailed Architecture Diagrams",
      "Scalability Assessment",
      "Security Best Practices",
      "Vendor Evaluation",
    ],
    faqs: [
      {
        question: "Do I need a consultant or a developer?",
        answer:
          "Consultation is best for planning, reviewing, and strategic decisions. If you have a clear plan and need execution, development services are more appropriate.",
      },
      {
        question: "Can you help us hire developers?",
        answer:
          "Yes, I can help define technical roles, review resumes, and conduct technical interviews to ensure you build a high-quality engineering team.",
      },
    ],
  },
];
