"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoCloudUploadOutline,
  IoServerOutline,
  IoCogOutline,
  IoCodeSlashOutline,
  IoLayersOutline,
  IoGlobeOutline,
  IoPhonePortraitOutline,
  IoColorPaletteOutline,
  IoShieldCheckmarkOutline,
  IoCubeOutline,
} from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

interface Props { }

export default function Services({ }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Cloud Migration",
      body: "Seamlessly transitioning server assets, databases, and application pipelines to optimized cloud architectures with zero downtime.",
      icon: <IoCloudUploadOutline className="w-9 h-9" />,
    },
    {
      title: "SaaS",
      body: "Architecting multi-tenant, high-reliability software as a service structures complete with licensing and metrics platforms.",
      icon: <IoServerOutline className="w-9 h-9" />,
    },
    {
      title: "Automations",
      body: "Streamlining manual business tasks and workflows through intelligent script integration, cron schedules, and data pipelines.",
      icon: <IoCogOutline className="w-9 h-9" />,
    },
    {
      title: "Custom Software Development",
      body: "Engineering tailored full-stack solutions built exactly to your business specs and performance benchmarks.",
      icon: <IoCodeSlashOutline className="w-9 h-9" />,
    },
    {
      title: "Devops",
      body: "Setting up continuous delivery systems, automated container management, and continuous security scanning infrastructure.",
      icon: <IoLayersOutline className="w-9 h-9" />,
    },
    {
      title: "Web Development",
      body: "Building hyper-fast, accessible, and search-optimized modern web applications utilizing modern stack frameworks.",
      icon: <IoGlobeOutline className="w-9 h-9" />,
    },
    {
      title: "Mobile Development",
      body: "Designing and packaging high-performance, platform-native mobile apps for iOS and Android ecosystems.",
      icon: <IoPhonePortraitOutline className="w-9 h-9" />,
    },
    {
      title: "UI/UX Design",
      body: "Creating stunning visual assets, wireframes, and intuitive customer-journey diagrams focused on high conversion.",
      icon: <IoColorPaletteOutline className="w-9 h-9" />,
    },
    {
      title: "Cybersecurity",
      body: "Enforcing multi-layered security protocols, vulnerability assessments, data encryption, and access control.",
      icon: <IoShieldCheckmarkOutline className="w-9 h-9" />,
    },
    {
      title: "Blockchain",
      body: "Developing smart contracts, secure tokenization engines, and transparent distributed ledger architectures.",
      icon: <IoCubeOutline className="w-9 h-9" />,
    },
  ];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    { scope: containerRef }
  );

  return (
    <section className="py-16 md:py-32 lg:py-48 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-[var(--text-primary)] leading-relaxed pb-2">
            Our Services
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 md:mt-14"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
