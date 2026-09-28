export const projectCategories = ["business", "ai", "games"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectStatuses = ["In production", "Prototype", "In development"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export type ProjectVisibility = "public" | "private";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  tech: string[];
  tags: string[];
  role: string;
  timeline: string;
  publishedAt: string;
  highlights: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  coverImage?: string;
  coverVideo?: string;
  gallery?: string[];
  industry: string;
};

export const projects: Project[] = [
  {
    title: "Food Fair Management System",
    slug: "food-fair-management-system",
    summary:
      "Operations platform for Food Fair covering production, inventory, orders, delivery notes, and reporting across web and mobile clients.",
    description:
      "Food Fair's day-to-day operations used to depend on paper. This is the in-house system that replaced that for production, inventory, orders, delivery notes, and reporting, with both web and mobile clients. It is the app in use at foodfair.cloud.\n\nAn earlier version concentrated on the cheese factory: product records, stock, invoicing, and ticketing across departments. The current system is the one the business runs on.",
    metaTitle: "Food Fair Management System",
    metaDescription:
      "In-house operations platform for production, inventory, orders, delivery notes, and reporting at Food Fair.",
    category: "business",
    status: "In production",
    visibility: "private",
    tech: ["React", "TypeScript", "Supabase", "Vite", "Tailwind CSS", "GitHub Actions"],
    tags: ["Operations", "Inventory", "Reporting"],
    role: "Full-stack developer",
    timeline: "2025 – 2026",
    publishedAt: "2026-09-01",
    highlights: [
      "Production, inventory, orders, delivery notes, and reporting",
      "Web and mobile clients for the same operation",
      "Cheese-factory product, stock, and ticketing from the earlier system",
      "Automated checks on pull requests",
    ],
    live: "https://foodfair.cloud",
    featured: true,
    coverImage: "/images/projects/foodfair/logo.jpg",
    gallery: [
      "/images/projects/foodfair/2.png",
      "/images/projects/foodfair/3.png",
      "/images/projects/foodfair/4.png",
      "/images/projects/foodfair/5.png",
    ],
    industry: "Food production",
  },
  {
    title: "Jasmyn Plaasprodukte",
    slug: "jasmyn-plaasprodukte",
    summary:
      "Public site for a Hartbeespoort farmstall, plus a Next.js rebuild and a chatbot on the contact form.",
    description:
      "Jasmyn Plaasprodukte is a family farmstall in Hartbeespoort. The live site is on Wix. Alongside it I built a Next.js version with the same rustic, farm-to-table presentation: responsive layout, structured metadata, and a contact form wired for automation.\n\nA separate chatbot sits on the Wix contact form so enquiries do not depend on someone watching the inbox.",
    metaTitle: "Jasmyn Plaasprodukte",
    metaDescription:
      "Website, Next.js rebuild, and contact chatbot for Jasmyn Plaasprodukte, a farmstall in Hartbeespoort.",
    category: "business",
    status: "In production",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Wix", "Node.js"],
    tags: ["Website", "Chatbot"],
    role: "Web developer",
    timeline: "2024 – 2025",
    publishedAt: "2025-12-01",
    highlights: [
      "Live Wix site for the farmstall",
      "Next.js rebuild with a mobile-first layout and structured metadata",
      "Contact form prepared for webhook automation",
      "Custom chatbot on the Wix contact form",
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
    industry: "Farmstall",
  },
  {
    title: "Top Breeder",
    slug: "top-breeder",
    summary:
      "Dairy breeding system for tracking a herd, importing spreadsheets, and recommending bulls.",
    description:
      "Top Breeder is a breeding management app for Food Fair's dairy herd. It keeps herd records, imports existing spreadsheets, and recommends bulls, with a dashboard of herd statistics on the front page.",
    metaTitle: "Top Breeder",
    metaDescription:
      "Dairy breeding management with herd statistics, spreadsheet import, and bull recommendations.",
    category: "business",
    status: "In development",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "NextAuth", "Node.js"],
    tags: ["Dairy", "Breeding", "Data import"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-05-01",
    highlights: [
      "Herd statistics dashboard",
      "Bull recommendations from herd data",
      "Excel import of existing records",
      "Breeding tracking",
    ],
    coverImage: "/images/projects/top-breeder/logo.png",
    industry: "Dairy",
  },
  {
    title: "Food Fair Homelab Dashboard",
    slug: "food-fair-homelab-dashboard",
    summary:
      "Self-hosted dashboard for nodes, Docker, files, logs, and systemd services, reached over SSH.",
    description:
      "A single Docker container for the Food Fair homelab. Nodes are grouped by cluster with live CPU, memory, and disk figures. From the same screen you can open a terminal, browse files, start and stop systemd services, stream logs, and manage Docker containers.",
    metaTitle: "Food Fair Homelab Dashboard",
    metaDescription:
      "Self-hosted server dashboard with an SSH terminal, file manager, service controls, logs, and Docker management.",
    category: "business",
    status: "In development",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Docker", "SQLite", "Node.js"],
    tags: ["Homelab", "SSH", "Docker"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-04-01",
    highlights: [
      "Node overview grouped by cluster, with live CPU, memory, and disk",
      "Browser terminal to any node",
      "Remote file browser and systemd service controls",
      "Live log streaming and Docker container controls",
    ],
    coverImage: "/images/projects/food-fair-homelab-dashboard/logo.png",
    industry: "Infrastructure",
  },
  {
    title: "Milk Standardization Calculator",
    slug: "milk-standardization-calculator",
    summary:
      "Public calculator for the whole milk and skim milk needed to hit a target butterfat percentage.",
    description:
      "A small tool for dairy processors. Enter the butterfat you want and it works out how much whole milk and skim milk to combine. It is public, with a live demo.",
    metaTitle: "Milk Standardization Calculator",
    metaDescription:
      "Calculator for blending whole milk and skim milk to a target butterfat percentage.",
    category: "business",
    status: "In production",
    visibility: "public",
    tech: ["React", "TypeScript", "Vite"],
    tags: ["Dairy", "Calculator"],
    role: "Full-stack developer",
    timeline: "2025",
    publishedAt: "2025-10-01",
    highlights: [
      "Butterfat target in, whole-milk and skim-milk quantities out",
      "Public repository and a live demo",
    ],
    repo: "https://github.com/Spottie97/milk-standardization-calculator",
    live: "https://milk-standardization-calculator.lovable.app/",
    coverImage: "/images/projects/milk-standardization-calculator/logo.png",
    industry: "Dairy",
  },
  {
    title: "Harvest Planner",
    slug: "harvest-planner",
    summary:
      "Farm records for fields, crops, tasks, harvests, inventory, and finances, with maps for field areas.",
    description:
      "Harvest Planner is a farm management app aimed at South African farms. It tracks fields, crops, tasks, activities, harvests, inventory, and finances. Fields are drawn on a map, and area is calculated from those shapes.",
    metaTitle: "Harvest Planner",
    metaDescription:
      "Farm management app for fields, crops, tasks, harvests, inventory, finances, and mapped field areas.",
    category: "business",
    status: "In development",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Prisma", "Leaflet", "Tailwind CSS", "NextAuth", "Node.js"],
    tags: ["Farming", "Maps", "Records"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-01-01",
    highlights: [
      "Records for fields, crops, tasks, activities, and harvests",
      "Inventory and finances alongside the field work",
      "Map drawing for field boundaries and area",
      "Signed-in access with NextAuth",
    ],
    coverImage: "/images/projects/harvest-planner/logo.png",
    industry: "Farming",
  },
  {
    title: "Jasmyn Management System",
    slug: "jasmyn-management-system",
    summary:
      "Production and inventory for Jasmyn, with a Next.js back office and an Expo app on the bakery floor.",
    description:
      "Back-office and floor tools for Jasmyn Plaasprodukte. Bakery is the department that is built. Butchery is left for a later phase. The web app is the back office. Phones and tablets on the floor run an Expo app against the same PostgreSQL database. It is self-hosted with Docker on Coolify.",
    metaTitle: "Jasmyn Management System",
    metaDescription:
      "Bakery production and inventory system with a Next.js back office, an Expo floor app, and a PostgreSQL database.",
    category: "business",
    status: "In development",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Expo", "PostgreSQL", "Drizzle", "Docker", "Coolify", "Node.js"],
    tags: ["Inventory", "Bakery", "Mobile"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-06-01",
    highlights: [
      "Bakery production and inventory, with butchery planned as a later department",
      "Next.js back office and an Expo app for floor tablets and phones",
      "Shared types and Zod schemas across the monorepo",
      "PostgreSQL via Drizzle, self-hosted on Coolify",
    ],
    coverImage: "/images/projects/jasmyn/logo.jpg",
    industry: "Food production",
  },
  {
    title: "Agnovo Marketing Core",
    slug: "agnovo-marketing-core",
    summary:
      "Marketing site and admin portal for Agnovo, with a blog CMS, bookings, and role-based editing.",
    description:
      "The public site and the admin tool for Agnovo, an agriculture marketing agency. Visitors get services, case studies, the team, a blog, resources, contact, and booking. Editors sign in through Supabase and manage that content, including a TipTap blog editor. Newsletter signups and resource downloads are tracked.",
    metaTitle: "Agnovo Marketing Core",
    metaDescription:
      "Marketing website and admin portal for Agnovo, with a blog CMS, bookings, and role-based access.",
    category: "business",
    status: "In production",
    visibility: "private",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "shadcn/ui"],
    tags: ["Marketing site", "CMS", "Admin"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-07-01",
    highlights: [
      "Public pages for services, case studies, team, blog, resources, and contact",
      "Admin portal with admin and editor roles",
      "Blog CMS with a TipTap editor",
      "Calendar booking, newsletter signup, and tracked resource downloads",
    ],
    live: "https://agnovo-marketing-core.vercel.app",
    coverImage: "/images/projects/agnovo/agnovo-logo-black.png",
    gallery: [
      "/images/projects/agnovo/1.png",
      "/images/projects/agnovo/2.png",
      "/images/projects/agnovo/3.png",
      "/images/projects/agnovo/4.png",
    ],
    industry: "Marketing",
  },
  {
    title: "Agnovo Invoicing",
    slug: "agnovo-invoicing",
    summary:
      "Invoicing app for creating, sending, and chasing invoices, with PDF generation and email delivery.",
    description:
      "A focused invoicing app. You keep a business profile and client list, build an invoice, render it to PDF, and email it. Follow-up on unpaid invoices is part of the flow. Sign-in is Google or a magic link.",
    metaTitle: "Agnovo Invoicing",
    metaDescription:
      "Invoicing application with client records, PDF invoices, email delivery, and follow-ups.",
    category: "business",
    status: "In production",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Resend", "Node.js", "Vercel"],
    tags: ["Invoicing", "PDF", "Email"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-04-21",
    highlights: [
      "Sign-in with Google or a magic link",
      "Business profile and client records",
      "Invoices rendered to PDF and sent by email",
      "Follow-up on outstanding invoices",
    ],
    live: "https://agnovo-invoicing.vercel.app",
    coverImage: "/images/projects/agnovo/agnovo-logo-black.png",
    industry: "Business software",
  },
  {
    title: "Frodough Baker Guide",
    slug: "frodough-baker-guide",
    summary:
      "A sourdough starter guide: how to keep a starter happy, plus care steps, tips, and a contact page.",
    description:
      "Frodough Baggins is a small site about looking after a sourdough starter. The home page introduces the starter. Care and tips pages walk through keeping it bake-ready. About and contact sit alongside. It is a Vite and React site, styled with Tailwind and shadcn/ui.",
    metaTitle: "Frodough Baker Guide",
    metaDescription:
      "Sourdough starter guide with care instructions, baking tips, and a contact page.",
    category: "business",
    status: "In development",
    visibility: "private",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    tags: ["Content site", "Sourdough"],
    role: "Web developer",
    timeline: "2025",
    publishedAt: "2025-10-02",
    highlights: [
      "Starter introduction and a step-by-step care guide",
      "Tips, about, and contact pages",
      "Vite, React, Tailwind CSS, and shadcn/ui",
    ],
    coverImage: "/images/projects/frodough/2ac10c0e-3c39-4ae1-8f05-c84744586f99.png",
    gallery: [
      "/images/projects/frodough/1.png",
      "/images/projects/frodough/2.png",
      "/images/projects/frodough/3.png",
      "/images/projects/frodough/4.png",
    ],
    industry: "Food",
  },
  {
    title: "Forever Vital Therapy",
    slug: "forever-vital-therapy",
    summary:
      "Marketing site and an order-hub prototype for a Krugersdorp reseller that orders machines only after a client does.",
    description:
      "Forever Vital Therapy offers frequency healing and cold energy therapy in Krugersdorp. The marketing site is a static Next.js build: landing page, packages, and a contact form that opens WhatsApp.\n\nThe order hub is a pitch prototype. Machines are ordered from suppliers only after a client orders, so nothing is held in stock. Dashboard, orders, payments, and parcel tracking all run on seeded data. WhatsApp and email are realistic previews, not live integrations.",
    metaTitle: "Forever Vital Therapy",
    metaDescription:
      "Marketing site and stockless order-hub prototype for a frequency-healing machine reseller.",
    category: "business",
    status: "Prototype",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
    tags: ["Website", "Prototype", "Orders"],
    role: "Full-stack developer",
    timeline: "2026",
    publishedAt: "2026-06-11",
    highlights: [
      "Static marketing site with services, packages, and WhatsApp enquiries",
      "Order hub for a stockless reseller: orders placed with suppliers after the client orders",
      "Dashboard, payment state, and parcel tracking on seeded data",
      "WhatsApp and email shown as previews, not live sends",
    ],
    live: "https://forever-vital-therapy.vercel.app",
    coverImage: "/images/projects/forever-vital-therapy/logo.png",
    industry: "Wellness",
  },
  {
    title: "Twelve&Co",
    slug: "twelve-and-co",
    summary:
      "Website for a boutique content and social media agency, built with Next.js and custom CSS.",
    description:
      "Twelve&Co is a boutique creative content and social media agency. The site is Next.js on the App Router, styled with plain CSS rather than Tailwind, with Resend for email and a Three.js scene in the page. It is deployed on Vercel.",
    metaTitle: "Twelve&Co",
    metaDescription:
      "Agency website for Twelve&Co, built with Next.js, custom CSS, Resend, and Three.js.",
    category: "business",
    status: "In production",
    visibility: "private",
    tech: ["Next.js", "React", "Resend", "Three.js", "Node.js", "Vercel"],
    tags: ["Website", "Agency"],
    role: "Web developer",
    timeline: "2026",
    publishedAt: "2026-05-24",
    highlights: [
      "Marketing site for a content and social agency",
      "Custom CSS, without a utility framework",
      "Email through Resend",
      "A Three.js scene in the page",
    ],
    coverImage: "/images/projects/twelve-and-co/logo.png",
    industry: "Creative agency",
  },
  {
    title: "Valyra",
    slug: "valyra",
    summary:
      "Real-time object detection on DJI drone video, with a PyQt6 interface and YOLOv8.",
    description:
      "Valyra runs object detection on a live drone feed. The desktop app is PyQt6, with a dark and light theme, and is built to keep the video display smooth while YOLOv8 handles detection. Input can be a USB HDMI capture card, a screen capture, or an RTSP stream. The project is aimed at search and rescue, security, and wildlife work, and it has public releases.",
    metaTitle: "Valyra",
    metaDescription:
      "Desktop app for real-time YOLOv8 detection on DJI drone video from HDMI capture, screen capture, or RTSP.",
    category: "ai",
    status: "In development",
    visibility: "public",
    tech: ["Python", "YOLOv8", "PyQt"],
    tags: ["Computer vision", "Drones", "Desktop"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-07-21",
    highlights: [
      "PyQt6 desktop interface for a live video feed",
      "YOLOv8 detection on that feed",
      "HDMI capture, screen capture, or RTSP as the input",
      "Public repository with GitHub releases",
    ],
    repo: "https://github.com/Spottie97/drone-tracking-human-detection",
    featured: true,
    coverImage: "/images/projects/valyra/logo.png",
    industry: "Computer vision",
  },
  {
    title: "Orca Agent CLI",
    slug: "orca-agent-cli",
    summary:
      "Rust CLI that scans a repo, keeps project memory, and routes coding tasks across AI providers.",
    description:
      "Orca is a command-line tool for splitting coding work across models. It scans the repository, stores memory of the project, and builds a context packet for a task. Routing can send that task to Ollama, Claude, Codex, or Cursor, with the aim of using less of a premium model's context. Commands cover init, scan, context, route, a dry-run execute, review, and a memory update. It is written in Rust and published as the `orca` binary.",
    metaTitle: "Orca Agent CLI",
    metaDescription:
      "Rust CLI for AI coding workflows: repo scan, project memory, context packets, and multi-provider routing.",
    category: "ai",
    status: "In development",
    visibility: "public",
    tech: ["Rust"],
    tags: ["CLI", "AI agents"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-05-21",
    highlights: [
      "Repository scan and persistent project memory",
      "Context packets built per task",
      "Routing across Ollama, Claude, Codex, and Cursor",
      "Dry-run execution, review, and memory update commands",
    ],
    repo: "https://github.com/Spottie97/orca-agent-cli",
    featured: true,
    coverImage: "/images/projects/orca-agent-cli/logo.png",
    industry: "Developer tools",
  },
  {
    title: "FAQ Auto-Reply",
    slug: "faq-auto-reply",
    summary:
      "RAG pipeline that answers a client's FAQs on email and WhatsApp using n8n, Ollama, and Qdrant.",
    description:
      "A small retrieval pipeline for client FAQs. Documents are embedded with Ollama, stored in Qdrant, and answered by a llama-server chat model. n8n orchestrates the email and WhatsApp replies. The repo includes a Python ingest script, a one-shot reply script, a stack smoke test, and a Streamlit app for editing the knowledge base.",
    metaTitle: "FAQ Auto-Reply",
    metaDescription:
      "RAG pipeline for FAQ replies on email and WhatsApp, using n8n, Ollama embeddings, Qdrant, and llama-server.",
    category: "ai",
    status: "In development",
    visibility: "public",
    tech: ["Python", "n8n", "Ollama", "Qdrant"],
    tags: ["RAG", "Automation", "n8n"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-05-13",
    highlights: [
      "FAQ documents embedded with Ollama and stored in Qdrant",
      "Answers generated through llama-server",
      "n8n workflows for email and WhatsApp replies",
      "Ingest CLI, smoke test, and a Streamlit knowledge-base admin",
    ],
    repo: "https://github.com/Spottie97/ai-automation-n8n-workflow",
    coverImage: "/images/projects/faq-auto-reply/logo.png",
    industry: "Automation",
  },
  {
    title: "ChatSite AI",
    slug: "chatsite-ai",
    summary:
      "Dashboard for turning a website into a chatbot, with scraping, embeddings, analytics, and Stripe billing.",
    description:
      "ChatSite AI is a product for putting a chatbot on top of an existing website. You create a bot, the app scrapes the site, and the content is stored as embeddings for OpenAI chat. The dashboard covers bot editing, per-bot analytics, API keys, and account settings. Billing is Stripe: plans, checkout, a customer portal, and invoices. Auth and data sit in Supabase.",
    metaTitle: "ChatSite AI",
    metaDescription:
      "Chatbot dashboard that scrapes a website into embeddings, with analytics and Stripe billing.",
    category: "ai",
    status: "In development",
    visibility: "private",
    tech: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Stripe", "Node.js"],
    tags: ["Chatbots", "Embeddings", "Billing"],
    role: "Full-stack developer",
    timeline: "2025",
    publishedAt: "2025-06-20",
    highlights: [
      "Create and edit chatbots from a dashboard",
      "Website scraping into embeddings for OpenAI chat",
      "Per-bot analytics",
      "Stripe plans, checkout, customer portal, and invoices",
    ],
    coverImage: "/images/projects/chatsite-ai/logo.png",
    industry: "SaaS",
  },
  {
    title: "Elderweald",
    slug: "elderweald",
    summary:
      "Voxel MMO in Rust and Bevy, with a Unity client: nine kindreds, procedural biomes, and a dedicated server.",
    description:
      "Elderweald is a multiplayer voxel world with a dedicated server. Players pick from nine kindreds and three classes, explore procedural biomes, and build with voxel blocks. The game client and server are Rust and Bevy. A Unity client is part of the same project. It is early access: a vertical slice, not a finished 1.0.",
    metaTitle: "Elderweald",
    metaDescription:
      "Early-access voxel MMO built in Rust with Bevy, plus a Unity client and a dedicated server.",
    category: "games",
    status: "In development",
    visibility: "private",
    tech: ["Rust", "Bevy", "Unity", "C#"],
    tags: ["MMO", "Voxel", "Multiplayer"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-06-15",
    highlights: [
      "Dedicated-server multiplayer",
      "Nine kindreds and three classes",
      "Procedural biomes and voxel building",
      "Rust and Bevy for the world, plus a Unity client",
    ],
    featured: true,
    coverImage: "/images/projects/elderweald/logo.png",
    industry: "Games",
  },
  {
    title: "Oda Clan Wars",
    slug: "oda-clan-wars",
    summary:
      "Local two-player browser fighting game. Empty the health bar, or have more left when the timer ends.",
    description:
      "Oda Clan Wars is a local two-player fighting game in the browser, in the vein of Tekken and Mortal Kombat. Win by emptying the other health bar, or by having more health when the timer runs out. The repository is public and there is a live demo.",
    metaTitle: "Oda Clan Wars",
    metaDescription:
      "Local two-player browser fighting game with a public repository and a live demo.",
    category: "games",
    status: "In production",
    visibility: "public",
    tech: ["JavaScript", "Canvas"],
    tags: ["Fighting game", "Browser"],
    role: "Developer",
    timeline: "2022 – 2026",
    publishedAt: "2022-10-01",
    highlights: [
      "Local two-player fighting on one keyboard",
      "Health bar or timer decides the round",
      "Public repository and a live demo",
    ],
    repo: "https://github.com/Spottie97/2D-Fight-Simulator",
    live: "https://oda-clan-wars.netlify.app/",
    featured: true,
    coverImage: "/images/projects/oda-clan-wars/logo.png",
    industry: "Games",
  },
  {
    title: "Velocity Breakers",
    slug: "velocity-breakers",
    summary:
      "Unreal Engine 5.7 first-person movement hero shooter, written in C++.",
    description:
      "Velocity Breakers is a first-person shooter built around movement, in Unreal Engine 5.7. The game module is C++ and pulls in Gameplay Abilities, Gameplay Tags, Common UI, and the online subsystem. Champion notes and a phased implementation plan sit in the repo next to the project.",
    metaTitle: "Velocity Breakers",
    metaDescription:
      "Unreal Engine 5.7 first-person movement shooter, with a C++ game module and Gameplay Abilities.",
    category: "games",
    status: "In development",
    visibility: "private",
    tech: ["Unreal Engine", "C++"],
    tags: ["FPS", "Unreal Engine"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-06-07",
    highlights: [
      "Unreal Engine 5.7 project",
      "C++ game module",
      "Gameplay Abilities, Common UI, and online subsystem enabled",
      "Champion design notes kept with the implementation plan",
    ],
    coverImage: "/images/projects/velocity-breakers/logo.png",
    industry: "Games",
  },
  {
    title: "Garden World",
    slug: "garden-world",
    summary:
      "Local Godot prototype of a cozy gardening game: watering, breeding flowers, and pixel art.",
    description:
      "Garden World is a local Godot prototype. You tend a small garden, water through dry spells, and follow a five-step breeding sequence that unlocks a toolkit after a Crimson Daisy blooms. Pixel art covers the eight-direction gardener, terrain, dry and wet soil, flower stages, and a small yard with a shed, watermill, and workbench. Multiplayer, accounts, and a backend are deliberately left out. Save data is local prototype storage.",
    metaTitle: "Garden World",
    metaDescription:
      "Godot prototype of a cozy flower-gardening game with drought watering and a breeding sequence.",
    category: "games",
    status: "Prototype",
    visibility: "private",
    tech: ["Godot"],
    tags: ["Godot", "Pixel art", "Prototype"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-09-25",
    highlights: [
      "Small garden with drought-tolerant watering",
      "Five-step breeding sequence ending in a Crimson Daisy",
      "Pixel art for the gardener, soil, flowers, and yard",
      "Local play only: no accounts, marketplace, or server",
    ],
    coverImage: "/images/projects/garden-world/logo.png",
    industry: "Games",
  },
  {
    title: "Neon Dash",
    slug: "neon-dash",
    summary:
      "Browser arcade game on Canvas, with PartyKit multiplayer for races and in-match sabotage.",
    description:
      "Neon Dash is a short arcade loop: stay alive in a lane of falling obstacles and keep the score going. The whole client is one HTML file drawing to Canvas. Multiplayer state lives on a PartyKit server, where players race, outlast each other, and sabotage a run mid-match. There is a live build.",
    metaTitle: "Neon Dash",
    metaDescription:
      "Canvas arcade survival game with PartyKit multiplayer, racing, and in-match sabotage.",
    category: "games",
    status: "In production",
    visibility: "private",
    tech: ["JavaScript", "Canvas", "PartyKit"],
    tags: ["Arcade", "Multiplayer", "Browser"],
    role: "Developer",
    timeline: "2026",
    publishedAt: "2026-04-08",
    highlights: [
      "Dodge-and-score arcade loop",
      "Canvas rendering from a single HTML file",
      "Real-time multiplayer on PartyKit",
      "Races and mid-match sabotage",
    ],
    live: "https://neon-dash-roan.vercel.app",
    coverImage: "/images/projects/neon-dash/logo.png",
    industry: "Games",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
