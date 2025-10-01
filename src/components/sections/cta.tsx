import Link from "next/link";

import { PRIMARY_CTA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FinalCta() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Ready to modernize your farm operations?
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Let&apos;s discuss your farming challenges and design a digital solution that fits your operation and delivers real results.
            </p>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg">
              <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


