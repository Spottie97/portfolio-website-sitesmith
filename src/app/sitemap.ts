import { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { servicePackages } from "@/data/services";
import { env } from "@/env.mjs";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/services", "/about", "/contact", "/privacy", "/terms"]; 
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const serviceRoutes = servicePackages.map((service) => `/services#${service.slug}`);

  const allRoutes = [...routes, ...projectRoutes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
}


