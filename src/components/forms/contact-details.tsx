"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Github, Linkedin, Instagram, MapPin, Clock } from "lucide-react";

import {
  AVAILABILITY_NOTE,
  SITE_CONTACT_EMAIL,
  SITE_PHONE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONTACT_EMAIL,
    href: `mailto:${SITE_CONTACT_EMAIL}`,
    description: "Best for detailed inquiries",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE_PHONE,
    href: `https://wa.me/${SITE_PHONE}`,
    description: "Quick questions & chat",
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE}`,
    description: "Schedule a call",
  },
];

const socialLinks = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

export function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <SpotlightCard>
        <Card className="border-0">
          <CardHeader>
            <CardTitle className="text-lg">Get in Touch</CardTitle>
            <p className="text-sm text-muted-foreground">
              Choose your preferred way to connect
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={method.href}
                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {method.label}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {method.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </SpotlightCard>

      {/* Availability & Location */}
      <SpotlightCard>
        <Card className="border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Availability</p>
                <p className="text-sm text-muted-foreground">{AVAILABILITY_NOTE}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">South Africa (GMT+2)</p>
                <p className="text-xs text-muted-foreground/70">Available for remote work worldwide</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </SpotlightCard>

      {/* Social Links */}
      <SpotlightCard>
        <Card className="border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Connect Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="group flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SpotlightCard>
    </div>
  );
}
