import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, personJsonLd } from "@/lib/seo";
import { AboutSummary } from "@/components/sections/about-summary";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Reinhardt Erasmus is a full-stack developer and Head of Operations at Food Fair. Business software, AI tooling, and games.",
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
