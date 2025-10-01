import Link from "next/link";

import { servicePackages } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  return (
    <section className="container space-y-6 py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Service packages
          </h2>
          <p className="text-muted-foreground">
            From basic farm tracking to advanced IoT analytics—solutions scaled to your operation size and goals.
          </p>
        </div>
        <Button asChild variant="ghost">
          <Link href="/services">Explore the full offering</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {servicePackages.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}


