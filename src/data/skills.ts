import { projects, type Project } from "@/data/projects";

export const skillGroupIds = ["frontend", "backend", "ai", "games", "infra", "vision"] as const;

export type SkillGroupId = (typeof skillGroupIds)[number];

export type Skill = {
  name: string;
  aliases: readonly string[];
};

export type SkillGroup = {
  id: SkillGroupId;
  title: string;
  description: string;
  skills: readonly Skill[];
};

const skill = (name: string): Skill => ({ name, aliases: [name] });

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces for dashboards, marketing sites, and browser games.",
    skills: [
      skill("Next.js"),
      skill("React"),
      skill("TypeScript"),
      skill("JavaScript"),
      skill("Tailwind CSS"),
      skill("Vite"),
      skill("Expo"),
      skill("Framer Motion"),
      skill("shadcn/ui"),
      skill("Leaflet"),
      skill("Three.js"),
      skill("Canvas"),
      skill("Wix"),
    ],
  },
  {
    id: "backend",
    title: "Backend and data",
    description: "Databases, auth, email, and the languages behind the APIs.",
    skills: [
      skill("Node.js"),
      skill("PostgreSQL"),
      skill("Supabase"),
      skill("Prisma"),
      skill("Drizzle"),
      skill("SQLite"),
      skill("Python"),
      skill("Rust"),
      skill("NextAuth"),
      skill("Resend"),
      skill("Stripe"),
    ],
  },
  {
    id: "ai",
    title: "AI and automation",
    description: "Retrieval pipelines, local models, and workflow orchestration.",
    skills: [skill("n8n"), skill("Ollama"), skill("Qdrant"), skill("OpenAI")],
  },
  {
    id: "games",
    title: "Game development",
    description: "Engines and multiplayer, from browser prototypes to Unreal and Godot.",
    skills: [
      skill("Bevy"),
      skill("Unity"),
      skill("Unreal Engine"),
      skill("C++"),
      skill("C#"),
      skill("Godot"),
      skill("PartyKit"),
    ],
  },
  {
    id: "infra",
    title: "Infrastructure and DevOps",
    description: "Where the software actually runs.",
    skills: [skill("Docker"), skill("Vercel"), skill("Coolify"), skill("GitHub Actions")],
  },
  {
    id: "vision",
    title: "Computer vision",
    description: "Detection on live video, outside the browser.",
    skills: [skill("YOLOv8"), skill("PyQt")],
  },
];

export const allSkills = skillGroups.flatMap((group) => group.skills);

export function projectsForSkill(entry: Skill): Project[] {
  return projects.filter((project) => project.tech.some((tech) => entry.aliases.includes(tech)));
}

export function skillsByUsage(group: SkillGroup): Skill[] {
  return [...group.skills].sort(
    (left, right) => projectsForSkill(right).length - projectsForSkill(left).length,
  );
}

export function projectCountForGroup(group: SkillGroup): number {
  const slugs = new Set<string>();
  for (const entry of group.skills) {
    for (const project of projectsForSkill(entry)) {
      slugs.add(project.slug);
    }
  }
  return slugs.size;
}
