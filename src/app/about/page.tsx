import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, personJsonLd } from "@/lib/seo";
import { AboutSummary } from "@/components/sections/about-summary";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Reinhardt Erasmus—a full-stack developer who bridges the gap between business operations and modern technology. From managing factory operations to building scalable web applications, I bring a unique perspective to every project.",
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
