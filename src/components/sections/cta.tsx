import Link from "next/link";

import { PRIMARY_CTA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function FinalCta() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SpotlightCard>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Open to a conversation
              </CardTitle>
              <p className="text-base text-muted-foreground">
                If a project here overlaps with something you&apos;re building, or you just want to talk about the work, send a note.
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
              </Button>
            </CardContent>
          </Card>
        </SpotlightCard>
      </div>
    </section>
  );
}


