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
      "A comprehensive guide for bakers providing detailed recipes, techniques, and tips to master the art of baking.",
    description:
      "Developed a comprehensive baking guide application that provides bakers with detailed recipes, step-by-step techniques, and professional tips to enhance their baking skills. The platform includes interactive features for recipe management and technique tutorials.",
    metaTitle: "Frodough Baker Guide | Comprehensive Baking Platform",
    metaDescription:
      "Frodough Baker Guide - A comprehensive platform providing detailed recipes, techniques, and tips for mastering the art of baking.",
    tech: ["Next.js", "Supabase", "Resend"],
    tags: ["Baking", "Recipes", "Education", "Web Development"],
    role: "Full-Stack Developer",
    timeline: "8 weeks",
    publishedAt: "2024-01-15",
    outcomes: [
      "Created comprehensive recipe database with search functionality",
      "Implemented interactive baking technique tutorials",
      "Built responsive design for mobile and desktop users",
    ],
    metrics: [
      "50+ detailed baking recipes",
      "Interactive step-by-step guides",
      "Mobile-responsive design",
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
    industry: "Food & Beverage",
  },
  {
    title: "Agnovo Marketing Core",
    slug: "agnovo-marketing-core",
    summary:
      "A core marketing framework designed to streamline marketing operations and enhance campaign effectiveness.",
    description:
      "Built a comprehensive marketing framework that provides businesses with tools and strategies to enhance campaign effectiveness and audience engagement. The platform includes analytics, campaign management, and performance tracking features.",
    metaTitle: "Agnovo Marketing Core | Marketing Framework Platform",
    metaDescription:
      "Agnovo Marketing Core - A comprehensive framework designed to streamline marketing operations and enhance campaign effectiveness for businesses.",
    tech: ["React.js", "TypeScript", "Supabase", "Resend", "Shadcn UI"],
    tags: ["Marketing", "Analytics", "Campaign Management", "Business Tools"],
    role: "Lead Developer & Technical Architect",
    timeline: "12 weeks",
    publishedAt: "2024-03-20",
    outcomes: [
      "Developed comprehensive marketing analytics dashboard",
      "Implemented automated campaign management system",
      "Created audience segmentation and targeting tools",
    ],
    metrics: [
      "Streamlined marketing operations workflow",
      "Enhanced campaign performance tracking",
      "Improved audience engagement metrics",
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
    industry: "Marketing & Advertising",
  },
  {
    title: "Dairy Milk Tracker Pro",
    slug: "dairy-milk-tracker-pro",
    summary:
      "An advanced application for tracking dairy milk production and distribution, ensuring quality control and efficient supply chain management.",
    description:
      "Developed a comprehensive dairy management application that tracks milk production, distribution, and quality control throughout the supply chain. The platform helps dairy farmers and distributors monitor inventory, track quality metrics, and optimize distribution routes.",
    metaTitle: "Dairy Milk Tracker Pro | Dairy Management Platform",
    metaDescription:
      "Dairy Milk Tracker Pro - Advanced application for tracking dairy milk production and distribution with quality control and supply chain management.",
    tech: ["TypeScript", "Supabase", "Edge Functions", "Resend", "OpenRouter API", "Tailwind CSS"],
    tags: ["Dairy Management", "Supply Chain", "Quality Control", "Inventory Tracking"],
    role: "Full-Stack Developer",
    timeline: "16 weeks",
    publishedAt: "2024-02-10",
    outcomes: [
      "Implemented real-time milk production tracking",
      "Built quality control monitoring system",
      "Created distribution route optimization",
    ],
    metrics: [
      "Improved supply chain efficiency",
      "Enhanced quality control processes",
      "Streamlined inventory management",
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
    industry: "Agriculture & Food Production",
  },
  {
    title: "Jasmyn Plaasprodukte Website",
    slug: "jasmyn-plaasprodukte-website",
    summary:
      "Official website for Jasmyn Plaasprodukte, a renowned farmstall offering high-quality farm products sourced directly from local farmers.",
    description:
      "Designed and developed the official website for Jasmyn Plaasprodukte, a family-owned farmstall that brings the finest farm-fresh products to customers. The website showcases their commitment to quality, sustainability, and supporting local farmers while providing information about farm tours, products, and services.",
    metaTitle: "Jasmyn Plaasprodukte | Farm Fresh Products Website",
    metaDescription:
      "Jasmyn Plaasprodukte - Official website for a renowned farmstall offering high-quality farm products sourced directly from local farmers in South Africa.",
    tech: ["Wix", "Responsive Design", "SEO Optimization"],
    tags: ["Farm Products", "E-commerce", "Sustainability", "Local Agriculture"],
    role: "Web Developer & Designer",
    timeline: "6 weeks",
    publishedAt: "2024-04-05",
    outcomes: [
      "Created responsive website showcasing farm products and services",
      "Implemented farm tour booking system",
      "Built newsletter subscription functionality",
    ],
    metrics: [
      "Improved online presence for local farm business",
      "Enhanced customer engagement through farm tours",
      "Streamlined product information delivery",
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
    industry: "Agriculture & Retail",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);




