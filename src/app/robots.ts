import { MetadataRoute } from "next";

import { env } from "@/env.mjs";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}





