import type { Metadata } from "next";
import Script from "next/script";

import { projects } from "@/data/projects";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsSnapshot } from "@/components/sections/skills-snapshot";
import { StatsStrip } from "@/components/sections/stats-strip";
import { FinalCta } from "@/components/sections/cta";
import { SITE_NAME } from "@/lib/constants";
import { buildMetadata, jsonLdScriptProps, projectJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description:
    "Portfolio of Reinhardt Erasmus: business software, AI tooling, and games. Production systems, prototypes, and public experiments.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-projects"
        {...jsonLdScriptProps({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: projectJsonLd({
              title: project.title,
              summary: project.summary,
              slug: project.slug,
              tech: project.tech,
              date: project.publishedAt,
              highlights: project.highlights.join(", "),
              image: project.coverImage,
              links: {
                live: project.live,
                repo: project.visibility === "public" ? project.repo : undefined,
              },
            }),
          })),
        })}
      />
      <Hero />
      <StatsStrip />
      <FeaturedProjects />
      <SkillsSnapshot />
      <Logos />
      <FinalCta />
    </>
  );
}
