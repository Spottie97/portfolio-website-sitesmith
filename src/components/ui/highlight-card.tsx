"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

const Component: FC<ComponentProps> = ({ 
  title, 
  description, 
  icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  accentColor = "hsl(var(--primary))",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secondaryColor = "hsl(var(--accent))",
  className,
}) => {
  return (
    <div className={cn(
      "group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1",
      className
    )}>
      <Card 
        className="rounded-2xl border shadow-lg relative backdrop-blur-xl overflow-hidden hover:shadow-xl w-[350px] bg-card text-card-foreground border-border"
      >
        {/* Gradient overlay - light mode optimized */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Background gradient - subtle in light, more prominent in dark */}
          <div 
            className="absolute inset-0 opacity-30 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-tr from-primary/15 via-transparent to-accent/15 dark:from-primary/10 dark:to-accent/10"
          ></div>
          {/* Animated blob - more visible in light mode */}
          <div 
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-25 dark:opacity-30 group-hover:opacity-35 dark:group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce bg-gradient-to-tr from-primary/40 dark:from-primary/30 to-transparent"
          ></div>
          {/* Ping effects - adjusted for light mode */}
          <div 
            className="absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping bg-accent/15 dark:bg-accent/20"
          ></div>
          <div 
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping bg-primary/15 dark:bg-primary/20"
          ></div>
          {/* Sweep effect */}
          <div 
            className="absolute inset-0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/8 dark:via-primary/10 to-transparent"
          ></div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div 
              className="absolute inset-0 rounded-full border-2 animate-ping border-primary/40 dark:border-primary/40"
            ></div>
            <div 
              className="absolute inset-0 rounded-full border animate-pulse border-accent/30 dark:border-accent/30"
            ></div>

            <div 
              className="p-6 rounded-full backdrop-blur-lg border shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-background via-secondary to-background dark:from-card dark:via-muted dark:to-card"
              style={{
                boxShadow: `0 0 30px hsl(var(--primary) / 0.2)`
              }}
            >
              <div className="transform group-hover:rotate-180 transition-transform duration-700 text-primary">
                {icon}
              </div>
            </div>
          </div>

          <h3 
            className="mb-4 text-3xl font-bold bg-clip-text text-transparent animate-pulse transform group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary via-accent to-primary"
          >
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-muted-foreground text-sm leading-relaxed transform group-hover:text-foreground transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          <div 
            className="mt-6 w-1/3 h-0.5 rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse bg-gradient-to-r from-transparent via-primary to-accent"
          ></div>

          <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              className="w-2 h-2 rounded-full animate-bounce bg-primary"
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-bounce bg-accent"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-bounce bg-primary"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Corner accents - more visible in light mode */}
        <div 
          className="absolute top-0 left-0 w-20 h-20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 dark:from-primary/20 to-transparent"
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl from-accent/20 dark:from-accent/20 to-transparent"
        ></div>
      </Card>
    </div>
  );
};

export default Component;
