"use client";

import { projects } from "@/data/projects";
import { FeatureSteps } from "@/components/blocks/feature-section";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  // Transform projects data to feature steps format
  const projectFeatures = featured.map((project, index) => ({
    step: `Project ${index + 1}`,
    title: project.title,
    content: project.summary,
    image: project.coverImage,
    link: `/projects/${project.slug}`,
  }));

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FeatureSteps
          features={projectFeatures}
          title="Featured Projects"
          autoPlayInterval={4000}
          className="p-0"
        />
      </div>
    </section>
  );
}

