"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Component,
  Cpu,
  Network,
  Shield,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/ui/FadeUp";
import ServiceCard from "@/components/ui/ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePageLoaded } from "@/hooks/usePageLoaded";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  icon: React.ReactNode;
  body: string;
}

const SERVICES: Service[] = [
  {
    title: "AI & Neural Architectures",
    icon: <Brain className="w-8 h-8 text-current" />,
    body: "Custom agentic systems, cognitive RAG pipelines, and model fine-tuning tailored to defy standard computational bottlenecks.",
  },
  {
    title: "Next-Gen Web Platforms",
    icon: <Globe className="w-8 h-8 text-current" />,
    body: "State-of-the-art Next.js and React architectures built for speed, performance, search engines, and premium aesthetics.",
  },
  {
    title: "High-Fidelity Mobile App Engine",
    icon: <Smartphone className="w-8 h-8 text-current" />,
    body: "Fluid, native iOS and Android experiences utilizing React Native with pixel-perfect responsive micro-animations.",
  },
  {
    title: "DevOps & Intelligent Cloud Scaling",
    icon: <Cloud className="w-8 h-8 text-current" />,
    body: "Multi-region cloud infrastructure, secure container orchestration, and serverless backends engineered to scale gracefully under load.",
  },
  {
    title: "Data Intelligence Pipelines",
    icon: <Database className="w-8 h-8 text-current" />,
    body: "High-throughput analytics engines, real-time data streaming (Kafka/Flink), and analytical dashboards with instant responsiveness.",
  },
  {
    title: "3D & Interactive WebGL Experiences",
    icon: <Component className="w-8 h-8 text-current" />,
    body: "Stunning Three.js, React Three Fiber, and shader designs that engage users through interactive spatial elements.",
  },
  {
    title: "IoT Edge Engineering",
    icon: <Cpu className="w-8 h-8 text-current" />,
    body: "Low-latency edge processing, hardware-firmware communication, and smart sensor network architectures.",
  },
  {
    title: "Decentralized Protocols & Web3",
    icon: <Network className="w-8 h-8 text-current" />,
    body: "Robust distributed ledgers, audited smart contracts, and decentralized interfaces for trustless systems.",
  },
  {
    title: "Cybersecurity Audit & Compliance",
    icon: <Shield className="w-8 h-8 text-current" />,
    body: "Advanced security auditing, vulnerability assessments, encryption schemas, and hardening protocols for SOC2 and HIPAA compliance.",
  },
  {
    title: "Product Strategy & Architecture Advisory",
    icon: <Briefcase className="w-8 h-8 text-current" />,
    body: "High-level technical advisory, system reviews, and product strategy to accelerate delivery and secure engineering efficiency.",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const desktopActiveLineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const mobileActiveLineRef = useRef<HTMLDivElement>(null);
  const isPageLoaded = usePageLoaded();

  useGSAP(
    () => {
      if (!isPageLoaded) return;

      // Rule 21: Check prefers-reduced-motion
      const isReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (isReducedMotion) return;

      const mm = gsap.matchMedia();

      // Desktop layout animations (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        // Fade in desktop background line container when scrolling near timeline
        gsap.fromTo(
          desktopLineRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );

        // Link active line scale to scroll progress
        gsap.to(desktopActiveLineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        });

        // Row entry and exit animations
        const rows = gsap.utils.toArray<HTMLElement>(".timeline-row");
        rows.forEach((row) => {
          const isEven = row.classList.contains("row-even");
          const dot = row.querySelector(".desktop-dot");
          const branch = row.querySelector(".desktop-branch");
          const card = row.querySelector(".desktop-card");

          if (dot && branch && card) {
            // Set initial state
            gsap.set(dot, { scale: 0, opacity: 0 });
            gsap.set(branch, {
              scaleX: 0,
              opacity: 0,
              transformOrigin: isEven ? "right center" : "left center",
            });
            gsap.set(card, { x: isEven ? -30 : 30, opacity: 0 });

            // Create timeline with scrollTrigger
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });

            tl.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            })
              .to(
                branch,
                { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
                "-=0.15",
              )
              .to(
                card,
                { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.25",
              );
          }
        });
      });

      // Mobile layout animations (max-width: 767px)
      mm.add("(max-width: 767px)", () => {
        // Fade in mobile background line container when scrolling near timeline
        gsap.fromTo(
          mobileLineRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          },
        );

        // Link active line scale to scroll progress
        gsap.to(mobileActiveLineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        });

        // Row entry and exit animations
        const rows = gsap.utils.toArray<HTMLElement>(".timeline-row");
        rows.forEach((row) => {
          const dot = row.querySelector(".mobile-dot");
          const branch = row.querySelector(".mobile-branch");
          const card = row.querySelector(".mobile-card");

          if (dot && branch && card) {
            // Set initial state
            gsap.set(dot, { scale: 0, opacity: 0 });
            gsap.set(branch, {
              scaleX: 0,
              opacity: 0,
              transformOrigin: "left center",
            });
            gsap.set(card, { x: 20, opacity: 0 });

            // Create timeline with scrollTrigger
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });

            tl.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            })
              .to(
                branch,
                { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
                "-=0.15",
              )
              .to(
                card,
                { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.25",
              );
          }
        });
      });

      return () => mm.revert();
    },
    { dependencies: [isPageLoaded], scope: containerRef },
  );

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-16 md:pb-24 transition-colors duration-300">
      {/* Page Hero Header */}
      <section className="py-12 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <FadeUp>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
            Services
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-serif text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed">
            We specialize in building scalable, reliable and efficient systems.
          </p>
        </FadeUp>
      </section>

      {/* Timeline Section */}
      <section
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 relative"
        style={{ opacity: isPageLoaded ? undefined : 0 }}
      >
        {/* 1. Central Single Linked Trunk Line (Desktop) */}
        <div
          ref={desktopLineRef}
          className="absolute left-1/2 -translate-x-1/2 top-[120px] bottom-[120px] w-[4px] hidden md:block z-0 pointer-events-none"
        >
          {/* Faded background track */}
          <div className="absolute inset-0 bg-[var(--text-primary)]/10" />
          {/* Linked animated active line */}
          <div
            ref={desktopActiveLineRef}
            className="absolute inset-0 bg-[var(--text-primary)] origin-top scale-y-0"
          />
        </div>

        {/* 2. Mobile Left Single Linked Trunk Line (Mobile) */}
        <div
          ref={mobileLineRef}
          className="absolute left-[14px] top-[48px] bottom-[48px] w-[3px] md:hidden z-0 pointer-events-none"
        >
          {/* Faded background track */}
          <div className="absolute inset-0 bg-[var(--text-primary)]/10" />
          {/* Linked animated active line */}
          <div
            ref={mobileActiveLineRef}
            className="absolute inset-0 bg-[var(--text-primary)] origin-top scale-y-0"
          />
        </div>

        {/* Services Rows Wrapper */}
        <div className="space-y-4 md:space-y-0">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={cn(
                  "timeline-row relative w-full min-h-[220px] py-4 md:py-16",
                  isEven ? "row-even" : "row-odd",
                )}
              >
                {/* ----------------- MOBILE LAYOUT ----------------- */}
                <div className="block md:hidden pl-10 relative">
                  {/* Mobile Node Dot - Centered on Mobile Trunk Line */}
                  <div className="mobile-dot absolute top-1/2 -translate-y-1/2 left-[14px] -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[var(--text-primary)] bg-[var(--text-primary)] z-20" />

                  {/* Mobile Branch Line */}
                  <div className="mobile-branch absolute left-[14px] top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-8 z-0" />

                  {/* Mobile Card */}
                  <div className="mobile-card w-full">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      body={service.body}
                    />
                  </div>
                </div>

                {/* ----------------- DESKTOP LAYOUT ----------------- */}
                <div className="hidden md:grid grid-cols-2 gap-0 relative items-center w-full">
                  {/* Central Node Dot - Centered on Desktop Trunk Line */}
                  <div className="desktop-dot absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--text-primary)] bg-[var(--text-primary)] z-20" />

                  {/* Even Row: Left Card, Right Spacer */}
                  {isEven ? (
                    <>
                      <div className="relative flex items-center justify-end pr-16 w-full">
                        <div className="desktop-card w-full max-w-md z-10">
                          <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            body={service.body}
                          />
                        </div>

                        {/* Branch pointing Right (to Trunk) */}
                        <div className="desktop-branch absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-16 z-0" />
                      </div>
                      <div className="w-full" /> {/* Spacer */}
                    </>
                  ) : (
                    <>
                      {/* Odd Row: Left Spacer, Right Card */}
                      <div className="w-full" /> {/* Spacer */}
                      <div className="relative flex items-center justify-start pl-16 w-full">
                        <div className="desktop-card w-full max-w-md z-10">
                          <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            body={service.body}
                          />
                        </div>

                        {/* Branch pointing Left (to Trunk) */}
                        <div className="desktop-branch absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-16 z-0" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 max-w-5xl mx-auto text-center mt-8 md:mt-12">
        <FadeUp>
          <div className="bg-accent/5 border-t border-b border-dashed border-accent/20  p-8 md:p-12 relative overflow-hidden">
            <h2 className="font-mono text-2xl md:text-3xl text-[var(--text-primary)] mb-3 leading-relaxed">
              Ready to build something great?
            </h2>
            <p className="font-serif text-[var(--text-secondary)] text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Let's start working on your next project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--accent)] text-[var(--bg)] px-8 py-3.5 text-sm font-semibold rounded-full font-mono uppercase tracking-wider hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
