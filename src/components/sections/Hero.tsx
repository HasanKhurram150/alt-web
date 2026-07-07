"use client";

import { useTheme } from "@/context/ThemeContext";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageLoaded } from "@/hooks/usePageLoaded";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function Hero({}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const { theme } = useTheme();
  const isPageLoaded = usePageLoaded();

  const logoSrc =
    theme === "light"
      ? // ? "/assets/Vertical - Black 1.svg"
        "/assets/Logo light theme.svg"
      : "/assets/Logo light theme.svg";

  useGSAP(
    () => {
      if (!isPageLoaded) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([logoRef.current, headingRef.current, subheadingRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      // Scroll trigger parallax/fade effect on scroll
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

      // Entry animation timeline
      const tl = gsap.timeline();
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1, // Small delay after loader exits
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
          },
          "-=0.9" // Staggered start relative to logo
        )
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7" // Staggered start relative to heading
        );
    },
    { dependencies: [isPageLoaded], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-28 lg:py-36 px-6 pt-16 bg-transparent transition-colors duration-300"
    >
      {/* Background Layer with Dither Mask */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        {/* Dither Mask Overlay DO NOT REMOVE*/}
        {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='rgba(0,0,0,0.4)'/%3E%3Crect x='2' y='2' width='2' height='2' fill='rgba(0,0,0,0.4)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        /> */}
      </div>

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
        <img
          ref={logoRef}
          src={logoSrc}
          alt="Anti-Linear Technologies Logo"
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="w-48 md:w-80 mb-6 h-auto object-contain pointer-events-auto"
        />

        {/* Heading */}
        <h1
          ref={headingRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-[32px] md:text-[48px] lg:text-[64px] font-mono font-normal text-text-primary leading-[1.05] tracking-tight mb-2"
        >
          Anti-Linear <br /> Technologies
        </h1>

        {/* Subheading */}
        <h2
          ref={subheadingRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-[16px] md:text-[20px] font-mono font-normal text-text-secondary leading-snug tracking-[0.2em]"
        >
          Defying Linearity
        </h2>
      </div>
    </section>
  );
}
