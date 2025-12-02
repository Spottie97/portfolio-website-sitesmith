import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = buildMetadata({
  title: "Work & Case Studies",
  description:
    "Explore real-world projects with measurable results. From custom web applications to business automation platforms—see how modern technology solves real business challenges.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <CaseStudiesGrid />
    </>
  );
}
