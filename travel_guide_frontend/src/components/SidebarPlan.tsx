import React from "react";
import { Destination } from "../data/destinations";

/**
 * PUBLIC_INTERFACE
 * SidebarPlan
 * Shows selected destinations and allows removing from the plan.
 */
export const SidebarPlan: React.FC<{
  plan: Destination[];
  onRemove: (d: Destination) => void;
}> = ({ plan, onRemove }) => {
  return (
    <aside className="card sidebar-card sidebar" aria-label="Trip plan">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3 style={{ margin: "4px 0 10px 0" }}>Trip Plan</h3>
        <span className="badge">{plan.length} selected</span>
      </div>
      <div className="sidebar-list">
        {plan.length === 0 ? (
          <p style={{ margin: 0, color: "rgba(17,24,39,0.65)" }}>
            No destinations selected yet. Add some from the grid.
          </p>
        ) : (
          plan.map((d) => (
            <div key={d.id} className="plan-item">
              <img src={d.image} alt={d.title} className="thumb" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {d.title}
                </div>
                <div style={{ fontSize: 12, color: "rgba(17,24,39,0.6)" }}>{d.country}</div>
              </div>
              <button className="btn secondary" onClick={() => onRemove(d)} aria-label={`Remove ${d.title}`}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {plan.length > 0 ? (
        <button className="btn" style={{ marginTop: 6 }} aria-label="Proceed to plan">
          Proceed
        </button>
      ) : null}
    </aside>
  );
};
