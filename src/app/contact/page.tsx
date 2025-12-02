import type { Metadata } from "next";
import { Suspense } from "react";

import { buildMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactDetails } from "@/components/forms/contact-details";
import { Card, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Let's discuss your next project. Free consultation for web development, business automation, and technical consulting. Available worldwide with 24-hour response time.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = params?.service;

  return (
    <>
      <ContactHero />
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Contact Form */}
            <SpotlightCard>
              <Card className="border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Suspense fallback={<p>Loading form…</p>}>
                    <ContactForm defaultService={defaultService} />
                  </Suspense>
                </CardContent>
              </Card>
            </SpotlightCard>

            {/* Contact Details */}
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
