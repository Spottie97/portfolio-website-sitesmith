import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { allSkills, projectsForSkill } from "@/data/skills";

describe("portfolio content", () => {
  it("ties every skill to at least one project", () => {
    for (const entry of allSkills) {
      expect(projectsForSkill(entry).length, entry.name).toBeGreaterThan(0);
    }
  });

  it("only lists tech that appears on the skills page", () => {
    const known = new Set(allSkills.flatMap((entry) => entry.aliases));

    for (const project of projects) {
      for (const tech of project.tech) {
        expect(known.has(tech), `${project.slug}: ${tech}`).toBe(true);
      }
    }
  });

  it("does not link private repositories", () => {
    for (const project of projects) {
      if (project.visibility === "private") {
        expect(project.repo, project.slug).toBeUndefined();
      }
    }
  });

  it("features work from each category", () => {
    const featured = projects.filter((project) => project.featured).map((project) => project.category);

    expect(featured).toContain("business");
    expect(featured).toContain("ai");
    expect(featured).toContain("games");
  });
});
