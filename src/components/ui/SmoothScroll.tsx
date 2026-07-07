"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/use-lenis";

interface Props {
  children: React.ReactNode;
}

/**
 * Syncs Lenis with GSAP Ticker
 * This must be a child of ReactLenis to use the useLenis hook
 */
function LenisGSAPSync({ isMobile }: { isMobile: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Initial check
    if (document.body.classList.contains("page-loading")) {
      lenis.stop();
    } else {
      lenis.start();
    }

    // Setup mutation observer on document.body for class changes
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("page-loading")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Sync with GSAP using gsap.ticker if not mobile
    let update: ((time: number) => void) | null = null;
    if (!isMobile) {
      update = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(update);
    }

    return () => {
      observer.disconnect();
      if (update) {
        gsap.ticker.remove(update);
      }
      lenis.start(); // Always restore scrolling on unmount
    };
  }, [lenis, isMobile]);

  return null;
}

export default function SmoothScroll({ children }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // strictly check viewport width; touch-screen laptops are desktops
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ReactLenis
      root
      autoRaf={isMobile} // Let it handle own raf (doing nothing when duration is 0) or manually tick.
      options={{
        duration: isMobile ? 0 : 1.6,
        easing: (t) => 1 - Math.pow(1 - t, 5), // Premium easeOutQuint deceleration drift
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: !isMobile, // Disable wheel smoothing on mobile
        wheelMultiplier: 0.9, // Adds deliberate, tactile weight to mouse notches
        // syncTouch: false prevents mousepad (trackpad) issues on Windows/Chrome
        syncTouch: false,
        touchMultiplier: 1.5,
      }}
    >
      <LenisGSAPSync isMobile={isMobile} />
      {children}
    </ReactLenis>
  );
}



