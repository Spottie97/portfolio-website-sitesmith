import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";

export function CaseStudiesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Case studies
            </h2>
            <p className="text-muted-foreground">
              Explore detailed write-ups covering problem framing, solution design, and measurable outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


