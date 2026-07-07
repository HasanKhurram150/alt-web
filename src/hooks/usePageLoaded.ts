"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect when the PageLoader has completed loading and added the 'page-loaded' class to the body.
 */
export function usePageLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If loader is already done, set loaded immediately
    if (document.body.classList.contains("page-loaded")) {
      setIsLoaded(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("page-loaded")) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isLoaded;
}
