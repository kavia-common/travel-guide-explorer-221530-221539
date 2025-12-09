import React from "react";
import { AbsoluteFill } from "remotion";
import { ThemeProvider } from "../theme/ThemeProvider";
import { ExplorePage } from "../pages/Explore";

/**
 * PUBLIC_INTERFACE
 * TravelGuideRoot
 * Mounts the Explore page inside Remotion's canvas.
 */
export const TravelGuideRoot: React.FC = () => {
  // Using AbsoluteFill ensures full-bleed inside Remotion preview canvas.
  return (
    <AbsoluteFill style={{ background: "var(--color-background)" }}>
      <ThemeProvider>
        <ExplorePage />
      </ThemeProvider>
    </AbsoluteFill>
  );
};
