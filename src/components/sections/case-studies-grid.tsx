"use client";

import { useEffect, useState } from "react";

import { projectCategories, projects } from "@/data/projects";
import { categoryMeta } from "@/lib/project-meta";
import { ProjectCard } from "@/components/cards/project-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = ["all", ...projectCategories] as const;

type ProjectFilter = (typeof filters)[number];

function isProjectFilter(value: string): value is ProjectFilter {
  return (filters as readonly string[]).includes(value);
}

function filterLabel(filter: ProjectFilter): string {
  switch (filter) {
    case "all":
      return "All";
    case "business":
    case "ai":
    case "games":
      return categoryMeta(filter).label;
    default: {
      const exhaustive: never = filter;
      return exhaustive;
    }
  }
}

export function CaseStudiesGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (isProjectFilter(hash) && hash !== "all") {
      setFilter(hash);
    }
  }, []);

  const visible =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
        <Tabs
          value={filter}
          onValueChange={(value) => {
            if (isProjectFilter(value)) {
              setFilter(value);
              const nextHash = value === "all" ? window.location.pathname : `${window.location.pathname}#${value}`;
              window.history.replaceState(null, "", nextHash);
            }
          }}
        >
          <TabsList className="h-auto flex-wrap">
            {filters.map((item) => {
              const count =
                item === "all"
                  ? projects.length
                  : projects.filter((project) => project.category === item).length;
              return (
                <TabsTrigger key={item} value={item}>
                  {filterLabel(item)} ({count})
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
