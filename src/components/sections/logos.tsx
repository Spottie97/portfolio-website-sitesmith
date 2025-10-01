import Image from "next/image";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { logoCloud } from "@/data/logos";

export function Logos() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="mb-6 text-center text-sm uppercase tracking-wide text-muted-foreground">
          Technology & platforms powering agricultural solutions
        </p>
        <InfiniteSlider gap={48} duration={40} durationOnHover={60}>
          {logoCloud.map((logo) => (
            <div key={logo.name} className="relative h-20 w-20 rounded-full dark:bg-white p-4 flex items-center justify-center">
              <Image
                src={logo.logo}
                alt={`${logo.name} logo`}
                fill
                className="object-contain transition-all duration-300 p-3"
                sizes="80px"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}




