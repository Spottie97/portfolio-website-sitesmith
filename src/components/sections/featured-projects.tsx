import Link from "next/link";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="container space-y-6 py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Featured projects
          </h2>
          <p className="text-muted-foreground">
            Agricultural software solutions delivering measurable improvements in farm efficiency and profitability.
          </p>
        </div>
        <Button asChild variant="ghost">
          <Link href="/projects">Browse all projects</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

