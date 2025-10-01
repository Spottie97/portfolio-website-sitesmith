import { testimonials } from "@/data/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl space-y-2 text-left md:text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Partners on working together
            </h2>
            <p className="text-muted-foreground">
              Farm managers, operations leaders, and founders on digitizing their operations without losing sight of on-the-ground realities.
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full text-left">
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


