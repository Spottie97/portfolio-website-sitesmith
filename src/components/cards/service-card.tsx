import Link from "next/link";

import type { ServicePackage } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type ServiceCardProps = {
  service: ServicePackage;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <SpotlightCard>
      <Card id={service.slug} className="h-full border-0">
        <CardHeader>
          <h3 className="text-xl font-semibold">{service.name}</h3>
          <p className="text-sm text-muted-foreground">{service.summary}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Deliverables
            </h4>
            <ul className="space-y-2 text-sm">
              {service.deliverables.map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Ideal for
            </h4>
            <p className="text-sm text-muted-foreground">{service.idealFor}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button asChild className="w-full">
            <Link href={`/contact?service=${service.slug}`}>{service.cta}</Link>
          </Button>
          <div className="w-full space-y-2 text-sm">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="rounded border border-dashed border-border p-2 text-muted-foreground"
              >
                {feature}
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </SpotlightCard>
  );
}


