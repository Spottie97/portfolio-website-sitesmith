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
import { buildMetadata, jsonLdScriptProps, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agricultural Software Engineer",
  description:
    "Software engineer specializing in digital agriculture—building farm management platforms, IoT systems, and analytics tools that help farmers optimize operations and increase yields.",
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
      <Logos />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}


