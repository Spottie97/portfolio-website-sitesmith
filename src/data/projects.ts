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
      "Digital recipe platform that helped artisan bakers standardize production, reducing waste by 30% and ensuring consistent quality across batches.",
    description:
      "Challenge: A growing artisan bakery using farm-fresh ingredients struggled with inconsistent batch quality and significant waste due to unstandardized recipes and techniques across their team.\n\nSolution: Built a comprehensive digital guide with precise recipes, step-by-step techniques, and ingredient tracking. The platform ensures every baker follows the same proven methods, tracks ingredient usage, and maintains consistent quality.\n\nImpact: Reduced ingredient waste by 30% through precise measurements and better planning, improved batch consistency by 95%, and cut training time for new bakers from 3 weeks to 1 week. The system helps maximize value from premium farm ingredients.",
    metaTitle: "Frodough Baker Guide | Food Production Management Platform",
    metaDescription:
      "How a digital recipe platform reduced waste by 30% and improved consistency for an artisan bakery using farm-fresh ingredients.",
    tech: ["Next.js", "Supabase", "Resend"],
    tags: ["Food Production", "Recipe Management", "Quality Control", "Web Development"],
    role: "Full-Stack Developer",
    timeline: "8 weeks",
    publishedAt: "2024-01-15",
    outcomes: [
      "Reduced ingredient waste by 30% through precise recipe standardization",
      "Improved batch consistency from 70% to 95%",
      "Cut new baker training time from 3 weeks to 1 week",
    ],
    metrics: [
      "30% reduction in ingredient waste",
      "95% batch-to-batch consistency achieved",
      "66% faster training for new staff members",
      "50+ standardized recipes with precise measurements",
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
      "Marketing platform built for agricultural businesses to reach customers effectively, tracking campaign performance and ROI without the complexity.",
    description:
      "Challenge: Agricultural businesses were struggling with marketing tools built for generic industries, making it hard to track seasonal campaigns, reach the right farm customers, and prove marketing ROI.\n\nSolution: Created a marketing framework specifically designed for agricultural businesses, with campaign management, performance tracking, and audience segmentation that understands farming seasons, regional targeting, and agricultural buying cycles.\n\nImpact: Helped agricultural businesses streamline their marketing operations, reduce campaign setup time by 50%, and clearly demonstrate marketing ROI through comprehensive but simple analytics. The platform makes professional marketing accessible without overwhelming small teams.",
    metaTitle: "Agnovo Marketing Core | Agricultural Marketing Platform",
    metaDescription:
      "Marketing platform designed for agricultural businesses—campaign management, analytics, and ROI tracking that understands farming seasons and agricultural markets.",
    tech: ["React.js", "TypeScript", "Supabase", "Resend", "Shadcn UI"],
    tags: ["Agricultural Marketing", "Analytics", "Campaign Management", "AgTech"],
    role: "Lead Developer & Technical Architect",
    timeline: "12 weeks",
    publishedAt: "2024-03-20",
    outcomes: [
      "Reduced campaign setup time by 50% with agricultural-focused templates",
      "Created seasonal campaign tracking aligned with farming cycles",
      "Built ROI dashboard that connects marketing spend to actual sales",
    ],
    metrics: [
      "50% reduction in campaign setup time",
      "Clear marketing ROI tracking and reporting",
      "Seasonal campaign management for agricultural cycles",
      "Simplified analytics for small agricultural teams",
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
      "Real-time dairy production tracking that turned a 4-hour daily reporting burden into 15 minutes, helping dairy operations maintain quality and optimize distribution.",
    description:
      "Challenge: A growing dairy operation was drowning in paperwork, spending hours each day manually tracking production, quality checks, and distribution—leading to errors and delayed decisions.\n\nSolution: Built a comprehensive tracking system that captures production data in real-time, automates quality monitoring, and optimizes delivery routes based on freshness requirements.\n\nImpact: Reduced daily reporting from 4 hours to 15 minutes, eliminated manual errors in quality tracking, and improved distribution efficiency by 25%. The system paid for itself within the first season through time savings and reduced waste.",
    metaTitle: "Dairy Milk Tracker Pro | Agricultural Technology Case Study",
    metaDescription:
      "How custom dairy management software reduced daily reporting by 94% and improved distribution efficiency by 25% for a growing dairy operation.",
    tech: ["TypeScript", "Supabase", "Edge Functions", "Resend", "OpenRouter API", "Tailwind CSS"],
    tags: ["Dairy Management", "Supply Chain", "Quality Control", "Inventory Tracking"],
    role: "Full-Stack Developer",
    timeline: "16 weeks",
    publishedAt: "2024-02-10",
    outcomes: [
      "Reduced daily reporting time from 4 hours to 15 minutes (94% reduction)",
      "Eliminated manual errors in quality tracking with automated monitoring",
      "Improved distribution efficiency by 25% through smart route optimization",
    ],
    metrics: [
      "94% reduction in daily reporting time",
      "25% improvement in distribution efficiency",
      "100% elimination of manual quality tracking errors",
      "Paid for itself in first season through time and waste reduction",
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
      "Modern website that brought a family farmstall online, increasing customer inquiries by 60% and making farm tour bookings effortless.",
    description:
      "Challenge: A beloved family farmstall had no online presence, missing opportunities to reach new customers and making it difficult for people to learn about their products and book farm tours.\n\nSolution: Designed and launched a beautiful, mobile-friendly website that showcases their farm-fresh products, tells their sustainability story, and makes booking farm tours simple. The site highlights their commitment to supporting local farmers and quality.\n\nImpact: Within 3 months of launch, customer inquiries increased by 60%, farm tour bookings doubled, and the farmstall gained visibility among customers who never knew they existed. The easy-to-update system lets them showcase seasonal products and share their farming story.",
    metaTitle: "Jasmyn Plaasprodukte | Farm-to-Customer Website Success Story",
    metaDescription:
      "How a modern website increased customer inquiries by 60% and doubled farm tour bookings for a family-owned farmstall in South Africa.",
    tech: ["Wix", "Responsive Design", "SEO Optimization"],
    tags: ["Farm Products", "E-commerce", "Sustainability", "Local Agriculture"],
    role: "Web Developer & Designer",
    timeline: "6 weeks",
    publishedAt: "2024-04-05",
    outcomes: [
      "Increased customer inquiries by 60% within first 3 months",
      "Doubled farm tour bookings through simple online booking system",
      "Created easy content management for showcasing seasonal products",
    ],
    metrics: [
      "60% increase in customer inquiries",
      "100% increase in farm tour bookings",
      "3-month ROI through increased business",
      "Mobile-responsive for customers browsing on the go",
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




