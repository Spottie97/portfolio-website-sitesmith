import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";

export function CaseStudiesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Proven Results in Real Farming Conditions
            </h2>
            <p className="text-lg text-muted-foreground">
              Every farm has unique challenges. These case studies show how custom technology addresses real problems with measurable results—from reducing daily reporting burdens to increasing customer inquiries and optimizing operations.
            </p>
            <p className="text-muted-foreground">
              <strong>Built, tested, and proven in actual agricultural operations.</strong> Each project includes the challenge faced, solution implemented, and concrete impact delivered.
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


