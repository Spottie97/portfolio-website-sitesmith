import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const highlights = [
  "Full-stack expertise from frontend to cloud infrastructure",
  "Solutions built to scale with your business growth",
  "Available for consultations across all time zones—serving clients worldwide",
];

export function ContactIntro() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s discuss your next project
        </h1>
        <p className="text-lg text-muted-foreground">
          Share your business challenges, goals, and vision—we&apos;ll design a solution that fits your needs, your workflow, and your budget.
        </p>
      </div>

      <SpotlightCard>
        <Card className="border-0">
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
      </SpotlightCard>
      </div>
    </section>
  );
}


