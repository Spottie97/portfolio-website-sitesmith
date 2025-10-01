"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.4, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[160px]"
        />
        <motion.div
          initial={{ opacity: 0.4, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
          className="absolute h-[48rem] w-[80rem] rounded-full bg-primary/10 blur-[200px]"
        />
        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}
          className="absolute top-1/2 h-[28rem] w-[60rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[180px]"
        />
      </div>

      <div className="relative z-10 flex min-h-screen w-full translate-y-16 flex-col items-center justify-center px-5 pb-32 text-center">
        {children}
      </div>
    </div>
  );
};
