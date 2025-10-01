import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  "Available for farm software projects and AgTech consulting",
  "Solutions built to work reliably in field conditions with offline support",
  "Deep understanding of agricultural workflows and farmer needs",
];

export function ContactIntro() {
  return (
    <section className="container space-y-6 py-16">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s discuss your farm&apos;s digital future
        </h1>
        <p className="text-lg text-muted-foreground">
          Share your farming challenges, operational goals, and vision—we&apos;ll design a solution that fits your land, your workflow, and your budget.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What to expect</CardTitle>
          <p className="text-sm text-muted-foreground">
            I respond within one business day with suggested next steps and a short Loom walkthrough when helpful.
          </p>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <li key={item} className="rounded border border-dashed border-border/80 p-4 text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}


