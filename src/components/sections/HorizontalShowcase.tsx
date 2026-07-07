"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { usePageLoaded } from "@/hooks/usePageLoaded";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    title: "Generative Intelligence",
    description:
      "Designing neural architectures that transcend binary constraints.",
    category: "AI SYSTEMS",
  },
  {
    id: "02",
    title: "Quantum Synthesis",
    description: "Engineering digital realities with photon-level precision.",
    category: "COMPUTING",
  },
  {
    id: "03",
    title: "Neural Interfaces",
    description: "Bridging the synaptic gap between human and machine.",
    category: "BIOTECH",
  },
  {
    id: "04",
    title: "Autonomous Swarms",
    description: "Distributed intelligence for complex planetary logistics.",
    category: "ROBOTICS",
  },
];

function ProjectCard({
  project,
  mainAnimation,
}: {
  project: ProjectItem;
  mainAnimation: gsap.core.Animation | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!capRef.current || !cardRef.current || !mainAnimation) return;

      // Rule 19: Keyboard key "press" & "release" animation
      // Using a timeline ensures the movement is continuous and perfectly smooth with the scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          containerAnimation: mainAnimation,
          start: "left center+=20%",
          end: "right center-=20%",
          scrub: true,
        },
      });

      tl.fromTo(
        capRef.current,
        { x: -20, y: -20 },
        { x: 20, y: 20, ease: "none" },
      ).to(capRef.current, { x: -20, y: -20, ease: "none" });
    },
    { dependencies: [mainAnimation], scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      className="relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-square skew-x-[-5deg]"
    >
      {/* The Thick White Base */}
      <div className="absolute inset-0 bg-white rounded-[100px] md:rounded-[110px]" />

      {/* The Slanted Blue Keycap */}
      <div
        ref={capRef}
        className={cn(
          "absolute inset-8 bg-brand-blue rounded-[70px] md:rounded-[90px]",
          "flex items-center justify-center p-6 md:p-8 lg:p-12 text-center",
          "border border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]",
        )}
      >
        {/* Minimalist Content */}
        <div className="skew-x-5">
          {" "}
          {/* Un-skew text for readability */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display text-white mb-4 leading-normal pb-2">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-white/40 font-mono tracking-widest uppercase">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mainAnim, setMainAnim] = useState<gsap.core.Animation | null>(null);
  const isPageLoaded = usePageLoaded();

  useGSAP(
    () => {
      if (!isPageLoaded) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const scrollWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;

      // Rule 4: Sync with GSAP using scrubbed tween
      // To start empty and end empty:
      // Start at x: windowWidth (all cards on the right)
      // End at x: -scrollWidth (all cards on the left)
      const anim = gsap.fromTo(
        track,
        { x: windowWidth },
        {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollWidth + windowWidth}`,
            invalidateOnRefresh: true,
          },
        },
      );

      setMainAnim(anim);

      return () => {
        anim.kill();
        anim.scrollTrigger?.kill();
      };
    },
    { dependencies: [isPageLoaded], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#001f35] overflow-hidden py-20"
      style={{ opacity: isPageLoaded ? undefined : 0 }}
    >
      <div
        ref={containerRef}
        className="h-screen flex items-center overflow-hidden"
      >
        {/* Background Decorative Element */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display text-white opacity-[0.01] whitespace-nowrap">
            ANTILINEAR SHOWCASE
          </div>
        </div> */}

        <div
          ref={trackRef}
          className="relative z-10 flex gap-12 md:gap-20 lg:gap-32 px-10 md:px-20 flex-nowrap items-center will-change-transform"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              mainAnimation={mainAnim}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
