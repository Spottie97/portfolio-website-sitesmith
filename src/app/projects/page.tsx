import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = buildMetadata({
  title: "Work & Case Studies",
  description:
    "Selected work across business software, AI and automation, and games. Descriptions stick to what was actually built.",
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
