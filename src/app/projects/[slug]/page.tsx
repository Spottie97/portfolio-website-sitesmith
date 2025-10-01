import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { findProjectBySlug, projectSlugs } from "@/data/projects";
import { buildMetadata, jsonLdScriptProps, projectJsonLd } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project not found", description: "" });
  }

  return buildMetadata({
    title: project.metaTitle ?? project.title,
    description: project.metaDescription ?? project.summary,
    path: `/projects/${project.slug}`,
    openGraph: {
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
      <Script
        id={`ld-project-${project.slug}`}
        {...jsonLdScriptProps(
          projectJsonLd({
            title: project.title,
            summary: project.summary,
            slug: project.slug,
            tech: project.tech,
            date: project.timeline,
            outcomes: project.metrics.join(", "),
            image: project.coverImage,
            links: { live: project.live, repo: project.repo },
          }),
        )}
      />
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">{project.industry}</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Role
            </h2>
            <p>{project.role}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Timeline
            </h2>
            <p>{project.timeline}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Outcomes
            </h2>
            <ul className="space-y-2">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Metrics
            </h2>
            <ul className="space-y-2">
              {project.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            {project.live ? (
              <a href={project.live} className="underline" target="_blank" rel="noreferrer">
                Live demo
              </a>
            ) : null}
            {project.repo ? (
              <a href={project.repo} className="underline" target="_blank" rel="noreferrer">
                Repository
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
        {project.coverVideo ? (
          <video
            src={project.coverVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster={project.coverImage}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.coverImage}
            alt={`${project.title} overview`}
            fill
            className="object-cover"
          />
        )}
      </div>

      <Separator />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>{project.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.gallery.map((image) => (
          <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-lg border">
            <Image src={image} alt={`${project.title} preview`} fill className="object-cover" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

