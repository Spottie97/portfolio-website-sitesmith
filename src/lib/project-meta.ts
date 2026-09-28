import { Bot, Building2, Gamepad2, type LucideIcon } from "lucide-react";

import type { ProjectCategory, ProjectStatus, ProjectVisibility } from "@/data/projects";

export function categoryMeta(category: ProjectCategory): { label: string; icon: LucideIcon } {
  switch (category) {
    case "business":
      return { label: "Business software", icon: Building2 };
    case "ai":
      return { label: "AI & automation", icon: Bot };
    case "games":
      return { label: "Games", icon: Gamepad2 };
    default: {
      const exhaustive: never = category;
      return exhaustive;
    }
  }
}

export function visibilityLabel(visibility: ProjectVisibility, category: ProjectCategory): string {
  switch (visibility) {
    case "public":
      return "Public repository";
    case "private":
      return category === "business" ? "Private client work" : "Private";
    default: {
      const exhaustive: never = visibility;
      return exhaustive;
    }
  }
}

export function statusBadgeVariant(
  status: ProjectStatus,
): "default" | "secondary" | "outline" {
  switch (status) {
    case "In production":
      return "default";
    case "Prototype":
      return "secondary";
    case "In development":
      return "outline";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}
