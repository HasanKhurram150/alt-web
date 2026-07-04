"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loaded = false;

    // Set class on body to indicate loading is active
    document.body.classList.add("page-loading");
    document.body.classList.remove("page-loaded");

    const startTransition = () => {
      if (loaded) return;
      loaded = true;

      // Minimum duration for premium visual flow
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            // Allow native scrolling now that loading is done
            document.body.classList.remove("page-loading");
            document.body.classList.add("page-loaded");
          },
        });

        // Smoothly fade and slide the main page content up
        tl.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power4.out",
            clearProps: "transform", // Restores viewport containing block for fixed/pinned descendants
          }
        );
      }, 1000); // 1.0s minimum loader display
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      startTransition();
    } else {
      window.addEventListener("load", startTransition);
      // Safety fallback in case some minor asset fails or hangs
      const fallback = setTimeout(startTransition, 3000);

      return () => {
        window.removeEventListener("load", startTransition);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <div
      ref={contentRef}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
      }}
    >
      {children}
    </div>
  );
}

