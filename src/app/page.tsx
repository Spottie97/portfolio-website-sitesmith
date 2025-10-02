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
  title: "Agricultural Technology Specialist",
  description:
    "Digital solutions that grow with your farm. 10 years of agricultural experience meets modern software development. Custom farm management systems, precision agriculture apps, IoT integration, and automation built by someone who understands real farming challenges.",
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


