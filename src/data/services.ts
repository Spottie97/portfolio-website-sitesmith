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
    summary: "Once-off SEO audit and optimization focused on agri keywords to improve your online visibility and inbound leads.",
    description:
      "Comprehensive SEO audit and optimization package designed specifically for agricultural businesses to improve search rankings and attract more qualified leads.",
    deliverables: [
      "SEO audit (technical, on-page, Core Web Vitals, index coverage, schema)",
      "Keyword + content gap analysis focused on agri keywords (inputs, services, crops, seasons)",
      "On-page fixes for up to 10 pages (titles, meta, headings, internal links, schema for products/services)",
      "Local SEO setup (Google Business Profile, NAP consistency, basic citation list)",
      "Performance improvements (image compression, caching recommendations)",
    ],
    idealFor: "Farms, agri suppliers, packhouses needing inbound leads",
    cta: "Get your SEO audit",
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
    summary: "Modern responsive website launch with CMS setup, conversion optimization, and essential integrations for agricultural businesses.",
    description:
      "Complete web development solution for agricultural businesses, from modern responsive design to CMS setup and conversion optimization.",
    deliverables: [
      "Modern responsive website (up to 8 pages: Home, About, Services, Crops/Products, Case Studies, Blog, Contact, Compliance)",
      "CMS setup (WordPress, Webflow, or lightweight framework) with editor training",
      "Conversion setup (quote/booking/contact forms with email/WhatsApp notifications)",
      "Essential integrations (analytics, consent management, basic SEO structure)",
      "Optional add-ons: product catalogue, basic e-commerce, multilingual, farmer portal",
    ],
    idealFor: "Establish or refresh online presence to support sales and compliance",
    cta: "Launch your agri site",
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
    summary: "High-ROI AI workflows to automate manual admin tasks and improve decision-making for agricultural operations.",
    description:
      "Strategic AI integration to identify and implement high-impact automation workflows that reduce manual work and improve operational efficiency.",
    deliverables: [
      "Identify 1–2 high-ROI AI use cases (data extraction, forecasting, copilot, triage)",
      "Implement one AI workflow end-to-end (prompting, guardrails, monitoring)",
      "Connect to existing tools (Sheets, ERP/accounting, email/Teams/Slack/WhatsApp alerts)",
      "Governance: data privacy, access control, prompt logs, fallback rules",
    ],
    idealFor: "Teams drowning in manual admin or needing faster decisions",
    cta: "Automate your operations",
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
    summary: "Connect sensors and equipment to cloud dashboards with automated alerts for water management, cold chain, and equipment monitoring.",
    description:
      "Complete IoT integration solution to connect your field sensors and equipment to cloud-based monitoring and alerting systems.",
    deliverables: [
      "Integrate 1–2 sensor types (soil moisture, weather station, cold chain temps, equipment telemetry)",
      "Data pipeline: device → gateway/cloud → storage → dashboard/alerts",
      "Threshold-based alerts (SMS/WhatsApp/email) for exceptions (moisture, temp, downtime)",
      "Basic dashboard with trends and exportable reports",
      "Optional: control loops (e.g., irrigation triggers), offline failover, edge buffering",
    ],
    idealFor: "Water management, cold chain compliance, equipment uptime",
    cta: "Connect your field data",
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
    summary: "Custom development and consultation for complex agricultural technology needs, multi-module builds, and enterprise integrations.",
    description:
      "Strategic IT partnership for complex agricultural technology projects, custom platform development, and enterprise-level integrations.",
    deliverables: [
      "Discovery workshops → architecture → phased plan",
      "Multi-module builds (packhouse, traceability, inventory, finance tie-ins)",
      "Complex integrations (ERP, marketplaces, packing lines, mobile offline apps)",
      "Security reviews, legacy migrations, SLAs, or seasonal scaling",
      "Optional ongoing support (SLA with response times)",
    ],
    idealFor: "Complex integrations, security reviews, legacy migrations, or seasonal scaling needs",
    cta: "Discuss your custom needs",
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

