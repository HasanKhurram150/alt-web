"use client";

import { useTheme } from "@/context/ThemeContext";
import FadeUp from "@/components/ui/FadeUp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Threads from "@/components/ui/animated-components/threads/Threads";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function Hero({}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? "/assets/Vertical - Black 1.svg"
      : "/assets/Logo light theme.svg";

  const threadColor: [number, number, number] =
    theme === "dark" ? [1, 1, 1] : [0, 0.204, 0.349]; // White for dark, #003459 for light

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        scale: 0.96,
        ease: "none",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-28 lg:py-36 px-6 pt-16 bg-bg transition-colors duration-300"
    >
      {/* Animation Background Layer */}
      {/* <div className="absolute inset-0 z-1 w-full h-full">
        <Threads
          color={threadColor}
          amplitude={1.2}
          distance={0.2}
          enableMouseInteraction={false}
        />
      </div> */}

      {/* Content Foreground Layer */}
      <div
        ref={contentRef}
        className="relative z-2 text-center max-w-7xl mx-auto flex flex-col items-center pointer-events-none"
      >
        {/* Logo Asset */}
        <FadeUp delay={0.2} key={logoSrc}>
          <img
            src={logoSrc}
            alt="Anti-Linear Technologies Logo"
            className="w-48 md:w-80 mb-6 h-auto object-contain pointer-events-auto"
          />
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.4}>
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-mono font-normal text-text-primary leading-[1.05] tracking-tight mb-2">
            Anti-Linear <br /> Technologies
          </h1>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.6}>
          <h2 className="text-[16px] md:text-[20px] font-mono font-normal text-text-secondary leading-snug tracking-[0.2em]">
            Defying Linearity
          </h2>
        </FadeUp>
      </div>
    </section>
  );
}
