"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DesktopNavTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);
  
  const [selected, setSelected] = useState(0); // Start with 0, will be updated after mount
  
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Find the selected tab based on pathname
  const getSelectedIndex = useCallback(() => {
    const index = NAV_LINKS.findIndex(link => pathname === link.href);
    return index >= 0 ? index : 0;
  }, [pathname]);

  // Mark as mounted to enable client-only features
  useEffect(() => {
    setMounted(true);
    setSelected(getSelectedIndex());
  }, [getSelectedIndex]);

  // Update selected when pathname changes (only after mount)
  useEffect(() => {
    if (!mounted) return;
    const newIndex = getSelectedIndex();
    setSelected(newIndex);
  }, [pathname, mounted, getSelectedIndex]);

  // Calculate cursor position when selected changes (only after mount)
  useEffect(() => {
    if (!mounted) return;
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected, mounted]);

  const handleTabClick = (index: number) => {
    setSelected(index);
    router.push(NAV_LINKS[index].href);
  };

  const handleMouseLeave = () => {
    if (!mounted) return;
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className="relative flex w-fit rounded-full border border-border/50 bg-card/50 backdrop-blur-sm p-1"
    >
      {NAV_LINKS.map((link, i) => (
        <Tab
          key={link.href}
          ref={(el: HTMLLIElement | null) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => handleTabClick(i)}
          isSelected={mounted && selected === i}
          isMounted={mounted}
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
  isMounted: boolean;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, isSelected, isMounted }, ref) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
      if (!isMounted) return;
      const target = e.currentTarget;
      if (!target) return;

      const { width } = target.getBoundingClientRect();

      setPosition({
        left: target.offsetLeft,
        width,
        opacity: 1,
      });
    };

    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        className={cn(
          "relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium transition-colors",
          isSelected ? "text-white font-semibold" : "text-muted-foreground hover:text-foreground"
        )}
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
      className="absolute z-0 top-1 bottom-1 rounded-full bg-primary"
    />
  );
};
