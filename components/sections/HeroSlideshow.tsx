"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Grain from "@/components/ui/Grain";
import type { HeroSlide } from "@/data/home";

const HERO_FADE = 1800; // Deepened from 1400ms for a more luxurious, soft dissolve

/**
 * Custom luxury curve: Starts smoothly but decelerates into an almost
 * imperceptible, elegant crawl (Ease Out Quint/Quart hybrid).
 */
const PREMIUM_EASE = "cubic-bezier(0.25, 1, 0.3, 1)";

export default function HeroSlideshow({
  slides,
  gradient,
  index,
  hold,
  sizes,
}: {
  slides: HeroSlide[];
  gradient: string;
  index: number;
  hold: number;
  sizes: string;
}) {
  const [mounted, setMounted] = useState(Math.min(2, slides.length));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setStarted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setMounted((m) => Math.min(slides.length, Math.max(m, index + 2)));
  }, [index, slides.length]);

  return (
    <div className={`relative overflow-hidden ${gradient}`}>
      {slides.length === 0 && <Grain opacity={0.3} />}

      {slides.slice(0, mounted).map((slide, i) => {
        const active = i === index;
        
        /**
         * 1. ASYMMETRIC DIRECTIONS: 
         * We alter the direction of the Ken Burns movement based on the index.
         * Slide 0: Subtle Zoom In
         * Slide 1: Slow pan from Left to Right
         * Slide 2: Subtle Zoom Out
         * Slide 3: Slow pan from Right to Left
         */
        const movementType = i % 4;
        let transformStyle = "scale(1) translate(0, 0)";

        if (started) {
          if (movementType === 0) transformStyle = "scale(1.06) translate(0, 0)"; // Zoom In
          if (movementType === 1) transformStyle = "scale(1.08) translate(1.5%, 0)"; // Pan Right
          if (movementType === 2) transformStyle = "scale(1.01) translate(0, 0)"; // Zoom Out (starts at 1.08 base)
          if (movementType === 3) transformStyle = "scale(1.08) translate(-1.5%, 0)"; // Pan Left
        }

        // Base transform state right as the image mounts or before animation triggers
        const initialTransform = movementType === 2 ? "scale(1.08) translate(0, 0)" : "scale(1) translate(0, 0)";

        return (
          <div
            key={slide.src}
            aria-hidden={!active}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? transformStyle : initialTransform,
              
              /**
               * 2. THE STAGGERED MOTION CRITICAL FIX:
               * When a slide becomes inactive, we DO NOT reset its transform instantly (0ms). 
               * Instead, we let it keep moving using the same long hold duration. 
               * This guarantees that while it is fading away, it doesn't jarringly "snap" back to scale(1).
               */
              transition: active
                ? `opacity ${HERO_FADE}ms ease, transform ${hold + HERO_FADE}ms ${PREMIUM_EASE}`
                : `opacity ${HERO_FADE}ms ease, transform ${hold + HERO_FADE}ms ${PREMIUM_EASE}`,
              
              zIndex: active ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={active ? slide.alt : ""}
              fill
              priority={i === 0}
              sizes={sizes}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
