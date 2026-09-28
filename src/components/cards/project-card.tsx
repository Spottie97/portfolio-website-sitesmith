"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

import type { Project } from "@/data/projects";
import { categoryMeta, statusBadgeVariant, visibilityLabel } from "@/lib/project-meta";
import { ProjectCover } from "@/components/projects/project-cover";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
  className?: string;
  index?: number;
};

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  const category = categoryMeta(project.category);
  const repoUrl = project.visibility === "public" ? project.repo : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05 }}
    >
      <SpotlightCard className={className}>
        <Card className="flex h-full flex-col border-0 group overflow-hidden">
          <CardHeader className="space-y-4 p-0">
            <Link href={`/projects/${project.slug}`} className="block relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-muted">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.featured}
                  />
                ) : (
                  <ProjectCover title={project.title} category={project.category} />
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                {project.featured ? (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                ) : null}
              </div>
            </Link>

            <div className="px-6 space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{category.label}</Badge>
                <Badge variant={statusBadgeVariant(project.status)}>{project.status}</Badge>
              </div>
              <Link href={`/projects/${project.slug}`}>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
            </div>
          </CardHeader>

          <CardContent className="flex-1 px-6 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 ? (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 4}
                </Badge>
              ) : null}
            </div>
          </CardContent>

          <CardFooter className="px-6 pb-6 flex items-center gap-2">
            <Button asChild variant="default" size="sm" className="group/btn">
              <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                View project
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            {repoUrl ? (
              <Button asChild variant="ghost" size="icon" className="h-9 w-9">
                <Link href={repoUrl} target="_blank" rel="noreferrer" aria-label="View repository">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            ) : (
              <span className="text-xs text-muted-foreground">
                {visibilityLabel(project.visibility, project.category)}
              </span>
            )}
            {project.live ? (
              <Button asChild variant="ghost" size="icon" className="h-9 w-9 ml-auto">
                <Link href={project.live} target="_blank" rel="noreferrer" aria-label="View live site">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      </SpotlightCard>
    </motion.div>
  );
}
