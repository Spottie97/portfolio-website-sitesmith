"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function DesktopNavTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Find the initial selected tab based on pathname
  const initialSelected = NAV_LINKS.findIndex(link => pathname === link.href);
  const [selected, setSelected] = useState(initialSelected >= 0 ? initialSelected : 0);
  
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Update selected when pathname changes
  useEffect(() => {
    const newIndex = NAV_LINKS.findIndex(link => pathname === link.href);
    if (newIndex >= 0) {
      setSelected(newIndex);
    }
  }, [pathname]);

  // Calculate cursor position when selected changes
  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  const handleTabClick = (index: number) => {
    setSelected(index);
    router.push(NAV_LINKS[index].href);
  };

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative flex w-fit rounded-full border border-border/50 bg-card/50 backdrop-blur-sm p-1"
    >
      {NAV_LINKS.map((link, i) => (
        <Tab
          key={link.href}
          ref={(el: HTMLLIElement | null) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => handleTabClick(i)}
          isSelected={selected === i}
        >
          {link.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
  onClick: () => void;
  isSelected: boolean;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, isSelected }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          if (!target) return;

          const { width } = target.getBoundingClientRect();

          setPosition({
            left: target.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium mix-blend-difference text-white transition-colors"
        aria-current={isSelected ? 'page' : undefined}
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="absolute z-0 top-1 bottom-1 rounded-full bg-foreground"
    />
  );
};

