import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { AVAILABILITY_NOTE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { categoryMeta } from "@/lib/project-meta";

function origin(baseUrl: string): string {
  return baseUrl.replace(/\/$/, "");
}

function sentence(text: string): string {
  const trimmed = text.trim().replace(/\.+$/, "");
  return `${trimmed}.`;
}

function pageLink(base: string, path: string, title: string, description: string): string {
  const url = path === "/" ? `${base}/` : `${base}${path}`;
  return `- [${title}](${url}): ${sentence(description)}`;
}

function projectLink(base: string, project: Project): string {
  const url = `${base}/projects/${project.slug}`;
  const details = [sentence(project.summary), sentence(project.status)];

  if (project.live) {
    details.push(`Live site: ${project.live}.`);
  }

  if (project.repo) {
    details.push(`Repository: ${project.repo}.`);
  }

  return `- [${project.title}](${url}): ${details.join(" ")}`;
}

function projectsIn(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function buildLlmsTxt(baseUrl: string): string {
  const base = origin(baseUrl);

  const pages = [
    pageLink(base, "/", "Home", "Introduction, featured work, and a short skills summary"),
    pageLink(
      base,
      "/projects",
      "Work",
      "Every project, grouped as business software, AI and automation, or games",
    ),
    pageLink(base, "/skills", "Skills", "Tools grouped by area, each linked to the projects that use it"),
    pageLink(base, "/about", "About", "Background and a shorter view of the same skills"),
    pageLink(base, "/contact", "Contact", "Contact form for collaborations and opportunities"),
  ];

  const projectSections = projectCategories.map((category) => {
    const heading = `## ${categoryMeta(category).label}`;
    const lines = projectsIn(category).map((project) => projectLink(base, project));
    return [heading, "", ...lines].join("\n");
  });

  const skillLines = skillGroups.map((group) =>
    pageLink(
      base,
      `/skills#${group.id}`,
      group.title,
      `${group.description} Tools: ${group.skills.map((entry) => entry.name).join(", ")}`,
    ),
  );

  const optional = [
    pageLink(base, "/privacy", "Privacy", "How the site handles personal information"),
    pageLink(base, "/terms", "Terms", "Terms of use for this site"),
  ];

  return [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `${sentence(AVAILABILITY_NOTE)} This file indexes the pages worth reading. Project pages describe the work. Private client work is described here and does not include a source repository.`,
    "",
    "## Pages",
    "",
    ...pages,
    "",
    projectSections.join("\n\n"),
    "",
    "## Skill areas",
    "",
    ...skillLines,
    "",
    "## Optional",
    "",
    ...optional,
    "",
  ].join("\n");
}
