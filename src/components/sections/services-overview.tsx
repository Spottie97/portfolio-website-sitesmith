import Link from "next/link";

import { servicePackages } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-left md:items-center md:text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Engagement models that meet operations where they are
              </h2>
              <p className="text-muted-foreground">
                Packages cover quick wins like SEO audits, go-to-market site launches, AI co-pilots, and multi-module platforms—each scoped for agricultural realities.
              </p>
            </div>
            <div className="flex w-full justify-start md:justify-center">
              <Button asChild variant="ghost">
                <Link href="/services">Explore the full offering</Link>
              </Button>
            </div>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3">
            {servicePackages.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


