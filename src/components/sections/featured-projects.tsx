import Link from "next/link";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-left md:items-center md:text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Recent proof-of-impact builds
              </h2>
              <p className="text-muted-foreground">
                Cross-functional projects shipping telemetry dashboards, AI workflows, and commercial sites that keep operators, agronomists, and leadership aligned.
              </p>
            </div>
            <div className="flex w-full justify-start md:justify-center">
              <Button asChild variant="ghost">
                <Link href="/projects">Browse all projects</Link>
              </Button>
            </div>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

