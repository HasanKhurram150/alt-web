"use client";

import ReflectiveCard from "@/components/ui/animated-components/reflective-cards/ReflectiveCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";
import RotateAmplitude from "@/components/animations/RotateAmplitude";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function DefyLinearity({}: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: "NearVendor",
      body: "A product-first search engine that helps you find products in your locality, saving your time and energy when planning your next shopping spree.",
      logo: "/project-logos/near-vendor-logo.svg",
      logoDark: "/project-logos/near-vendor-logo.svg",
    },
    // {
    //   title: "Doneto",
    //   body: "The go-to Donation Platform based around acclaimed NGO's and Local Goal Driven Fundraisers",
    //   logo: "/assets/doneto white 2.png",
    // },
    {
      title: "MITS",
      body: "Multiple Identifciation Tracking System is an AI powered, State of the art security system, designed to safeguard socities and cities",
      logo: "/project-logos/mits-logo.svg",
      logoDark: "/project-logos/mits-logo.svg",
    },
    {
      title: "J.A.N.U.S",
      body: "A single, self-hosted Security & Networks Operations Center designed to monitor the entire IT/Security operational lifecycle.",
      logo: "/project-logos/janus-logo-white.svg",
      logoDark: "/project-logos/janus-logo-black.svg",
    },
  ];

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Rule 8: Kinetic Typography
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        scale: 1.1,
        opacity: 0,
        y: 20,
        ease: "none",
      });

      // Rule 9: Staggered List Entrance
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-32 lg:pb-48 px-6 bg-bg/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="text-3xl md:text-5xl lg:text-6xl font-mono font-normal text-text-primary leading-relaxed pb-4 overflow-visible block"
          >
            Our Products
          </h2>
          <p className="font-serif text-text-primary mt-8 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed">
            We move faster, think deeper, and ship smarter
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-16 md:mt-20 justify-items-center"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="w-full flex justify-center items-center"
            >
              <RotateAmplitude amplitude={8}>
                <ReflectiveCard
                  overlayColor={isDark ? "#f1f0ea" : "rgba(0, 32, 54, 0.4)"}
                  blurStrength={8}
                  glassDistortion={10}
                  metalness={0.6}
                  roughness={0.3}
                  displacementStrength={15}
                  noiseScale={1.2}
                  specularConstant={1.8}
                  grayscale={0.7}
                  bgColor={isDark ? "#f1f0ea" : "#002036"}
                  color={isDark ? "#002036" : "#f1f0ea"}
                  userName={feature.title}
                  userRole={feature.body}
                  idNumber={`ALT-00${index + 1}`}
                  logo={theme === "light" ? feature.logo : feature.logoDark}
                />
              </RotateAmplitude>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
