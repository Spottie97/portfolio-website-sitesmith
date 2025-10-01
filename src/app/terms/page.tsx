import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of this portfolio website and engagements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container prose prose-neutral dark:prose-invert py-16">
      <h1>Terms of Service</h1>
      <p>Last updated: September 30, 2025</p>
      <h2>Use of content</h2>
      <p>
        All content on this site is provided for informational purposes. Reuse or distribution requires written permission.
      </p>
      <h2>Engagements</h2>
      <p>
        Any engagements discussed through this site are subject to a mutually signed agreement outlining scope, deliverables, and payment terms.
      </p>
      <h2>Liability</h2>
      <p>
        Services are provided on a best-effort basis. Liability is limited to the amount paid for services rendered in the preceding 60 days.
      </p>
      <h2>Contact</h2>
      <p>For questions, reach out at hello@example.com.</p>
    </div>
  );
}





