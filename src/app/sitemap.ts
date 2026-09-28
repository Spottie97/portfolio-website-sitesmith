import { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { env } from "@/env.mjs";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/skills", "/about", "/contact", "/privacy", "/terms"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const allRoutes = [...routes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
}


