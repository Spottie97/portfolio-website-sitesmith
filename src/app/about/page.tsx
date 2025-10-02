import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, personJsonLd } from "@/lib/seo";
import { AboutSummary } from "@/components/sections/about-summary";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Reinhardt Erasmus: 10 years of agricultural experience combined with 5 years of software engineering expertise. Building practical AgTech solutions that understand real farming challenges. Available across all time zones for progressive farms worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Script id="ld-person-about" {...jsonLdScriptProps(personJsonLd())} />
      <AboutSummary />
    </>
  );
}





