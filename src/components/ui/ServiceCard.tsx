"use client";

import { ReactNode, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoAddOutline } from "react-icons/io5";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
}

export default function ServiceCard({ icon, title, body }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      // NOTE ON RULE 20 EXCEPTION: We animate the height of the card container using GSAP.
      // Doing so triggers a smooth, 60fps layout reflow in the parent CSS Grid container,
      // letting neighboring cards and downstream rows glide seamlessly instead of jumping.
      gsap.to(cardRef.current, {
        height: isExpanded ? 440 : 240,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Smoothly rotate the button
      gsap.to(buttonRef.current, {
        rotate: isExpanded ? 135 : 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Smoothly reveal or hide the bottom panel content
      if (isExpanded) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          y: 10,
          duration: 0.3,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      }
    },
    { dependencies: [isExpanded], scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-[2rem] p-8 flex flex-col justify-start border cursor-pointer select-none overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isHovered || isExpanded
          ? isDark
            ? "text-[#f1f0ea] border-[#f1f0ea]/20"
            : "text-[#001f35] border-[#001f35]/20"
          : isDark
            ? "text-[#001f35] border-[#001f35]/10"
            : "text-[#f1f0ea] border-[#f1f0ea]/10"
      }`}
      style={{
        height: "240px",
        background: isDark
          ? "radial-gradient(circle at top left, #f1f0ea 0%, #e5e3da 80%)"
          : "radial-gradient(circle at top left, #004271 0%, #001f35 80%)",
      }}
    >
      {/* Background sweep circle scaling from top-left */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square rounded-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center z-0 pointer-events-none ${
          isHovered || isExpanded ? "scale-100" : "scale-0"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle at top left, #004271 40%, #001f35 100%)"
            : "radial-gradient(circle at top left, #f1f0ea 40%, #e5e3da 100%)",
        }}
      />

      {/* Top Section: Icon */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl border border-current/20 bg-current/5 transition-colors duration-500">
          {icon}
        </div>
      </div>

      {/* Middle Section: Title & Action Button */}
      <div className="relative z-10 flex justify-between items-end w-full mt-8">
        <h3 className="font-mono text-xl font-bold max-w-[70%] leading-snug">
          {title}
        </h3>

        <button
          ref={buttonRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-current bg-transparent transition-colors duration-500 cursor-pointer"
        >
          <IoAddOutline className="w-6 h-6" strokeWidth={2} />
        </button>
      </div>

      {/* Bottom Section: Expanded Body Text & Button */}
      <div
        ref={contentRef}
        className="relative z-10 overflow-hidden flex flex-col gap-6"
        style={{ height: 0, opacity: 0, transform: "translateY(10px)" }}
      >
        <p className="font-serif text-base leading-relaxed mt-6">{body}</p>
        <div>
          <Link
            href="/contact"
            tabIndex={isExpanded ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            className={`inline-block px-6 py-2.5 rounded-full border border-current font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
              isDark
                ? "hover:bg-[#f1f0ea] hover:text-[#001f35]"
                : "hover:bg-[#001f35] hover:text-[#f1f0ea]"
            }`}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Employee-card style footer divider */}
      <div className="relative z-10 w-full border-t border-current/10 mt-auto transition-colors duration-500" />
    </div>
  );
}
