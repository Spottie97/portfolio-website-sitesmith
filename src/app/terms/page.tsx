import type { Metadata } from "next";

import { SITE_CONTACT_EMAIL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: "Terms governing the use of this portfolio website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-neutral dark:prose-invert">
      <h1>Terms</h1>
      <p>Last updated: September 28, 2026</p>
      <h2>Use of content</h2>
      <p>
        This site is a portfolio. The writing and images are here to describe work I have done.
        Reuse or redistribution needs written permission.
      </p>
      <h2>No offer of work</h2>
      <p>
        Nothing on this site is an offer to take on a project. A conversation started through the
        contact form is just a conversation, until both sides sign something that says otherwise.
      </p>
      <h2>Accuracy</h2>
      <p>
        Project descriptions are written from the repositories and sites as they stood when this
        page was updated. Private work is described without a link to the code.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>
      </p>
      </div>
    </div>
  );
}
