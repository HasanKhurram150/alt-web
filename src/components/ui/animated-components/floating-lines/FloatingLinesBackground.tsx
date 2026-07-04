"use client";

import { useTheme } from "@/context/ThemeContext";
import FloatingLines from "./FloatingLines";

export default function FloatingLinesBackground() {
  const { theme } = useTheme();

  return (
    <FloatingLines
      enabledWaves={["top", "middle", "bottom"]}
      lineCount={[10, 15, 20]}
      lineDistance={[8, 6, 4]}
      bendRadius={5.0}
      bendStrength={-0.5}
      interactive={false}
      parallax={false}
      linesGradient={
        theme === "dark"
          ? ["#001f36", "#002947", "#003459", "#005990"]
          : ["#f1f0ea", "#daf4ff", "#005990", "#003459"]
      }
      // loaderGradient={["#002947", "#003459", "#005990", "#0088cc"]}
      loaderGradient={["#002947", "#daf4ff", "#005990", "#003459"]}
    />
  );
}
