import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { buildLlmsTxt } from "@/lib/llms";

const text = buildLlmsTxt("https://example.com");

describe("llms.txt", () => {
  it("opens with the site name and a summary", () => {
    expect(text.startsWith("# Reinhardt Erasmus\n")).toBe(true);
    expect(text).toContain("> Full-stack developer and Head of Operations.");
  });

  it("links every project and skill area", () => {
    for (const project of projects) {
      expect(text).toContain(`https://example.com/projects/${project.slug}`);
      expect(text).toContain(project.title);
    }

    for (const group of skillGroups) {
      expect(text).toContain(`https://example.com/skills#${group.id}`);
    }
  });

  it("includes public source links and omits repositories for private work", () => {
    const publicRepos = projects.flatMap((project) => (project.repo ? [project.repo] : []));

    for (const repo of publicRepos) {
      expect(text).toContain(repo);
    }

    expect(text.match(/Repository:/g)?.length ?? 0).toBe(publicRepos.length);
  });
});
