import type { Metadata } from "next";
import Script from "next/script";

import { servicePackages } from "@/data/services";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { StrategyPillars } from "@promptcraft/sections/strategy-pillars";
import { CredibilityStrip } from "@promptcraft/sections/credibility-strip";
import { buildMetadata, jsonLdScriptProps, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Full Stack Developer & Technical Consultant",
  description:
    "Building scalable web applications and business automation solutions. Expert in Next.js, React, and Cloud Architecture. Transforming complex business requirements into elegant digital products.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-services"
        {...jsonLdScriptProps({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: servicePackages.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: serviceJsonLd({
              name: service.name,
              summary: service.summary,
              deliverables: service.deliverables,
              slug: service.slug,
            }),
          })),
        })}
      />
      <Hero />
      <CredibilityStrip />
      <StrategyPillars />
      <Logos />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}


