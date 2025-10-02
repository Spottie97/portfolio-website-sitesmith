import type { Metadata } from "next";
import { servicePackages } from "@/data/services";
import { buildMetadata, jsonLdScriptProps, serviceJsonLd } from "@/lib/seo";
import { ServicesList } from "@/components/sections/services-list";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Agricultural Technology Services",
  description:
    "Farm management platforms, IoT sensor integration, AI automation, and custom AgTech solutions. Practical technology built by someone who understands real farming challenges. From family farms to large commercial operations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
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
      <ServicesList />
      <FaqSection />
      <FinalCta />
    </>
  );
}

