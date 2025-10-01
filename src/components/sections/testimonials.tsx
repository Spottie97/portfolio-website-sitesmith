import { testimonials } from "@/data/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container space-y-6 py-16">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          What farmers say
        </h2>
        <p className="text-muted-foreground">
          Farm managers and agricultural leaders on working together to digitize their operations.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full">
            <CardHeader>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


