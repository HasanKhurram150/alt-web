"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { useTheme } from "@/context/ThemeContext";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

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

  const logoSrc =
    theme === "light"
      ? "/assets/Vertical - Black 1.svg"
      : "/assets/Logo light theme.svg";

  return (
    <header
      className="sticky top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-border transition-colors duration-300"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
      }}
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
          <ThemeToggle />
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <IoMenuOutline className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="absolute left-0 top-23 w-full h-[calc(100vh-92px)] backdrop-blur-xl z-50 flex flex-col items-center justify-start pt-20 gap-8 md:hidden transition-colors duration-300 overflow-y-auto"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <Link
            href="/services"
            className="text-4xl font-display font-bold text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-4xl font-display font-bold text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-4xl font-display font-bold text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Button
            href="/contact"
            variant="outline"
            className="w-full max-w-[200px] font-body normal-case tracking-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started Today
          </Button>
        </div>
      )}
    </header>
  );
}
