"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, useMemo } from "react";
import { Briefcase, User, PhoneCall, FolderOpen } from "lucide-react";
import type React from "react";

type IconComponentType = React.ElementType<{ className?: string }>;

interface NavMenuItem {
  label: string;
  icon: IconComponentType;
  href: string;
}

const navItems: NavMenuItem[] = [
  { label: "Projects", icon: FolderOpen, href: "/projects" },
  { label: "Services", icon: Briefcase, href: "/services" },
  { label: "About", icon: User, href: "/about" },
  { label: "Contact", icon: PhoneCall, href: "/contact" },
];

interface MobileNavMenuProps {
  accentColor?: string;
  onNavigate?: () => void;
}

export function MobileNavMenu({ accentColor, onNavigate }: MobileNavMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Find the active index based on current pathname
  const initialActiveIndex = navItems.findIndex(item => pathname === item.href);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex >= 0 ? initialActiveIndex : 0);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update active index when pathname changes
  useEffect(() => {
    const newIndex = navItems.findIndex(item => pathname === item.href);
    if (newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  }, [pathname]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty('--lineWidth', `${textWidth}px`);
      }
    };

    setLineWidth();

    window.addEventListener('resize', setLineWidth);
    return () => {
      window.removeEventListener('resize', setLineWidth);
    };
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    const href = navItems[index].href;
    router.push(href);
    // Call onNavigate callback to close the sheet
    if (onNavigate) {
      onNavigate();
    }
  };

  const navStyle = useMemo(() => {
    const activeColor = accentColor || 'var(--component-active-color-default)';
    return { '--component-active-color': activeColor } as React.CSSProperties;
  }, [accentColor]);

  return (
    <nav
      className="menu"
      role="navigation"
      style={navStyle}
    >
      {navItems.map((item, index) => {
        const isActive = index === activeIndex;
        const IconComponent = item.icon;

        return (
          <button
            key={item.href}
            className={`menu__item ${isActive ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{ '--lineWidth': '0px' } as React.CSSProperties}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className="menu__icon">
              <IconComponent className="icon" />
            </div>
            <strong
              className={`menu__text ${isActive ? 'active' : ''}`}
              ref={(el) => (textRefs.current[index] = el)}
            >
              {item.label}
            </strong>
          </button>
        );
      })}
    </nav>
  );
}

