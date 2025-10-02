import Link from "next/link";

import {
  AVAILABILITY_NOTE,
  SITE_CONTACT_EMAIL,
  SITE_PHONE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ContactDetails() {
  return (
    <SpotlightCard>
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Direct contact</CardTitle>
          <p className="text-sm text-muted-foreground">
            Prefer a quick call? Reach out directly or drop a note on your preferred channel.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <Link className="underline" href={`mailto:${SITE_CONTACT_EMAIL}`}>
              {SITE_CONTACT_EMAIL}
            </Link>
          </p>
          <p>
            <span className="font-medium">WhatsApp:</span>{" "}
            <Link className="underline" href={`https://wa.me/${SITE_PHONE}`}>
              {SITE_PHONE}
            </Link>
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            <Link className="underline" href={`tel:${SITE_PHONE}`}>
              {SITE_PHONE}
            </Link>
          </p>
          <p className="text-muted-foreground">{AVAILABILITY_NOTE}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Also available on</p>
          <div className="flex flex-wrap gap-3 text-muted-foreground">
            <Link href={SOCIAL_LINKS.instagram} className="underline">
              Instagram
            </Link>
            <Link href={SOCIAL_LINKS.linkedin} className="underline">
              LinkedIn
            </Link>
            <Link href={SOCIAL_LINKS.github} className="underline">
              GitHub
            </Link>
          </div>
        </div>
      </CardContent>
      </Card>
    </SpotlightCard>
  );
}





