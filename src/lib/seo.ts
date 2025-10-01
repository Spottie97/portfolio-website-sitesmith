import type { Metadata } from "next";
import { env } from "@/env.mjs";
import { SITE_DESCRIPTION, SITE_LOCATION, SITE_NAME, SITE_TITLE } from "@/lib/constants";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Partial<NonNullable<Metadata["twitter"]>>;
  alternates?: Metadata["alternates"];
};

const BASE_URL = env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const buildMetadata = (options: BuildMetadataOptions = {}): Metadata => {
  const {
    title = SITE_NAME,
    description = SITE_DESCRIPTION,
    path = "/",
    openGraph,
    twitter,
    alternates,
  } = options;

  const url = new URL(path, BASE_URL).toString();

  return {
    title: {
      default: `${title} | ${SITE_TITLE}`,
      template: `%s | ${SITE_TITLE}`,
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      ...alternates,
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_ZA",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@username",
      ...twitter,
    },
  } satisfies Metadata;
};

type JsonLdBase = {
  "@context": string;
  [key: string]: unknown;
};

export const jsonLdScriptProps = <T extends JsonLdBase>(json: T) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: { __html: JSON.stringify(json) },
});

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_LOCATION,
  },
  sameAs: [
    "https://www.instagram.com/reinhardterasmus_/",
    "https://github.com/Spottie97",
    "https://www.linkedin.com/in/reinhardterasmus/",
  ],
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
});

type ProjectJsonLdInput = {
  title: string;
  summary: string;
  slug: string;
  tech: string[];
  date: string;
  outcomes?: string;
  image?: string;
  links?: {
    live?: string;
    repo?: string;
  };
};

export const projectJsonLd = (project: ProjectJsonLdInput) => ({
  "@context": "https://schema.org",
  "@type": "Project",
  name: project.title,
  description: project.summary,
  url: `${BASE_URL}/projects/${project.slug}`,
  creator: personJsonLd(),
  programmingLanguage: project.tech,
  dateCreated: project.date,
  image: project.image,
  sameAs: [project.links?.live, project.links?.repo].filter(Boolean),
  ...(project.outcomes && { disambiguatingDescription: project.outcomes }),
});

type ServiceJsonLdInput = {
  name: string;
  summary: string;
  deliverables: string[];
  slug: string;
};

export const serviceJsonLd = (service: ServiceJsonLdInput) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.summary,
  provider: personJsonLd(),
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/services#${service.slug}`,
  },
  areaServed: "Global",
  serviceOutput: service.deliverables,
});

