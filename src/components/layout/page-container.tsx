import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

/**
 * PageContainer - Reusable container component for consistent layout
 * 
 * Ensures all content is properly centered with consistent padding and max-width
 * 
 * @param size - Controls max-width:
 *   - default: max-w-7xl (1280px) - for most sections
 *   - narrow: max-w-4xl (896px) - for text-heavy content
 *   - wide: max-w-[1600px] - for wide layouts
 *   - full: no max-width - spans full container width
 */
export function PageContainer({ 
  children, 
  className = "", 
  size = "default" 
}: PageContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1600px]",
    full: "w-full",
  };

  return (
    <div className={cn(
      "container mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}

