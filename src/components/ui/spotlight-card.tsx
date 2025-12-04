"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent' | 'muted';
}

const glowColorMap = {
  primary: { base: 290, spread: 30 },   // Purple - your primary color
  accent: { base: 300, spread: 40 },    // Magenta accent
  muted: { base: 290, spread: 20 }      // Subtle purple variation
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'primary',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getInlineStyles = () => {
    return {
      '--base': base,
      '--spread': spread,
      '--radius': '10',
      '--border': '1.5',
      '--backdrop': 'transparent',
      '--backup-border': 'hsl(var(--border))',
      '--size': '180',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 1.5) * 1px)',
      '--spotlight-size': 'calc(var(--size, 180) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 290) var(--glow-saturation, 60)% var(--glow-lightness, 70)% / var(--spotlight-opacity, 0.08)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      position: 'relative' as const,
      touchAction: 'none' as const,
    } as React.CSSProperties;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: -1px;
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 290) var(--glow-saturation, 70)% var(--glow-lightness, 55)% / var(--border-spot-opacity, 0.7)), transparent 100%
      );
      filter: brightness(1.3);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.4) calc(var(--spotlight-size) * 0.4) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(290 60% 90% / var(--border-light-opacity, 0.4)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      filter: blur(calc(var(--border-size) * 4));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -4px;
      border-width: 4px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={cn('relative rounded-lg', className)}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { SpotlightCard };
