import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <SpotlightCard className={className}>
      <Card className="flex h-full flex-col border-0">
        <CardHeader className="space-y-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.featured}
            />
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${project.slug}`}>View case study</Link>
            </Button>
            {project.repo ? (
              <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Link href={project.repo} target="_blank" rel="noreferrer" aria-label="View repository">
                  <Github className="size-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </SpotlightCard>
  );
}

