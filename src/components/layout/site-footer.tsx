import Link from "next/link";
import { Mail, Phone, Clock, Instagram, Github, Linkedin, ExternalLink } from "lucide-react";

import {
  AVAILABILITY_NOTE,
  NAV_LINKS,
  SERVICE_CATEGORIES,
  SITE_CONTACT_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const YEAR = new Date().getFullYear();

const quickLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const socialLinks = [
  { 
    href: SOCIAL_LINKS.linkedin, 
    label: "LinkedIn", 
    icon: Linkedin,
    description: "Connect professionally"
  },
  { 
    href: SOCIAL_LINKS.github, 
    label: "GitHub", 
    icon: Github,
    description: "View my code"
  },
  { 
    href: SOCIAL_LINKS.instagram, 
    label: "Instagram", 
    icon: Instagram,
    description: "Follow updates"
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Company Info - Wider Column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight">{SITE_NAME}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Building digital solutions for farmers and agribusinesses—platforms that work in the field and deliver measurable results.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <Link 
                  href={`mailto:${SITE_CONTACT_EMAIL}`} 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{SITE_CONTACT_EMAIL}</div>
                  </div>
                </Link>
                
                <Link 
                  href={`tel:${SITE_PHONE}`} 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{SITE_PHONE}</div>
                  </div>
                </Link>
                
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="pt-2">
                    <div className="text-xs">{AVAILABILITY_NOTE}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{social.label}</div>
                      <div className="text-xs text-muted-foreground">{social.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/60">
              <Link href="/contact">
                <Button size="sm" className="w-full">
                  Book Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>© {YEAR} {SITE_NAME}. All rights reserved.</p>
            <span className="hidden sm:inline text-border">•</span>
            <p className="text-xs">Crafted with care in South Africa 🇿🇦</p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs">
            {quickLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
                {index < quickLinks.length - 1 && (
                  <span className="text-border">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


