import dayjs from "dayjs";
import Link from "next/link";

import { projects } from "@/data/projects";
import { allSkills } from "@/data/skills";

const softwareStartYear = 2020;

const stats = [
  { value: String(projects.length), label: "Projects" },
  { value: `${dayjs().year() - softwareStartYear}+`, label: "Years in software" },
  { value: String(allSkills.length), label: "Tools in active use" },
  { value: "3", label: "Areas of work" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-14">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border/50 bg-card/70 p-5">
              <p className="text-3xl font-semibold tracking-tight text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Business software, AI and automation, and games.{" "}
          <Link href="/projects" className="underline underline-offset-4 hover:text-foreground">
            Browse the work.
          </Link>
        </p>
      </div>
    </section>
  );
}
