import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";

export function CaseStudiesGrid() {
  return (
    <section className="container space-y-8 py-16">
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
    </section>
  );
}


