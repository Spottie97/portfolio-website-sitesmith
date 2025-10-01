import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, personJsonLd } from "@/lib/seo";
import { AboutSummary } from "@/components/sections/about-summary";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Reinhardt Erasmus is a software engineer based in South Africa, specializing in agricultural technology solutions and helping teams ship resilient, accessible, and high-performing web products.",
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





