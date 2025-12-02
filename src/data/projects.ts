export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  tech: string[];
  tags: string[];
  role: string;
  timeline: string;
  publishedAt: string;
  outcomes: string[];
  metrics: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  coverImage: string;
  coverVideo?: string;
  gallery: string[];
  industry: string;
};

export const projects: Project[] = [
  {
    title: "Frodough Baker Guide",
    slug: "frodough-baker-guide",
    summary:
      "Digital recipe platform that standardized production processes, reducing waste by 30% and ensuring consistent quality control across distributed teams.",
    description:
      "Challenge: A growing manufacturing operation struggled with inconsistent output quality and significant raw material waste due to unstandardized processes across their workforce.\n\nSolution: Built a comprehensive digital standard operating procedure (SOP) platform with precise process definitions, step-by-step guides, and material tracking. The platform ensures every team member follows the same proven methods and tracks resource usage.\n\nImpact: Reduced material waste by 30% through precise tracking, improved output consistency by 95%, and slashed onboarding time for new staff from 3 weeks to 1 week. The system helps maximize operational efficiency and product quality.",
    metaTitle: "Frodough Baker Guide | Production Management Platform",
    metaDescription:
      "How a digital SOP platform reduced waste by 30% and improved consistency for a manufacturing operation.",
    tech: ["Next.js", "Supabase", "Resend"],
    tags: ["Process Management", "SaaS", "Quality Control", "Web Development"],
    role: "Full-Stack Developer",
    timeline: "8 weeks",
    publishedAt: "2024-01-15",
    outcomes: [
      "Reduced material waste by 30% through process standardization",
      "Improved output consistency from 70% to 95%",
      "Cut new staff training time from 3 weeks to 1 week",
    ],
    metrics: [
      "30% reduction in material waste",
      "95% consistency achieved",
      "66% faster training for new staff",
      "50+ standardized processes digitized",
    ],
    repo: "https://github.com/Spottie97/frodough-baker-guide",
    featured: true,
    coverImage: "/images/projects/frodough/2ac10c0e-3c39-4ae1-8f05-c84744586f99.png",
    gallery: [
      "/images/projects/frodough/1.png",
      "/images/projects/frodough/2.png",
      "/images/projects/frodough/3.png",
      "/images/projects/frodough/4.png",
    ],
    industry: "Manufacturing & Production",
  },
  {
    title: "Agnovo Marketing Core",
    slug: "agnovo-marketing-core",
    summary:
      "Specialized marketing platform enabling businesses to track campaign performance and ROI with industry-specific analytics.",
    description:
      "Challenge: Niche businesses were struggling with generic marketing tools that lacked industry-specific context, making it difficult to track seasonal campaigns and prove marketing ROI.\n\nSolution: Developed a custom marketing framework with specialized campaign management, performance tracking, and audience segmentation tailored to specific buying cycles and regional targeting requirements.\n\nImpact: Streamlined marketing operations, reduced campaign setup time by 50%, and provided clear ROI visibility through custom analytics dashboards. The platform makes enterprise-grade marketing tracking accessible to specialized small businesses.",
    metaTitle: "Agnovo Marketing Core | Custom Marketing Platform",
    metaDescription:
      "Custom marketing platform with campaign management, analytics, and ROI tracking designed for specialized industries.",
    tech: ["React.js", "TypeScript", "Supabase", "Resend", "Shadcn UI"],
    tags: ["Marketing Tech", "Analytics Dashboard", "Campaign Management", "SaaS"],
    role: "Lead Developer & Technical Architect",
    timeline: "12 weeks",
    publishedAt: "2024-03-20",
    outcomes: [
      "Reduced campaign setup time by 50% with custom templates",
      "Implemented seasonal campaign tracking logic",
      "Built ROI dashboard connecting marketing spend to sales data",
    ],
    metrics: [
      "50% reduction in campaign setup time",
      "Clear ROI tracking and attribution",
      "Custom seasonal management features",
      "Simplified analytics for non-technical teams",
    ],
    repo: "https://github.com/Spottie97/agnovo-marketing-core",
    featured: true,
    coverImage: "/images/projects/agnovo/agnovo-logo-black.png",
    gallery: [
      "/images/projects/agnovo/1.png",
      "/images/projects/agnovo/2.png",
      "/images/projects/agnovo/3.png",
      "/images/projects/agnovo/4.png",
    ],
    industry: "Marketing Technology",
  },
  {
    title: "Dairy Milk Tracker Pro",
    slug: "dairy-milk-tracker-pro",
    summary:
      "Real-time supply chain tracking system that automated reporting, reducing administrative burden by 94% and optimizing logistics.",
    description:
      "Challenge: A logistics-heavy operation was overwhelmed by manual paperwork, spending hours daily on production tracking, quality checks, and distribution planning—leading to data errors and delays.\n\nSolution: Engineered a comprehensive tracking system that captures production data in real-time, automates quality monitoring, and optimizes delivery routes based on time-sensitive requirements.\n\nImpact: Reduced daily reporting time from 4 hours to 15 minutes, eliminated manual data entry errors, and improved distribution efficiency by 25%. The system demonstrated immediate ROI through operational time savings.",
    metaTitle: "Dairy Milk Tracker Pro | Supply Chain Management System",
    metaDescription:
      "Custom supply chain software that reduced daily reporting by 94% and improved distribution efficiency by 25%.",
    tech: ["TypeScript", "Supabase", "Edge Functions", "Resend", "OpenRouter API", "Tailwind CSS"],
    tags: ["Supply Chain", "Logistics", "Real-time Data", "Inventory Management"],
    role: "Full-Stack Developer",
    timeline: "16 weeks",
    publishedAt: "2024-02-10",
    outcomes: [
      "Reduced daily reporting time from 4 hours to 15 minutes (94% reduction)",
      "Eliminated manual errors with automated monitoring",
      "Improved logistics efficiency by 25% through route optimization",
    ],
    metrics: [
      "94% reduction in daily reporting time",
      "25% improvement in distribution efficiency",
      "100% elimination of manual tracking errors",
      "Immediate ROI through operational efficiency",
    ],
    repo: "https://github.com/Spottie97/dairy-milk-tracker-pro",
    featured: false,
    coverImage: "/images/projects/foodfair/logo.jpg",
    gallery: [
      "/images/projects/foodfair/2.png",
      "/images/projects/foodfair/3.png",
      "/images/projects/foodfair/4.png",
      "/images/projects/foodfair/5.png",
    ],
    industry: "Logistics & Supply Chain",
  },
  {
    title: "Jasmyn Plaasprodukte Website",
    slug: "jasmyn-plaasprodukte-website",
    summary:
      "Modern e-commerce presence that digitized a brick-and-mortar business, increasing customer inquiries by 60% and streamlining booking operations.",
    description:
      "Challenge: A traditional retail business lacked digital presence, missing opportunities to reach new customer segments and relying on manual phone bookings for their services.\n\nSolution: Designed and launched a responsive, conversion-optimized website that showcases products, communicates brand values, and automates service bookings. The platform enables easy content management for seasonal updates.\n\nImpact: Within 3 months, customer inquiries increased by 60%, service bookings doubled through the online system, and the business gained significant digital visibility. The CMS empowers the client to manage their own digital presence.",
    metaTitle: "Jasmyn Plaasprodukte | Digital Transformation Success Story",
    metaDescription:
      "How a modern web presence increased customer inquiries by 60% and doubled bookings for a retail business.",
    tech: ["Wix", "Responsive Design", "SEO Optimization"],
    tags: ["E-commerce", "Digital Transformation", "CMS", "Web Design"],
    role: "Web Developer & Designer",
    timeline: "6 weeks",
    publishedAt: "2024-04-05",
    outcomes: [
      "Increased customer inquiries by 60% within first 3 months",
      "Doubled bookings through automated online system",
      "Implemented user-friendly CMS for independent content management",
    ],
    metrics: [
      "60% increase in inbound inquiries",
      "100% increase in digital bookings",
      "3-month ROI through increased sales",
      "Fully responsive mobile experience",
    ],
    live: "https://www.jasmynplaasprodukte.co.za/",
    featured: true,
    coverImage: "/images/projects/jasmyn/logo.jpg",
    coverVideo: "/images/projects/jasmyn/BetterColorJasmyn_24.mp4",
    gallery: [
      "/images/projects/jasmyn/1.png",
      "/images/projects/jasmyn/2.png",
      "/images/projects/jasmyn/3.png",
      "/images/projects/jasmyn/4.png",
    ],
    industry: "Retail & E-commerce",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);




