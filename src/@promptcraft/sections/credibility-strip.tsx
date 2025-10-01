import { LucideClipboardList, LucideCpu, LucideLeaf, LucideRoute } from "lucide-react";

const highlights = [
  {
    icon: LucideLeaf,
    label: "15+ seasons",
    description: "of agricultural operations experience across fresh produce and dairy",
  },
  {
    icon: LucideCpu,
    label: "IoT to AI",
    description: "integrations deployed from cold chain telemetry to Copilot workflows",
  },
  {
    icon: LucideRoute,
    label: "Field to ERP",
    description: "bridging on-farm devices, packhouses, accounting and analytics stacks",
  },
  {
    icon: LucideClipboardList,
    label: "Compliance ready",
    description: "solutions delivered with SOPs, audits, and training documentation",
  },
];

export function CredibilityStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid w-full gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex h-full flex-col gap-2 rounded-xl border border-border/50 bg-card/70 p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


