import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, personJsonLd } from "@/lib/seo";
import { AboutSummary } from "@/components/sections/about-summary";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Reinhardt Erasmus: Full-stack developer with operational experience building scalable web applications and business automation solutions. Available for projects worldwide.",
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





