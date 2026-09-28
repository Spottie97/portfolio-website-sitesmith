import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const highlights = [
  "Business software, AI tooling, and games",
  "A reply when there is something useful to say",
  "Based in South Africa",
];

export function ContactIntro() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Get in touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Send a note about the work, a collaboration, or a question. A short message is enough.
        </p>
      </div>

      <SpotlightCard>
        <Card className="border-0">
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
            <p className="text-sm text-muted-foreground">
              I reply when I have something useful to say, usually within a business day.
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


