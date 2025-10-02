'use client';
import { cn } from '@/lib/utils';
import { useState, useRef, CSSProperties } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const animationDuration = isHovered && durationOnHover ? durationOnHover : duration;
  
  const sliderStyle: CSSProperties = {
    gap: `${gap}px`,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    animation: `${reverse ? 'scroll-reverse' : 'scroll'} ${animationDuration}s linear infinite`,
    willChange: 'transform',
  };

  const hoverHandlers = durationOnHover
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }
    : {};

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: ${direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)'};
          }
          100% {
            transform: ${direction === 'horizontal' ? 'translateX(-50%)' : 'translateY(-50%)'};
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: ${direction === 'horizontal' ? 'translateX(-50%)' : 'translateY(-50%)'};
          }
          100% {
            transform: ${direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)'};
          }
        }
      `}</style>
      <div 
        className={cn('overflow-hidden', className)}
        {...hoverHandlers}
      >
        <div
          ref={sliderRef}
          className='flex w-max'
          style={sliderStyle}
        >
          {children}
          {children}
        </div>
      </div>
    </>
  );
}
