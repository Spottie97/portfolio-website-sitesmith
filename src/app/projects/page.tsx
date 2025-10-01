import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Case studies featuring supply chain, fintech, and analytics platforms delivered with measurable outcomes.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <CaseStudiesGrid />;
}

