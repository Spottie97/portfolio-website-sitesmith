import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const metrics = [
  {
    stat: "32%",
    label: "Water usage reduction",
    description: "IoT-driven irrigation alerts saved a commercial farm millions of litres per season.",
  },
  {
    stat: "6 hrs",
    label: "Admin time saved weekly",
    description: "AI-assisted cold chain reporting automated compliance packs for a national distributor.",
  },
  {
    stat: "4x",
    label: "Faster traceability",
    description: "Packhouse software cut product recall investigations from days to under 6 hours.",
  },
];

export function ResultsHighlight() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr] items-center">
          <div className="space-y-5 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Outcomes
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Proven gains across irrigation, packhouse, and cold chain operations
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Projects pair field knowledge with measurable performance targets, validating improvements in throughput, compliance, and resource efficiency—so every deployment ships with a before/after story worth sharing.
            </p>
          </div>

          <div className="grid w-full gap-6 justify-items-stretch md:grid-cols-3">
            {metrics.map((metric) => (
              <SpotlightCard key={metric.label} glowColor="primary">
                <Card className="h-full w-full bg-gradient-to-b from-primary/10 via-card/80 to-card border-0">
                  <CardHeader>
                    <CardTitle className="text-4xl font-semibold text-primary">{metric.stat}</CardTitle>
                    <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


