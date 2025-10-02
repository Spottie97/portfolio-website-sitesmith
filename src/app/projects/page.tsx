import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = buildMetadata({
  title: "Agricultural Technology Projects",
  description:
    "Real AgTech case studies with measurable results: dairy management systems, farm websites, food production platforms. See how technology solves real farming challenges with proven ROI and efficiency gains.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <CaseStudiesGrid />;
}

