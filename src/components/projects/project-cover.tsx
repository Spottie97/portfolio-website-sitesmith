import { cn } from "@/lib/utils";
import { categoryMeta } from "@/lib/project-meta";
import type { ProjectCategory } from "@/data/projects";

type ProjectCoverProps = {
  title: string;
  category: ProjectCategory;
  className?: string;
};

function coverTone(category: ProjectCategory): string {
  switch (category) {
    case "business":
      return "from-primary/30 via-primary/10 to-background";
    case "ai":
      return "from-sky-500/25 via-primary/10 to-background";
    case "games":
      return "from-violet-500/25 via-primary/10 to-background";
    default: {
      const exhaustive: never = category;
      return exhaustive;
    }
  }
}

export function ProjectCover({ title, category, className }: ProjectCoverProps) {
  const meta = categoryMeta(category);
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between bg-gradient-to-br p-5 text-left",
        coverTone(category),
        className,
      )}
    >
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
        <Icon className="size-4" aria-hidden="true" />
        {meta.label}
      </div>
      <p className="max-w-[16rem] text-lg font-semibold leading-tight text-foreground">{title}</p>
    </div>
  );
}
