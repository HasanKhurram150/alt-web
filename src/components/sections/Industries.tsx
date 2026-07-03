"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Industries.css";

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: "IT Sector",
      bgGradient: "from-[#4f46e5] to-[#312e81]",
      body: "Robust enterprise architecture, reliable cloud migration pipelines, and automated server infrastructure designed for high availability.",
      // IT Sector SVG with unified brand-blue linear gradient
      icon: (
        <svg
          className="w-48 h-48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="brand-blue-grad-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ind-svg-stroke)" />
              <stop offset="100%" stopColor="var(--ind-svg-grad-end)" />
            </linearGradient>
          </defs>
          {/* Main Server Tower */}
          <rect
            x="20"
            y="16"
            width="24"
            height="32"
            rx="3"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.8"
          />
          {/* Divider lines on server */}
          <line
            x1="20"
            y1="26"
            x2="44"
            y2="26"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="36"
            x2="44"
            y2="36"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
          />
          {/* Glowing LEDs */}
          <circle cx="26" cy="21" r="2" fill="url(#brand-blue-grad-1)" />
          <circle cx="32" cy="21" r="2" fill="url(#brand-blue-grad-1)" />
          <circle cx="26" cy="31" r="2" fill="url(#brand-blue-grad-1)" />
          <circle cx="32" cy="31" r="2" fill="url(#brand-blue-grad-1)" />
          <circle
            cx="26"
            cy="41"
            r="2"
            fill="var(--ind-svg-stroke)"
            opacity="0.3"
          />
          <circle cx="32" cy="41" r="2" fill="url(#brand-blue-grad-1)" />
          {/* Floating node connections */}
          <circle
            cx="12"
            cy="24"
            r="3"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
            fill="var(--ind-svg-fill)"
          />
          <path
            d="M15 24H20"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
          />
          <circle
            cx="52"
            cy="40"
            r="3"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
            fill="var(--ind-svg-fill)"
          />
          <path
            d="M44 40H49"
            stroke="url(#brand-blue-grad-1)"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Telecommunication",
      bgGradient: "from-[#111827] to-[#030712]",
      body: "High-capacity network routing, unified communication channels, and secure data transmission protocols for global coverage.",
      // Telecommunication SVG with shifted viewBox to prevent clipping
      icon: (
        <svg
          className="w-48 h-48"
          viewBox="0 -4 64 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="brand-blue-grad-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ind-svg-stroke)" />
              <stop offset="100%" stopColor="var(--ind-svg-grad-end)" />
            </linearGradient>
          </defs>
          {/* Antenna Tower */}
          <path
            d="M22 48 L32 18 L42 48"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 36 H38"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.5"
          />
          <path
            d="M24 42 H40"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.5"
          />
          {/* Main transmitter beacon */}
          <circle
            cx="32"
            cy="18"
            r="3"
            fill="url(#brand-blue-grad-2)"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1"
          />
          {/* Expanding communication waves */}
          <path
            d="M27 13 C29 10, 35 10, 37 13"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M22 8 C26 3, 38 3, 42 8"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 3 C23 -3, 41 -3, 47 3"
            stroke="url(#brand-blue-grad-2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Retail",
      bgGradient: "from-[#090d16] via-[#101428] to-[#050814]",
      body: "Intelligent inventory logistics, point-of-sale integrations, and omni-channel customer experiences mapping retail operations.",
      // Retail SVG
      icon: (
        <svg
          className="w-48 h-48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="brand-blue-grad-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ind-svg-stroke)" />
              <stop offset="100%" stopColor="var(--ind-svg-grad-end)" />
            </linearGradient>
          </defs>
          {/* Store facade */}
          <path
            d="M14 48 V28 H50 V48"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Store awning */}
          <path
            d="M10 28 L16 18 H48 L54 28 Z"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="var(--ind-svg-fill)"
          />
          <path
            d="M20 18 L22 28"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
          <path
            d="M32 18 V28"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
          <path
            d="M44 18 L42 28"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
          {/* Store door */}
          <rect
            x="28"
            y="36"
            width="8"
            height="12"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
          {/* Window */}
          <rect
            x="18"
            y="34"
            width="6"
            height="8"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
          <rect
            x="40"
            y="34"
            width="6"
            height="8"
            stroke="url(#brand-blue-grad-3)"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Fintech",
      bgGradient: "from-[#1e293b] to-[#0f172a]",
      body: "High-throughput secure transaction ledgers, decentralized crowdfunding systems, and multi-currency payment orchestration.",
      // Fintech SVG
      icon: (
        <svg
          className="w-48 h-48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="brand-blue-grad-4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ind-svg-stroke)" />
              <stop offset="100%" stopColor="var(--ind-svg-grad-end)" />
            </linearGradient>
          </defs>
          {/* Back Coin */}
          <circle
            cx="42"
            cy="26"
            r="15"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            fill="var(--ind-svg-fill)"
          />
          {/* Back Coin Dollar Symbol */}
          <path
            d="M42 16 V36"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M45 21 C45 18, 39 18, 39 22.5 C39 27, 45 25, 45 29.5 C45 34, 39 34, 39 31"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Front Coin */}
          <circle
            cx="26"
            cy="38"
            r="18"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.8"
            fill="var(--ind-svg-fill)"
          />
          {/* Front Coin Dollar Symbol */}
          <path
            d="M26 25 V51"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M31 31 C31 27, 21 27, 21 33 C21 39, 31 37, 31 43 C31 49, 21 49, 21 45"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Transaction Flow Arrows representing Fintech */}
          <path
            d="M14 26 C16 16, 26 10, 36 12"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M32 8 L38 12 L32 16"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50 38 C48 48, 38 54, 28 52"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M32 56 L26 52 L32 48"
            stroke="url(#brand-blue-grad-4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce",
      bgGradient: "from-[#0891b2] to-[#0f172a]",
      body: "Hyperlocal marketplace architectures, secure checkout pipelines, and smart search-to-shelf discovery platforms.",
      // E-commerce SVG
      icon: (
        <svg
          className="w-48 h-48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <defs>
            <linearGradient
              id="brand-blue-grad-5"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--ind-svg-stroke)" />
              <stop offset="100%" stopColor="var(--ind-svg-grad-end)" />
            </linearGradient>
          </defs>
          {/* Web Browser window */}
          <rect
            x="14"
            y="16"
            width="36"
            height="30"
            rx="3"
            stroke="url(#brand-blue-grad-5)"
            strokeWidth="1.8"
            fill="var(--ind-svg-fill)"
          />
          <line
            x1="14"
            y1="24"
            x2="50"
            y2="24"
            stroke="url(#brand-blue-grad-5)"
            strokeWidth="1.5"
          />
          {/* Browser buttons */}
          <circle cx="20" cy="20" r="1.5" fill="url(#brand-blue-grad-5)" />
          <circle cx="25" cy="20" r="1.5" fill="url(#brand-blue-grad-5)" />
          {/* Shopping cart inside */}
          <path
            d="M22 28 H26 L29 38 H41 L44 28 H28"
            stroke="url(#brand-blue-grad-5)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="31"
            cy="42"
            r="2.5"
            fill="url(#brand-blue-grad-5)"
            stroke="url(#brand-blue-grad-5)"
            strokeWidth="0.5"
          />
          <circle
            cx="39"
            cy="42"
            r="2.5"
            fill="url(#brand-blue-grad-5)"
            stroke="url(#brand-blue-grad-5)"
            strokeWidth="0.5"
          />
        </svg>
      ),
    },
  ];

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();

      // Only run pinned scroll triggers on desktop views
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%", // distance user scrolls pinned section
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Fan out math matching the blueprints (slightly wider premium fan-out with ideal overlap and viewport safety)
        tl.to(
          ".card-index-0",
          { xPercent: -190, rotation: -10, yPercent: 6 },
          0,
        )
          .to(".card-index-1", { xPercent: -95, rotation: -5, yPercent: 2 }, 0)
          .to(".card-index-2", { scale: 1.05 }, 0) // Center card pops forward slightly
          .to(".card-index-3", { xPercent: 95, rotation: 5, yPercent: 2 }, 0)
          .to(".card-index-4", { xPercent: 190, rotation: 10, yPercent: 6 }, 0);
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section className="industries-section relative bg-transparent border-t border-border/30 overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-glow blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-glow blur-[120px] pointer-events-none opacity-40" />

      {/* Desktop Layout: Stacked Scroll-Pinned 3D Fan-Out Deck */}
      <div
        ref={containerRef}
        className="hidden md:flex flex-col items-center justify-center min-h-screen py-16 w-full max-w-7xl mx-auto px-6 overflow-visible"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 max-w-2xl"
        >
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-[var(--text-primary)] leading-relaxed pb-2">
            Industries We Empower
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-base md:text-lg leading-relaxed">
            Bridging complex technical solutions with specialized business
            domain needs.
          </p>
        </motion.div>

        {/* Cards Perspective Area */}
        <div className="card-perspective-container">
          {industries.map((industry, index) => (
            <div key={index} className={`card-base-style card-index-${index}`}>
              <div className="card-hover-wrapper">
                {/* Upper Canvas (55% Height) */}
                <div className="canvas-top">
                  {/* Main Part: Interactive Vector SVG */}
                  <div className="svg-icon-wrapper">{industry.icon}</div>
                </div>

                {/* Lower Typography Panel (45% Height) */}
                <div className="panel-bottom-white">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-desc">{industry.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Layout: Horizontal Scrollable Cards */}
      <div className="md:hidden w-full px-6 py-16 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-xl">
          <h2 className="font-mono font-bold text-3xl text-[var(--text-primary)] leading-relaxed pb-2">
            Industries We Empower
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-sm leading-relaxed">
            Bridging complex technical solutions with specialized business
            domain needs.
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="w-full overflow-x-auto no-scrollbar snap-x flex gap-6 py-6 -mx-6 px-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[280px] h-[480px]"
            >
              <div className="card-hover-wrapper">
                {/* Upper Canvas (55% Height) */}
                <div className="canvas-top">
                  {/* Main Part: Interactive Vector SVG */}
                  <div className="svg-icon-wrapper">{industry.icon}</div>
                </div>

                {/* Lower Typography Panel (45% Height) */}
                <div className="panel-bottom-white">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-desc">{industry.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
