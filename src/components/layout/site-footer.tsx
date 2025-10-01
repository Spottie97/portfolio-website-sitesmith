import Link from "next/link";

import {
  AVAILABILITY_NOTE,
  NAV_LINKS,
  SERVICE_CATEGORIES,
  SITE_CONTACT_EMAIL,
  SITE_PHONE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

const YEAR = new Date().getFullYear();

const quickLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Let&apos;s grow something together</h3>
            <p className="text-sm text-muted-foreground">
              Building digital solutions for farmers and agribusinesses—platforms that work in the field and deliver measurable results.
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <Link href={`mailto:${SITE_CONTACT_EMAIL}`} className="underline">
                  {SITE_CONTACT_EMAIL}
                </Link>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <Link href={`tel:${SITE_PHONE}`} className="underline">
                  {SITE_PHONE}
                </Link>
              </p>
              <p className="text-muted-foreground">{AVAILABILITY_NOTE}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Stay connected
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={SOCIAL_LINKS.instagram} className="transition hover:text-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={SOCIAL_LINKS.github} className="transition hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href={SOCIAL_LINKS.linkedin} className="transition hover:text-foreground">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {YEAR} [Your Name]. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


