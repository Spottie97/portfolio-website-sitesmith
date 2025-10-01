import { servicePackages } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = servicePackages.flatMap((service) => service.faqs);

export function FaqSection() {
  return (
    <section className="container space-y-6 py-16">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Frequently asked
        </h2>
        <p className="text-muted-foreground">
          Common questions from farmers and agribusinesses about working together.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={`${faq.question}-${idx}`}
            value={`${faq.question}-${idx}`}
            className="rounded-lg border"
          >
            <AccordionTrigger className="px-4 text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}


