"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { useTheme } from "@/context/ThemeContext";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePageLoaded } from "@/hooks/usePageLoaded";

interface Props {}

const NavDrawOutlineLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="group relative px-4 py-1 text-text-secondary hover:text-text-primary transition-colors duration-[400ms] font-medium text-sm"
    >
      <span className="relative z-10">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-text-primary transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[1.5px] bg-text-primary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-text-primary transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[1.5px] bg-text-primary transition-all delay-300 duration-100 group-hover:h-full" />
    </Link>
  );
};

export default function Navbar({}: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const isPageLoaded = usePageLoaded();

  const logoSrc =
    theme === "light"
      ? "/assets/Vertical - Black 1.svg"
      : "/assets/Logo light theme.svg";

  useGSAP(
    () => {
      if (!isPageLoaded) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(headerRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2, // Trigger quickly once page is loaded
      });
    },
    { dependencies: [isPageLoaded], scope: headerRef }
  );

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useGSAP(
    () => {
      if (!mobileMenuRef.current) return;

      if (isMobileMenuOpen) {
        // Fade & slide down menu container
        gsap.to(mobileMenuRef.current, {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power3.out",
        });

        // Stagger list links cascading in
        if (linksRef.current) {
          gsap.fromTo(
            linksRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
              delay: 0.1,
            }
          );
        }
      } else {
        // Fade & slide up menu container out
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -30,
          pointerEvents: "none",
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [isMobileMenuOpen], scope: mobileMenuRef }
  );

  return (
    <header
      ref={headerRef}
      style={{
        opacity: 0,
        transform: "translateY(-20px)",
        backgroundColor: isMobileMenuOpen
          ? theme === "dark"
            ? "#001f35"
            : "#f1f0ea"
          : "transparent",
      }}
      className={`${
        isMobileMenuOpen ? "fixed" : "absolute"
      } top-0 left-0 w-full z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-[56px] h-[92px] flex items-center justify-between relative w-full">
        {/* Left: Logo */}
        <Link href="/" className="z-10 block">
          <Image
            src={logoSrc}
            alt="Anti-Linear Technologies Logo"
            width={128}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max z-10">
          <NavDrawOutlineLink href="/services">Services</NavDrawOutlineLink>
          <NavDrawOutlineLink href="/products">Products</NavDrawOutlineLink>
          <NavDrawOutlineLink href="/about">About</NavDrawOutlineLink>
        </nav>

        {/* Right: Theme Toggle + CTA */}
        <div className="flex items-center gap-4">
          {/* DO NOT REMOVE
          <ThemeToggle /> */}
          <div className="hidden md:block">
            <Button
              href="/contact"
              size="sm"
              variant="outline"
              className="font-body normal-case tracking-normal"
            >
              Get Started Today
            </Button>
          </div>

          {/* Mobile Menu Toggle (Smooth Morphing Icon) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        style={{
          opacity: 0,
          transform: "translateY(-30px)",
          pointerEvents: "none",
          background:
            theme === "dark"
              ? "linear-gradient(to bottom, #001f35, #000c14)"
              : "linear-gradient(to bottom, #f1f0ea, #e2e0d5)",
        }}
        className="fixed top-[92px] left-0 w-full h-[calc(100vh-92px)] z-40 flex flex-col md:hidden border-t border-[var(--border)]"
      >
        {/* Nav Links Column */}
        <div
          ref={linksRef}
          className="flex-1 flex flex-col items-center justify-center gap-8 pb-24"
        >
          <Link
            href="/services"
            className="text-4xl font-mono text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-4xl font-mono text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-4xl font-mono text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="w-full flex justify-center">
            <Button
              href="/contact"
              variant="outline"
              className="w-full max-w-[200px] font-body normal-case tracking-normal mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
