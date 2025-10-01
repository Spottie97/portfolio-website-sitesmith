import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy practices and data usage for the portfolio website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-neutral dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: September 30, 2025</p>
      <p>
        This portfolio site collects minimal data required to operate analytics and contact form submissions.
        Information is never sold or shared with third parties without consent.
      </p>
      <h2>Contact form</h2>
      <p>
        Messages submitted through the contact form are used solely to respond to inquiries. They may be stored securely in a CRM or email inbox for follow-up.
      </p>
      <h2>Cookies & analytics</h2>
      <p>
        Analytics are optional and only enabled when explicitly configured. When enabled, anonymized usage metrics may be collected to improve the experience.
      </p>
      <h2>Your rights</h2>
      <p>
        You can request data deletion or export by emailing hello@example.com. Responses are provided within 30 days.
      </p>
      </div>
    </div>
  );
}





