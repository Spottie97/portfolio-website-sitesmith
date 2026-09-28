import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { env } from "@/env.mjs";

const BASE_URL = (env.NEXT_PUBLIC_SITE_URL ?? "https://reinhardterasmus.info").replace(/\/$/, "");

const latestContentDate = projects.reduce((latest, project) => {
  return project.publishedAt > latest ? project.publishedAt : latest;
}, projects[0]?.publishedAt ?? "2026-01-01");

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/skills", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/llms.txt", changeFrequency: "weekly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: latestContentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: project.publishedAt,
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...pages, ...projectPages];
}
