import Link from "next/link";

import { SkillsGrid } from "@/components/sections/skills-grid";
import { Button } from "@/components/ui/button";

export function SkillsSnapshot() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Stack, backed by projects
            </h2>
            <p className="text-muted-foreground">
              A short map of what the work is built with. The skills page ties each tool to the
              project that uses it.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/skills">See the full list</Link>
          </Button>
        </div>
        <SkillsGrid variant="compact" />
      </div>
    </section>
  );
}
