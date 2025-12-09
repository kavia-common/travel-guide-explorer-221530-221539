import React from "react";

/**
 * PUBLIC_INTERFACE
 * Header
 * Displays the top application header with brand and optional right actions.
 */
export const Header: React.FC<{
  onOpenDrawer?: () => void;
}> = ({ onOpenDrawer }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" aria-label="Travel Guide Explorer">
          <span className="brand-badge">Ocean</span>
          <span>Travel Guide</span>
        </div>
        <div style={{ flex: 1 }} />
        <button
          className="btn secondary drawer-toggle"
          onClick={onOpenDrawer}
          aria-label="Open trip plan"
        >
          Trip Plan
        </button>
      </div>
    </header>
  );
};
