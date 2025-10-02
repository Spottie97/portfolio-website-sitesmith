"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
  link?: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const nextFeature = useCallback(() => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
    setProgress(0)
  }, [features.length])

  useEffect(() => {
    // Use requestAnimationFrame for smoother progress updates
    let animationFrameId: number
    let lastTimestamp = 0
    const increment = 100 / (autoPlayInterval / 16.67) // 60fps

    const updateProgress = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp
      }

      const elapsed = timestamp - lastTimestamp

      if (elapsed >= 16.67) { // ~60fps
        setProgress((prev) => {
          const newProgress = prev + increment
          if (newProgress >= 100) {
            nextFeature()
            return 0
          }
          return newProgress
        })
        lastTimestamp = timestamp
      }

      animationFrameId = requestAnimationFrame(updateProgress)
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [autoPlayInterval, nextFeature])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 md:gap-6 cursor-pointer group"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-border group-hover:border-primary/50",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1 space-y-2">
                  <h3 className={cn(
                    "text-lg md:text-xl font-semibold transition-colors",
                    index === currentFeature ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.content}
                  </p>
                  {feature.link && index === currentFeature && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-3"
                    >
                      <Link 
                        href={feature.link} 
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-all relative"
                      >
                        <span className="relative">
                          View case study
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-xl border border-border/50 bg-card"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
                      style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={500}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
            
            {/* Progress indicator */}
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-border/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
