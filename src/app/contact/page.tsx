import type { Metadata } from "next";
import { Suspense } from "react";

import { buildMetadata } from "@/lib/seo";
import { ContactIntro } from "@/components/sections/contact-intro";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactDetails } from "@/components/forms/contact-details";
import { Card, CardContent } from "@/components/ui/card";

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a project conversation. Share scope, goals, and constraints to co-create a delivery plan.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = params?.service;

  return (
    <div className="space-y-12">
      <ContactIntro />
      <section className="container grid gap-10 pb-16 md:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardContent className="p-6">
            <Suspense fallback={<p>Loading form…</p>}>
              <ContactForm defaultService={defaultService} />
            </Suspense>
          </CardContent>
        </Card>
        <ContactDetails />
      </section>
    </div>
  );
}





