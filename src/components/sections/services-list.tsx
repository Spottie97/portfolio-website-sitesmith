import { servicePackages } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";

export function ServicesList() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services That Drive Results
            </h1>
            <p className="text-muted-foreground">
              Practical, results-driven solutions for businesses of every size—from startups to established enterprises. Built with modern technology and a focus on scalability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePackages.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


