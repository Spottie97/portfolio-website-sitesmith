import type { Metadata } from "next";
import { servicePackages } from "@/data/services";
import { buildMetadata, jsonLdScriptProps, serviceJsonLd } from "@/lib/seo";
import { ServicesList } from "@/components/sections/services-list";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Development Services",
  description:
    "Full-stack web development, technical SEO & performance optimization, and strategic technical consultation. Modern technology solutions built to scale with your business.",
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
      <ProcessTimeline />
      <FaqSection />
      <FinalCta />
    </>
  );
}
