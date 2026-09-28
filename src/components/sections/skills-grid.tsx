"use client";

import Link from "next/link";
import {
  Bot,
  Code,
  Cpu,
  Database,
  Gamepad2,
  Server,
  type LucideIcon,
} from "lucide-react";

import {
  projectCountForGroup,
  projectsForSkill,
  skillGroups,
  skillsByUsage,
  type Skill,
  type SkillGroupId,
} from "@/data/skills";
import { categoryMeta } from "@/lib/project-meta";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const TOP_TOOLS = 5;

function groupIcon(id: SkillGroupId): LucideIcon {
  switch (id) {
    case "frontend":
      return Code;
    case "backend":
      return Database;
    case "ai":
      return Bot;
    case "games":
      return Gamepad2;
    case "infra":
      return Server;
    case "vision":
      return Cpu;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}

function SkillChip({ entry }: { entry: Skill }) {
  const evidence = projectsForSkill(entry);
  const countLabel = evidence.length === 1 ? "1 project" : `${evidence.length} projects`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`${entry.name}, ${countLabel}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {entry.name}
          <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-xs text-muted-foreground">
            {evidence.length}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" side="bottom" className="w-80 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Used in</p>
        <ul className="mt-2 max-h-64 space-y-1 overflow-y-auto">
          {evidence.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-baseline justify-between gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
              >
                <span>{project.title}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {categoryMeta(project.category).label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

function FullGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => {
        const Icon = groupIcon(group.id);
        const ranked = skillsByUsage(group);
        const projectCount = projectCountForGroup(group);
        const toolLabel = ranked.length === 1 ? "tool" : "tools";
        const projectLabel = projectCount === 1 ? "project" : "projects";

        return (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24 rounded-xl border border-border/70 bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 space-y-1">
                <h2 className="font-semibold">{group.title}</h2>
                <p className="text-sm text-muted-foreground">{group.description}</p>
                <p className="text-xs text-muted-foreground">
                  {ranked.length} {toolLabel} · {projectCount} {projectLabel}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {ranked.map((entry) => (
                <SkillChip key={entry.name} entry={entry} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function CompactGrid() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = groupIcon(group.id);
          const ranked = skillsByUsage(group);
          const visible = ranked.slice(0, TOP_TOOLS);
          const remaining = ranked.length - visible.length;

          return (
            <Link
              key={group.id}
              href={`/skills#${group.id}`}
              className="flex h-full flex-col rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"
            >
              <div className="flex items-center gap-2 font-semibold">
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {group.title}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {visible.map((entry) => (
                  <span
                    key={entry.name}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                  >
                    {entry.name}
                  </span>
                ))}
                {remaining > 0 ? (
                  <span className="rounded-full border border-dashed border-border px-3 py-1 text-sm text-muted-foreground">
                    +{remaining} more
                  </span>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-center">
        <Link href="/skills" className="text-sm font-medium text-primary hover:underline">
          See all skills
        </Link>
      </div>
    </div>
  );
}

type SkillsGridProps = {
  variant?: "full" | "compact";
};

export function SkillsGrid({ variant = "full" }: SkillsGridProps) {
  switch (variant) {
    case "full":
      return <FullGrid />;
    case "compact":
      return <CompactGrid />;
    default: {
      const exhaustive: never = variant;
      return exhaustive;
    }
  }
}
