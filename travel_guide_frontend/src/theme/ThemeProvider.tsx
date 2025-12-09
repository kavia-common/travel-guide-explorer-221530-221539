import React, { PropsWithChildren, useEffect } from "react";
import "../styles/global.css";

/**
 * PUBLIC_INTERFACE
 * ThemeProvider
 * Provides global Ocean Professional theme variables and loads global styles.
 */
export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    // Could be extended to read REMOTION_* feature flags if needed.
    // We intentionally avoid adding new env vars; rely on existing ones.
  }, []);

  return <>{children}</>;
};
