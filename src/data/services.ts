export type ServicePackage = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  cta: string;
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePackages: ServicePackage[] = [
  {
    name: "SEO Optimization Starter",
    slug: "seo-optimization-starter",
    summary: "Get found online by the right customers—SEO audit and optimization focused on agricultural keywords to bring qualified leads to your door.",
    description:
      "Comprehensive SEO audit and optimization package designed specifically for agricultural businesses. Built by someone who understands your crops, seasons, and market—not just generic SEO tactics.",
    deliverables: [
      "Complete SEO health check (technical performance, search visibility, mobile experience)",
      "Agricultural keyword research tailored to your crops, inputs, and services—seasonal focus included",
      "Hands-on optimization of up to 10 pages to rank higher and convert better",
      "Local search setup so nearby customers can find you easily (Google Business Profile, directory listings)",
      "Speed improvements that work even in rural areas with slower connections",
    ],
    idealFor: "Farms, agri suppliers, and packhouses ready to grow through inbound leads",
    cta: "Get your free SEO assessment",
    features: [
      "Before/after SEO health score",
      "Prioritized backlog (90-day plan)",
      "Content brief for next 5 blog posts",
      "Agri-focused keyword research",
    ],
    faqs: [
      {
        question: "How long does the SEO optimization take?",
        answer:
          "The complete SEO Optimization Starter package is delivered within 2-3 weeks, including audit, implementation, and reporting.",
      },
      {
        question: "What's included in the 90-day plan?",
        answer:
          "You'll receive a prioritized roadmap of SEO improvements to implement over the next 90 days, with clear timelines and expected impact for each task.",
      },
    ],
  },
  {
    name: "Web Development \"Agri Site\" Launch",
    slug: "agri-site-launch",
    summary: "Professional website that works as hard as you do—mobile-friendly, easy to update, and built to turn visitors into customers.",
    description:
      "Complete web development solution built specifically for agricultural businesses. No technical jargon, no unnecessary complexity—just a professional site that showcases your operation and brings in business.",
    deliverables: [
      "Professional website (up to 8 pages) designed to convert visitors into customers",
      "Easy-to-use content management system with hands-on training—update it yourself anytime",
      "Quote requests, bookings, and contact forms that alert you via email or WhatsApp",
      "Mobile-optimized for checking in the field or on the go",
      "Add-ons available: product catalogs, online ordering, multi-language support, secure farmer portals",
    ],
    idealFor: "Operations ready to establish or refresh their online presence and support growth",
    cta: "Start your website project",
    features: [
      "Deployed site with brand-consistent components",
      "Documentation + 1 training session",
      "Mobile-optimized for field access",
      "Conversion-focused design",
    ],
    faqs: [
      {
        question: "What's the typical timeline for site launch?",
        answer:
          "Most Agri Site Launch projects are completed within 3-5 weeks, including design, development, content integration, and training.",
      },
      {
        question: "Can I manage content myself after launch?",
        answer:
          "Yes, we provide comprehensive training and documentation so you can easily update content, add new pages, and manage your site independently.",
      },
    ],
  },
  {
    name: "AI Integration \"Ops Assist\"",
    slug: "ai-integration-ops-assist",
    summary: "Stop drowning in paperwork—smart automation that handles routine tasks so you can focus on what actually grows your operation.",
    description:
      "Practical AI integration that saves time and reduces errors without the hype. We identify where automation will have the biggest impact, then put it to work in your daily operations.",
    deliverables: [
      "We identify 1-2 high-impact automation opportunities in your operation",
      "Get one AI workflow up and running end-to-end—proven in real conditions",
      "Seamless connection to your existing tools (spreadsheets, accounting software, messaging apps)",
      "Security and privacy built in from day one—your data stays protected",
    ],
    idealFor: "Operations buried in manual admin work or needing faster, better decisions",
    cta: "Explore automation opportunities",
    features: [
      "Deployed AI workflow with SOP",
      "ROI tracker (time saved, error reduction)",
      "Integration with existing tools",
      "Data privacy and security compliance",
    ],
    faqs: [
      {
        question: "What types of AI workflows can you implement?",
        answer:
          "We focus on practical AI use cases like data extraction from emails/CSV files, yield forecasting, internal Q&A bots, and automated enquiry categorization and quote generation.",
      },
      {
        question: "How do you ensure data privacy?",
        answer:
          "All AI implementations include proper data governance, access controls, prompt logging, and fallback rules to ensure your sensitive agricultural data remains secure.",
      },
    ],
  },
  {
    name: "IoT Integration \"Field-to-Cloud\"",
    slug: "iot-integration-field-to-cloud",
    summary: "Know what's happening in your fields from anywhere—real-time sensor data, instant alerts, and dashboards that help you act fast.",
    description:
      "Turn your sensors into actionable insights. Whether it's soil moisture, temperature monitoring, or equipment tracking, see everything in one place and get alerted when something needs attention.",
    deliverables: [
      "Connect 1-2 sensor types to a single monitoring system (soil, weather, temperature, equipment)",
      "Real-time dashboard showing current conditions and historical trends",
      "Instant alerts via SMS, WhatsApp, or email when thresholds are exceeded",
      "Reliable operation even with poor connectivity—data buffers and syncs when connection returns",
      "Optional: automated controls (like irrigation triggers) and exportable compliance reports",
    ],
    idealFor: "Water management optimization, cold chain compliance, and equipment monitoring",
    cta: "Start monitoring your operation",
    features: [
      "Live telemetry dashboard",
      "Device registry and maintenance playbook",
      "Automated threshold alerts",
      "Offline failover capabilities",
    ],
    faqs: [
      {
        question: "What sensors can you integrate?",
        answer:
          "We can integrate soil moisture sensors, weather stations, cold chain temperature monitors, and equipment telemetry systems. We'll work with your existing hardware or recommend compatible solutions.",
      },
      {
        question: "What happens if internet connectivity is poor?",
        answer:
          "Our IoT solutions include offline failover capabilities and edge buffering to ensure data collection continues even with intermittent connectivity, with automatic sync when connection is restored.",
      },
    ],
  },
  {
    name: "IT Consultation & Custom Solutions",
    slug: "it-consultation-custom-solutions",
    summary: "Big challenges need custom solutions—from complete management platforms to complex integrations, built to fit your operation perfectly.",
    description:
      "Your agricultural technology partner for complex projects. Whether you need a complete custom platform, enterprise integrations, or ongoing IT support, we work together to build exactly what your operation needs.",
    deliverables: [
      "Discovery sessions to understand your operation, then a clear roadmap forward",
      "Custom multi-module systems (packhouse management, traceability, inventory, finance connections)",
      "Complex integrations with existing systems (ERP, marketplaces, packing equipment, offline mobile apps)",
      "Security assessments, legacy system upgrades, and seasonal scaling support",
      "Ongoing support available with guaranteed response times during critical periods",
    ],
    idealFor: "Large operations with complex integration needs, custom requirements, or seasonal scaling demands",
    cta: "Let's discuss your operation",
    features: [
      "Fixed per milestone or time & materials pricing",
      "Phased implementation approach",
      "Enterprise-grade security and compliance",
      "Ongoing support with SLA guarantees",
    ],
    faqs: [
      {
        question: "How do you handle complex integrations?",
        answer:
          "We start with discovery workshops to understand your current systems, then create a detailed architecture plan and phased implementation approach to minimize disruption to your operations.",
      },
      {
        question: "What about ongoing support?",
        answer:
          "We offer flexible support options with SLA guarantees, including response times, regular system optimization, and priority access for updates and new features.",
      },
    ],
  },
];

