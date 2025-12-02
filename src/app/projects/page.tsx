import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Case Studies",
  description:
    "Real case studies with measurable results: custom web applications, business automation platforms, and e-commerce solutions. See how technology solves real business challenges with proven ROI.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <CaseStudiesGrid />;
}

