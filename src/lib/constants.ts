import { allSkills } from "@/data/skills";

export const SITE_NAME = "Reinhardt Erasmus";
export const SITE_TITLE = "Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Full-stack developer and Head of Operations. I build business software, AI tooling, and games, from production systems to public experiments.";
export const SITE_LOCATION = "South Africa";
export const SITE_CONTACT_EMAIL = "reinhardterasmus@gmail.com";
export const SITE_CONTACT_NAME = "Reinhardt Erasmus";
export const SITE_WHATSAPP = "https://wa.me/27834003092";
export const SITE_PHONE = "+27834003092";
export const AVAILABILITY_NOTE = "Open to collaborations and opportunities";
export const PRIMARY_CTA = {
  label: "Get in touch",
  href: "/contact",
};
export const SECONDARY_CTA = {
  label: "View my work",
  href: "/projects",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/reinhardterasmus_/",
  github: "https://github.com/Spottie97",
  linkedin: "https://www.linkedin.com/in/reinhardterasmus/",
};

export const NAV_LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SKILLS = allSkills.map((entry) => entry.name);

export const FOCUS_AREAS = [
  { href: "/projects#business", label: "Business software" },
  { href: "/projects#ai", label: "AI & automation" },
  { href: "/projects#games", label: "Games" },
];
