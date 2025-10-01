import type { Metadata } from "next";
import { servicePackages } from "@/data/services";
import { buildMetadata, jsonLdScriptProps, serviceJsonLd } from "@/lib/seo";
import { ServicesList } from "@/components/sections/services-list";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Service Packages",
  description:
    "Outcome-driven engagements ranging from product discovery to enterprise-scale modernization.",
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

