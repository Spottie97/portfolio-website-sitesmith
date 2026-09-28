import type { Metadata } from "next";

import { Logos } from "@/components/sections/logos";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { projects } from "@/data/projects";
import { allSkills, skillGroups } from "@/data/skills";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "The stack behind the work: frontend, backend, AI, games, infrastructure, and computer vision, each tied to a real project.",
  path: "/skills",
});

export default function SkillsPage() {
  const toolLabel = allSkills.length === 1 ? "tool" : "tools";
  const areaLabel = skillGroups.length === 1 ? "area" : "areas";
  const projectLabel = projects.length === 1 ? "project" : "projects";

  return (
    <>
      <section className="pb-8 pt-16">
        <div className="container mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">What I work with</h1>
            <p className="text-lg text-muted-foreground">
              These are the tools that show up in the projects, not a wishlist. Open a tool to see
              the work that uses it.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {allSkills.length} {toolLabel} · {skillGroups.length} {areaLabel} · {projects.length}{" "}
            {projectLabel}
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SkillsGrid />
        </div>
      </section>
      <Logos />
    </>
  );
}
