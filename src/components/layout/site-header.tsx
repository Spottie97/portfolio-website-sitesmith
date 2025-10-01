"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, PhoneCall } from "lucide-react";

import { NAV_LINKS, PRIMARY_CTA, SITE_NAME } from "@/lib/constants";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <span className="text-base font-semibold tracking-tight">{SITE_NAME}</span>
          </Link>
          <Separator orientation="vertical" className="hidden h-5 lg:block" />
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:flex">
            <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="size-4" aria-hidden="true" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-6">
              <SheetHeader className="items-start text-left pb-6">
                <SheetTitle className="text-lg font-semibold">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground py-2 px-1 transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href={PRIMARY_CTA.href} onClick={() => setOpen(false)}>
                      <PhoneCall className="mr-2 size-4" aria-hidden="true" />
                      {PRIMARY_CTA.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}





